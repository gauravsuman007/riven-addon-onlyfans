"""x-tg.tube -- KVS archive of OnlyFans content, indexed by performer.

Trans-performer content (the site's own description, "tranny porn models"),
same evaluation scope as every other archive here -- OnlyFans has creators
across every gender and this add-on does not filter by one.

A sibling of `viralxxxporn.py` in particular: this deployment uses the same
plural route shape (`/videos?/`, `/albums?/`) rather than the singular one
`sheeshfans.py`/`tsthots.com` use, confirmed by a video page's own
`kt_player`/`license_code`/`video_url` block. **The specific route layout
differs from every other KVS sibling shipped so far**, so it is spelled out
in full rather than assumed:

- Performer index: `/models/`, paged `/models/<n>/`.
- A performer's videos: `/models/<handle>/videos/` (own route, not
  `/models/<handle>/` bare -- that path 404s).
- A performer's albums: `/models/<handle>/albums/`.
- A single video: `/video/<id>/-/` (singular, placeholder slug accepted,
  verified the same way the rest of the family's singular item pages are).
- A single album: `/albums/<id>/<slug>/` (plural, *not* verified to accept
  a placeholder slug the way the video route does, so `gallery_id` carries
  the real `<id>/<slug>` the same way `sheeshfans.py` already has to).

**The profile "bio" fields are all template placeholders.** Every field on
a model's info box (`Birthday`, `Country`, `City`, `Ethnicity`, `Hair`,
`Eyes`, `Height`, `Weight`) stated `N/A` on every account checked --
`account_profile` does not surface any of it as a `bio`. The avatar *is*
real and un-lazy on this theme's profile page (a plain `src`, not the
`data:` placeholder the grid thumbnails use).

**A video card states three numbers that are easy to cross between.** The
grid tile carries a view count (`icon-view`, "1 007 views" -- note the
space-grouped thousands, which `parse_count` already handles), a duration
(`icon-duration`, "0:22"), and a relative-age string (`icon-calendar`,
"10 months") -- three different icon classes, read positionally by icon
rather than assumed to be in a fixed left-to-right order, the same caution
`tsthots.py`'s `_card_stat` already applies for this family.

**Verified end to end:** a video's `get_file` URL served `206 video/mp4`
over a byte range; an album's `get_image` URL served a real
`200 image/jpeg` (1.3MB, a genuine full-resolution photo, not a thumbnail).
Both with plain `requests`, this family's usual Referer, no TLS
fingerprint gate observed anywhere on this deployment.

**An album's own page states a bigger count than it ever shows.** The
measured album stated "174" photos in its own title while the page itself
rendered 12 `get_image` links and no visible "next" affordance of any
kind -- `gallery_images` has no `page` parameter to ask for more under
this contract regardless, so this is the honest ceiling for this site,
the same gap `leakgallery.py` already documents for its own un-paginated
"Load more."

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


class XtgScraper(DirectScraper):
    key = "xtg"
    name = "X-TG"
    base_url = "https://x-tg.tube"
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
            response = self._get(f"{self.base_url}/models/{handle}/videos/")
        except Exception as exc:
            logger.debug(f"{self.key}: no profile page for {handle}: {exc}")
            return None
        return _profile(response.text, self.base_url, self.key, handle)

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        suffix = f"{page}/" if page and page > 1 else ""
        try:
            response = self._get(
                f"{self.base_url}/models/{handle}/videos/{suffix}",
                params={"by": "post_date"},
            )
        except Exception as exc:
            logger.debug(f"{self.key}: no videos page {page} for {handle}: {exc}")
            return []
        return _videos(response.text, self.base_url, self.key)

    def account_galleries(self, handle: str, page: int = 1) -> list[DirectGallery]:
        suffix = f"{page}/" if page and page > 1 else ""
        try:
            response = self._get(f"{self.base_url}/models/{handle}/albums/{suffix}")
        except Exception as exc:
            logger.debug(f"{self.key}: no albums page {page} for {handle}: {exc}")
            return []
        return _galleries(response.text, self.base_url, self.key)

    def gallery_images(self, gallery_id: str) -> list[DirectImage]:
        # `gallery_id` is `<id>/<slug>` -- the real slug, since this route
        # was not verified to accept a placeholder the way `/video/` does.
        try:
            response = self._get(f"{self.base_url}/albums/{gallery_id}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no album page for {gallery_id}: {exc}")
            return []
        images = _images(response.text, self.base_url)
        if not images:
            logger.debug(f"{self.key}: no images in album {gallery_id}")
        return images


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

    headings = tree.xpath("//h1[contains(@class, 'title')]//text()")
    display_name = next((t.strip() for t in headings if t.strip()), handle)
    display_name = re.sub(r"\s*-\s*(Videos|Photos).*$", "", display_name).strip()

    avatars = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' model-view ')]//img"
    )
    avatar = None
    for image in avatars:
        avatar = _src(image, base_url)
        if avatar:
            break

    if not avatar and not display_name:
        return None

    return DirectAccount(
        site=key,
        handle=handle,
        display_name=display_name or handle,
        page_url=f"{base_url}/models/{handle}/videos/",
        avatar=avatar,
    )


def _videos(page: str, base_url: str, key: str) -> list[DirectVideo]:
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
                duration=parse_duration(_card_icon_text(link, "icon-duration")),
                views=parse_count(_card_icon_text(link, "icon-view")),
                posted_at=_card_icon_text(link, "icon-calendar") or None,
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

        count_text = _card_icon_text(link, "icon-photo-shape-8")
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

    for link in tree.xpath("//a[@href]"):
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
    source = image.get("data-src") or image.get("data-webp") or image.get("src") or ""
    if not source or source.startswith("data:"):
        return None
    return urljoin(base_url + "/", source)


def _card_icon_text(element, icon_class: str) -> str:
    """Text of the stat sibling of a given `<i class="icon-...">` marker."""

    icons = element.xpath(
        f".//i[contains(concat(' ', normalize-space(@class), ' '), ' {icon_class} ')]"
    )
    if not icons:
        return ""
    parent = icons[0].getparent()
    return parent.text_content().replace(icons[0].text_content(), "", 1).strip() if parent is not None else ""


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
