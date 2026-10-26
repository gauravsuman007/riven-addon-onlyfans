"""sheeshfans.com -- KVS archive of OnlyFans content, indexed by performer.

A sibling of `thothub.py`/`viralxxxporn.py`; read `ultrathots.py` first for the
family's general findings (two card classes between index and grid pages,
gated renditions substituted rather than withheld, lazy-loaded thumbnails in
``data-original``). Only what differs here is written below.

**This was flagged for a careful redo, and the redo found a plain KVS site,
not a two-content-type puzzle.** A previous pass concluded alinity "only had
album posts with no player block" while sophie-jane had a real one, and left
the question open: two post types, or something broken. Re-checked
2026-10-26, directly: alinity's own `/models/alinity/` page lists 122 videos,
every one of her `/video/<id>/-/` pages checked (20010, 20011, 27127) carries
a complete `kt_player`/`license_code`/`video_url` block, and one resolved
`get_file` URL (2160p) served a real `206 video/mp4` to a bare GET with this
family's usual headers. Whatever the earlier pass opened for alinity, it was
not what is there now -- this is an ordinary KVS deployment with both videos
and albums per performer, same as `thothub.py`.

**The video and album paths are both singular here** (``/video/<id>/-/``,
``/album/<id>/<slug>/``), unlike the plural ``/videos/``/``/albums/`` on
`thothub.py` -- `viralxxxporn.py`'s regexes already spell both forms
(``/videos?/``, ``/albums?/``) for exactly this reason, and are reused as-is.
The *listing* routes stay plural (``/models/<handle>/`` for videos,
``/albums/models/<handle>/`` for albums), matching the rest of the family --
only the per-item page is singular.

**An album's own page needs its real slug, not a placeholder.**
``/video/<id>/-/`` serves the real player regardless of slug (confirmed:
``-`` in place of the title works), but ``/album/<id>/-/`` 404s -- the album
template does not accept a substitute slug the way the video one does. So
`gallery_id` here carries ``<id>/<slug>`` rather than a bare id, and
`gallery_images` builds the URL from the whole thing.

**The grid's "quality" badge is decorative, not data.** Every single video
card measured, across every performer, prints ``<span class="quality">720p
</span>`` -- even on videos whose own `get_file` URL states ``_2160p.mp4``
in the filename. Trusting the badge would publish a wrong, constant number
for almost every video; the badge is never read, and `_FILENAME_HEIGHT_RE`
(from the `video_url` filename, as on every sibling) is the only source
trusted for a resolution figure here.

**Verified end to end:** a video's `get_file` URL served `206 video/mp4`
over a byte range to a bare request plus this family's usual Referer; a
gallery's `get_image` URL (from album 45, alinity, 10 of 10 photos stated and
10 served -- no gap) served a real `200 image/jpeg` the same way.

**Views and the relative post age are siblings, not a single field.** A
video card's two ``<div class="box">`` entries are, in order, the view count
("12K views") and the relative age ("1 year ago"). The age is stored
verbatim as `posted_at`, same convention as `viralxxxporn.py`'s card date --
it is not an ISO timestamp and nothing here pretends it is one.

**`player-description` writes a sentence per video, not a placeholder.**
Unlike the model bio field below, every video page checked had one ("Watch
<title> Seen on SheeshFans."). SEO boilerplate, but the site's own stated
text about this video -- same reasoning as `viralxxxporn.py`'s `has_post_text`.
The model bio field, by contrast, used this site's own literal "No
description" placeholder on every performer checked, filtered out the same
way `thothub.py` does.
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
#: Both forms, because this deployment uses the singular for the per-item
#: page while the listing routes stay plural -- see the module docstring.
_VIDEO_ID_RE = re.compile(r"/videos?/(\d+)")
_ALBUM_ID_RE = re.compile(r"/albums?/(\d+)")
#: The id *and* slug together, because opening an album needs the real slug.
_ALBUM_HREF_RE = re.compile(r"/albums?/(\d+/[^/?#]+)/?")
_MODEL_SLUG_RE = re.compile(r"/models/([^/?#]+)")

#: The site's own placeholder text on a performer page with nothing written,
#: not an actual bio. Publishing it verbatim would show every undocumented
#: performer the same fake sentence.
_NO_BIO_PLACEHOLDER = "no description"


class SheeshFansScraper(DirectScraper):
    key = "sheeshfans"
    name = "SheeshFans"
    base_url = "https://sheeshfans.com"
    indexes_accounts = True
    #: `player-description` writes a sentence per video -- see the module
    #: docstring.
    has_post_text = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        slug = _SLUG_RE.sub("-", query.strip().lower()).strip("-")
        if not slug:
            return []
        response = self._get(f"{self.base_url}/search/{slug}/")
        return _videos(response.text, self.base_url, self.key, limit)

    def resolve(self, video_id: str) -> list[DirectSource]:
        # The video template accepts a placeholder slug -- verified -- unlike
        # the album template below, which does not.
        response = self._get(f"{self.base_url}/video/{video_id}/-/")
        return _kvs_sources(response.text, self.base_url, self.key)

    def video_info(self, video_id: str) -> DirectVideo | None:
        """The sentence under a video's player, for a caller that draws posts."""

        try:
            response = self._get(f"{self.base_url}/video/{video_id}/-/")
        except Exception as exc:
            logger.debug(f"{self.key}: no page for video {video_id}: {exc}")
            return None

        tree = lxml_html.fromstring(response.text)

        blocks = tree.xpath(
            "//div[contains(concat(' ', normalize-space(@class), ' '), ' player-description ')]"
        )
        description = " ".join(blocks[0].text_content().split()) if blocks else ""
        if not description:
            return None

        headings = tree.xpath("//h1//text()")

        return DirectVideo(
            site=self.key,
            video_id=video_id,
            title=next((t.strip() for t in headings if t.strip()), ""),
            page_url=f"{self.base_url}/video/{video_id}/-/",
            description=description,
        )

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
        # ``sort_by=post_date`` rather than the site's default: a feed the
        # user reads as chronological must not silently be ordered by
        # popularity on one site out of the family.
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
        # `gallery_id` is `<id>/<slug>` -- the real slug, not a placeholder;
        # see the module docstring for why a dash 404s here.
        response = self._get(f"{self.base_url}/album/{gallery_id}/")
        images = _images(response.text, self.base_url)

        if not images:
            logger.debug(f"{self.key}: no images in album {gallery_id}")
        return images


def _page_suffix(page: int) -> str:
    """KVS paths take the page as a trailing segment, and omit it for page 1."""

    return f"{page}/" if page and page > 1 else ""


def _accounts(page: str, base_url: str, key: str) -> list[DirectAccount]:
    """Every performer card in a model index page."""

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
            )
        )

    return accounts


def _profile(page: str, base_url: str, key: str, handle: str) -> DirectAccount | None:
    """Avatar and bio from a performer's own page.

    Returns None rather than an empty account when the page has neither --
    the caller uses a None to mean "nothing to add".
    """

    tree = lxml_html.fromstring(page)

    avatars = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' photo ')]//img"
    )
    avatar = _src(avatars[0], base_url) if avatars else None

    names = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' info ')]"
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' name ')]//text()"
    )
    display_name = next((t.strip() for t in names if t.strip()), handle)

    descriptions = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' desc ')]"
    )
    bio = descriptions[0].text_content().strip() if descriptions else ""
    if bio.lower() == _NO_BIO_PLACEHOLDER:
        bio = ""

    videos = None
    for stat in tree.xpath(
        "//ul[contains(concat(' ', normalize-space(@class), ' '), ' list-stat ')]"
        "/li[span[contains(text(), 'Videos')]]/strong//text()"
    ):
        videos = parse_count(stat.strip()) or videos

    if not avatar and not bio and videos is None:
        return None

    return DirectAccount(
        site=key,
        handle=handle,
        display_name=display_name or handle,
        page_url=f"{base_url}/models/{handle}/",
        avatar=avatar,
        bio=bio or None,
        video_count=videos,
    )


def _videos(page: str, base_url: str, key: str, limit: int | None) -> list[DirectVideo]:
    """Every video card in a grid, in the order the site rendered them."""

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

        boxes = _card_boxes(link)

        videos.append(
            DirectVideo(
                site=key,
                video_id=video_id,
                title=(link.get("title") or link.text_content()).strip() or "Untitled",
                page_url=urljoin(base_url + "/", href),
                thumbnail=_image_src(link, base_url),
                duration=parse_duration(_first_text(link, "time")),
                # Two sibling `.box` divs: views first, then the relative
                # age -- see the module docstring. Neither is guaranteed, so
                # both are read positionally rather than assumed present.
                views=parse_count(boxes[0]) if boxes else None,
                posted_at=boxes[1] if len(boxes) > 1 else None,
            )
        )
        if limit is not None and len(videos) >= limit:
            break

    return videos


def _galleries(page: str, base_url: str, key: str) -> list[DirectGallery]:
    """Every album card in a grid."""

    tree = lxml_html.fromstring(page)
    galleries: list[DirectGallery] = []
    seen: set[str] = set()

    for link in tree.xpath("//a[@title and @href]"):
        href = link.get("href") or ""
        match = _ALBUM_HREF_RE.search(href)
        if not match:
            continue
        gallery_id = match.group(1)
        album_num = gallery_id.split("/", 1)[0]
        if album_num in seen:
            continue
        seen.add(album_num)

        # The photo count sits in the card's own sticky badge ("10 Photos"),
        # a sibling of this anchor, not inside it.
        parent = link.getparent()
        count_text = _first_text(parent, "sticky") if parent is not None else ""
        count_match = re.search(r"(\d+)\s*Photos?", count_text, re.IGNORECASE)

        galleries.append(
            DirectGallery(
                site=key,
                gallery_id=gallery_id,
                title=(link.get("title") or link.text_content()).strip() or "Untitled",
                page_url=urljoin(base_url + "/", href),
                cover=_image_src(link, base_url),
                image_count=int(count_match.group(1)) if count_match else None,
            )
        )

    return galleries


def _images(page: str, base_url: str) -> list[DirectImage]:
    """The full-size image behind every thumbnail on an album page."""

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
                headers={"Referer": base_url + "/"},
            )
        )

    return images


def _image_src(element, base_url: str) -> str | None:
    found = element.xpath(".//img")
    return _src(found[0], base_url) if found else None


def _src(image, base_url: str) -> str | None:
    source = image.get("data-original") or image.get("data-src") or image.get("src") or ""
    if not source or source.startswith("data:"):
        return None
    return urljoin(base_url + "/", source)


def _first_text(element, *class_names: str) -> str:
    """Text of the first descendant carrying any of `class_names`, in order."""

    for class_name in class_names:
        found = element.xpath(
            f".//*[contains(concat(' ', normalize-space(@class), ' '), ' {class_name} ')]"
        )
        if found:
            text = found[0].text_content().strip()
            if text:
                return text
    return ""


def _card_boxes(element) -> list[str]:
    """Text of every sibling ``.box`` div near a video card, in document order.

    These sit outside the anchor itself (in the surrounding `.content`
    block), so the search starts from the card ancestor rather than the
    anchor -- see the module docstring for what each position means.
    """

    card = element.xpath(
        "ancestor::*[contains(concat(' ', normalize-space(@class), ' '), ' item ')][1]"
    )
    scope = card[0] if card else element
    return [
        text.strip()
        for text in scope.xpath(
            ".//div[contains(concat(' ', normalize-space(@class), ' '), ' box ')]//text()"
        )
        if text.strip()
    ]


def _normalise_resolution(text: str | None) -> str | None:
    """Map a quality the site actually printed onto the project's label scale.

    Only a stated figure is accepted. The grid's own "quality" badge is a
    fixed decorative string here (see the module docstring) and is never
    passed to this function -- only the `get_file` filename's own height
    marker is trusted.
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
        # A gated rendition is not withheld, it is *substituted* -- see the
        # family docstrings. Only the media handler is a real rendition.
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
