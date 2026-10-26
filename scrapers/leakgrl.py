"""leakgrl.com -- a Laravel/Tailwind archive, structured data for identity,
HLS media behind the same backend as hornyleak.tv.

NOT KVS. The listing pages (``/models``, ``/models/<slug>``, ``/search``) are
plain server-rendered Tailwind cards keyed on the href shape, same convention
as every other site in this repo. A performer's own page additionally
carries a ``Person`` ``<script type="application/ld+json">`` block (avatar,
name) and a video's own page carries a ``VideoObject`` block whose
``contentUrl`` is the whole scrape for `resolve` -- no markup parsing needed
there at all.

**The media backend is the same "BEpeak HLS Stream System" as
`hornyleak.py`**, just reached directly rather than through a third-party
iframe: `VideoObject.contentUrl` is a Laravel-signed URL
(``/s/p/<id>?expires=...&signature=...``) that answers with a real HLS master
playlist, one ``#EXT-X-STREAM-INF`` per quality (`RESOLUTION=WxH`, never
invented), each pointing at its own ``/s/v/<id>/<encrypted-blob>`` variant.
Verified end to end with a single stateless session and no special headers
at any hop: master playlist -> variant playlist -> a real `206`-shaped
MPEG-TS segment (`200 text/plain`, ~9.7MB, `0x47` sync byte). Reuses
`_hls_sources`/`_height` from `hornyleak.py` verbatim rather than importing
it -- see this repo's standing rule against sharing helpers between plugin
files.

**No galleries anywhere measured.** Every performer page checked carries
only a video `ItemList`; no `/photos/`, no `ImageObject`, no tab for one.
The sidebar's "spicy photos" phrase is the site's own generic marketing
blurb (verified byte-identical across different performers, including one
with zero videos) and is not read as a bio.

**Small, young deployment -- expect many performers with zero items.**
`abarbie55`'s own `og:description` states "Watch 0 leaked videos" outright;
`list_accounts` still returns the handle, same as every other site here
when a profile exists but nothing has been posted to it yet.
"""

import json
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
    resolution_from_dimensions,
)


_VIDEO_HREF_RE = re.compile(r"^/videos/([^/?#]+)/?$")
_MODEL_HREF_RE = re.compile(r"^/models/([^/?#]+)/?$")
_VARIANT_RE = re.compile(
    r"#EXT-X-STREAM-INF:[^\n]*RESOLUTION=(\d+x\d+)[^\n]*\n(https://\S+)"
)
_HLS_MIME = "application/vnd.apple.mpegurl"


class LeakGrlScraper(DirectScraper):
    key = "leakgrl"
    name = "LeakGrl"
    base_url = "https://leakgrl.com"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        response = self._get(f"{self.base_url}/search", params={"q": query})
        return _videos(response.text, self.base_url, self.key, limit)

    def resolve(self, video_id: str) -> list[DirectSource]:
        """`VideoObject.contentUrl` is the whole scrape; everything after
        that is the same HLS chase as `hornyleak.py`'s resolver, against the
        same underlying player system -- see the module docstring.
        """

        try:
            page = self._get(f"{self.base_url}/videos/{video_id}").text
        except Exception as exc:
            logger.debug(f"{self.key}: no video page for {video_id}: {exc}")
            return []

        content_url = _video_object(page).get("contentUrl")
        if not content_url:
            logger.debug(f"{self.key}: no contentUrl in VideoObject for {video_id}")
            return []

        try:
            master = self._get(content_url).text
        except Exception as exc:
            logger.debug(f"{self.key}: master playlist unreachable for {video_id}: {exc}")
            return []

        return _hls_sources(master)

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        params = {"page": page} if page and page > 1 else {}
        response = self._get(f"{self.base_url}/models", params=params)
        return _accounts(response.text, self.base_url, self.key)

    def account_profile(self, handle: str) -> DirectAccount | None:
        try:
            response = self._get(f"{self.base_url}/models/{handle}")
        except Exception as exc:
            logger.debug(f"{self.key}: no profile page for {handle}: {exc}")
            return None

        person = _ld_json(response.text, "Person")
        if not person or not person.get("image"):
            return None

        return DirectAccount(
            site=self.key,
            handle=handle,
            display_name=person.get("name") or handle,
            page_url=person.get("url") or f"{self.base_url}/models/{handle}",
            avatar=person["image"],
        )

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        params = {"page": page} if page and page > 1 else {}
        response = self._get(f"{self.base_url}/models/{handle}", params=params)
        return _videos(response.text, self.base_url, self.key, limit=None)


def _ld_json(page: str, expect_type: str) -> dict | None:
    for raw in re.findall(
        r'<script type="application/ld\+json"[^>]*>(.*?)</script>', page, re.DOTALL
    ):
        try:
            data = json.loads(raw)
        except (ValueError, TypeError):
            continue
        if isinstance(data, dict) and data.get("@type") == expect_type:
            return data
    return None


def _video_object(page: str) -> dict:
    return _ld_json(page, "VideoObject") or {}


def _accounts(page: str, base_url: str, key: str) -> list[DirectAccount]:
    """Every performer card in a `/models` listing page."""

    tree = lxml_html.fromstring(page)
    accounts: list[DirectAccount] = []
    seen: set[str] = set()

    for link in tree.xpath("//a[@href]"):
        href = link.get("href") or ""
        match = _MODEL_HREF_RE.match(href)
        if not match:
            continue
        handle = match.group(1)
        if handle in seen:
            continue

        card = link.xpath(
            "ancestor::*[contains(concat(' ', normalize-space(@class), ' '), ' flex-col ')][1]"
        )
        scope = card[0] if card else link

        images = link.xpath(".//img") or scope.xpath(".//img")
        avatar = images[0].get("src") if images else None
        if not avatar:
            # The nav/footer link elsewhere to the same handle; a real card
            # always has its own thumbnail.
            continue
        seen.add(handle)

        names = scope.xpath(".//h3//text()")
        display_name = next((t.strip() for t in names if t.strip()), handle)

        counts = scope.xpath(".//p//text()")
        video_count = next(
            (parse_count(t) for t in counts if "video" in t.lower()), None
        )

        accounts.append(
            DirectAccount(
                site=key,
                handle=handle,
                display_name=display_name,
                page_url=urljoin(base_url + "/", href),
                avatar=urljoin(base_url + "/", avatar),
                video_count=video_count,
            )
        )

    return accounts


def _videos(page: str, base_url: str, key: str, limit: int | None) -> list[DirectVideo]:
    """Every video card ("card-wrap") in a grid, in document order."""

    tree = lxml_html.fromstring(page)
    videos: list[DirectVideo] = []
    seen: set[str] = set()

    for link in tree.xpath(
        "//a[contains(concat(' ', normalize-space(@class), ' '), ' card-wrap ')]"
    ):
        href = link.get("href") or ""
        match = _VIDEO_HREF_RE.match(href)
        if not match:
            continue
        video_id = match.group(1)
        if video_id in seen:
            continue
        seen.add(video_id)

        images = link.xpath(".//img")
        thumbnail = images[0].get("src") if images else None

        title_el = link.xpath(
            ".//div[contains(concat(' ', normalize-space(@class), ' '), ' card-title ')]"
        )
        title = title_el[0].text_content().strip() if title_el else "Untitled"

        duration_el = link.xpath(
            ".//span[contains(concat(' ', normalize-space(@class), ' '), ' dur ')]"
        )
        duration = parse_duration(duration_el[0].text_content().strip()) if duration_el else None

        # An "HD" badge is a claim, never a resolution -- see the base
        # contract. No deployment measured here states a figure anywhere.
        quality_el = link.xpath(
            ".//span[contains(concat(' ', normalize-space(@class), ' '), ' quality ')]"
        )
        hd = bool(quality_el and quality_el[0].text_content().strip().upper() == "HD")

        views_el = link.xpath(".//span[@title='Views']")
        views = parse_count(views_el[0].text_content().strip()) if views_el else None

        meta_spans = link.xpath(
            ".//div[contains(concat(' ', normalize-space(@class), ' '), ' card-meta-row ')]"
            "/span[not(@class) and not(@title) and not(@role)]"
        )
        posted_at = meta_spans[-1].text_content().strip() if meta_spans else None

        videos.append(
            DirectVideo(
                site=key,
                video_id=video_id,
                title=title,
                page_url=urljoin(base_url + "/", href),
                thumbnail=urljoin(base_url + "/", thumbnail) if thumbnail else None,
                duration=duration,
                hd=hd,
                views=views,
                posted_at=posted_at,
            )
        )
        if limit is not None and len(videos) >= limit:
            break

    return videos


def _hls_sources(master: str) -> list[DirectSource]:
    """Every quality variant an HLS master playlist actually states.

    Identical logic to `hornyleak.py`'s helper of the same name -- both sites
    front the same backend player system, but this repo's standing rule is to
    duplicate rather than share, so each copy can diverge safely if one
    deployment's shape changes.
    """

    sources = [
        DirectSource(
            url=url,
            label=_label(dimensions),
            resolution=_label(dimensions),
            mime_type=_HLS_MIME,
            headers={},
        )
        for dimensions, url in _VARIANT_RE.findall(master)
    ]
    sources.sort(key=lambda s: _height(s.resolution), reverse=True)
    if not sources:
        logger.debug("leakgrl: master playlist stated no variants")
    return sources


def _label(dimensions: str) -> str | None:
    return resolution_from_dimensions(dimensions)


def _height(resolution: str | None) -> int:
    if not resolution:
        return 0
    match = re.match(r"(\d+)p", resolution)
    return int(match.group(1)) if match else 0
