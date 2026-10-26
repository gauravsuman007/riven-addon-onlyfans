"""leakgallery.com -- a post-per-item OnlyFans archive, structured data only.

NOT KVS, and not the fapello shape either. This is an Angular SPA with
server-side rendering, and every page that matters here -- the index and
every performer's own page -- carries a complete
``<script type="application/ld+json">`` block with everything this file
needs: schema.org ``CollectionPage``/``ItemList`` for a listing page and
``ProfilePage``/``Person`` with a ``hasPart`` array of ``ImageObject``/
``VideoObject`` for a performer's page. No HTML parsing, no card classes, no
href regexes -- `json.loads` on one `<script>` tag is the entire scrape.
Verified with plain `requests` (the family's usual browser UA, no TLS
impersonation, no cookies): the index, a profile page and a CDN media URL all
answered normally. The site also runs DDoS-Guard (visible as
``/.well-known/ddos-guard/...`` calls from a real browser), but nothing
observed here tripped it -- these particular GETs were never challenged.

**The browsable index is ``/new-models``, not ``/models``.** The home page
links several rails (Top Models by Search, Trending, Recommended) but the one
that is actually a plain enumerable list, newest performer first, is
"Latest models added" at ``/new-models`` and ``/new-models/<n>``. Verified to
scale: page 500 still returned 40 real performers, and the list only goes
empty (200, zero items) somewhere before page 5000 -- tens of thousands of
accounts, not a token gesture of a few dozen.

**A profile's ``hasPart`` is the newest ~40 items, not the whole catalogue.**
sophieraiin's own page states "54197 pieces of content available" in its
`description` while `hasPart` carries 40. A "Load more" button exists in the
real page, but it never produced an inspectable request in a real browser
session with the network panel open -- no new XHR, no query-string reload,
nothing a plain scraper can replay. `account_videos`/`account_images`
therefore only ever return this first page; asking for `page > 1` returns
`[]` rather than guessing at an endpoint that was never observed. This is
honest under the base contract (the caller stops on an empty page) and far
better than fabricating a second page that silently repeats the first.

**Every content item is its own post** -- images and video interleaved in one
reverse-chronological list per performer, no albums -- so this is the
fapello-shaped family (`account_images`, not `account_galleries`).

**Content URLs are plain and durable.** `contentUrl` carries no signature, no
expiring token and no Referer check in testing -- a bare GET returns the
bytes, so `resolve` re-fetches the performer's page and matches the id back
to its `contentUrl` rather than trusting a cached link, the same caution
`fapello.py` applies even though nothing here was observed to expire.

**Every image is watermarked with the site's own branding.** Fetched and
visually inspected: a real photo (1242x2208, real bytes) with "LEAKGALLERY.COM"
stamped across the middle. This is the site's own policy, not a scraping gap
-- there is no clean version to ask for instead. Recorded here so nobody
reports it as a bug later.

**No stated resolution, no split video/photo counts.** The only tally the
site gives is one combined "N pieces of content available" sentence mixing
photos and video, so `DirectAccount.video_count`/`image_count` stay `None`
rather than mislabel that total as one or the other, or report the 40-item
sample as if it were the site's own count.

**`search` is a best-effort direct-handle guess, same reasoning as
`fapello.py`.** The site's own search (`/search`) renders nothing in its
server response -- it is client-side JS over data the server never sent this
scraper -- so there is nothing here to parse. Handles on this site are bare
collapsed strings with no separators (`sophieraiin`, not `sophie-raiin`), so
the query is collapsed to alphanumerics only and tried directly as a handle.
"""

import json
import re

from loguru import logger

from onlyfans_addon.scraper_api.base import (
    DirectAccount,
    DirectImage,
    DirectScraper,
    DirectSource,
    DirectVideo,
)


_LD_JSON_RE = re.compile(r'application/ld\+json">(.*?)</script>', re.DOTALL)
_SLUG_RE = re.compile(r"[^a-z0-9]+")


class LeakGalleryScraper(DirectScraper):
    key = "leakgallery"
    name = "LeakGallery"
    base_url = "https://leakgallery.com"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        slug = _SLUG_RE.sub("", query.strip().lower())
        if not slug:
            return []
        videos = self.account_videos(slug, 1)
        return videos[:limit] if limit else videos

    def resolve(self, video_id: str) -> list[DirectSource]:
        handle, _, identifier = video_id.partition(":")
        if not handle or not identifier:
            logger.debug(f"{self.key}: {video_id!r} is not a <handle>:<id> id")
            return []

        item = _find_part(self._profile_data(handle), identifier, "VideoObject")
        if not item:
            logger.debug(f"{self.key}: no video {identifier} on {handle}'s page")
            return []

        url = item.get("contentUrl")
        if not url:
            return []

        return [
            DirectSource(
                url=url,
                label="Source",
                # Verified to serve to a bare request -- see the module
                # docstring. No Referer sent: nothing here was observed to
                # need one, and fapello.py makes the same call for the same
                # reason.
                headers={},
            )
        ]

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        suffix = f"/{page}" if page and page > 1 else ""
        response = self._get(f"{self.base_url}/new-models{suffix}")
        data = _ld_json(response.text)
        if not data:
            return []

        items = _collection_items(data)
        return [
            DirectAccount(
                site=self.key,
                handle=item["name"],
                display_name=item["name"],
                page_url=item.get("url") or f"{self.base_url}/{item['name']}",
                avatar=item.get("image"),
            )
            for item in items
            if item.get("name")
        ]

    def account_profile(self, handle: str) -> DirectAccount | None:
        data = self._profile_data(handle)
        if not data:
            return None

        person = data.get("mainEntity") or {}
        name = person.get("name") or handle
        avatar = (person.get("image") or {}).get("contentUrl")

        if not avatar and not person:
            return None

        return DirectAccount(
            site=self.key,
            handle=handle,
            display_name=name,
            page_url=f"{self.base_url}/{handle}",
            avatar=avatar,
            # The site states one combined total mixing photos and video --
            # see the module docstring -- so neither count is split out here.
        )

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        if page and page > 1:
            # No second page was ever observed to be reachable -- see the
            # module docstring. Stopping here is the honest answer, not a
            # guess at an endpoint that was never confirmed to exist.
            return []

        parts = (self._profile_data(handle) or {}).get("hasPart", [])
        return [
            DirectVideo(
                site=self.key,
                video_id=f"{handle}:{item['identifier']}",
                title=item.get("name") or f"{handle} #{item['identifier']}",
                page_url=f"{self.base_url}/{handle}",
                thumbnail=item.get("thumbnailUrl"),
                posted_at=item.get("uploadDate"),
            )
            for item in parts
            if item.get("@type") == "VideoObject" and item.get("identifier")
        ]

    def account_images(self, handle: str, page: int = 1) -> list[DirectImage]:
        if page and page > 1:
            return []

        parts = (self._profile_data(handle) or {}).get("hasPart", [])
        return [
            DirectImage(
                image_id=f"{handle}:{item['identifier']}",
                url=item["contentUrl"],
                thumbnail=item.get("thumbnailUrl"),
                posted_at=item.get("uploadDate"),
                # Verified to serve without one -- see the module docstring.
                headers={},
            )
            for item in parts
            if item.get("@type") == "ImageObject"
            and item.get("identifier")
            and item.get("contentUrl")
        ]

    def _profile_data(self, handle: str) -> dict | None:
        try:
            response = self._get(f"{self.base_url}/{handle}")
        except Exception as exc:
            logger.debug(f"{self.key}: no profile page for {handle}: {exc}")
            return None
        return _ld_json(response.text)


def _ld_json(page: str) -> dict | None:
    """The page's own structured-data block, parsed.

    Every page this file reads -- the index and a performer's page -- carries
    exactly one of these, and it is the entire scrape: no markup to select,
    no class name to key on, just `json.loads`.
    """

    match = _LD_JSON_RE.search(page)
    if not match:
        return None
    try:
        return json.loads(match.group(1))
    except (json.JSONDecodeError, ValueError):
        return None


def _collection_items(data: dict) -> list[dict]:
    """Every performer in a ``/new-models`` listing's structured data.

    The listing wraps its items in a `CollectionPage` node inside `@graph`
    alongside an unrelated `BreadcrumbList` node -- both share the file, so
    the right one has to be picked out by type rather than assumed to be the
    whole document.
    """

    for node in data.get("@graph", []):
        if node.get("@type") == "CollectionPage":
            main = node.get("mainEntity") or {}
            return main.get("itemListElement") or []
    return []


def _find_part(data: dict | None, identifier: str, expect_type: str) -> dict | None:
    if not data:
        return None
    for item in data.get("hasPart", []):
        if item.get("@type") == expect_type and str(item.get("identifier")) == identifier:
            return item
    return None
