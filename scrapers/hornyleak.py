"""hornyleak.tv -- a performer-indexed archive, NOT KVS, HLS via a third-party
embed host.

Flagged for a careful redo: an earlier pass's "``kt_player``" signal turned
out to be a CSS class name (``.thumb .time``/``.qualtiy`` rules happen to
share vocabulary with the KVS family's stylesheet) rather than a real
``flashvars``/``kt_player(`` call -- there is none anywhere on this
deployment. This file is what the real player chain turned out to be.

**The chain is three hops, all unauthenticated.** A video's own page
(``/video/<id>/-/``, dash slug accepted) embeds ``/embed/<id>/`` in an
``<iframe>``; that page's only payload is a second iframe pointing at a
*different* domain, ``https://hdplayer.gives/embed/<token>``; that page's
inline script carries ``sources: [{file:"https://hdplayer.gives/list/enc...",
type:"hls"}]``. Every hop was verified with a bare, cookie-free
``requests.get`` and no Referer at all -- including the final segment fetch
(a `BEpeak HLS Stream System` TS segment, confirmed by the MPEG-TS sync byte
``0x47`` at the start of the response body). **This is the "rotating embed
domain" shape from STRATEGIES.md**: `/embed/<id>/` only needs the numeric id,
not a trip through `/video/` first, which saves a request.

**The ``/list/enc...`` URL is a real HLS master playlist, decoded
server-side.** No manual base64/AES work was needed on this file's part --
fetching that URL directly returns ``#EXTM3U`` text with one
``#EXT-X-STREAM-INF`` per quality, each naming a real ``RESOLUTION=WxH`` and
pointing at its own ``https://hdplayer.gives/m3u/enc...`` variant playlist (a
*second*, independently fetchable encoded path -- not followed further here,
because the master is what a player needs: `resolve` reports each variant
URL as its own source and lets the player fetch segments). Measured: one
video carried a single SD (842x480) variant, another carried both HD
(1280x720) and SD (842x480) -- `_hls_sources` returns however many the master
actually states, each with the resolution the playlist itself states via
`resolution_from_dimensions`, never invented.

**Segments are sersved as ``.txt``, not ``.ts`` -- cosmetic, not a gate.**
Fetched one directly: `200 text/plain`, 4.3MB, starting with the MPEG-TS sync
byte. A player handed the master URL does not care about this; it is
recorded here so a future HEAD-only probe that checks the extension doesn't
wrongly call the source dead.

**No albums, no galleries anywhere on this deployment.** The nav carries no
``/albums/``/``/gallery/`` route, and no model or video page links one --
`account_galleries`/`gallery_images` stay at the base class's empty default.

**No bio text anywhere checked.** A model's own page (``.asside`` -- the
site's own class name, not a typo introduced here) carries a heading and an
avatar and nothing resembling a description field, placeholder or otherwise.
`account_profile` therefore never sets `bio`.

**Card classes differ between the model index and a model's video grid**
(``thumb item`` vs ``thumb thumb_rel item``), consistent with the rest of
this repo's KVS-family sites even though this one is not KVS -- selectors key
on the href shape (``/models/<slug>/``, ``/video(s)?/<id>/``) rather than a
class name, same convention.
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
    resolution_from_dimensions,
)


_SLUG_RE = re.compile(r"[^a-z0-9]+")
_VIDEO_ID_RE = re.compile(r"/videos?/(\d+)")
_MODEL_SLUG_RE = re.compile(r"/models/([^/?#]+)")
_EMBED_RE = re.compile(r"https://hdplayer\.gives/embed/[A-Za-z0-9]+")
_SOURCE_RE = re.compile(r'file:"(https://hdplayer\.gives/list/[^"]+)",type:"([^"]+)"')
_VARIANT_RE = re.compile(
    r"#EXT-X-STREAM-INF:[^\n]*RESOLUTION=(\d+x\d+)[^\n]*\n(https://\S+)"
)

_HLS_MIME = "application/vnd.apple.mpegurl"


class HornyLeakScraper(DirectScraper):
    key = "hornyleak"
    name = "HornyLeak"
    base_url = "https://www.hornyleak.tv"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        slug = _SLUG_RE.sub("-", query.strip().lower()).strip("-")
        if not slug:
            return []
        response = self._get(f"{self.base_url}/search/{slug}/")
        return _videos(response.text, self.base_url, self.key, limit)

    def resolve(self, video_id: str) -> list[DirectSource]:
        """Chase the embed chain to a real HLS master, then read its own
        variants.

        Three hops -- see the module docstring for why each is necessary and
        why none of them needs a header or a cookie. A broken link at any
        hop (no embed on this deployment, no third-party token, a master
        that states no variants) returns ``[]`` rather than raising; a site
        between redesigns is "nothing playable today", not a crash.
        """

        try:
            embed_page = self._get(f"{self.base_url}/embed/{video_id}/").text
        except Exception as exc:
            logger.debug(f"{self.key}: no /embed/ page for {video_id}: {exc}")
            return []

        embed_match = _EMBED_RE.search(embed_page)
        if not embed_match:
            logger.debug(f"{self.key}: no third-party embed on video {video_id}")
            return []

        try:
            player_page = self._get(embed_match.group(0)).text
        except Exception as exc:
            logger.debug(f"{self.key}: embed host unreachable for {video_id}: {exc}")
            return []

        source_match = _SOURCE_RE.search(player_page)
        if not source_match:
            logger.debug(f"{self.key}: no sources[] in the embed player for {video_id}")
            return []

        master_url, kind = source_match.groups()
        if kind != "hls":
            # Never measured, but the contract only promises HLS or MP4 --
            # an unrecognised type is reported as nothing playable rather
            # than guessed at.
            logger.debug(f"{self.key}: unrecognised source type {kind!r}")
            return []

        try:
            # The embed host's `/list/` handler 404s a browser-shaped Accept
            # header -- `"text/html,application/xhtml+xml,..."`, this
            # family's `BROWSER_HEADERS` default -- and serves the real
            # playlist to a plain `*/*`. The same shape as `coomer.st`'s
            # DDoS-Guard bypass in STRATEGIES.md: an anti-bot heuristic keyed
            # on the Accept header rather than on anything about the request
            # being automated. Measured: identical request, only the Accept
            # value changed, 404 vs 200.
            master = self._get(master_url, headers={"Accept": "*/*"}).text
        except Exception as exc:
            logger.debug(f"{self.key}: master playlist unreachable for {video_id}: {exc}")
            return []

        return _hls_sources(master)

    # --- Performer accounts -------------------------------------------------

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
    """Every performer card in a model index page."""

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
                video_count=parse_count(_first_text(link, "thumb-item")),
            )
        )

    return accounts


def _profile(page: str, base_url: str, key: str, handle: str) -> DirectAccount | None:
    """Avatar and display name from a performer's own page.

    No bio field exists on this deployment -- see the module docstring --
    so this never populates one. Returns None rather than an empty account
    when the page has no avatar at all.
    """

    tree = lxml_html.fromstring(page)

    asides = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' asside ')]"
    )
    if not asides:
        return None

    avatars = asides[0].xpath(".//img")
    avatar = _src(avatars[0], base_url) if avatars else None

    headings = asides[0].xpath(".//h2//text()")
    display_name = next((t.strip() for t in headings if t.strip()), handle)

    if not avatar:
        return None

    return DirectAccount(
        site=key,
        handle=handle,
        display_name=display_name or handle,
        page_url=f"{base_url}/models/{handle}/",
        avatar=avatar,
    )


def _videos(page: str, base_url: str, key: str, limit: int | None) -> list[DirectVideo]:
    """Every video card in a grid, in the order the site rendered them."""

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
                duration=parse_duration(_first_text(link, "time")),
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


def _hls_sources(master: str) -> list[DirectSource]:
    """Every quality variant an HLS master playlist actually states.

    Each line pair is ``#EXT-X-STREAM-INF:...RESOLUTION=WxH...`` followed by
    the variant's own absolute URL -- both measured live (see the module
    docstring). `resolution_from_dimensions` is the same helper every other
    "WxH" figure in this project goes through; nothing here is guessed.
    """

    sources = [
        DirectSource(
            url=url,
            label=resolution_from_dimensions(dimensions) or "Source",
            resolution=resolution_from_dimensions(dimensions),
            mime_type=_HLS_MIME,
            # Verified with no Referer and no cookie at every hop -- see the
            # module docstring. Nothing to send here.
            headers={},
        )
        for dimensions, url in _VARIANT_RE.findall(master)
    ]
    sources.sort(key=lambda s: _height(s.resolution), reverse=True)
    if not sources:
        logger.debug("hornyleak: master playlist stated no variants")
    return sources


def _height(resolution: str | None) -> int:
    if not resolution:
        return 0
    match = re.match(r"(\d+)p", resolution)
    return int(match.group(1)) if match else 0
