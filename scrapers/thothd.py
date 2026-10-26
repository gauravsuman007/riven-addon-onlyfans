"""thothd.com -- KVS archive of OnlyFans content, indexed by performer.

A near-identical sibling of `thothub.py` -- same template (`.block-model`,
`div.videos`/`div.duration`/`div.views`/`div.added` card classes, the
`is-hd` badge), down to the "No description" placeholder bio string. Only
what differs is written below; read `thothub.py` first.

Checked for catalogue overlap with `thothub.py` before writing this file: a
one-page sample of each site's `/models/` index shared zero handles. Same
template, independent catalogues -- not a mirror.

**`video_url:`/`license_code:` confirmed live** on a real video page
(`jasmin-m`'s "Masturbating Nipslip"), and that `video_url` resolved to a
`200 video/mp4` with real bytes.

**A performer's page states a real OnlyFans username, labelled.** Unlike
every sibling checked so far, this template has a "Website:" row under the
model-list that, where populated, links straight to `onlyfans.com/<name>` --
e.g. jasmin-m's page links `onlyfans.com/jasminm`. This is exactly the kind
of stated fact this repo's own rule distinguishes from a guess (see
`profile.py`/`discover.py` and the AGENTS.md section on identifying a
performer): `of_username` is only set here when the link's host is
`onlyfans.com` itself, never from the "Also known as:" alias list sitting in
the same block, which mixes in non-OnlyFans handles.

**`/albums/models/<handle>/` answers 200 with an empty grid** on every
account checked -- same shape as `notfans.py`'s orphan-albums finding, or
simply a site with no photo feature; either way there is nothing to read, so
`account_galleries`/`gallery_images` stay at the base class's empty default.
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
_VIDEO_ID_RE = re.compile(r"/videos?/(\d+)")
_MODEL_SLUG_RE = re.compile(r"/models/([^/?#]+)")
_NO_BIO_PLACEHOLDER = "no description"
_OF_LINK_RE = re.compile(r'href="(https://onlyfans\.com/[a-zA-Z0-9_]+)"')


class ThotHdScraper(DirectScraper):
    key = "thothd"
    name = "ThotHD"
    base_url = "https://thothd.com"
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
    #
    # account_galleries/gallery_images stay at the base default -- see the
    # module docstring, every album listing checked here was empty.

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
                video_count=parse_count(_first_text(link, "videos")),
            )
        )

    return accounts


def _profile(page: str, base_url: str, key: str, handle: str) -> DirectAccount | None:
    tree = lxml_html.fromstring(page)

    avatars = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' block-model ')]"
        "//img"
    )
    avatar = _src(avatars[0], base_url) if avatars else None

    # Scoped past the `.headline` div immediately before `.block-model`
    # rather than a bare `//h2`: the template also renders a "More Leaked
    # Models" sidebar heading as `<h2>`, and while it happens to sit AFTER
    # the profile's own `<h2>` in document order on every page checked, that
    # is luck, not a guarantee -- `hornyfans.py` shipped the bare-xpath
    # version of this exact bug when the order ran the other way.
    headings = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' block-model ')]"
        "/preceding-sibling::div[contains(concat(' ', normalize-space(@class), ' '), ' headline ')][1]"
        "//h2"
    )
    display_name = headings[0].text_content().strip() if headings else handle

    descriptions = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' desc ')]"
    )
    bio = descriptions[0].text_content().strip() if descriptions else ""
    if bio.lower() == _NO_BIO_PLACEHOLDER:
        bio = ""

    # Only a link to onlyfans.com itself counts -- the "Also known as:" list
    # in the same block mixes in non-OnlyFans handles, and this repo's rule
    # is that `of_username` is a confirmed fact, never a scraped guess. See
    # the module docstring.
    of_match = _OF_LINK_RE.search(page)
    of_username = (
        of_match.group(1).rsplit("/", 1)[-1] if of_match else None
    )

    if not avatar and not bio and not of_username:
        return None

    return DirectAccount(
        site=key,
        handle=handle,
        display_name=display_name or handle,
        page_url=f"{base_url}/models/{handle}/",
        avatar=avatar,
        bio=bio or None,
        of_username=of_username,
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

        videos.append(
            DirectVideo(
                site=key,
                video_id=video_id,
                title=(link.get("title") or link.text_content()).strip() or "Untitled",
                page_url=urljoin(base_url + "/", href),
                thumbnail=_image_src(link, base_url),
                duration=parse_duration(_first_text(link, "duration")),
                views=parse_count(_first_text(link, "views")),
                hd=bool(link.xpath(".//*[contains(@class,'is-hd')]")),
                posted_at=_first_text(link, "added") or None,
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
