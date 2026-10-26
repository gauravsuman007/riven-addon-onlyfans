"""xxthots.com -- KVS archive of OnlyFans content, indexed by performer.

A sibling of `thothub.py`/`thothd.py`/`analegg.py` underneath (`kt_player`,
`license_code`, `video_url`, `/get_file/`), but its own, unrelated theme --
`.asside`/`.thumb-item`/icon-prefixed stats, nothing in common with the
`.block-model` family's class names. Read `xvideotube.py` first: this site's
icon-based stat reading is the same shape (an `<i class="icon-*">` beside
bare text, no class on the number itself), just with `<div class="thumb-item">`
wrappers here instead of `<li>`.

**Video pages are ``/video/<id>/<slug>/`` (singular), same shortcut
``/video/<id>/-/`` as `leakxxx.py`.** `video_url`/`license_code` confirmed
live on a real page (`monica-santiago`'s "Hot MILF..." video), and that
`video_url` resolved to a `200 video/mp4` with real bytes.

**No albums confirmed reachable.** Both plausible routes --
``/models/<handle>/albums/`` and ``/albums/models/<handle>/`` -- answer `200`
but neither rendered a single `/album/<id>/` link for the one performer
checked. Rather than guess which route (if either) is real,
`account_galleries`/`gallery_images` stay at the base class's empty default;
revisit if a performer with a stated album count turns up.

**No avatar on any of the twenty index cards sampled** -- every one rendered
the `no-thumb` placeholder rather than an `<img>`. Read defensively (the same
`_src` helper every sibling uses) rather than assumed absent outright, in
case a performer elsewhere on the index does have one.

**The `Description:` label is part of the bio element's own text**, unlike
the family's usual separate class -- this file strips the label itself
before deciding whether what is left is the real "No description" placeholder
or an actual stated bio.
"""

import re
from urllib.parse import urljoin

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
_VIDEO_ID_RE = re.compile(r"/video/(\d+)")
_MODEL_SLUG_RE = re.compile(r"/models/([^/?#]+)/?$")
_NO_BIO_PLACEHOLDER = "no description"


class XxThotsScraper(DirectScraper):
    key = "xxthots"
    name = "XXThots"
    base_url = "https://xxthots.com"
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
    #
    # account_galleries/gallery_images stay at the base default -- see the
    # module docstring.

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


def _page_suffix(page: int) -> str:
    return f"{page}/" if page and page > 1 else ""


def _icon_stat(container, icon_class: str) -> str:
    """Text of the ``.thumb-item`` carrying an SVG icon of `icon_class`.

    THE CLASS LIVES ON THE ``<svg>``, NOT THE ``<i>`` WRAPPING IT --
    ``<i><svg class="svg-icon icon-eye">...`` -- so a check scoped to `i`'s
    own class, the obvious first guess, never matches and every stat reads
    as missing. Matching on any descendant element is what actually finds
    it, regardless of which tag the theme puts the class on.
    """

    found = container.xpath(
        f".//div[contains(@class,'thumb-item') and .//*[contains(@class, '{icon_class}')]]"
    )
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
                video_count=parse_count(_icon_stat(link, "icon-play")),
            )
        )

    return accounts


def _profile(page: str, base_url: str, key: str, handle: str) -> DirectAccount | None:
    tree = lxml_html.fromstring(page)

    asside = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' asside ')]"
    )
    if not asside:
        return None
    asside = asside[0]

    avatars = asside.xpath(".//img")
    avatar = _src(avatars[0], base_url) if avatars else None

    titles = asside.xpath(
        ".//div[contains(concat(' ', normalize-space(@class), ' '), ' title ')]"
    )
    display_name = titles[0].text_content().strip() if titles else handle

    bio_blocks = asside.xpath(
        ".//div[contains(concat(' ', normalize-space(@class), ' '), ' asside-desc ')]"
    )
    bio = ""
    if bio_blocks:
        text = bio_blocks[0].text_content().strip()
        # The "Description:" label lives inside the same element as the text,
        # unlike the rest of the family's separately-classed bio blocks.
        bio = re.sub(r"^description:\s*", "", text, flags=re.IGNORECASE).strip()
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

        quality = link.xpath(
            ".//div[contains(concat(' ', normalize-space(@class), ' '), ' qualtiy ')]/text()"
        )
        time_text = link.xpath(
            ".//div[contains(concat(' ', normalize-space(@class), ' '), ' time ')]/text()"
        )

        videos.append(
            DirectVideo(
                site=key,
                video_id=video_id,
                title=(link.get("title") or link.text_content()).strip() or "Untitled",
                page_url=urljoin(base_url + "/", href),
                thumbnail=_image_src(link, base_url),
                duration=parse_duration(time_text[0].strip() if time_text else None),
                views=parse_count(_icon_stat(link, "icon-eye")),
                # Observed only ever "HD" on this deployment, same as
                # thothub.py -- a claim, never a resolution.
                hd=bool(quality and quality[0].strip().upper() == "HD"),
                posted_at=_icon_stat(link, "icon-calendar") or None,
            )
        )
        if limit is not None and len(videos) >= limit:
            break

    return videos


def _image_src(element, base_url: str) -> str | None:
    found = element.xpath(".//img")
    return _src(found[0], base_url) if found else None


def _src(image, base_url: str) -> str | None:
    source = (
        image.get("data-original")
        or image.get("data-src")
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
    """Not observed scrambled here; carried defensively like every sibling."""

    if not url.startswith("function/0/"):
        return url
    if not code:
        logger.debug(f"{key}: scrambled video_url but no license_code on the page")
        return ""

    from urllib.parse import urlparse, urlunparse

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
