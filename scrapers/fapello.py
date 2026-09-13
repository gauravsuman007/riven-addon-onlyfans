"""fapello.com -- a post-per-item OnlyFans archive, images and video in one feed.

THIS SITE IS NOT KVS, and nothing in the sibling scrapers transfers. The five
KVS archives file content into `/videos/<id>/` and `/albums/<id>/` and hand out
signed, expiring `/get_file/` URLs behind a Referer check. fapello has no
albums, no player block, no token and no Referer check: every item is a post at
`/<slug>/<n>/`, and its media sits at a path derived from the slug and the
number. Verified: `206 video/mp4` with byte ranges on a bare URL and no headers
at all.

**The grid says which items are videos, so nothing has to open a post.** A card
carrying `assets/images/icon-play.svg` is a video and every other card is an
image. That one marker is what makes a mixed feed affordable -- the alternative
is a request per item, and these performers run to thousands of items.

**The media path is derived, not scraped.** A post's own page holds the URL,
but fetching one page per card to learn something the card already determines
costs a request each. The layout is::

    https://fapello.com/content/<a>/<b>/<slug>/4000/<slug>_<n>_300px.jpg   grid
    https://fapello.com/content/<a>/<b>/<slug>/4000/<slug>_<n>.jpg         full
    https://cdn.fapello.com/content/<a>/<b>/<slug>/4000/<slug>_<n>.mp4     video

where ``<a>`` and ``<b>`` are the slug's first two characters. Note the host
differs: images are served by the site, video by ``cdn.``. Deriving is the
whole reason a page of 32 mixed items costs one request.

**It is an image site that also has video, and the ratio is per performer.**
Measured over full feeds: bobbie-moore 454 videos in 1,920 items, mina-shirakawa
23 in 1,920, sophia-locke and sumikowrestles **zero** videos in 1,051 and 171.
A caller that asks only for videos will find some performers empty here and
should not read that as a failure -- it is what the site holds.

**Paging is an ajax endpoint after page one.** ``/<slug>/`` renders the first
32; ``/ajax/model/<slug>/page-<n>/`` renders each subsequent 32 as a bare
fragment. Both are parsed by the same card regex, which is why `_cards` takes
markup rather than a page number.

**The slugs are fapello's own and do not match this index's handles.** It is
`mina-shirakawa`, and `izzygreen`/`caroline-zalog`/`jameliz` are all 404 here
while `sophia-locke` exists. Resolving a performer to their slug on this site is
the account index's job, not this file's -- `list_accounts` publishes them.
"""

import re
from urllib.parse import urljoin

from loguru import logger
from lxml import html as lxml_html

from onlyfans_addon.scraper_api.base import (
    DirectAccount,
    DirectImage,
    DirectScraper,
    DirectSource,
    DirectVideo,
    parse_count,
)


#: A post card: the anchor's href carries both the slug and the item number,
#: and the body carries the play marker that says which kind it is.
_CARD_RE = re.compile(
    r'<a href="https://fapello\.com/([a-z0-9\-\._]+)/(\d+)/?"[^>]*>(.*?)</a>',
    re.IGNORECASE | re.DOTALL,
)
_PLAY_MARKER = "icon-play"
_MEDIA_HOST = "https://fapello.com"
_VIDEO_HOST = "https://cdn.fapello.com"

#: Paths under the root that are pages of the site rather than performers.
_RESERVED = {
    "hot", "forum", "welcome", "upload", "login", "signup", "tags", "random",
    "search", "feed", "videos", "top-likes", "top-followers", "trending",
    "daily-search-ranking", "assets", "content", "ajax", "terms", "privacy",
    "dmca", "contact", "new",
}


class FapelloScraper(DirectScraper):
    key = "fapello"
    name = "Fapello"
    base_url = "https://fapello.com"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        """Videos by a performer whose name matches, via the site's own search.

        The search answers with performers, not posts -- there is no text on a
        post to match -- so this resolves the first performer and returns their
        videos. A site that indexes people cannot answer a scene query, and
        pretending otherwise puts unrelated results in front of the ranker.
        """

        slug = _slugify(query)
        if not slug:
            return []

        for candidate in dict.fromkeys([slug, slug.replace("-", "")]):
            videos = self.account_videos(candidate, 1)
            if videos:
                return videos[:limit] if limit else videos

        return []

    def resolve(self, video_id: str) -> list[DirectSource]:
        """The single rendition behind a post.

        `video_id` is ``<slug>/<n>``, because neither half identifies a post on
        its own and this site has no global id. One source, no labels: fapello
        publishes exactly one file per post and states no height anywhere, so
        claiming a resolution would be inventing one.
        """

        slug, _, number = video_id.rpartition("/")
        if not slug or not number.isdigit():
            logger.debug(f"{self.key}: {video_id!r} is not a <slug>/<n> id")
            return []

        return [
            DirectSource(
                url=_media_url(_VIDEO_HOST, slug, number, "mp4"),
                label="Source",
                # No Referer: verified to serve 206 with byte ranges to a bare
                # request. Sending one anyway would be cargo-culted from the
                # KVS scrapers, where it is load-bearing.
                headers={},
            )
        ]

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        """One page of the site's performer index.

        ``/top-likes/`` rather than the homepage: the homepage mixes a handful
        of promoted performers into a feed of posts, while this is a plain
        paginated list of people, which is the shape `list_accounts` promises.
        """

        response = self._get(f"{self.base_url}/top-likes/{_page_suffix(page)}")
        return _accounts(response.text, self.key)

    def account_profile(self, handle: str) -> DirectAccount | None:
        try:
            response = self._get(f"{self.base_url}/{handle}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no profile page for {handle}: {exc}")
            return None

        return _profile(response.text, self.key, handle)

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        cards = self._cards(handle, page)

        return [
            DirectVideo(
                site=self.key,
                # The slug travels inside the id because `resolve` is handed
                # nothing else, and the media path cannot be built without it.
                video_id=f"{handle}/{number}",
                title=f"{_display(handle)} #{number}",
                page_url=f"{self.base_url}/{handle}/{number}/",
                thumbnail=_media_url(_MEDIA_HOST, handle, number, "jpg", thumb=True),
            )
            for number, body in cards
            if _PLAY_MARKER in body
        ]

    def account_images(self, handle: str, page: int = 1) -> list[DirectImage]:
        cards = self._cards(handle, page)

        return [
            DirectImage(
                image_id=f"{handle}/{number}",
                url=_media_url(_MEDIA_HOST, handle, number, "jpg"),
                thumbnail=_media_url(_MEDIA_HOST, handle, number, "jpg", thumb=True),
                # Served to a bare request, same as the video CDN.
                headers={},
            )
            for number, body in cards
            if _PLAY_MARKER not in body
        ]

    def _cards(self, handle: str, page: int) -> list[tuple[str, str]]:
        """One page of the mixed feed as ``(number, card markup)`` pairs.

        Page one is the model page and the rest are ajax fragments; both carry
        the same cards, so both are read by the same regex. A page past the end
        answers 200 with no cards rather than 404, which is why the caller
        stops on an empty list rather than on an exception.
        """

        if page and page > 1:
            url = f"{self.base_url}/ajax/model/{handle}/page-{page}/"
        else:
            url = f"{self.base_url}/{handle}/"

        try:
            response = self._get(url)
        except Exception as exc:
            logger.debug(f"{self.key}: no feed page {page} for {handle}: {exc}")
            return []

        seen: set[str] = set()
        cards: list[tuple[str, str]] = []

        for slug, number, body in _CARD_RE.findall(response.text):
            # The template links other performers in its sidebar; only this
            # performer's own cards belong in their feed.
            if slug != handle or number in seen:
                continue
            seen.add(number)
            cards.append((number, body))

        return cards


def _page_suffix(page: int) -> str:
    return f"{page}/" if page and page > 1 else ""


def _slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", (text or "").lower()).strip("-")


def _display(handle: str) -> str:
    return " ".join(part.capitalize() for part in handle.replace("_", "-").split("-"))


def _media_url(host: str, slug: str, number: str, suffix: str, thumb: bool = False) -> str:
    """Where this site keeps one post's file.

    Derived rather than scraped -- see the module docstring. The two-letter
    fan-out is the slug's own first two characters; a slug shorter than two
    characters cannot exist here (the site's minimum is three), so no padding
    case is handled.
    """

    a, b = slug[0], slug[1]
    name = f"{slug}_{number}{'_300px' if thumb else ''}.{suffix}"
    return f"{host}/content/{a}/{b}/{slug}/4000/{name}"


def _accounts(page: str, key: str) -> list[DirectAccount]:
    """Every performer card in an index page."""

    tree = lxml_html.fromstring(page)
    accounts: list[DirectAccount] = []
    seen: set[str] = set()

    for link in tree.xpath("//a[@href]"):
        href = link.get("href") or ""
        match = re.fullmatch(r"https://fapello\.com/([a-z0-9\-\._]+)/", href)
        if not match:
            continue

        handle = match.group(1)
        if handle in seen or handle in _RESERVED:
            continue
        seen.add(handle)

        images = link.xpath(".//img/@src")
        names = [text.strip() for text in link.xpath(".//text()") if text.strip()]

        accounts.append(
            DirectAccount(
                site=key,
                handle=handle,
                display_name=names[0] if names else _display(handle),
                page_url=href,
                avatar=images[0] if images else None,
            )
        )

    return accounts


def _profile(page: str, key: str, handle: str) -> DirectAccount | None:
    """Avatar, name and the site's own item tally from a performer's page.

    The tally is the whole feed -- images and video together -- and is stored as
    the image count rather than the video count, because images are the bulk of
    it on every performer measured and reporting it as videos would promise a
    number the video feed cannot produce.
    """

    tree = lxml_html.fromstring(page)

    headings = tree.xpath("//h2//text()") or tree.xpath("//h1//text()")
    display_name = next(
        (text.strip() for text in headings if text.strip()), _display(handle)
    )

    avatars = [
        src
        for src in tree.xpath("//img/@src")
        if "/content/" in src and "_300px" not in src
    ]

    total = None
    for block in tree.xpath("//*[strong[contains(text(), 'Media')]]//text()"):
        total = parse_count(block.strip()) or total

    if not avatars and total is None:
        return None

    return DirectAccount(
        site=key,
        handle=handle,
        display_name=display_name,
        page_url=f"https://fapello.com/{handle}/",
        avatar=avatars[0] if avatars else None,
        image_count=total,
    )
