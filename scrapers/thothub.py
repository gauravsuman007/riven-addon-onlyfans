"""thothub.to -- KVS archive of OnlyFans content, indexed by performer.

A sibling of `ultrathots.py` and `notfans.py`: read `ultrathots.py` first, it
carries the family's findings (two card classes between index and grid pages,
gated renditions substituted rather than withheld, lazy-loaded thumbnails in
``data-original``). Only what differs here is written below.

**This one was nearly rejected by a shallower pass for the wrong reason.** A
quick look at a video page's raw HTML finds no ``video_url``/``license_code``
near the top and no bare ``kt_player(`` call visible in a `curl` without
following through -- the player block is further down the page, inside a
heavily-whitespaced ``<script>`` tag, and `grep` on markers alone missed it.
It IS the standard KVS player: ``flashvars = {... license_code: '$...',
video_url: 'https://thothub.to/get_file/.../video.mp4/?v-acctoken=...' ...};
kt_player('kt_player', ...)``. Measured on several video ids -- 13866, 106472,
395456, 240671 -- the ``video_url`` here is never prefixed with
``function/0/``; the unscrambler is carried anyway, per this repo's standing
policy, because that is a per-deployment setting that flips without notice.

**``/get_file/`` and ``/get_image/`` both answer with a 302, not the bytes
directly.** The first hop lands on ``remote_control.php`` on a *different*
host (``hey.thub.lol`` for video, ``duga.thub.lol``/``apple.thub.lol`` for
images -- the CDN label varies by shard) which itself 302s to the real signed
file. ``requests`` follows both hops with `allow_redirects` on by default, so
nothing extra is needed here -- but a HEAD-only probe or a client that caps
redirects at one would see an empty 302 and wrongly call the source dead.
Verified end to end: a video id's ``get_file`` URL plus ``Referer`` resolved
through two redirects to a 206 ``video/mp4`` response with real bytes, and a
gallery's ``get_image`` URL the same way to a 200 ``image/jpeg``. Neither
redirect needed the Referer in testing -- the header is still sent, matching
the rest of the family, since a 403 on a missing Referer is this family's most
common gate and nothing says this deployment will never turn it on.

**A "Private"/"Premium" card has a grid thumbnail but no player block at
all.** The performer's video grid marks some cards ``item private`` and
"Premium" label; opening one of those pages serves normal markup with no
``video_url``/``license_code`` anywhere -- not a substituted login URL, simply
absent. `_kvs_sources` already returns ``[]`` for a page with no entries, so
these fall out of `resolve` for free: no video_url means no sources, logged at
debug, never raised.

**No stated resolution anywhere measured.** None of the four video pages
checked carries a ``video_alt_url*`` entry or a ``*_text`` label, and no grid
or player marks a rendition as HD. Every result here is a single unlabelled
"Source" -- consistent with this file's own rule against inventing a figure
the site never states.

**Galleries exist but never state a count, at listing or at open.** The
``/albums/`` grid and ``/albums/models/<handle>/`` listing title carry no
"(N Photos)" suffix the way some siblings do, so `DirectGallery.image_count`
stays `None` from the listing -- there is nothing to read off it, not a
parsing gap. ``gallery_images`` still returns everything the album page
actually links, same as every other site in the family.

**Default sort already renders newest-first; ``sort_by=post_date`` is sent
anyway.** `chelsea-fergo`'s video list was byte-identical with and without the
parameter. Asking for it explicitly is cheap insurance against this being one
deployment's accident rather than every deployment's default -- the family's
rule is to never trust a feed's silence on this.
"""

import re
from urllib.parse import urljoin, urlparse, urlunparse

from loguru import logger
from lxml import html as lxml_html

from onlyfans_addon.scraper_api.base import (
    DirectAccount,
    DirectGallery,
    DirectImage,
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
_ALBUM_ID_RE = re.compile(r"/albums?/(\d+)")
_MODEL_SLUG_RE = re.compile(r"/models/([^/?#]+)")

#: `No description` is the site's own placeholder text on a performer page
#: with nothing written, not an actual bio. Publishing it verbatim would show
#: every undocumented performer the same fake sentence.
_NO_BIO_PLACEHOLDER = "no description"


class ThothubScraper(DirectScraper):
    key = "thothub"
    name = "ThotHub"
    base_url = "https://thothub.to"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        slug = _SLUG_RE.sub("-", query.strip().lower()).strip("-")
        if not slug:
            return []
        response = self._get(f"{self.base_url}/search/{slug}/")
        return _videos(response.text, self.base_url, self.key, limit)

    def resolve(self, video_id: str) -> list[DirectSource]:
        response = self._get(f"{self.base_url}/videos/{video_id}/-/")
        return _kvs_sources(response.text, self.base_url, self.key)

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        response = self._get(f"{self.base_url}/models/{_page_suffix(page)}")
        return _accounts(response.text, self.base_url, self.key)

    def account_profile(self, handle: str) -> DirectAccount | None:
        try:
            response = self._get(f"{self.base_url}/models/{handle}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no profile page for {handle}: {exc}")
            return None
        return _profile(response.text, self.base_url, self.key, handle)

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        # ``sort_by=post_date`` rather than the site's default: a feed the user
        # reads as chronological must not silently be ordered by popularity on
        # one site out of six. See the module docstring -- this deployment's
        # default happened to match, which is not a reason to stop asking.
        response = self._get(
            f"{self.base_url}/models/{handle}/{_page_suffix(page)}",
            params={"sort_by": "post_date"},
        )
        return _videos(response.text, self.base_url, self.key, limit=None)

    def account_galleries(self, handle: str, page: int = 1) -> list[DirectGallery]:
        response = self._get(
            f"{self.base_url}/albums/models/{handle}/{_page_suffix(page)}",
            params={"sort_by": "post_date"},
        )
        return _galleries(response.text, self.base_url, self.key)

    def gallery_images(self, gallery_id: str) -> list[DirectImage]:
        response = self._get(f"{self.base_url}/albums/{gallery_id}/-/")
        images = _images(response.text, self.base_url)

        if not images:
            logger.debug(f"{self.key}: no images in album {gallery_id}")
        return images


def _page_suffix(page: int) -> str:
    """KVS paths take the page as a trailing segment, and omit it for page 1."""

    return f"{page}/" if page and page > 1 else ""


def _accounts(page: str, base_url: str, key: str) -> list[DirectAccount]:
    """Every performer card in a model index page.

    Keyed on the href shape rather than a class name, like every sibling here
    -- see `ultrathots.py`'s module docstring for why. The ``title`` attribute
    carries the display name with its original casing ("BelissaLove"), which
    the slug has thrown away.
    """

    tree = lxml_html.fromstring(page)
    accounts: list[DirectAccount] = []
    seen: set[str] = set()

    for link in tree.xpath("//a[@title and @href]"):
        href = link.get("href") or ""
        match = _MODEL_SLUG_RE.search(href)
        if not match:
            continue
        handle = match.group(1)
        if handle in seen or handle in ("", "models"):
            continue
        seen.add(handle)

        accounts.append(
            DirectAccount(
                site=key,
                handle=handle,
                display_name=(link.get("title") or "").strip() or handle,
                page_url=urljoin(base_url + "/", href),
                avatar=_image_src(link, base_url),
                video_count=parse_count(_first_text(link, "videos")),
            )
        )

    return accounts


def _profile(page: str, base_url: str, key: str, handle: str) -> DirectAccount | None:
    """Avatar and bio from a performer's own page.

    Returns None rather than an empty account when the page has neither --
    the caller uses a None to mean "nothing to add", and an account carrying
    blank strings would overwrite good values gathered from a sibling site.
    """

    tree = lxml_html.fromstring(page)

    avatars = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' block-model ')]"
        "//img"
    )
    avatar = _src(avatars[0], base_url) if avatars else None

    headings = tree.xpath("//h2")
    display_name = headings[0].text_content().strip() if headings else handle

    descriptions = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' desc ')]"
    )
    bio = descriptions[0].text_content().strip() if descriptions else ""
    if bio.lower() == _NO_BIO_PLACEHOLDER:
        bio = ""

    if not avatar and not bio:
        return None

    return DirectAccount(
        site=key,
        handle=handle,
        display_name=display_name or handle,
        page_url=f"{base_url}/models/{handle}/",
        avatar=avatar,
        bio=bio or None,
    )


def _videos(page: str, base_url: str, key: str, limit: int | None) -> list[DirectVideo]:
    """Every video card in a grid, in the order the site rendered them.

    A "Private"/"Premium" card renders here with a thumbnail and no player
    block on its own page -- see the module docstring -- so it is listed like
    any other video and simply resolves to no sources later.
    """

    tree = lxml_html.fromstring(page)
    videos: list[DirectVideo] = []
    seen: set[str] = set()

    for link in tree.xpath("//a[@title and @href]"):
        href = link.get("href") or ""
        match = _VIDEO_ID_RE.search(href)
        if not match:
            continue
        video_id = match.group(1)
        if video_id in seen:
            continue
        seen.add(video_id)

        videos.append(
            DirectVideo(
                site=key,
                video_id=video_id,
                title=(link.get("title") or link.text_content()).strip() or "Untitled",
                page_url=urljoin(base_url + "/", href),
                thumbnail=_image_src(link, base_url),
                duration=parse_duration(_first_text(link, "views-counter2", "duration")),
                views=parse_count(_first_text(link, "views-counter", "views")),
            )
        )
        if limit is not None and len(videos) >= limit:
            break

    return videos


def _galleries(page: str, base_url: str, key: str) -> list[DirectGallery]:
    """Every album card in a grid.

    Neither the card nor the title states a photo count on this deployment --
    see the module docstring -- so `image_count` stays `None` here. It is not
    a parsing gap: there is nothing on the page to read.
    """

    tree = lxml_html.fromstring(page)
    galleries: list[DirectGallery] = []
    seen: set[str] = set()

    for link in tree.xpath("//a[@title and @href]"):
        href = link.get("href") or ""
        match = _ALBUM_ID_RE.search(href)
        if not match:
            continue
        gallery_id = match.group(1)
        if gallery_id in seen:
            continue
        seen.add(gallery_id)

        galleries.append(
            DirectGallery(
                site=key,
                gallery_id=gallery_id,
                title=(link.get("title") or link.text_content()).strip() or "Untitled",
                page_url=urljoin(base_url + "/", href),
                cover=_image_src(link, base_url),
            )
        )

    return galleries


def _images(page: str, base_url: str) -> list[DirectImage]:
    """The full-size image behind every thumbnail on an album page.

    The anchor wrapping each thumbnail is the lightbox target and carries the
    real ``/get_image/`` URL; the ``img`` inside it is only the grid crop.
    """

    tree = lxml_html.fromstring(page)
    images: list[DirectImage] = []
    seen: set[str] = set()

    for link in tree.xpath("//a[@data-fancybox-type='image' and @href]"):
        url = urljoin(base_url + "/", link.get("href") or "")
        if not url or url in seen:
            continue
        seen.add(url)
        images.append(
            DirectImage(
                url=url,
                # The /get_image/ handler sits on thothub.to and the family's
                # convention is to send the Referer even where testing found
                # it not (yet) enforced -- see the module docstring.
                headers={"Referer": base_url + "/"},
            )
        )

    return images


def _image_src(element, base_url: str) -> str | None:
    """First image under `element`, as an absolute URL.

    ``src`` is a base64 spacer on every lazy-loaded card, so ``data-original``
    is tried first.
    """

    found = element.xpath(".//img")
    return _src(found[0], base_url) if found else None


def _src(image, base_url: str) -> str | None:
    source = image.get("data-original") or image.get("data-src") or image.get("src") or ""
    if not source or source.startswith("data:"):
        return None
    return urljoin(base_url + "/", source)


def _first_text(element, *class_names: str) -> str:
    """Text of the first descendant carrying any of `class_names`, in order.

    XPath rather than a CSS selector: lxml's cssselect support is an optional
    dependency that is not installed in the runtime image.
    """

    for class_name in class_names:
        found = element.xpath(
            f".//*[contains(concat(' ', normalize-space(@class), ' '), ' {class_name} ')]"
        )
        if found:
            text = found[0].text_content().strip()
            if text:
                return text
    return ""


def _normalise_resolution(text: str | None) -> str | None:
    """Map a quality the site actually printed onto the project's label scale.

    Only a stated figure is accepted -- "4K"/"2160p" and plain heights. A bare
    "HD" badge carries no height and must never be guessed at; that is what
    the `hd` flag exists for. Not measured on this site at all (see the
    module docstring), but kept for the day a video does carry one.
    """

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
    """Every rendition in a KVS player block, best quality first.

    See `ultrathots._kvs_sources` for why ``video_alt_url`` (unnumbered) is
    collected separately from the numbered entries. No video carries more
    than one rendition on this deployment in everything measured, but the
    logic is identical to every sibling and is not worth forking.
    """

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
        # A gated rendition is not withheld, it is *substituted* -- see the
        # family docstrings. Only the media handler is a real rendition.
        if _MEDIA_PATH not in url:
            logger.debug(
                f"{key}: skipping gated rendition "
                f"{_label_of(suffix, primary_label, alt_labels)!r}"
            )
            continue
        seen.add(url)
        label = (
            (primary_label.group(1) if primary_label else "")
            if suffix is None
            else alt_labels.get(suffix, "")
        )
        named = _FILENAME_HEIGHT_RE.search(url)
        resolution = _normalise_resolution(label) or _normalise_resolution(
            named.group(0) if named else None
        )
        sources.append(
            DirectSource(
                url=url,
                label=label or resolution or "Source",
                resolution=resolution,
                # KVS checks Referer on the get_file handler on every sibling;
                # not observed as enforced here but sent regardless.
                headers={"Referer": base_url + "/"},
            )
        )

    sources.sort(key=_rank, reverse=True)
    if not sources:
        logger.debug(f"{key}: no playable rendition in the player block")
    return sources


def _label_of(suffix: str | None, primary_label, alt_labels: dict[str, str]) -> str:
    """The label a player block gave one rendition, for logging a skip."""

    if suffix is None:
        return primary_label.group(1) if primary_label else ""
    return alt_labels.get(suffix, "")


def _rank(source: DirectSource) -> int:
    match = _RESOLUTION_RE.search(source.resolution or source.label or "")
    return int(match.group(1)) if match else 0
