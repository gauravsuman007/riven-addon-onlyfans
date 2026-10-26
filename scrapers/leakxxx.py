"""leak.xxx -- KVS archive of OnlyFans content, indexed by performer.

A sibling of `thothub.py`/`hornyfans.py`; read `ultrathots.py` first for the
family's general findings. This deployment runs a more heavily customised
theme than the rest of the family -- its own nav ("Niches", "Playlists",
"Fans"), its own card markup (`.pf-*`, `.v-*`, `.badge`) -- but it is the same
KVS player underneath (`kt_player`, `license_code`, `video_url` all present,
and a real `video_url` resolved through to a 200 `video/mp4`).

**The performer index lives at ``/onlyfans-models/``, plural; a single
performer's page is ``/onlyfans-model/<slug>/``, singular.** Easy to
transpose by accident -- both are real routes on this deployment, but only
one of them is the index. ``/fans/<id>/`` is a different thing entirely: a
numeric-id community/"fan" page (the first one checked, id 13414, is titled
"Tenn66's Page"), not a performer archive, and not used anywhere here.

**A video page needs no video id, only its slug.** ``/video/<slug>/`` serves
the player block directly -- there is no numeric id anywhere in the URL, and
nothing like the rest of the family's ``/videos/<id>/-/`` shortcut was
needed or found. `resolve` is handed the slug verbatim.

**A 403 on the media URL was a missing ``User-Agent``, not a missing
Referer.** The first attempt (Referer set, no explicit UA, so `requests`'s
own default) came back 403 `text/html`. The same request with a browser UA
and *no* Referer at all came back 200 `video/mp4`. This family's base class
always sends a browser UA (`BROWSER_HEADERS`), so this is not a trap for the
shipped scraper -- recorded because testing this file with a bare
`requests.get` and no session headers will reproduce the 403 and look like a
Referer gate that is not actually the cause.

**No albums anywhere checked.** Every model page's own tab reads "Albums
(0)", and there is no `/gallery/` or `/galleries/<slug>/` route that answers
anything -- `account_galleries`/`gallery_images` stay at the base class's
empty default.

**A profile's `pf-bio` is real descriptive text, not a placeholder.** Unlike
`thothub.py`'s literal "No description" string, every bio paragraph read here
was populated (clearly SEO copy, but the site's own stated text, same as any
other site's bio field) -- so there is no placeholder to filter out, and an
empty `pf-bio` on some performer would mean exactly that: nothing stated.
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

_MEDIA_PATH = "/get_file/"
_SLUG_RE = re.compile(r"[^a-z0-9]+")
_VIDEO_ID_RE = re.compile(r"/video/([^/?#]+)/")
_MODEL_SLUG_RE = re.compile(r"/onlyfans-model/([^/?#]+)/")


class LeakXxxScraper(DirectScraper):
    key = "leakxxx"
    name = "Leak.XXX"
    base_url = "https://leak.xxx"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        slug = _SLUG_RE.sub("-", query.strip().lower()).strip("-")
        if not slug:
            return []
        response = self._get(f"{self.base_url}/search/{slug}/")
        return _videos(response.text, self.base_url, self.key, limit)

    def resolve(self, video_id: str) -> list[DirectSource]:
        response = self._get(f"{self.base_url}/video/{video_id}/")
        return _kvs_sources(response.text, self.base_url, self.key)

    # --- Performer accounts -------------------------------------------------
    #
    # account_galleries/gallery_images stay at the base class's empty default
    # -- see the module docstring, nothing checked here has any albums.

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        response = self._get(f"{self.base_url}/onlyfans-models/{_page_suffix(page)}")
        return _accounts(response.text, self.base_url, self.key)

    def account_profile(self, handle: str) -> DirectAccount | None:
        try:
            response = self._get(f"{self.base_url}/onlyfans-model/{handle}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no profile page for {handle}: {exc}")
            return None
        return _profile(response.text, self.base_url, self.key, handle)

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        response = self._get(
            f"{self.base_url}/onlyfans-model/{handle}/{_page_suffix(page)}",
            params={"sort_by": "post_date"},
        )
        return _videos(response.text, self.base_url, self.key, limit=None)


def _page_suffix(page: int) -> str:
    return f"{page}/" if page and page > 1 else ""


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
                video_count=parse_count(_first_text(link, "m-vids", "videos")),
            )
        )

    return accounts


def _profile(page: str, base_url: str, key: str, handle: str) -> DirectAccount | None:
    tree = lxml_html.fromstring(page)

    avatars = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' pf-avatar ')]"
        "//img"
    )
    avatar = _src(avatars[0], base_url) if avatars else None

    headings = tree.xpath(
        "//h1[contains(concat(' ', normalize-space(@class), ' '), ' pf-name ')]"
    )
    display_name = headings[0].text_content().strip() if headings else handle

    bios = tree.xpath(
        "//*[contains(concat(' ', normalize-space(@class), ' '), ' pf-bio ')]"
    )
    bio = bios[0].text_content().strip() if bios else ""

    video_count = None
    meta = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' pf-metarow ')]"
        "//span[i[contains(@class,'gi-camera')]]"
    )
    if meta:
        video_count = parse_count(meta[0].text_content().strip())

    if not avatar and not bio and video_count is None:
        return None

    return DirectAccount(
        site=key,
        handle=handle,
        display_name=display_name or handle,
        page_url=f"{base_url}/onlyfans-model/{handle}/",
        avatar=avatar,
        bio=bio or None,
        video_count=video_count,
    )


def _videos(page: str, base_url: str, key: str, limit: int | None) -> list[DirectVideo]:
    """Every video card in a grid.

    THE CARD, NOT THE ANCHOR, IS THE UNIT HERE. A card renders two separate
    ``<a href="/video/...">`` elements -- one wrapping the thumbnail (which
    also carries the HD/duration badges), one titled ``v-title`` inside a
    sibling ``.v-meta`` block (which carries the view count and posted-at
    date) -- and neither alone has everything. Reading from the thumbnail
    anchor alone, the obvious first match in document order, silently
    produced every video with `views=None`: the field was never missing from
    the page, only from the element being searched.
    """

    tree = lxml_html.fromstring(page)
    videos: list[DirectVideo] = []
    seen: set[str] = set()

    for card in tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' vcard ')]"
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
                duration=parse_duration(_first_text(card, "dur")),
                views=parse_count(_first_text(card, "views")),
                hd=bool(card.xpath(".//*[contains(@class,'badge') and contains(@class,'hd')]")),
                posted_at=_first_text(card, "added") or None,
            )
        )
        if limit is not None and len(videos) >= limit:
            break

    return videos


def _image_src(element, base_url: str) -> str | None:
    found = element.xpath(".//img")
    return _src(found[0], base_url) if found else None


def _src(image, base_url: str) -> str | None:
    source = image.get("data-original") or image.get("data-src") or image.get("src") or ""
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
    """Not observed scrambled on real video_urls checked here (a plain
    /get_file/ path every time), carried defensively like every sibling."""

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
