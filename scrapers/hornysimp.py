"""hornysimp.com -- a WordPress archive (the "MNG Tube" plugin), post-per-item,
with a real performer directory and video behind a third-party embed.

NOT KVS. Every video is its own WordPress post (`mng-video-card`); the
performer directory (`/models/`, `mng-directory-card`) states a real,
checkable per-performer count ("9 Videos") that matches the number of post
cards on that performer's `/model/<handle>/` page exactly on every account
sampled -- the directory is not decorative.

**Parked by the previous pass as an unopened lead; opened this pass.** A
post's own ``VideoObject.embedUrl`` points at a third-party host,
`hrnyvid.xyz`, running **LuluStream** (visible from its own
`devtools-detector.js` and `abouttext:"LuluStream"` player config) --
not this site's own code, a commodity video-hosting platform plenty of
tube sites embed. Its player page serves a classic Dean-Edwards-packer
script (`eval(function(p,a,c,k,e,d){...}(...))`), recognisable on sight by
the `split('|')` call next to a huge literal.

**The packer is a public, generic string-substitution algorithm, not this
site's secret** -- `_unpack` ports it directly into Python (radix-N token
replacement over whole-word boundaries) rather than running the site's own
code in a subprocess; there is no site-specific logic inside the packed
payload to reverse-engineer, only `jwplayer(...).setup({sources:[{file:
"<url>"}], ...})` once unpacked. Verified byte-exact against Node's own
`eval()` on a captured sample before being trusted.

**The embed link expires, independently of the post.** Two embed ids
pulled from older posts both answered "File is no longer available as it
expired or has been deleted." (still a clean `200 text/html`, never an
error) while ids from the current homepage feed were live -- `resolve`
returns `[]` on that text rather than treating the embed host's own
`200` as success.

**Verified end to end, on a live embed:** the unpacked `sources[0].file`
is a signed HLS master playlist (`*.m3u8`, 1080p `#EXT-X-STREAM-INF`) on a
`cdn-tnmr.org` host, served `200 application/vnd.apple.mpegurl` to a bare
request with **no Referer, no cookie**; its sub-playlist is AES-128
key-encrypted (`#EXT-X-KEY`, same signed query string on the key URL), and
a sampled `.ts` segment served `200 video/MP2T` the same way. One
`DirectSource`, the master URL, `mime_type="application/vnd.apple.mpegurl"`
-- the player resolves the key and segments itself.

**`interactionStatistic.userInteractionCount` on the post's own ld+json is
a fixed constant, not a real view count.** Every post checked across
several performers states exactly `1250`, unconditionally -- not surfaced
as `DirectVideo.views` anywhere in this file. `duration` is only stated
inside the embed's own unpacked player config (a request this file does
not spend at listing time), so it stays `None` on grid cards too.

**No real second page on a performer's own feed.** The theme ships
`.nav-links{display:none}` (pagination intentionally hidden in the CSS)
and performers whose stated count exceeds the one page shown (28 stated,
20 rendered, on `aletta-ocean`) have no working next-page route: both
`/model/<handle>/page/2/` (times out) and `/model/<handle>/2/` (404) fail.
Same honest limitation `leakgallery.py` already documents for its own
"Load more" -- `account_videos` returns page 1 only and `[]` for
`page > 1`, which under-counts a performer with more than one page's worth
rather than guessing at a route that was never observed to work.

**No galleries, no loose images.** Every post checked is a single video;
the theme has no separate photo route.
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
)


_MODEL_HREF_RE = re.compile(r"^https://hornysimp\.com/model/([a-z0-9\-]+)/$")
_POST_HREF_RE = re.compile(r"^https://hornysimp\.com/([a-z0-9\-]+)/$")
_RESERVED_SLUGS = {"model", "models", "category", "tag", "feed", "hd-porns"}

#: The site's own ld+json VideoObject -- cheaper than scraping the HTML
#: player markup and the only place `embedUrl` lives.
_EMBED_URL_RE = re.compile(r'"embedUrl"\s*:\s*"([^"]+)"')
_EXPIRED_MARKER = "no longer available"

#: The classic Dean Edwards p.a.c.k.e.r. shape:
#: eval(function(p,a,c,k,e,d){...}('<payload>',<radix>,<count>,'<keywords>'.split('|')))
#: A public, generic string-substitution algorithm (see the module
#: docstring) -- `_unpack` below is a straight port, not a recovered secret.
_PACKED_RE = re.compile(
    r"eval\(function\(p,a,c,k,e,d\)\{.*?\}\("
    r"'(?P<payload>(?:[^'\\]|\\.)*)',"
    r"(?P<radix>\d+),(?P<count>\d+),"
    r"'(?P<keywords>(?:[^'\\]|\\.)*)'\.split\('\|'\)",
    re.DOTALL,
)
_SOURCE_FILE_RE = re.compile(r'sources\s*:\s*\[\s*\{\s*file\s*:\s*"([^"]+)"')

_PACKER_DIGITS = "0123456789abcdefghijklmnopqrstuvwxyz"


class HornySimpScraper(DirectScraper):
    key = "hornysimp"
    name = "HornySimp"
    base_url = "https://hornysimp.com"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        slug = _slugify(query)
        if not slug:
            return []
        videos = self.account_videos(slug, 1)
        return videos[:limit] if limit else videos

    def resolve(self, video_id: str) -> list[DirectSource]:
        try:
            post = self._get(f"{self.base_url}/{video_id}/").text
        except Exception as exc:
            logger.debug(f"{self.key}: no post page for {video_id}: {exc}")
            return []

        embed_match = _EMBED_URL_RE.search(post)
        if not embed_match:
            logger.debug(f"{self.key}: no embedUrl on post {video_id}")
            return []
        embed_url = embed_match.group(1).replace("\\/", "/")

        try:
            embed_page = self._get(embed_url, headers={"Referer": self.base_url + "/"}).text
        except Exception as exc:
            logger.debug(f"{self.key}: embed unreachable for {video_id}: {exc}")
            return []

        if _EXPIRED_MARKER in embed_page.lower():
            logger.debug(f"{self.key}: embed expired for {video_id}")
            return []

        packed = _PACKED_RE.search(embed_page)
        if not packed:
            logger.debug(f"{self.key}: no packed player script for {video_id}")
            return []

        unpacked = _unpack(
            _unescape_js(packed.group("payload")),
            int(packed.group("radix")),
            int(packed.group("count")),
            _unescape_js(packed.group("keywords")).split("|"),
        )

        source_match = _SOURCE_FILE_RE.search(unpacked)
        if not source_match:
            logger.debug(f"{self.key}: unpacked player had no sources[].file for {video_id}")
            return []

        return [
            DirectSource(
                url=source_match.group(1),
                label="Source",
                mime_type="application/vnd.apple.mpegurl",
                # Verified with no headers at all -- see the module docstring.
                headers={},
            )
        ]

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        suffix = f"page/{page}/" if page and page > 1 else ""
        try:
            response = self._get(f"{self.base_url}/models/{suffix}")
        except Exception as exc:
            logger.debug(f"{self.key}: no model index page {page}: {exc}")
            return []
        return _accounts(response.text, self.base_url, self.key)

    def account_profile(self, handle: str) -> DirectAccount | None:
        # Nothing on the model page states more than the directory card
        # already has (avatar, name, count); no bio field exists here.
        return None

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        # Page 1 is the only page this theme's own pagination route can
        # reach -- see the module docstring.
        if page and page > 1:
            return []

        try:
            response = self._get(f"{self.base_url}/model/{handle}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no model page for {handle}: {exc}")
            return []
        return _videos(response.text, self.base_url, self.key)


def _slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", (text or "").lower()).strip("-")


def _unescape_js(text: str) -> str:
    """Undo the packer's own minimal single-quoted-string escaping."""

    return text.replace("\\'", "'").replace("\\\\", "\\")


def _to_radix(n: int, radix: int) -> str:
    if n == 0:
        return "0"
    digits = ""
    while n:
        n, r = divmod(n, radix)
        digits = _PACKER_DIGITS[r] + digits
    return digits


def _unpack(payload: str, radix: int, count: int, keywords: list[str]) -> str:
    """The p.a.c.k.e.r. decode: replace each base-`radix` token, highest
    first, with its keyword -- see the module docstring for why this is a
    straight port of a public algorithm rather than a recovered secret."""

    result = payload
    for c in range(count - 1, -1, -1):
        word = keywords[c] if c < len(keywords) else ""
        if word:
            token = _to_radix(c, radix)
            result = re.sub(r"\b" + re.escape(token) + r"\b", word, result)
    return result


def _accounts(page: str, base_url: str, key: str) -> list[DirectAccount]:
    """Every performer card ("mng-directory-card") on a `/models/` page."""

    tree = lxml_html.fromstring(page)
    accounts: list[DirectAccount] = []
    seen: set[str] = set()

    for link in tree.xpath(
        "//a[contains(concat(' ', normalize-space(@class), ' '), ' mng-directory-card-link ')]"
    ):
        href = link.get("href") or ""
        match = _MODEL_HREF_RE.match(href)
        if not match:
            continue
        handle = match.group(1)
        if handle in seen:
            continue
        seen.add(handle)

        images = link.xpath(".//img")
        avatar = images[0].get("src") if images else None

        names = link.xpath(
            ".//h3[contains(concat(' ', normalize-space(@class), ' '), ' mng-directory-name ')]"
            "//text()"
        )
        display_name = next((t.strip() for t in names if t.strip()), _display(handle))

        counts = link.xpath(
            ".//span[contains(concat(' ', normalize-space(@class), ' '), ' mng-directory-count ')]"
            "//text()"
        )
        video_count = None
        for text in counts:
            video_count = parse_count(text) or video_count

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


def _videos(page: str, base_url: str, key: str) -> list[DirectVideo]:
    """Every post card ("mng-video-card") on a performer's own page."""

    tree = lxml_html.fromstring(page)
    videos: list[DirectVideo] = []
    seen: set[str] = set()

    for article in tree.xpath(
        "//article[contains(concat(' ', normalize-space(@class), ' '), ' mng-video-card ')]"
    ):
        links = article.xpath(
            ".//a[contains(concat(' ', normalize-space(@class), ' '), ' mng-thumb-link ')]"
        )
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

        title = (links[0].get("title") or "").strip() or "Untitled"

        images = article.xpath(".//img")
        thumbnail = images[0].get("src") if images else None

        dates = article.xpath(
            ".//div[contains(concat(' ', normalize-space(@class), ' '), ' mng-video-date ')]"
            "//text()"
        )
        posted_at = next((t.strip() for t in dates if t.strip()), None)

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
