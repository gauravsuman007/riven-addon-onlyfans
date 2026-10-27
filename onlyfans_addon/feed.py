"""One feed per performer, merged across every archive that carries them.

An account page used to be a row of site buttons, each opening that site's
own list. With thirty-odd archives a well-known performer is carried by
twenty of them, and reading their content meant opening twenty lists that
overlap heavily and are each in their own order. This module turns them into
one list: newest first, each video once, with whatever text any copy has.

THE THREE THINGS THE SITES DO NOT GIVE US, and what stands in for each:

**A shared clock.** Measured 2026-10-26 across the 21 sources of one
performer: seven sites state a date (ISO, "September 23, 2026", "June 22nd,
2023"), nine state a relative one ("2 months ago"), and eight state nothing.
Relative dates become approximate timestamps. An undated item inherits a date
from a duplicate on a dated site, else from the nearest dated item in its own
site's list -- every scraper's contract is newest-first, so its neighbours
bracket it. A site that dates nothing at all is interleaved in proportion to
the dated stream rather than appended, or its content would only ever appear
after everything else had been read.

**A shared identity.** No two archives use the same id, title or thumbnail for
the same upload. Two items are the same video when their titles match once the
performer's name and the archives' boilerplate ("leaked", "OnlyFans", "porn
video") are removed, or when their durations agree to within two seconds and
their titles share at least some words. Two items from ONE site are never
merged: a site's own list does not repeat itself, and "Anissa Kate-GLORYHOLE"
twice on porntn is two different scenes (1325s and 1203s).

**An end.** A site's list is read a page at a time and only as far as the
reader scrolls. The ordering guarantee is what makes that safe: an item is
emitted only once every live dated stream has been read past its date, so a
page fetched later can never hold something newer than what was already shown.

LATENCY. The first page asks every site at once, and some archives take 20s
or more. Each request waits at most `DEADLINE` seconds. A site still loading
after that is left running and does not hold back emission; its items join
on a later request flagged `late`, because by then the list has moved on past
where they belong. The offsets stay append-only -- the client's paging must
not shift under it -- and the client slots late entries into place by date.
"""

from __future__ import annotations

import re
import threading
import time
import unicodedata
from collections import OrderedDict
from concurrent.futures import Future, ThreadPoolExecutor, wait
from dataclasses import dataclass, field
from datetime import datetime, timedelta, timezone
from typing import Callable

from loguru import logger


#: Seconds one request will wait for slow sites before answering with what it
#: has. Measured 2026-10-26 over one performer's 21 sources: most answer in
#: under 2s, hornysimp in 19s, jizzy in 23s, viralxxxporn timed out at 40s.
#: Waiting for the slow ones would make every page as slow as the worst
#: archive, so the page goes out with what has arrived and slow sites join as
#: `late` entries -- see `Entry.late`.
DEADLINE = 4.0

#: How long a performer's merged feed is kept. Scrolling back to a page should
#: not re-read twenty archives; coming back tomorrow should.
TTL = 20 * 60

#: Feeds kept at once. Each is a few hundred small objects.
MAX_FEEDS = 64

#: A runaway guard per stream. The sync measured the deepest performer list
#: at well under this, and a site that pages forever would otherwise be read
#: forever by a reader who scrolls forever.
MAX_PAGES = 60

#: The tabs on the account page. Galleries and loose photos are both "image".
ALL_KINDS = frozenset({"video", "image"})


def _tab(kind: str) -> str:
    return "video" if kind == "video" else "image"


_pool = ThreadPoolExecutor(max_workers=16, thread_name_prefix="onlyfans-feed")

#: One lock per site. Scrapers pace themselves with `_wait_turn`, which is not
#: thread-safe; two feeds reading the same site at once would race it and the
#: site would see a burst. Serialising per site keeps its rate limit honest.
_site_locks: dict[str, threading.Lock] = {}
_site_locks_guard = threading.Lock()


def _site_lock(site: str) -> threading.Lock:
    with _site_locks_guard:
        return _site_locks.setdefault(site, threading.Lock())


# --- Dates ------------------------------------------------------------------

_MONTHS = {
    name: index
    for index, names in enumerate(
        [
            ("jan", "january"), ("feb", "february"), ("mar", "march"),
            ("apr", "april"), ("may",), ("jun", "june"), ("jul", "july"),
            ("aug", "august"), ("sep", "sept", "september"),
            ("oct", "october"), ("nov", "november"), ("dec", "december"),
        ],
        start=1,
    )
    for name in names
}

_UNIT_SECONDS = {
    "second": 1, "sec": 1, "minute": 60, "min": 60, "hour": 3600, "hr": 3600,
    "day": 86400, "week": 7 * 86400, "month": 30 * 86400, "year": 365 * 86400,
}

_RELATIVE_RE = re.compile(
    r"(\d+|an?|one)\s*(second|sec|minute|min|hour|hr|day|week|month|year)s?\s+ago",
    re.IGNORECASE,
)
_ISO_RE = re.compile(r"^\d{4}-\d{2}-\d{2}([T ][\d:.]+)?(Z|[+-]\d{2}:?\d{2})?$")
_MONTH_FIRST_RE = re.compile(r"([a-z]+)\.?\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(\d{4})", re.IGNORECASE)
_DAY_FIRST_RE = re.compile(r"(\d{1,2})(?:st|nd|rd|th)?\s+([a-z]+)\.?,?\s+(\d{4})", re.IGNORECASE)
_NUMERIC_RE = re.compile(r"(\d{4})[/.-](\d{1,2})[/.-](\d{1,2})")
_EURO_RE = re.compile(r"(\d{1,2})[/.](\d{1,2})[/.](\d{4})")


def parse_posted(text: str | None, now: datetime | None = None) -> tuple[float | None, bool]:
    """A site's date text as (unix seconds, approximate). (None, False) if unreadable.

    Approximate means relative ("2 months ago"): good to a unit of whatever
    the site rounded to, which is still far better than no position at all.
    """

    if not text:
        return None, False

    now = now or datetime.now(timezone.utc)
    value = " ".join(str(text).split()).strip()
    lowered = value.lower()

    if lowered in ("today", "just now", "now"):
        return now.timestamp(), True
    if lowered == "yesterday":
        return (now - timedelta(days=1)).timestamp(), True

    match = _RELATIVE_RE.search(lowered)
    if match:
        amount = match.group(1)
        count = 1 if amount in ("a", "an", "one") else int(amount)
        seconds = count * _UNIT_SECONDS[match.group(2).lower()]
        return (now - timedelta(seconds=seconds)).timestamp(), True

    if _ISO_RE.match(value):
        try:
            parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
            if parsed.tzinfo is None:
                parsed = parsed.replace(tzinfo=timezone.utc)
            return parsed.timestamp(), False
        except ValueError:
            pass

    for pattern, order in ((_MONTH_FIRST_RE, "mdy"), (_DAY_FIRST_RE, "dmy")):
        match = pattern.search(value)
        if not match:
            continue
        if order == "mdy":
            month_name, day, year = match.groups()
        else:
            day, month_name, year = match.groups()
        month = _MONTHS.get(month_name.lower())
        if month:
            try:
                return datetime(int(year), month, int(day), tzinfo=timezone.utc).timestamp(), False
            except ValueError:
                pass

    match = _NUMERIC_RE.search(value)
    if match:
        year, month, day = (int(part) for part in match.groups())
        try:
            return datetime(year, month, day, tzinfo=timezone.utc).timestamp(), False
        except ValueError:
            pass

    match = _EURO_RE.search(value)
    if match:
        day, month, year = (int(part) for part in match.groups())
        try:
            return datetime(year, month, day, tzinfo=timezone.utc).timestamp(), False
        except ValueError:
            pass

    return None, False


# --- Titles -----------------------------------------------------------------

#: The archives' boilerplate. None of it says anything about WHICH video, so
#: two copies that differ only here are the same upload.
_NOISE = frozenset(
    """
    onlyfans only fans leak leaks leaked video videos vid vids porn porno xxx
    nude nudes naked free full hd 4k 1080p 720p new premium exclusive mega
    collection pack set photos photo pics pic content onlyleaks sextape tape
    and the a an of with in on at to her his their my me you is by for from
    """.split()
)
_WORD_RE = re.compile(r"[a-z0-9]+")


def title_tokens(title: str, names: frozenset[str]) -> frozenset[str]:
    """The words of a title that could tell one video from another."""

    folded = unicodedata.normalize("NFKD", title or "").encode("ascii", "ignore").decode().lower()
    folded = folded.replace("'s", " ")
    return frozenset(
        word
        for word in _WORD_RE.findall(folded)
        if len(word) > 1 and word not in _NOISE and word not in names and not word.isdigit()
    )


def name_words(*names: str | None) -> frozenset[str]:
    words: set[str] = set()
    for name in names:
        if name:
            folded = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode().lower()
            words.update(_WORD_RE.findall(folded))
            words.add(re.sub(r"[^a-z0-9]", "", folded))
    return frozenset(word for word in words if word)


#: Below this length a duration match is weak evidence on its own. Measured
#: 2026-10-27 against same-site pairs (which the merge never compares, so any
#: match among them is a coincidence or a repost): 13,469 pairs of clips under
#: two minutes on one site agree to within a second, most of them on sites
#: whose titles are generic ("Sierra Cabot OnlyFans Leak 2"). Over fifteen
#: minutes it was 548 -- and about half of those were reposts.
SHORT_CLIP = 300


def _overlap(a: "Entry", b: "Entry") -> float:
    return len(a.tokens & b.tokens) / len(a.tokens | b.tokens)


def _same_title(a: "Entry", b: "Entry") -> bool:
    # Equal distinguishing words, and enough of them to be distinguishing.
    # Three is the floor because "Masturbation" alone matches half a catalogue.
    return bool(a.tokens) and a.tokens == b.tokens and len(a.tokens) >= 3


def same_video(a: "Entry", b: "Entry") -> bool:
    """Whether two videos are one upload.

    A wrong merge HIDES a different video; a missed one shows a duplicate
    tile. The rules lean accordingly, hardest where coincidences are common.
    """

    if a.site == b.site:
        # Sites do repost (thothub carries "Molly Little Pregnant Fuck and
        # Messy Cum" twice at 1005s), but a site's own list is mostly
        # distinct scenes, so only the strongest evidence merges within one:
        # the same distinguishing title AND the same length.
        return _same_title(a, b) and bool(a.duration and b.duration) and abs(a.duration - b.duration) <= 1

    if _same_title(a, b):
        return True

    if not (a.duration and b.duration):
        return False
    shorter = min(a.duration, b.duration)
    if shorter < 30:
        return False

    if shorter < SHORT_CLIP:
        # Short clips collide constantly, so the length must agree to the
        # second AND the titles must say the same thing. A generic title
        # ("Grace Charis ONLY FANS Video") is no evidence at all here.
        if abs(a.duration - b.duration) > 1 or not a.tokens or not b.tokens:
            return False
        return _overlap(a, b) >= 0.34

    if abs(a.duration - b.duration) > 2:
        return False
    if not a.tokens or not b.tokens:
        # One side has no usable title; for a long video the length to the
        # second is strong evidence on its own.
        return True
    return _overlap(a, b) >= 0.2


# --- The merged feed --------------------------------------------------------


@dataclass(slots=True)
class Copy:
    """One site's copy of a merged entry."""

    site: str
    id: str
    duration: int | None = None
    resolution: str | None = None
    has_text: bool = False


@dataclass(slots=True)
class Entry:
    kind: str  # "video" | "gallery" | "photo"
    site: str
    id: str
    title: str
    thumbnail: str | None = None
    duration: int | None = None
    resolution: str | None = None
    posted_label: str | None = None
    ts: float | None = None
    #: How `ts` was arrived at: "site" (stated), "relative" (approximate),
    #: "inferred" (borrowed from a duplicate or a neighbour), or None.
    ts_source: str | None = None
    description: str | None = None
    has_text: bool = False
    page: int | None = None
    index: int | None = None
    image_count: int | None = None
    tokens: frozenset[str] = frozenset()
    copies: list[Copy] = field(default_factory=list)
    emitted: bool = False
    #: Position in its own stream, for interleaving undated sites fairly.
    seq: int = 0
    #: True when no date could be found or borrowed at all.
    undated: bool = False
    #: Every (site, kind) stream a copy of this entry came from. A stream with
    #: an unshown entry here does not need its next page yet.
    origins: list[tuple[str, str]] = field(default_factory=list)
    #: Emitted after something older than it already was: its site answered
    #: after the deadline. The client inserts it by date instead of appending.
    late: bool = False

    @property
    def key(self) -> str:
        return f"{self.kind[0]}:{self.site}:{self.id}"


@dataclass(slots=True)
class Stream:
    site: str
    site_handle: str
    kind: str
    page: int = 0
    exhausted: bool = False
    error: str | None = None
    pending: Future | None = None
    seen: set[str] = field(default_factory=set)
    #: Oldest timestamp read so far in this stream; None until one is.
    frontier: float | None = None
    #: Ever produced a date. A stream that never has is interleaved, not merged.
    dated: bool = False
    #: The last dated item, carried across pages for neighbour inference.
    last_ts: float | None = None
    count: int = 0

    @property
    def live(self) -> bool:
        return not self.exhausted and self.error is None


class Feed:
    """The merged feed for one performer and one choice of kinds."""

    def __init__(
        self,
        handle: str,
        sources: list[tuple[str, str]],
        scrapers: dict,
        names: frozenset[str],
        fetch_images: Callable[[str, str, int], list],
    ) -> None:
        self.handle = handle
        self.scrapers = scrapers
        self.names = names
        self.fetch_images = fetch_images
        self.lock = threading.Lock()
        self.touched = time.monotonic()
        #: Wall-clock time the merge was started from scratch. Set by the
        #: store; restoring a feed keeps the original, so "stale" means stale.
        self.built_at = None
        self.entries: list[Entry] = []
        self.emitted: list[Entry] = []
        self._dated_credit = 0.0
        self._oldest_shown: float | None = None

        self.streams: list[Stream] = []
        for site, site_handle in sources:
            scraper = scrapers.get(site)
            if scraper is None:
                continue
            # Every kind, always. The Videos and Photos tabs filter one feed
            # rather than each building their own: one feed per performer is
            # what makes it affordable to build them in the background.
            for kind in ("video", "gallery", "photo"):
                self.streams.append(Stream(site=site, site_handle=site_handle, kind=kind))

    # -- fetching --

    def _read(self, stream: Stream, page: int) -> list:
        scraper = self.scrapers[stream.site]
        with _site_lock(stream.site):
            if stream.kind == "video":
                return scraper.account_videos(stream.site_handle, page) or []
            if stream.kind == "gallery":
                return scraper.account_galleries(stream.site_handle, page) or []
            # Through the router's cache, so the image proxy that serves the
            # thumbnails a moment later does not read the same page again.
            return self.fetch_images(stream.site, stream.site_handle, page) or []

    def _start(self, stream: Stream) -> None:
        stream.page += 1
        stream.pending = _pool.submit(self._read, stream, stream.page)

    def _settle(self, stream: Stream) -> None:
        future, stream.pending = stream.pending, None
        try:
            items = future.result()
        except Exception as exc:
            # A first page that fails is a site that is down for this
            # performer. A later page failing is usually the end of a list a
            # site signals with a 404, so it ends the stream quietly.
            if stream.page == 1:
                stream.error = str(exc)[:200]
                logger.debug(f"OnlyFans feed: {stream.site} {stream.kind} failed: {exc}")
            stream.exhausted = True
            return
        self._absorb(stream, items)

    def _absorb(self, stream: Stream, items: list) -> None:
        fresh: list[Entry] = []
        for position, item in enumerate(items):
            entry = self._entry(stream, item, position)
            if entry.id in stream.seen:
                continue
            stream.seen.add(entry.id)
            fresh.append(entry)

        if not fresh or stream.page >= MAX_PAGES:
            # Empty, or the site served its last page again rather than 404.
            stream.exhausted = True

        # Neighbour inference within this stream. Newest first, so an undated
        # item sits just below the nearest dated item above it; at the top of
        # a page, the last dated item of the previous page is that neighbour.
        newer = stream.last_ts
        for entry in fresh:
            if entry.ts is not None:
                newer = entry.ts
                stream.dated = True
            elif newer is not None:
                entry.ts = newer - 1
                entry.ts_source = "inferred"
        # An undated run at the very top of the stream borrows from below.
        older = None
        for entry in reversed(fresh):
            if entry.ts is not None:
                older = entry.ts
            elif older is not None:
                entry.ts = older + 1
                entry.ts_source = "inferred"
        stream.last_ts = newer

        for entry in fresh:
            stream.count += 1
            entry.seq = stream.count
            entry.origins.append((stream.site, stream.kind))
            if entry.ts is not None:
                stream.frontier = entry.ts if stream.frontier is None else min(stream.frontier, entry.ts)
            self._merge(entry)

    def _entry(self, stream: Stream, item, position: int) -> Entry:
        if stream.kind == "video":
            ts, approximate = parse_posted(item.posted_at)
            scraper = self.scrapers[stream.site]
            has_text = bool(getattr(scraper, "has_post_text", False))
            return Entry(
                kind="video",
                site=stream.site,
                id=item.video_id,
                title=item.title or "",
                thumbnail=item.thumbnail,
                duration=item.duration,
                resolution=item.resolution,
                posted_label=item.posted_at,
                ts=ts,
                ts_source=("relative" if approximate else "site") if ts is not None else None,
                description=item.description,
                has_text=has_text,
                tokens=title_tokens(item.title or "", self.names),
                copies=[Copy(stream.site, item.video_id, item.duration, item.resolution, has_text)],
            )
        if stream.kind == "gallery":
            ts, approximate = parse_posted(item.posted)
            return Entry(
                kind="gallery",
                site=stream.site,
                id=item.gallery_id,
                title=item.title or "",
                thumbnail=item.cover,
                posted_label=item.posted,
                ts=ts,
                ts_source=("relative" if approximate else "site") if ts is not None else None,
                image_count=item.image_count,
            )
        ts, approximate = parse_posted(getattr(item, "posted_at", None))
        return Entry(
            kind="photo",
            site=stream.site,
            id=item.image_id or f"{stream.page}:{position}",
            title="",
            posted_label=getattr(item, "posted_at", None),
            ts=ts,
            ts_source=("relative" if approximate else "site") if ts is not None else None,
            page=stream.page,
            index=position,
        )

    def _merge(self, entry: Entry) -> None:
        if entry.kind == "video":
            for existing in self.entries:
                if existing.kind != "video" or not same_video(existing, entry):
                    continue
                # Matched the playing copy, but the entry already holds a copy
                # from this same site: that is a repost, and needs the
                # same-site standard of evidence, not the cross-site one.
                if entry.site != existing.site and any(c.site == entry.site for c in existing.copies):
                    if not (_same_title(existing, entry) and entry.duration and existing.duration
                            and abs(entry.duration - existing.duration) <= 1):
                        continue
                _fold(existing, entry)
                return
        self.entries.append(entry)

    # -- emitting --

    def _threshold(self, ignore_pending: bool) -> float | None:
        """The date above which every entry is safe to show, or None for none.

        Safe means no live dated stream can still produce anything newer:
        each has been read down past it. A stream not yet read at all could
        hold anything, so it blocks -- unless the deadline has passed, when
        it is set aside rather than allowed to hold the page hostage.
        """

        threshold = float("-inf")
        for stream in self.streams:
            if not stream.live:
                continue
            if stream.count == 0:
                if ignore_pending and stream.pending is not None:
                    continue
                return None
            if stream.dated and stream.frontier is not None:
                threshold = max(threshold, stream.frontier)
        return threshold

    def _emit(self, ignore_pending: bool) -> None:
        """Move every entry it is now safe to show onto `emitted`, in order."""

        threshold = self._threshold(ignore_pending)
        if threshold is None:
            return

        waiting = [e for e in self.entries if not e.emitted]
        dated = sorted((e for e in waiting if e.ts is not None and e.ts >= threshold), key=lambda e: -e.ts)
        # Round-robin across undated sites: `seq` is each entry's position in
        # its own site's list, so sorting by it takes one from each in turn.
        undated = sorted((e for e in waiting if e.ts is None), key=lambda e: e.seq)

        # Undated entries are spread through the dated ones at the rate they
        # were found, so a site that states no dates is not starved to the end.
        dated_total = sum(1 for e in self.entries if e.ts is not None)
        undated_total = len(self.entries) - dated_total
        ratio = undated_total / dated_total if dated_total else 0.0

        for entry in dated:
            self._push(entry)
            self._dated_credit += ratio
            while self._dated_credit >= 1 and undated:
                self._push(undated.pop(0))
                self._dated_credit -= 1

        # No dated stream left to interleave with: the rest simply follows.
        if not any(s.live and s.dated for s in self.streams):
            for entry in sorted((e for e in self.entries if not e.emitted and e.ts is not None), key=lambda e: -e.ts):
                self._push(entry)
            for entry in undated:
                self._push(entry)

    def _push(self, entry: Entry) -> None:
        if not entry.emitted:
            entry.emitted = True
            if entry.ts is None:
                entry.undated = True
            elif self._oldest_shown is not None and entry.ts > self._oldest_shown:
                entry.late = True
            if entry.ts is not None:
                self._oldest_shown = entry.ts if self._oldest_shown is None else min(self._oldest_shown, entry.ts)
            self.emitted.append(entry)

    # -- the one public call --

    def shown(self, kinds: frozenset[str] = ALL_KINDS) -> list[Entry]:
        """The emitted entries a tab shows, in feed order."""

        if kinds == ALL_KINDS:
            return self.emitted
        return [e for e in self.emitted if _tab(e.kind) in kinds]

    def fill(self, wanted: int, deadline: float = DEADLINE, kinds: frozenset[str] = ALL_KINDS) -> None:
        """Read sites until `wanted` entries of `kinds` are ready, or the deadline passes."""

        until = time.monotonic() + deadline
        self.touched = time.monotonic()

        while True:
            for stream in self.streams:
                if stream.pending is not None and stream.pending.done():
                    self._settle(stream)

            self._emit(ignore_pending=False)
            if len(self.shown(kinds)) >= wanted:
                return

            # Ask for the next page of every stream that has nothing waiting
            # to be shown. Streams with buffered entries do not need more yet.
            for stream in self.streams:
                if not stream.live or stream.pending is not None:
                    continue
                if _tab(stream.kind) not in kinds:
                    continue
                buffered = any(
                    not e.emitted and (stream.site, stream.kind) in e.origins
                    for e in self.entries
                )
                if not buffered or (stream.dated and self._blocks(stream)):
                    self._start(stream)

            pending = [s.pending for s in self.streams if s.pending is not None]
            if not pending:
                # Nothing in flight and nothing more to ask for: everything
                # that exists has been read.
                self._emit(ignore_pending=True)
                return

            remaining = until - time.monotonic()
            if remaining <= 0:
                self._emit(ignore_pending=True)
                return

            wait(pending, timeout=remaining, return_when="FIRST_COMPLETED")

    def _blocks(self, stream: Stream) -> bool:
        """This stream's frontier is the one holding emission back."""

        live = [s.frontier for s in self.streams if s.live and s.dated and s.frontier is not None]
        return bool(live) and stream.frontier == max(live)

    @property
    def done(self) -> bool:
        return all(not s.live and s.pending is None for s in self.streams) and all(
            e.emitted for e in self.entries
        )

    def status(self) -> list[dict]:
        rows: dict[str, dict] = {}
        for stream in self.streams:
            row = rows.setdefault(stream.site, {"site": stream.site, "state": "done", "error": None, "items": 0})
            row["items"] += stream.count
            if stream.error:
                row["state"], row["error"] = "failed", stream.error
            elif stream.pending is not None and row["state"] != "failed":
                row["state"] = "loading"
            elif stream.live and row["state"] == "done":
                row["state"] = "more"
        return list(rows.values())


def _fold(into: Entry, other: Entry) -> None:
    """Fold a duplicate into the entry already holding that video."""

    into.copies.append(other.copies[0])
    into.origins.extend(other.origins)

    # The most trustworthy date wins: a stated one over a relative one over a
    # borrowed one. Between two stated dates the earlier is the original post.
    rank = {"site": 3, "relative": 2, "inferred": 1, None: 0}
    if rank[other.ts_source] > rank[into.ts_source] or (
        other.ts_source == into.ts_source == "site" and other.ts is not None and into.ts is not None and other.ts < into.ts
    ):
        if not into.emitted:
            into.ts, into.ts_source, into.posted_label = other.ts, other.ts_source, other.posted_label

    if not into.description and other.description:
        into.description = other.description
    into.has_text = into.has_text or other.has_text

    # Play the longest copy. Archives clip uploads -- leakgrl served 804s of a
    # video hornyleak has at 1585s -- and the longer one is the real thing.
    if (other.duration or 0) > (into.duration or 0):
        into.site, into.id = other.site, other.id
        into.duration, into.resolution = other.duration, other.resolution
        into.thumbnail = other.thumbnail or into.thumbnail
        if len(other.title) > len(into.title):
            into.title = other.title
    elif not into.thumbnail:
        into.thumbnail = other.thumbnail


# --- Persistence ------------------------------------------------------------
#
# The WHOLE state is saved, not just the list. A stored list alone could be
# served, but scrolling past its end would have to start a fresh merge whose
# order and offsets disagree with what was already shown. With the cursors
# saved too, a restored feed simply carries on reading each site from where
# it stopped.

STATE_VERSION = 1


def _entry_state(entry: Entry) -> dict:
    return {
        "kind": entry.kind, "site": entry.site, "id": entry.id, "title": entry.title,
        "thumbnail": entry.thumbnail, "duration": entry.duration, "resolution": entry.resolution,
        "posted_label": entry.posted_label, "ts": entry.ts, "ts_source": entry.ts_source,
        "description": entry.description, "has_text": entry.has_text, "page": entry.page,
        "index": entry.index, "image_count": entry.image_count, "tokens": sorted(entry.tokens),
        "copies": [[c.site, c.id, c.duration, c.resolution, c.has_text] for c in entry.copies],
        "emitted": entry.emitted, "seq": entry.seq, "undated": entry.undated,
        "origins": [list(o) for o in entry.origins], "late": entry.late,
    }


def _entry_from(state: dict) -> Entry:
    return Entry(
        kind=state["kind"], site=state["site"], id=state["id"], title=state["title"],
        thumbnail=state["thumbnail"], duration=state["duration"], resolution=state["resolution"],
        posted_label=state["posted_label"], ts=state["ts"], ts_source=state["ts_source"],
        description=state["description"], has_text=state["has_text"], page=state["page"],
        index=state["index"], image_count=state["image_count"], tokens=frozenset(state["tokens"]),
        copies=[Copy(*c) for c in state["copies"]], emitted=state["emitted"], seq=state["seq"],
        undated=state["undated"], origins=[tuple(o) for o in state["origins"]], late=state["late"],
    )


def to_state(feed: "Feed") -> dict:
    """Everything needed to resume `feed` in another process. Call under its lock."""

    index = {id(entry): position for position, entry in enumerate(feed.entries)}
    streams = []
    for stream in feed.streams:
        streams.append({
            "site": stream.site, "site_handle": stream.site_handle, "kind": stream.kind,
            # A page still in flight is not read: resume asks for it again.
            "page": stream.page - (1 if stream.pending is not None else 0),
            "exhausted": stream.exhausted, "error": stream.error, "seen": sorted(stream.seen),
            "frontier": stream.frontier, "dated": stream.dated, "last_ts": stream.last_ts,
            "count": stream.count,
        })
    return {
        "version": STATE_VERSION,
        "entries": [_entry_state(entry) for entry in feed.entries],
        "emitted": [index[id(entry)] for entry in feed.emitted],
        "streams": streams,
        "dated_credit": feed._dated_credit,
        "oldest_shown": feed._oldest_shown,
    }


def from_state(
    state: dict,
    handle: str,
    scrapers: dict,
    names: frozenset[str],
    fetch_images: Callable[[str, str, int], list],
) -> "Feed | None":
    """A feed resumed from `to_state`, or None if the state is unusable."""

    if state.get("version") != STATE_VERSION:
        return None

    feed = Feed(handle, [], scrapers, names, fetch_images)
    feed.entries = [_entry_from(entry) for entry in state["entries"]]
    feed.emitted = [feed.entries[position] for position in state["emitted"]]
    feed._dated_credit = state["dated_credit"]
    feed._oldest_shown = state["oldest_shown"]
    for row in state["streams"]:
        if row["site"] not in scrapers:
            # Uninstalled since: its entries stay, it is just never read again.
            continue
        feed.streams.append(Stream(
            site=row["site"], site_handle=row["site_handle"], kind=row["kind"], page=row["page"],
            exhausted=row["exhausted"], error=row["error"], seen=set(row["seen"]),
            frontier=row["frontier"], dated=row["dated"], last_ts=row["last_ts"], count=row["count"],
        ))
    return feed


# --- The cache --------------------------------------------------------------

_feeds: "OrderedDict[str, Feed]" = OrderedDict()
_feeds_lock = threading.Lock()


def get_feed(handle: str, build: Callable[[], Feed], refresh: bool = False) -> Feed:
    """The live feed for `handle`, built (or restored) by `build` on a miss."""

    key = handle
    now = time.monotonic()
    with _feeds_lock:
        for stale in [k for k, f in _feeds.items() if now - f.touched > TTL]:
            del _feeds[stale]
        feed = None if refresh else _feeds.get(key)
        if feed is None:
            feed = build()
            _feeds[key] = feed
        _feeds.move_to_end(key)
        while len(_feeds) > MAX_FEEDS:
            _feeds.popitem(last=False)
        return feed


def put_feed(handle: str, feed: Feed) -> None:
    """Install a feed built elsewhere, unless a reader is mid-scroll on one.

    Replacing a feed someone is paging through would shift their offsets
    under them; the fresh one is in the database and will be the one restored
    after this one goes quiet.
    """

    with _feeds_lock:
        current = _feeds.get(handle)
        if current is not None and time.monotonic() - current.touched < 120:
            return
        _feeds[handle] = feed
        _feeds.move_to_end(handle)


__all__ = [
    "SHORT_CLIP",
    "ALL_KINDS", "Feed", "from_state", "get_feed", "name_words", "parse_posted",
    "put_feed", "same_video", "title_tokens", "to_state",
]
