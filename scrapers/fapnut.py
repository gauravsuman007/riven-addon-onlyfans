"""fapnut.net -- a WordPress "retrotube"-themed archive, post-per-item.

Also answers to **slutvids.net**: that domain's own responses carry this
site's meta description verbatim ("Watch Onlyfans Leaked Porn Videos for
free in HD on Slutvids") and a bare request to it redirects straight here.
Treated as one site, same as this repo's other mirror call.

NOT KVS. Every video is its own WordPress post (``<slug>/``), and a
performer is a WordPress taxonomy term (``/actor/<term-slug>/``) whose
archive page is a filtered list of posts, not a profile with its own avatar
or bio -- this theme has none to show. **Measured: no post carries more
than one performer's worth of profile data, because there is no profile
data here at all**, only a title ("Video Actor: Elly Clutch") on the
taxonomy archive.

**The performer index this file walks is the Yoast XML sitemap, not the
site's own `/pornstars/` page.** That page -- what a human visitor would
call the model directory -- is actually a *video* grid pre-filtered to posts
tagged `onlyfans`-adjacent; it carries no dedicated performer cards, no
avatars, nothing enumerable beyond whichever actors happen to be credited on
its first few pages. `/actors-sitemap.xml` through `/actors-sitemap5.xml`
(1000 URLs each, ~4500 total, confirmed 2026-10-26) is the real, complete
enumeration -- Yoast generates one taxonomy-term sitemap per 1000 terms, and
every entry is a real `/actor/<slug>/` archive. `list_accounts` pages
through these files directly; `handle` is read off the URL and
`display_name` is derived from it (see `_display`) rather than fetched,
because fetching all ~4500 pages just to list them would turn an index walk
into thousands of requests for a figure `account_profile` already states
properly, on demand, per performer.

**The player is a WordPress plugin, "clean-tube-player", not a hand-rolled
embed.** A post's video block is an `<iframe>` to this site's own
`/wp-content/plugins/clean-tube-player/public/player-x.php?q=<base64>`; the
`q` parameter is plain base64 of a URL-encoded query string
(`post_id=...&type=video&tag=<url-encoded HTML>`), and the `tag` value *is*
the real `<video><source src="..." type="application/x-mpegURL"></video>`
markup, verbatim. **None of this needs the iframe actually requested** --
the base64 blob sits in the post's own page source, so `resolve` decodes it
locally and never fetches `player-x.php` at all.

**The `<source>` URL is a complete, single-quality HLS media playlist, not a
master.** Measured: fetching it directly returns `#EXTM3U` with
`#EXT-X-TARGETDURATION` and a flat list of `.ts` segments -- no
`#EXT-X-STREAM-INF`, no variants to choose between. `resolve` therefore
returns exactly one `DirectSource`, label "Source", and states no resolution
-- nothing here ever names one. Verified end to end on the third-party CDN
it points at (`tulipvid.net`): the playlist itself and a sampled `.ts`
segment both answered with real bytes, `200`, **no Referer, no cookie, no
special header of any kind** -- a plain `requests.get` with only this
family's usual browser `User-Agent` worked at every hop.

**No galleries.** Nothing on this theme files images into an album; a
post's own thumbnail is the only image anywhere near a video, and
`account_galleries`/`gallery_images` stay at the base class's defaults.
"""

import base64
import re
from urllib.parse import parse_qs, urljoin

from loguru import logger
from lxml import html as lxml_html

from onlyfans_addon.scraper_api.base import (
    DirectAccount,
    DirectScraper,
    DirectSource,
    DirectVideo,
    parse_duration,
)


_ACTOR_HREF_RE = re.compile(r"^https://fapnut\.net/actor/([^/]+)/$")
_POST_HREF_RE = re.compile(r"^https://fapnut\.net/([^/]+)/$")
_RESERVED_SLUGS = {
    "actor",
    "actors",
    "category",
    "categories",
    "tags",
    "tag",
    "pornstars",
    "contact",
    "dmca",
    "privacy-policy",
    "terms-of-service",
    "page",
}
_PLAYER_Q_RE = re.compile(r"player-x\.php\?q=([A-Za-z0-9+/=]+)")
_SOURCE_RE = re.compile(r'<source\s+src="([^"]+)"\s+type="([^"]+)"')

_HLS_MIME = "application/x-mpegURL"
_SITEMAP_SUFFIXES = ("", "2", "3", "4", "5")


class FapnutScraper(DirectScraper):
    key = "fapnut"
    name = "Fapnut"
    base_url = "https://fapnut.net"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        response = self._get(f"{self.base_url}/", params={"s": query})
        return _videos(response.text, self.base_url, self.key, limit)

    def resolve(self, video_id: str) -> list[DirectSource]:
        """Decode the embedded player tag locally -- see the module
        docstring for why `player-x.php` itself is never requested.
        """

        try:
            page = self._get(f"{self.base_url}/{video_id}/").text
        except Exception as exc:
            logger.debug(f"{self.key}: no post page for {video_id}: {exc}")
            return []

        match = _PLAYER_Q_RE.search(page)
        if not match:
            logger.debug(f"{self.key}: no clean-tube-player block on {video_id}")
            return []

        try:
            padded = match.group(1) + "=" * (-len(match.group(1)) % 4)
            decoded = base64.b64decode(padded).decode("utf-8", "replace")
            tag_html = parse_qs(decoded).get("tag", [""])[0]
        except Exception as exc:
            logger.debug(f"{self.key}: player blob did not decode for {video_id}: {exc}")
            return []

        source_match = _SOURCE_RE.search(tag_html)
        if not source_match:
            logger.debug(f"{self.key}: no <source> in the decoded player tag for {video_id}")
            return []

        url, mime_type = source_match.groups()
        return [
            DirectSource(
                url=url,
                label="Source",
                mime_type=mime_type or _HLS_MIME,
                # Verified with no headers at all -- see the module docstring.
                headers={},
            )
        ]

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        """One Yoast taxonomy-sitemap file per page -- see the module
        docstring for why this, and not `/pornstars/`, is the real index.
        """

        index = max(page, 1) - 1
        if index >= len(_SITEMAP_SUFFIXES):
            return []

        suffix = _SITEMAP_SUFFIXES[index]
        try:
            response = self._get(f"{self.base_url}/actors-sitemap{suffix}.xml")
        except Exception as exc:
            logger.debug(f"{self.key}: no actors-sitemap{suffix}.xml: {exc}")
            return []

        accounts: list[DirectAccount] = []
        for url in re.findall(r"<loc>([^<]+)</loc>", response.text):
            match = _ACTOR_HREF_RE.match(url)
            if not match:
                continue
            handle = match.group(1)
            accounts.append(
                DirectAccount(
                    site=self.key,
                    handle=handle,
                    # No avatar, no name anywhere in the sitemap -- fetching
                    # all ~4500 pages just to list them would turn an index
                    # walk into thousands of requests. See `account_profile`.
                    display_name=_display(handle),
                    page_url=url,
                )
            )

        return accounts

    def account_profile(self, handle: str) -> DirectAccount | None:
        """The one real fact this theme states about a performer: their
        properly-cased name, off the archive page's own title.

        No avatar, no bio -- this theme has neither for a taxonomy term. A
        caller gets a nicer display name than `_display`'s slug-guess, which
        is the entire value of calling this.
        """

        try:
            response = self._get(f"{self.base_url}/actor/{handle}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no actor archive for {handle}: {exc}")
            return None

        match = re.search(r"Video Actor:\s*<span>([^<]+)</span>", response.text)
        if not match:
            return None

        return DirectAccount(
            site=self.key,
            handle=handle,
            display_name=match.group(1).strip() or _display(handle),
            page_url=f"{self.base_url}/actor/{handle}/",
        )

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        suffix = f"page/{page}/" if page and page > 1 else ""
        try:
            response = self._get(f"{self.base_url}/actor/{handle}/{suffix}")
        except Exception as exc:
            logger.debug(f"{self.key}: no actor archive page {page} for {handle}: {exc}")
            return []
        return _videos(response.text, self.base_url, self.key, limit=None)


def _display(handle: str) -> str:
    """A readable name from a theme that states none.

    Slugs here carry noise tokens the site appends for SEO
    ("-porn-videos", "-porns", "-vids", "-sex", "-amz", "-vip", "-xxx") that
    are not part of anyone's name -- stripped before title-casing so the
    guess is closer to right, though `account_profile`'s page title is the
    one actually trusted.
    """

    cleaned = re.sub(
        r"-(porn-videos|porn-video|porn-vids|porn-vid|porn-vip|porns|porn|videos|"
        r"video|vids|vid|vip|amz|sex|xxx)$",
        "",
        handle,
    )
    return " ".join(part.capitalize() for part in cleaned.split("-")) or handle


def _videos(page: str, base_url: str, key: str, limit: int | None) -> list[DirectVideo]:
    """Every video card ("thumb-block" article) in a grid, in document order."""

    tree = lxml_html.fromstring(page)
    videos: list[DirectVideo] = []
    seen: set[str] = set()

    for article in tree.xpath(
        "//article[contains(concat(' ', normalize-space(@class), ' '), ' thumb-block ')]"
    ):
        links = article.xpath(".//a[@href]")
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

        headers = article.xpath(".//header//text()")
        title = next((t.strip() for t in headers if t.strip()), "Untitled")

        images = article.xpath(".//img")
        thumbnail = (
            (images[0].get("data-lazy-src") or images[0].get("src")) if images else None
        )

        duration_el = article.xpath(
            ".//span[contains(concat(' ', normalize-space(@class), ' '), ' duration ')]"
        )
        duration = (
            parse_duration(duration_el[0].text_content().strip()) if duration_el else None
        )

        hd_el = article.xpath(
            ".//span[contains(concat(' ', normalize-space(@class), ' '), ' hd-video ')]"
        )
        hd = bool(hd_el)

        videos.append(
            DirectVideo(
                site=key,
                video_id=video_id,
                title=title,
                page_url=urljoin(base_url + "/", href),
                thumbnail=urljoin(base_url + "/", thumbnail) if thumbnail else None,
                duration=duration,
                hd=hd,
            )
        )
        if limit is not None and len(videos) >= limit:
            break

    return videos
