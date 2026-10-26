"""gotanynudes.com -- a WordPress (Bimber theme) archive, post-per-item,
with a real A-Z performer directory ("MAZ" models addon).

NOT KVS. Every item is its own WordPress post -- video and photo posts
interleaved under the same `/tag/<performer-slug>/` archive, the shape this
repo calls post-per-item (`fapello.py`, `leakgallery.py`).

**The real performer index is `/models/<letter>/`, not `/models/` itself.**
The bare `/models/` page only ever renders a "Most posted" top-N plus an
A-Z letter nav (`.maz-alpha-filter`) -- the full roster lives one click
behind each letter, verified: `/models/a/` alone carries 48 real
`.maz-model` cards (avatar, display name, "N posts"), each linking to that
performer's `/tag/<slug>/` archive. `list_accounts`'s `page` therefore
indexes letters A-Z (1=A ... 26=Z), not a conventional small page -- every
other site in this repo hands back a few dozen accounts per page and this
one hands back everything starting with one letter, which is still a
finite, enumerable walk the caller stops the same way (an empty 27th page).

**A post's own `VideoObject` ld+json is the entire scrape for `resolve`.**
Every video post carries a schema.org `@graph` with a `VideoObject` node
whose `contentUrl` is a direct, unsigned URL on this site's own CDN
subdomain (`ares.gotanynudes.com`) -- same `json.loads`-only approach as
`leakgallery.py`/`amateurdoporn.py`. Verified: `206 video/mp4` to a bare
`requests.get`, **but only with a browser User-Agent** -- the one header
this family's `BROWSER_HEADERS` always sends anyway; a request with no
User-Agent at all got `403`. No Referer needed.

**`account_videos` does not pre-classify photo posts out of the feed.**
The tag archive interleaves video and photo-set posts with no marker on the
card itself (no play-icon badge, no duration -- this theme's grid shows
neither), only the post's own title ever hints at which it is ("...Onlyfans
Video" vs "...Onlyfans Photos"), and that is prose, not structured data.
Rather than guess from wording, every card is listed here the same way
`thothub.py` lists a KVS "Private/Premium" card with no player block: it
shows up, and a photo-only post's `resolve()` comes back `[]` for free,
logged at debug, never raised. Honest under the base contract -- an empty
resolve is not a failure, it is what the post actually is.

**Editorial roundups are tagged onto every performer and must be filtered
out.** This theme runs a "Monthly Insights" / "Tournament Career Profile"
series (`category-insights`) that gets cross-tagged with a dozen+ performer
tags at once purely for internal cross-linking -- it is not that
performer's content and never resolves to a `VideoObject`. `_videos` drops
any card carrying `category-insights` rather than listing a dead card that
would resolve to nothing on every single performer's feed.

**The response declares the wrong charset.** `requests` reads
`ISO-8859-1` off a header this server sends, while the bytes are actually
UTF-8 (`apparent_encoding` agrees, and a raw em dash in a title confirms it
visually: `â€”` is the UTF-8-as-Latin-1 mangling of `—`). `_get_text`
re-decodes every response as UTF-8 before any string in this file touches
it, rather than trusting `response.text`.

**No `account_images`/`account_galleries` this pass.** The full-size image
behind a photo post is not on the tag archive's card (only a lazy-loaded
grid crop is), so building a real image feed would mean opening every post
individually during the index walk -- a cost this file does not pay. Left
at the base class's defaults rather than shipping an images tab backed by
downscaled thumbnails.

**No stated per-performer tally trusted.** A `.maz-model-meta` card states
"N posts", mixing video and photo posts together with no way to split them
-- same situation `fapello.py`'s module docstring describes for its own
combined tally -- so neither `video_count` nor `image_count` is populated
rather than mislabel the combined figure as one or the other.
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
)


_LETTERS = "abcdefghijklmnopqrstuvwxyz"
_TAG_HREF_RE = re.compile(r"^/tag/([^/?#]+)/$")
_POST_HREF_RE = re.compile(r"^https://gotanynudes\.com/([^/?#]+)/$")
_RESERVED_SLUGS = {
    "models",
    "categories-wiv-1",
    "community",
    "copyright",
    "exchange",
    "hub",
    "leaks",
    "feed",
    "about",
    "tag",
}


class GotAnyNudesScraper(DirectScraper):
    key = "gotanynudes"
    name = "GotAnyNudes"
    base_url = "https://gotanynudes.com"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        response = self._get(f"{self.base_url}/", params={"s": query})
        return _videos(_get_text(response), self.base_url, self.key, limit)

    def resolve(self, video_id: str) -> list[DirectSource]:
        try:
            page = _get_text(self._get(f"{self.base_url}/{video_id}/"))
        except Exception as exc:
            logger.debug(f"{self.key}: no post page for {video_id}: {exc}")
            return []

        url = _video_object(page).get("contentUrl")
        if not url:
            # A photo-only post has none -- see the module docstring. Not a
            # parsing failure, just what this post is.
            logger.debug(f"{self.key}: no VideoObject.contentUrl on {video_id}")
            return []

        return [
            DirectSource(
                url=url,
                label="Source",
                # Verified 206 video/mp4 with this family's usual browser
                # User-Agent and no other header -- see the module docstring.
                headers={},
            )
        ]

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        """One letter of the A-Z directory per page -- see the module
        docstring for why `page` means a letter here, not a conventional
        small page.
        """

        index = max(page, 1) - 1
        if index >= len(_LETTERS):
            return []

        letter = _LETTERS[index]
        try:
            response = self._get(f"{self.base_url}/models/{letter}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no /models/{letter}/: {exc}")
            return []

        return _accounts(_get_text(response), self.base_url, self.key)

    def account_profile(self, handle: str) -> DirectAccount | None:
        # Avatar and display name are already on the `/models/<letter>/`
        # card; this theme has no separate, richer profile page to fetch.
        return None

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        suffix = f"page/{page}/" if page and page > 1 else ""
        try:
            response = self._get(f"{self.base_url}/tag/{handle}/{suffix}")
        except Exception as exc:
            logger.debug(f"{self.key}: no tag archive page {page} for {handle}: {exc}")
            return []
        return _videos(_get_text(response), self.base_url, self.key, limit=None)


def _get_text(response) -> str:
    """This deployment's bytes, decoded correctly -- see the module
    docstring. `response.text` trusts a charset header that is wrong here.
    """

    return response.content.decode("utf-8", errors="replace")


def _video_object(page: str) -> dict:
    for raw in re.findall(
        r'<script type="application/ld\+json"[^>]*>(.*?)</script>', page, re.DOTALL
    ):
        try:
            data = json.loads(raw)
        except (ValueError, TypeError):
            continue
        if not isinstance(data, dict):
            continue
        if data.get("@type") == "VideoObject":
            return data
        for node in data.get("@graph", []) or []:
            if isinstance(node, dict) and node.get("@type") == "VideoObject":
                return node
    return {}


def _accounts(page: str, base_url: str, key: str) -> list[DirectAccount]:
    """Every performer card ("maz-model") on one `/models/<letter>/` page."""

    tree = lxml_html.fromstring(page)
    accounts: list[DirectAccount] = []
    seen: set[str] = set()

    for link in tree.xpath(
        "//a[contains(concat(' ', normalize-space(@class), ' '), ' maz-model ')]"
    ):
        href = link.get("href") or ""
        match = _TAG_HREF_RE.match(href)
        if not match:
            continue
        handle = match.group(1)
        if handle in seen:
            continue
        seen.add(handle)

        images = link.xpath(".//img")
        avatar = images[0].get("src") if images else None

        names = link.xpath(
            ".//div[contains(concat(' ', normalize-space(@class), ' '), ' maz-model-name ')]"
            "//text()"
        )
        display_name = next((t.strip() for t in names if t.strip()), handle)

        accounts.append(
            DirectAccount(
                site=key,
                handle=handle,
                display_name=display_name,
                page_url=urljoin(base_url + "/", href),
                avatar=urljoin(base_url + "/", avatar) if avatar else None,
            )
        )

    return accounts


def _videos(page: str, base_url: str, key: str, limit: int | None) -> list[DirectVideo]:
    """Every post card ("entry-tpl-grid") in a Bimber-theme grid, in order.

    Video and photo-set posts are not distinguished here -- see the module
    docstring. A photo-only post simply resolves to no sources later.
    """

    tree = lxml_html.fromstring(page)
    videos: list[DirectVideo] = []
    seen: set[str] = set()

    for heading in tree.xpath(
        "//h3[contains(concat(' ', normalize-space(@class), ' '), ' entry-title ')]"
    ):
        links = heading.xpath(".//a[@href]")
        if not links:
            continue
        href = links[0].get("href") or ""
        match = _POST_HREF_RE.match(href)
        if not match or match.group(1) in _RESERVED_SLUGS:
            continue
        video_id = match.group(1)
        if video_id in seen:
            continue
        seen.add(video_id)

        title = links[0].text_content().strip() or "Untitled"

        article = heading.xpath(
            "ancestor::article[contains(concat(' ', normalize-space(@class), ' '), "
            "' entry-tpl-grid ')][1]"
        )
        if article and "category-insights" in (article[0].get("class") or ""):
            # A cross-tagged editorial roundup, not this performer's content
            # -- see the module docstring. Never resolves to anything.
            continue

        thumbnail = None
        posted_at = None
        if article:
            images = article[0].xpath(".//img")
            if images:
                thumbnail = images[0].get("data-lazy-src") or images[0].get("src")
            dates = article[0].xpath(
                ".//time[contains(concat(' ', normalize-space(@class), ' '), "
                "' entry-date ')]/@datetime"
            )
            posted_at = dates[0] if dates else None

        videos.append(
            DirectVideo(
                site=key,
                video_id=video_id,
                title=title,
                page_url=urljoin(base_url + "/", href),
                thumbnail=urljoin(base_url + "/", thumbnail) if thumbnail else None,
                posted_at=posted_at,
            )
        )
        if limit is not None and len(videos) >= limit:
            break

    return videos
