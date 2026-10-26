"""nsfw247.to -- a post-per-item OnlyFans archive, directory via a WordPress
listing plugin.

NOT KVS. Every item is its own WordPress post at a bare top-level slug
(``/<slug>/``, no ``/models/`` prefix) -- same post-per-item shape as
`fapello.py` and `leakgallery.py`, but with neither of those sites' tricks:
no ajax paging endpoint that actually matters (below) and no ld+json
``contentUrl``. A post's playable URL is a plain ``<source>`` tag.

**The drifted domain from the first pass's rejection is a different site.**
`nsfw247.com` (first pass) stayed `403` under `curl_cffi` Chrome
impersonation on every index path and was rejected; `nsfw247.to`, the
domain theporndude's current listing actually gives, answers normally with
plain `requests` and the family's usual browser UA -- no TLS fingerprint
gate observed here at all, on either the pages or the media host.

**The performer directory is `/models/`, built from the "Content Views
Pro" WordPress plugin (`pt-cv-*` classes), paginated `/models/pages/<n>/`
(confirmed real through page 162, ~4,000 performers).** A card's handle is
the `/models/<handle>/` href; its avatar is the plugin's own lazy-load
attribute, `data-cvpsrc`, not the `src` placeholder image every card
carries identically (`lazy_image.png`) before JS swaps it in.

**A performer's own page already carries every post it has, server-rendered,
with no further paging that matters.** The "Latest posts" block below the
name is a different, home-grown theme widget (`id="mip-ajax-block-..."`,
``data-tag="<handle>-xxx"``) that *does* have a real ajax endpoint
(`POST /wp-admin/admin-ajax.php`, `action=miptheme_ajax_blocks`, the
block's own `data-*` attributes echoed back, no nonce) -- but the block
itself already requests `data-count="999"` on the page it renders
server-side, and every performer checked (4 to 22 posts) came back whole in
that one response. `data-max-pages` on the container is theme boilerplate
left over from the plugin's generic pagination controls, which this
template never renders a "next" button for; calling the endpoint with
`data_index` beyond what the page itself loaded returned `200` with a
**zero-byte body**, not more posts. `account_videos` therefore reads the
page itself for page 1 (already complete, newest first by the template's
own `data-sort="date"`) and returns `[]` for `page > 1` -- not an early
stop, because page 1 already was the whole feed on every account measured.
This matches [docs/recommendations.md]'s own use of this data: the ranking
pass only ever samples a performer's *first* page.

**Verified end to end:** a post's `<source src="...">` points at a
different domain (`nsfwclips.co`) and served `206 video/mp4` to a bare
`requests.get`, Range header only -- no Referer, no cookie, same as
`fapello.py`'s CDN. One post out of several checked had a broken link (a
literal `:` in the stored filename where a `/` was clearly intended,
`...2024%3A11.mp4` on a title reading "car sex 2024/11") and 404s --
left as `resolve` returning nothing for that id rather than guessed around,
since this is the site's own data entry error, not a gate.

**No ld+json `contentUrl` and no duration/view count exposed anywhere** --
checked both the grid card and the post's own `VideoObject` block, which
carries only `name`/`description`/`thumbnailUrl`/`uploadDate`/`keywords`.
`duration` and `views` stay `None`; nothing on this deployment states them.

**No galleries, no loose images.** Every post checked across several
performers was a single video; the theme has no separate photo route.
`account_images`/`account_galleries` stay at the base class's defaults.

**`search` is a best-effort direct-handle guess**, same reasoning as
`fapello.py`/`leakgallery.py`: the site's native `/?s=` search answers
videos by title match, not performers, so the query is slugified and tried
directly as a `/models/<slug>/` handle.
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
)


_MODEL_HREF_RE = re.compile(r"^https://nsfw247\.to/models/([a-z0-9\-]+)/$")
_POST_HREF_RE = re.compile(r"^https://nsfw247\.to/([a-z0-9\-]+)/$")
_RESERVED_SLUGS = {
    "models",
    "category",
    "feed",
    "contact",
    "chat",
    "privacy-policy",
    "terms-of-service",
    "popular-day",
    "popular-week",
    "popular-year",
    "top-models",
    "18-usc-2257",
}
#: `<source src="...">` is read directly rather than through ld+json -- see
#: the module docstring, this deployment's VideoObject block states no
#: contentUrl at all.
_SOURCE_RE = re.compile(r'<source\s+src="([^"]+)"', re.IGNORECASE)


class Nsfw247Scraper(DirectScraper):
    key = "nsfw247"
    name = "NSFW247"
    base_url = "https://nsfw247.to"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        slug = _slugify(query)
        if not slug:
            return []
        videos = self.account_videos(slug, 1)
        return videos[:limit] if limit else videos

    def resolve(self, video_id: str) -> list[DirectSource]:
        try:
            response = self._get(f"{self.base_url}/{video_id}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no post page for {video_id}: {exc}")
            return []

        match = _SOURCE_RE.search(response.text)
        if not match:
            logger.debug(f"{self.key}: no <source> tag on post {video_id}")
            return []

        return [
            DirectSource(
                url=match.group(1),
                label="Source",
                # Verified with no headers at all -- see the module docstring.
                headers={},
            )
        ]

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        suffix = f"pages/{page}/" if page and page > 1 else ""
        response = self._get(f"{self.base_url}/models/{suffix}")
        return _accounts(response.text, self.base_url, self.key)

    def account_profile(self, handle: str) -> DirectAccount | None:
        # Nothing on this site's own model page states a bio or a better
        # avatar than the directory card already carries.
        return None

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        # Page 1 is the whole feed on every account measured -- see the
        # module docstring. A caller walking pages gets a clean, honest stop.
        if page and page > 1:
            return []

        try:
            response = self._get(f"{self.base_url}/models/{handle}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no model page for {handle}: {exc}")
            return []

        return _videos(response.text, self.base_url, self.key)


def _slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", (text or "").lower()).strip("-")


def _accounts(page: str, base_url: str, key: str) -> list[DirectAccount]:
    """Every performer card in a `/models/` Content-Views-Pro listing page."""

    tree = lxml_html.fromstring(page)
    accounts: list[DirectAccount] = []
    seen: set[str] = set()

    for link in tree.xpath(
        "//a[contains(concat(' ', normalize-space(@class), ' '), ' pt-cv-href-thumbnail ')]"
    ):
        href = link.get("href") or ""
        match = _MODEL_HREF_RE.match(href)
        if not match:
            continue
        handle = match.group(1)
        if handle in seen or handle in _RESERVED_SLUGS:
            continue
        seen.add(handle)

        images = link.xpath(".//img")
        # The plugin's placeholder `src` is swapped in by JS; the real image
        # is this lazy-load attribute. See the module docstring.
        avatar = images[0].get("data-cvpsrc") if images else None
        display_name = (images[0].get("alt") or "").strip() if images else ""

        accounts.append(
            DirectAccount(
                site=key,
                handle=handle,
                display_name=display_name or _display(handle),
                page_url=urljoin(base_url + "/", href),
                avatar=urljoin(base_url + "/", avatar) if avatar else None,
            )
        )

    return accounts


def _videos(page: str, base_url: str, key: str) -> list[DirectVideo]:
    """Every post card ("article.thumb") on a performer's own page."""

    tree = lxml_html.fromstring(page)
    videos: list[DirectVideo] = []
    seen: set[str] = set()

    for article in tree.xpath(
        "//article[contains(concat(' ', normalize-space(@class), ' '), ' thumb ')]"
    ):
        href = ""
        for link in article.xpath(".//a[@href]"):
            candidate = link.get("href") or ""
            if "/category/" in candidate:
                continue
            if _POST_HREF_RE.match(candidate):
                href = candidate
                break
        match = _POST_HREF_RE.match(href)
        if not match or match.group(1) in _RESERVED_SLUGS:
            continue
        video_id = match.group(1)
        if video_id in seen:
            continue
        seen.add(video_id)

        titles = article.xpath(".//h3//text()")
        title = next((t.strip() for t in titles if t.strip()), "Untitled")

        images = article.xpath(".//img")
        thumbnail = images[0].get("data-bttrlazyloading-md-src") if images else None

        published = article.xpath(
            ".//span[contains(concat(' ', normalize-space(@class), ' '), ' published ')]//text()"
        )
        posted_at = next((t.strip() for t in published if t.strip()), None)

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

    return videos


def _display(handle: str) -> str:
    return " ".join(part.capitalize() for part in handle.split("-"))
