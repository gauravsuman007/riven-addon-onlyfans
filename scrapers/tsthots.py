"""tsthots.com -- KVS archive of OnlyFans content, indexed by performer.

A sibling of `thothub.py`/`sheeshfans.py`/`onlyleaks.py`; read `ultrathots.py`
first for the family's general findings. Only what differs here is written
below. Trans-performer content specifically (the site's own category label,
"Shemale model"), same evaluation scope as every other archive here --
OnlyFans has creators across every gender and this add-on does not filter by
one.

**A newer KVS theme than `onlyleaks.me`'s** (`uv-model__*` BEM-style class
names, not the older `model-infos`/`bio-list` markup) -- confirmed the same
underlying CMS by the identical `kt_player`/`license_code`/`video_url`
block and `/get_file/`/`/get_image/` paths. The two theme generations are
different enough that none of `onlyleaks.py`'s selectors transfer, but the
`_license_token`/`_unscramble`/`_kvs_sources` block is identical and
duplicated here per this repo's own "never import another plugin's
internals" rule.

**This deployment actually writes real model bios**, unlike most of this
family's sites, which use a literal "No description" placeholder --
`andy-jaide`'s own page states two real sentences. `_NO_BIO_PLACEHOLDER`
is still checked for the sites that do use it.

**There is no dedicated profile photo anywhere on this theme -- only a
JS-swapped stand-in.** A model's own page renders
`<img class="model-img_js" src="data:...">` and swaps in the real source
at runtime, client-side, from a *different*, hidden element
(`.js_model-img-item`), which just carries that performer's own first
video thumbnail. `account_profile` reads that hidden element's
`data-js`/`data-original` attribute directly rather than running any
script -- the same picture, no browser needed. The `/models/` directory
card states its own, usually different, avatar (`data-original` on the
lazy-load `<img>`) for `list_accounts`.

**Verified end to end:** a video's `get_file` URL served `206 video/mp4`
over a byte range to a bare request plus this family's usual Referer; an
album's `get_image` URL served a real `200 image/jpeg` the same way.
Plain `requests` throughout -- no TLS fingerprint gate observed anywhere
on this deployment.

**Views and the quality badge are two different signals, same family
caution as `sheeshfans.py`.** A video card's `div.quality` prints a
generic badge ("HD") never trusted for `resolution` -- only the
`get_file` filename's own height marker is -- while the view count comes
from a sibling `icon_eye` + text pair, read the same way.
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

_MEDIA_PATH = "/get_file/"

_SLUG_RE = re.compile(r"[^a-z0-9]+")
_VIDEO_ID_RE = re.compile(r"/videos?/(\d+)")
_ALBUM_HREF_RE = re.compile(r"/albums?/(\d+/[^/?#]+)/?")
_MODEL_SLUG_RE = re.compile(r"/models/([^/?#]+)")

_NO_BIO_PLACEHOLDER = "no description"


class TsThotsScraper(DirectScraper):
    key = "tsthots"
    name = "TSThots"
    base_url = "https://tsthots.com"
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

    def account_galleries(self, handle: str, page: int = 1) -> list[DirectGallery]:
        suffix = f"{page}/" if page and page > 1 else ""
        try:
            response = self._get(
                f"{self.base_url}/albums/models/{handle}/{suffix}",
                params={"sort_by": "post_date"},
            )
        except Exception as exc:
            logger.debug(f"{self.key}: no albums page {page} for {handle}: {exc}")
            return []
        return _galleries(response.text, self.base_url, self.key)

    def gallery_images(self, gallery_id: str) -> list[DirectImage]:
        try:
            response = self._get(f"{self.base_url}/album/{gallery_id}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no album page for {gallery_id}: {exc}")
            return []
        images = _images(response.text, self.base_url)
        if not images:
            logger.debug(f"{self.key}: no images in album {gallery_id}")
        return images


def _accounts(page: str, base_url: str, key: str) -> list[DirectAccount]:
    """Every performer card ("thumb portrait") in a model index page."""

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
    tree = lxml_html.fromstring(page)

    # The visible `<img class="model-img_js">` is a 1x1 placeholder that a
    # page-local <script> swaps at runtime from this *hidden* element --
    # which just carries that performer's own first video thumbnail. See
    # the module docstring.
    avatar_source = tree.xpath(
        "//*[contains(concat(' ', normalize-space(@class), ' '), ' js_model-img-item ')]"
    )
    avatar = _src(avatar_source[0], base_url) if avatar_source else None

    names = tree.xpath(
        "//h1[contains(concat(' ', normalize-space(@class), ' '), ' uv-model__name ')]"
        "/text()"
    )
    display_name = next((t.strip() for t in names if t.strip()), handle)

    bio_blocks = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' uv-model__bio ')]"
    )
    bio = bio_blocks[0].text_content().strip() if bio_blocks else ""
    if bio.lower() == _NO_BIO_PLACEHOLDER:
        bio = ""

    videos = None
    albums = None
    for stat in tree.xpath(
        "//ul[contains(concat(' ', normalize-space(@class), ' '), ' uv-model__stats ')]/li"
    ):
        text = stat.text_content()
        if "video" in text.lower():
            videos = parse_count(text) or videos
        elif "album" in text.lower():
            albums = parse_count(text) or albums

    if not avatar and not bio and videos is None and albums is None:
        return None

    return DirectAccount(
        site=key,
        handle=handle,
        display_name=display_name or handle,
        page_url=f"{base_url}/models/{handle}/",
        avatar=avatar,
        bio=bio or None,
        video_count=videos,
        image_count=albums,
    )


def _videos(page: str, base_url: str, key: str) -> list[DirectVideo]:
    """Every video card ("item thumb uv-card") in a grid, in document order."""

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

        views_text = _card_stat(link, "icon_eye")

        videos.append(
            DirectVideo(
                site=key,
                video_id=video_id,
                title=(link.get("title") or link.text_content()).strip() or "Untitled",
                page_url=urljoin(base_url + "/", href),
                thumbnail=_image_src(link, base_url),
                duration=parse_duration(_first_text(link, "duration")),
                views=parse_count(views_text) if views_text else None,
            )
        )

    return videos


def _galleries(page: str, base_url: str, key: str) -> list[DirectGallery]:
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

        count_text = _card_stat(link, "icon_picture")
        count_match = re.search(r"\d+", count_text or "")

        galleries.append(
            DirectGallery(
                site=key,
                gallery_id=gallery_id,
                title=(link.get("title") or link.text_content()).strip() or "Untitled",
                page_url=urljoin(base_url + "/", href),
                cover=_image_src(link, base_url),
                image_count=int(count_match.group()) if count_match else None,
            )
        )

    return galleries


def _images(page: str, base_url: str) -> list[DirectImage]:
    tree = lxml_html.fromstring(page)
    images: list[DirectImage] = []
    seen: set[str] = set()

    for link in tree.xpath("//a[@data-fancybox-type='image' and @href]"):
        href = link.get("href") or ""
        if "/get_image/" not in href:
            continue
        url = urljoin(base_url + "/", href)
        if url in seen:
            continue
        seen.add(url)
        images.append(DirectImage(url=url, headers={"Referer": base_url + "/"}))

    return images


def _image_src(element, base_url: str) -> str | None:
    found = element.xpath(".//img")
    return _src(found[0], base_url) if found else None


def _src(image, base_url: str) -> str | None:
    source = image.get("data-original") or image.get("data-js") or image.get("src") or ""
    if not source or source.startswith("data:"):
        return None
    return urljoin(base_url + "/", source)


def _first_text(element, *class_names: str) -> str:
    for class_name in class_names:
        found = element.xpath(
            f".//*[contains(concat(' ', normalize-space(@class), ' '), ' {class_name} ')]"
        )
        if found:
            text = found[0].text_content().strip()
            if text:
                return text
    return ""


def _card_stat(element, icon_name: str) -> str:
    """Text of the stat sibling of a given icon's `<use xlink:href>` ref."""

    uses = element.xpath(f".//use[contains(@*, '#{icon_name}')]")
    if not uses:
        return ""
    container = uses[0].xpath("ancestor::*[contains(@class, 'item')][1]")
    if not container:
        return ""
    text = container[0].xpath(
        ".//span[contains(concat(' ', normalize-space(@class), ' '), ' card-item-text ')]//text()"
    )
    return next((t.strip() for t in text if t.strip()), "")


def _license_token(code: str) -> str:
    modified = code.replace("$", "").replace("0", "1")
    centre = len(modified) // 2
    modified = str(4 * abs(int(modified[: centre + 1]) - int(modified[centre:])))
    return "".join(
        str((int(code[offset + i]) + int(modified[offset])) % 10)
        for offset in range(centre + 1)
        for i in range(1, 5)
    )


def _unscramble(url: str, code: str | None, key: str) -> str:
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


def _rank(source: DirectSource) -> int:
    match = _RESOLUTION_RE.search(source.resolution or source.label or "")
    return int(match.group(1)) if match else 0
