"""amateurdoporn.com -- a WordPress (Divi) archive, post-per-item, with a
real performer directory.

NOT KVS. Every video is its own WordPress post; a performer is both a
WordPress "actor" taxonomy term AND has its own dedicated directory card at
``/models/`` -- unlike `fapnut.py`'s sibling-shaped theme, this deployment
actually ships avatars and tallies on the index itself (``actor-card``:
avatar, name, "N videos  •  N views"), so `list_accounts` is a normal cheap
per-page call rather than a sitemap walk.

**A post's video is a plain `<video><source>` HLS tag, no plugin, no
base64.** Unlike `fapnut.py`'s `clean-tube-player` iframe, this theme
(`fluidplayer`, Divi's `et_pb_code` module) renders the player markup
directly into the post, and the post also carries a schema.org
``VideoObject`` `<script type="application/ld+json">` whose `contentUrl` is
the exact same URL -- `resolve` reads the ld+json rather than the HTML,
same reasoning as `leakgallery.py`: no markup to select, just `json.loads`.

**The `contentUrl` is a single-quality HLS media playlist, not a master.**
Measured: `#EXTM3U`/`#EXT-X-PLAYLIST-TYPE:VOD`/a flat list of `segment_NNN.ts`
entries, no `#EXT-X-STREAM-INF`. One `DirectSource`, label "Source", no
resolution stated anywhere on this deployment. Verified end to end on this
site's own CDN subdomain (`cdn.amateurdoporn.com`): `200
application/vnd.apple.mpegurl` for the playlist and `200 video/mp2t` for a
sampled segment, **no Referer, no cookie** -- a bare `requests.get` with only
this family's usual browser User-Agent.

**An on-page "age verification" overlay is cosmetic, not a gate.** The raw
response carries `#avp-overlay`/`.avp-locked` CSS that blurs the page behind
a client-side prompt -- a JS behaviour for a real browser. Every post, image
and video URL this file needs is already in the unblurred server response;
nothing here was ever blocked by it.

**No galleries.** Every performer and category checked is video-only; there
is no `/photos/` route and no `ImageObject` anywhere, so
`account_galleries`/`gallery_images` stay at the base class's defaults.

**Categories mix platforms** (Chaturbate, OnlyFans, Twitch sextapes all
appear as tags on the same performer) -- same shape as every other general
leak archive already shipped here (`fapello.py`, `leakgallery.py`); the
OnlyFans-specific identity check happens later, in `discover.py`, not in
this file.
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
)


_ACTOR_HREF_RE = re.compile(r"^https://www\.amateurdoporn\.com/actor/([^/]+)/$")
_POST_HREF_RE = re.compile(r"^https://www\.amateurdoporn\.com/([^/]+)/$")
_RESERVED_SLUGS = {"actor", "category", "models", "tag", "18-usc-2257", "page"}


class AmateurDoPornScraper(DirectScraper):
    key = "amateurdoporn"
    name = "AmateurDoPorn"
    base_url = "https://www.amateurdoporn.com"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        response = self._get(f"{self.base_url}/", params={"s": query})
        return _videos(response.text, self.base_url, self.key, limit)

    def resolve(self, video_id: str) -> list[DirectSource]:
        try:
            page = self._get(f"{self.base_url}/{video_id}/").text
        except Exception as exc:
            logger.debug(f"{self.key}: no post page for {video_id}: {exc}")
            return []

        url = _video_object(page).get("contentUrl")
        if not url:
            logger.debug(f"{self.key}: no VideoObject.contentUrl on {video_id}")
            return []

        return [
            DirectSource(
                url=url,
                label="Source",
                mime_type="application/vnd.apple.mpegurl",
                # Verified with no headers at all -- see the module docstring.
                headers={},
            )
        ]

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        suffix = f"page/{page}/" if page and page > 1 else ""
        response = self._get(f"{self.base_url}/models/{suffix}")
        return _accounts(response.text, self.base_url, self.key)

    def account_profile(self, handle: str) -> DirectAccount | None:
        # Found on the index card already; this theme has no separate bio
        # or higher-resolution avatar on the actor archive page itself.
        return None

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        suffix = f"page/{page}/" if page and page > 1 else ""
        try:
            response = self._get(f"{self.base_url}/actor/{handle}/{suffix}")
        except Exception as exc:
            logger.debug(f"{self.key}: no actor archive page {page} for {handle}: {exc}")
            return []
        return _videos(response.text, self.base_url, self.key, limit=None)


def _video_object(page: str) -> dict:
    for raw in re.findall(
        r'<script type="application/ld\+json"[^>]*>(.*?)</script>', page, re.DOTALL
    ):
        try:
            data = json.loads(raw)
        except (ValueError, TypeError):
            continue
        if isinstance(data, dict) and data.get("@type") == "VideoObject":
            return data
    return {}


def _accounts(page: str, base_url: str, key: str) -> list[DirectAccount]:
    """Every performer card ("actor-card") in a `/models/` listing page."""

    tree = lxml_html.fromstring(page)
    accounts: list[DirectAccount] = []
    seen: set[str] = set()

    for link in tree.xpath(
        "//a[contains(concat(' ', normalize-space(@class), ' '), ' actor-card ')]"
    ):
        href = link.get("href") or ""
        match = _ACTOR_HREF_RE.match(href)
        if not match:
            continue
        handle = match.group(1)
        if handle in seen:
            continue
        seen.add(handle)

        images = link.xpath(".//img")
        avatar = images[0].get("src") if images else None

        titles = link.xpath(
            ".//span[contains(concat(' ', normalize-space(@class), ' '), ' actor-card__title ')]"
            "//text()"
        )
        display_name = next((t.strip() for t in titles if t.strip()), handle)

        counts = link.xpath(
            ".//span[contains(concat(' ', normalize-space(@class), ' '), ' actor-card__count ')]"
            "//text()"
        )
        video_count = None
        for text in counts:
            if "video" in text.lower():
                video_count = parse_count(text)
                break

        accounts.append(
            DirectAccount(
                site=key,
                handle=handle,
                display_name=display_name,
                page_url=urljoin(base_url + "/", href),
                avatar=urljoin(base_url + "/", avatar) if avatar else None,
                video_count=video_count,
            )
        )

    return accounts


def _videos(page: str, base_url: str, key: str, limit: int | None) -> list[DirectVideo]:
    """Every post ("et_pb_post" article) in a Divi blog grid, in order."""

    tree = lxml_html.fromstring(page)
    videos: list[DirectVideo] = []
    seen: set[str] = set()

    for article in tree.xpath(
        "//article[contains(concat(' ', normalize-space(@class), ' '), ' et_pb_post ')]"
    ):
        heading_links = article.xpath(
            ".//h2[contains(concat(' ', normalize-space(@class), ' '), ' entry-title ')]/a[@href]"
        )
        if not heading_links:
            continue
        href = heading_links[0].get("href") or ""
        match = _POST_HREF_RE.match(href)
        if not match or match.group(1) in _RESERVED_SLUGS:
            continue
        video_id = match.group(1)
        if video_id in seen:
            continue
        seen.add(video_id)

        title = heading_links[0].text_content().strip() or "Untitled"

        images = article.xpath(".//img")
        thumbnail = images[0].get("src") if images else None

        duration_el = article.xpath(
            ".//span[contains(concat(' ', normalize-space(@class), ' '), "
            "' entry-video-duration ')]"
        )
        duration = (
            parse_duration(duration_el[0].text_content().strip()) if duration_el else None
        )

        views_el = article.xpath(
            ".//span[contains(concat(' ', normalize-space(@class), ' '), ' post_nb_views ')]"
        )
        views = parse_count(views_el[0].text_content().strip()) if views_el else None

        videos.append(
            DirectVideo(
                site=key,
                video_id=video_id,
                title=title,
                page_url=urljoin(base_url + "/", href),
                thumbnail=urljoin(base_url + "/", thumbnail) if thumbnail else None,
                duration=duration,
                views=views,
            )
        )
        if limit is not None and len(videos) >= limit:
            break

    return videos
