"""thots.tv -- KVS archive of OnlyFans content, indexed by performer.

A sibling of `onlyleaks.py` in particular: byte-identical theme
(`model-item`/`model-infos`/`bio-list` markup), confirmed the same KVS
deployment generation rather than a copy of it -- see below for why this
is a distinct site and not the mirror it looks like at first glance.

**Checking for a mirror of `onlyleaks.py` is the right instinct here, and
the answer is no.** Both run the identical theme and both carry famous
names like `dani-daniels` and `anissa-kate` -- expected on any archive
this size, not evidence of a shared catalogue. Checked directly: fetching
`dani-daniels` on both sites returns a completely disjoint set of video
titles (zero overlap across both samples), which is the same
"same CMS, different operator, different scrape" relationship this file's
whole KVS family already has with each other -- not the byte-identical
catalogue a real mirror would show (contrast `teenager365.to` ->
`hornyfap.tv`, rejected elsewhere in this file for exactly that overlap).

**A handle here is not always a bare slug.** The index mixes two shapes,
same as `onlyleaks.py`: some cards link `/models/<slug>/`, others
`/models/<hash>/<slug>/` -- kept whole as `handle` rather than split,
since the hash-prefixed ones need the hash to resolve.

**No galleries observed anywhere sampled.** Checked two performers' own
`/albums/models/<handle>/` pages -- zero `/album/<id>/` links on either,
same absence `onlyleaks.py` already documents for this theme generation.
`account_galleries`/`gallery_images` stay at the base class's defaults.

**Verified end to end:** a video's `get_file` URL served `206 video/mp4`
to a bare `requests.get` plus this family's usual Referer, with plain
`requests` -- no TLS fingerprint gate observed on the pages or the media
host.

**Views and the relative post age are two of three `video-item` list
entries, not a fixed pair.** A card's `<ul class="video-items">` carries an
eye-icon view count, sometimes a commented-out percentage-rating entry
(dead markup, never rendered), and the relative age -- read positionally
off whichever entries actually rendered rather than assumed to be exactly
two, because the commented one would otherwise shift the second real entry
into the wrong slot every time it is present in the source but inert.

**The model bio block uses this site's own literal "No description"
placeholder** on every performer checked, filtered out the same way
`sheeshfans.py` does; the rest of the field (`Country`, `Pseudonyms`,
`Age`, `Height`, `Weight`) is template boilerplate stating `N/A`/`0` for
every account checked and is not surfaced as a bio.
"""

import re
from urllib.parse import urljoin, urlparse, urlunparse

from loguru import logger
from lxml import html as lxml_html

from onlyfans_addon.scraper_api.base import (
    DirectAccount,
    DirectScraper,
    DirectSource,
    DirectVideo,
    parse_count,
    parse_duration,
)


_RESOLUTION_RE = re.compile(r"(\d{3,4})p", re.IGNORECASE)
_FILENAME_HEIGHT_RE = re.compile(r"(?<=_)\d{3,4}p(?=\.)", re.IGNORECASE)
_HASH_LENGTH = 32

#: Every rendition KVS can actually play is served by this handler. Anything
#: else in a `video_url` slot is the site substituting a page for a file.
_MEDIA_PATH = "/get_file/"

_SLUG_RE = re.compile(r"[^a-z0-9]+")
_VIDEO_ID_RE = re.compile(r"/videos?/(\d+)")
_MODEL_HREF_RE = re.compile(r"/models/([^/?#]+(?:/[^/?#]+)?)/?$")

_NO_BIO_PLACEHOLDER = "no description"


class ThotsTvScraper(DirectScraper):
    key = "thotstv"
    name = "ThotsTv"
    base_url = "https://thots.tv"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        slug = _SLUG_RE.sub("-", query.strip().lower()).strip("-")
        if not slug:
            return []
        videos = self.account_videos(slug, 1)
        return videos[:limit] if limit else videos

    def resolve(self, video_id: str) -> list[DirectSource]:
        try:
            response = self._get(f"{self.base_url}/video/{video_id}/-/")
        except Exception as exc:
            logger.debug(f"{self.key}: no video page for {video_id}: {exc}")
            return []
        return _kvs_sources(response.text, self.base_url, self.key)

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        suffix = f"{page}/" if page and page > 1 else ""
        try:
            response = self._get(f"{self.base_url}/models/{suffix}")
        except Exception as exc:
            logger.debug(f"{self.key}: no model index page {page}: {exc}")
            return []
        return _accounts(response.text, self.base_url, self.key)

    def account_profile(self, handle: str) -> DirectAccount | None:
        try:
            response = self._get(f"{self.base_url}/models/{handle}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no profile page for {handle}: {exc}")
            return None
        return _profile(response.text, self.base_url, self.key, handle)

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        suffix = f"{page}/" if page and page > 1 else ""
        try:
            response = self._get(
                f"{self.base_url}/models/{handle}/{suffix}",
                params={"sort_by": "post_date"},
            )
        except Exception as exc:
            logger.debug(f"{self.key}: no videos page {page} for {handle}: {exc}")
            return []
        return _videos(response.text, self.base_url, self.key)


def _accounts(page: str, base_url: str, key: str) -> list[DirectAccount]:
    """Every performer card in a model index page."""

    tree = lxml_html.fromstring(page)
    accounts: list[DirectAccount] = []
    seen: set[str] = set()

    for link in tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' model-item ')]/a[@href]"
    ):
        href = link.get("href") or ""
        match = _MODEL_HREF_RE.search(href)
        if not match:
            continue
        handle = match.group(1)
        if handle in seen:
            continue
        seen.add(handle)

        images = link.xpath(".//img")
        avatar = images[0].get("src") if images else None

        accounts.append(
            DirectAccount(
                site=key,
                handle=handle,
                display_name=(link.get("title") or "").strip() or _display(handle),
                page_url=urljoin(base_url + "/", href),
                avatar=urljoin(base_url + "/", avatar) if avatar else None,
            )
        )

    return accounts


def _profile(page: str, base_url: str, key: str, handle: str) -> DirectAccount | None:
    tree = lxml_html.fromstring(page)

    images = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' model-info-img ')]//img"
    )
    avatar = urljoin(base_url + "/", images[0].get("src")) if images else None

    headings = tree.xpath(
        "//h1[contains(concat(' ', normalize-space(@class), ' '), ' model-title ')]//text()"
    )
    display_name = next((t.strip() for t in headings if t.strip()), _display(handle))

    bio_items = tree.xpath(
        "//ul[contains(concat(' ', normalize-space(@class), ' '), ' bio-list ')]"
        "/li[1]//text()"
    )
    bio = " ".join(t.strip() for t in bio_items if t.strip())
    if bio.lower() == _NO_BIO_PLACEHOLDER:
        bio = ""

    video_count = None
    image_count = None
    for item in tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' model-infos ')]"
        "/div[contains(concat(' ', normalize-space(@class), ' '), ' item ')]"
    ):
        text = item.text_content().strip()
        if "video" in text.lower():
            video_count = parse_count(text)
        elif "album" in text.lower():
            image_count = parse_count(text)

    if not avatar and not bio and video_count is None and image_count is None:
        return None

    return DirectAccount(
        site=key,
        handle=handle,
        display_name=display_name,
        page_url=f"{base_url}/models/{handle}/",
        avatar=avatar,
        bio=bio or None,
        video_count=video_count,
        image_count=image_count,
    )


def _videos(page: str, base_url: str, key: str) -> list[DirectVideo]:
    """Every video card ("item") on a performer's own page."""

    tree = lxml_html.fromstring(page)
    videos: list[DirectVideo] = []
    seen: set[str] = set()

    for link in tree.xpath(
        "//a[contains(concat(' ', normalize-space(@class), ' '), ' item-link ')][@href]"
    ):
        href = link.get("href") or ""
        match = _VIDEO_ID_RE.search(href)
        if not match:
            continue
        video_id = match.group(1)
        if video_id in seen:
            continue
        seen.add(video_id)

        duration_el = link.xpath(
            ".//div[contains(concat(' ', normalize-space(@class), ' '), ' duration ')]//text()"
        )
        duration = parse_duration(duration_el[0].strip()) if duration_el else None

        images = link.xpath(".//img")
        thumbnail = _img_src(images[0]) if images else None

        # Positional, not a fixed pair -- see the module docstring: a
        # commented-out rating entry sits in the source between the view
        # count and the relative age on every card, so both real entries are
        # read off whatever `video-item` text nodes actually rendered.
        entries = [
            t.strip()
            for t in link.xpath(
                ".//li[contains(concat(' ', normalize-space(@class), ' '), ' video-item ')]"
                "//text()"
            )
            if t.strip()
        ]
        views = None
        posted_at = None
        for entry in entries:
            if views is None and parse_count(entry) is not None:
                views = parse_count(entry)
            elif "ago" in entry.lower() or re.match(r"\d{4}-\d{2}-\d{2}", entry):
                posted_at = entry

        videos.append(
            DirectVideo(
                site=key,
                video_id=video_id,
                title=(link.get("title") or link.text_content()).strip() or "Untitled",
                page_url=urljoin(base_url + "/", href),
                thumbnail=thumbnail,
                duration=duration,
                views=views,
                posted_at=posted_at,
            )
        )

    return videos


def _img_src(image) -> str | None:
    source = image.get("src") or image.get("data-webp") or ""
    if not source or source.startswith("data:"):
        return None
    return source


def _display(handle: str) -> str:
    slug = handle.rsplit("/", 1)[-1]
    return " ".join(part.capitalize() for part in slug.split("-"))


def _normalise_resolution(text: str | None) -> str | None:
    if not text:
        return None
    cleaned = text.strip().lower()
    if cleaned in ("4k", "uhd", "2160"):
        return "2160p"
    if cleaned in ("fhd",):
        return "1080p"
    match = _RESOLUTION_RE.search(cleaned)
    return f"{match.group(1)}p" if match else None


def _license_token(code: str) -> str:
    """The digit sequence KVS derives from ``license_code`` to shuffle a hash."""

    modified = code.replace("$", "").replace("0", "1")
    centre = len(modified) // 2
    modified = str(4 * abs(int(modified[: centre + 1]) - int(modified[centre:])))
    return "".join(
        str((int(code[offset + i]) + int(modified[offset])) % 10)
        for offset in range(centre + 1)
        for i in range(1, 5)
    )


def _unscramble(url: str, code: str | None, key: str) -> str:
    """Undo the ``function/0/`` hash shuffle KVS applies to a media URL.

    Not observed live on this deployment -- every ``video_url`` measured here
    was already plain -- but carried anyway, per this repo's standing policy:
    it is a per-deployment setting that flips on a version bump, and a
    scrambled URL used as-is is a well-formed 404 rather than a loud failure.
    """

    if not url.startswith("function/0/"):
        return url
    if not code:
        logger.debug(f"{key}: scrambled video_url but no license_code on the page")
        return ""

    parsed = urlparse(url[len("function/0/") :])
    parts = parsed.path.split("/")
    if len(parts) < 4:
        return ""
    try:
        token = _license_token(code)
        if len(token) < _HASH_LENGTH:
            return ""
        digest = parts[3][:_HASH_LENGTH]
        order = list(range(_HASH_LENGTH))
        accumulator = 0
        for src in reversed(range(_HASH_LENGTH)):
            accumulator += int(token[src])
            dest = (src + accumulator) % _HASH_LENGTH
            order[src], order[dest] = order[dest], order[src]
        parts[3] = "".join(digest[i] for i in order) + parts[3][_HASH_LENGTH:]
    except (IndexError, ValueError):
        logger.debug(f"{key}: license_code did not decode the media URL")
        return ""
    return urlunparse(parsed._replace(path="/".join(parts)))


def _kvs_sources(page: str, base_url: str, key: str) -> list[DirectSource]:
    """Every rendition in a KVS player block, best quality first."""

    code_match = re.search(r"license_code:\s*'([^']+)'", page)
    code = code_match.group(1) if code_match else None

    alt_labels = dict(re.findall(r"video_alt_url(\d*)_text:\s*'([^']+)'", page))
    primary_label = re.search(r"video_url_text:\s*'([^']+)'", page)

    entries: list[tuple[str | None, str]] = [
        (None, raw) for raw in re.findall(r"video_url:\s*'([^']+)'", page)
    ]
    entries += re.findall(r"video_alt_url(\d*):\s*'([^']+)'", page)

    sources: list[DirectSource] = []
    seen: set[str] = set()
    for suffix, raw in entries:
        url = _unscramble(raw, code, key)
        if not url or url in seen:
            continue
        if _MEDIA_PATH not in url:
            logger.debug(f"{key}: skipping gated rendition {suffix!r}")
            continue
        seen.add(url)
        label = (
            (primary_label.group(1) if primary_label else "")
            if suffix is None
            else alt_labels.get(suffix, "")
        )
        named = _FILENAME_HEIGHT_RE.search(url)
        resolution = _normalise_resolution(named.group(0) if named else None)
        sources.append(
            DirectSource(
                url=url,
                label=label or resolution or "Source",
                resolution=resolution,
                headers={"Referer": base_url + "/"},
            )
        )

    sources.sort(key=_rank, reverse=True)
    if not sources:
        logger.debug(f"{key}: no playable rendition in the player block")
    return sources


def _rank(source: DirectSource) -> int:
    match = _RESOLUTION_RE.search(source.resolution or source.label or "")
    return int(match.group(1)) if match else 0
