"""x-video.tube -- KVS archive of OnlyFans content, indexed by performer.

A sibling of `thothub.py`/`hornyfans.py`/`leakxxx.py`; read `ultrathots.py`
first for the family's general findings. This deployment's own theme uses
icon-prefixed `<li>` stats (`<i class="icon-duration"></i>3:05`) instead of
any of the sibling sites' text classes, so its own small readers are used
rather than the shared `_first_text(element, *class_names)` helper those
sites share -- there is no class name to key on here, only an icon class next
to bare text.

**The site cross-promotes `viralxxxporn.com`** (one of this repo's own
already-shipped sites) in its footer link list -- same ad network, evidently.
Checked for a shared catalogue before writing this file: a one-page sample of
each site's `/models/` index (39 handles here, 30 there) had **zero**
overlap. Same operator network, independently built catalogues -- not a
mirror under this repo's rule against re-implementing one.

**Model pages serve videos directly at ``/models/<handle>/``**, same as the
rest of the family, and `/video/<id>/-/` is the resolve shortcut (no slug
needed, same pattern as `thothub.py`).

**This deployment does have real albums, attributed per performer** --
unlike `hornyfans.py`/`leakxxx.py`, where none were found. The count is
stated on the model page itself (`Albums: <n>`), the list is at
``/models/<handle>/albums/``, and an album opens at ``/albums/<id>/-/`` with
full-size images behind ``/get_image/...?i-acctoken=``, verified to a real
`200 image/jpeg`.

**No HD badge or stated resolution anywhere checked** -- every rendition
here is an unlabelled "Source", same honesty rule as `thothub.py`.

**No bio field on this template.** No description/bio class exists anywhere
on a model page checked; `DirectAccount.bio` is therefore never set rather
than guessed from the wrong element.
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
_VIDEO_ID_RE = re.compile(r"/video/(\d+)")
_ALBUM_ID_RE = re.compile(r"/albums/(\d+)")
_MODEL_SLUG_RE = re.compile(r"/models/([^/?#]+)/?$")


class XVideoTubeScraper(DirectScraper):
    key = "xvideotube"
    name = "X-Video.Tube"
    base_url = "https://x-video.tube"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        slug = _SLUG_RE.sub("-", query.strip().lower()).strip("-")
        if not slug:
            return []
        response = self._get(f"{self.base_url}/search/{slug}/")
        return _videos(response.text, self.base_url, self.key, limit)

    def resolve(self, video_id: str) -> list[DirectSource]:
        response = self._get(f"{self.base_url}/video/{video_id}/-/")
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
        response = self._get(
            f"{self.base_url}/models/{handle}/{_page_suffix(page)}",
            params={"sort_by": "post_date"},
        )
        return _videos(response.text, self.base_url, self.key, limit=None)

    def account_galleries(self, handle: str, page: int = 1) -> list[DirectGallery]:
        response = self._get(
            f"{self.base_url}/models/{handle}/albums/{_page_suffix(page)}",
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
    return f"{page}/" if page and page > 1 else ""


def _icon_stat(container, icon_class: str) -> str:
    """Text of the ``<li>`` carrying an icon of `icon_class`.

    This template has no class on the number itself -- only the icon beside
    it does -- so the sibling sites' `_first_text(element, *class_names)`
    does not apply here.
    """

    found = container.xpath(f".//li[i[contains(@class, '{icon_class}')]]")
    return found[0].text_content().strip() if found else ""


def _accounts(page: str, base_url: str, key: str) -> list[DirectAccount]:
    tree = lxml_html.fromstring(page)
    accounts: list[DirectAccount] = []
    seen: set[str] = set()

    for link in tree.xpath("//a[@title and @href]"):
        href = link.get("href") or ""
        match = _MODEL_SLUG_RE.search(href)
        if not match:
            continue
        handle = match.group(1)
        if handle in seen:
            continue
        seen.add(handle)

        accounts.append(
            DirectAccount(
                site=key,
                handle=handle,
                display_name=(link.get("title") or "").strip() or handle,
                page_url=urljoin(base_url + "/", href),
                avatar=_image_src(link, base_url),
                video_count=parse_count(_icon_stat(link, "icon-camera-shape")),
                image_count=parse_count(_icon_stat(link, "icon-photo-shape")),
            )
        )

    return accounts


def _profile(page: str, base_url: str, key: str, handle: str) -> DirectAccount | None:
    tree = lxml_html.fromstring(page)

    avatars = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' model-view ')]"
        "//img"
    )
    avatar = _src(avatars[0], base_url) if avatars else None

    headings = tree.xpath("//h1[contains(concat(' ', normalize-space(@class), ' '), ' title ')]")
    display_name = headings[0].text_content().strip() if headings else handle

    video_count = None
    image_count = None
    for row in tree.xpath(
        "//ul[contains(concat(' ', normalize-space(@class), ' '), ' media-data__list ')]/li"
    ):
        label = row.xpath(".//span[contains(@class,'media-data__list-title')]/text()")
        value = row.xpath(".//strong[contains(@class,'media-data__list-value')]//a/text()")
        if not label or not value:
            continue
        label_text = label[0].strip().lower()
        count = parse_count(value[0].strip())
        if label_text.startswith("video"):
            video_count = count
        elif label_text.startswith("album"):
            image_count = count

    if not avatar and video_count is None and image_count is None:
        return None

    return DirectAccount(
        site=key,
        handle=handle,
        display_name=display_name or handle,
        page_url=f"{base_url}/models/{handle}/",
        avatar=avatar,
        video_count=video_count,
        image_count=image_count,
    )


def _videos(page: str, base_url: str, key: str, limit: int | None) -> list[DirectVideo]:
    tree = lxml_html.fromstring(page)
    videos: list[DirectVideo] = []
    seen: set[str] = set()

    for card in tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' thumb--videos ')]"
    ):
        link = next(iter(card.xpath(".//a[@title and @href]")), None)
        if link is None:
            continue
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
                thumbnail=_image_src(card, base_url),
                duration=parse_duration(_icon_stat(card, "icon-duration")),
                views=parse_count(_icon_stat(card, "icon-view")),
            )
        )
        if limit is not None and len(videos) >= limit:
            break

    return videos


def _galleries(page: str, base_url: str, key: str) -> list[DirectGallery]:
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
    tree = lxml_html.fromstring(page)
    images: list[DirectImage] = []
    seen: set[str] = set()

    for link in tree.xpath("//a[contains(@href, '/get_image/')]"):
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
    source = (
        image.get("data-src")
        or image.get("data-original")
        or image.get("src")
        or ""
    )
    if not source or source.startswith("data:"):
        return None
    return urljoin(base_url + "/", source)


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
    modified = code.replace("$", "").replace("0", "1")
    centre = len(modified) // 2
    modified = str(4 * abs(int(modified[: centre + 1]) - int(modified[centre:])))
    return "".join(
        str((int(code[offset + i]) + int(modified[offset])) % 10)
        for offset in range(centre + 1)
        for i in range(1, 5)
    )


def _unscramble(url: str, code: str | None, key: str) -> str:
    """Not observed scrambled here either; carried defensively like every
    sibling -- see `ultrathots.py`."""

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
                headers={"Referer": base_url + "/"},
            )
        )

    sources.sort(key=_rank, reverse=True)
    if not sources:
        logger.debug(f"{key}: no playable rendition in the player block")
    return sources


def _label_of(suffix: str | None, primary_label, alt_labels: dict[str, str]) -> str:
    if suffix is None:
        return primary_label.group(1) if primary_label else ""
    return alt_labels.get(suffix, "")


def _rank(source: DirectSource) -> int:
    match = _RESOLUTION_RE.search(source.resolution or source.label or "")
    return int(match.group(1)) if match else 0
