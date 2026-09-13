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

**The media path is read off the card, not guessed.** Every card carries its
own thumbnail URL, and the other two files sit beside it::

    https://fapello.com/content/<a>/<b>/<slug>/<bucket>/<slug>_<n>_300px.jpg  grid
    https://fapello.com/content/<a>/<b>/<slug>/<bucket>/<slug>_<n>.jpg        full
    https://cdn.fapello.com/content/<a>/<b>/<slug>/<bucket>/<slug>_<n>.mp4    video

so the full image is the thumbnail without ``_300px`` and the video is that
again on ``cdn.`` with an ``.mp4`` suffix. One request still yields 32 items.

``<bucket>`` is the reason this is parsed rather than built. It is not a
constant: it rounds the item number up to the next thousand, so post 1,053 is
under ``/2000/`` and post 3,229 under ``/4000/``. Hard-coding the ``/4000/``
that the first performers examined happened to use produced 404s for everyone
with fewer than three thousand posts -- a whole-performer failure that looks
exactly like an empty feed. The card already states it; reading it cannot
drift.

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

_IMG_SRC_RE = re.compile(r'src="([^"]+)"')
_VIDEO_SRC_RE = re.compile(r'src="(https?://[^"]+\.(?:mp4|m4v))"', re.IGNORECASE)



class FapelloScraper(DirectScraper):
    key = "fapello"
    name = "Fapello"
    base_url = "https://fapello.com"
    indexes_accounts = True

    #: Slower than the family default, because this one enforces. An index
    #: walk at one request a second got eleven pages in before every
    #: subsequent request came back 403 -- and a 403 partway through a walk
    #: looks exactly like the end of the index, so the run recorded eleven
    #: accounts and called itself a success.
    rate_limit = 0.5

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
        its own and this site has no global id.

        THE POST PAGE IS ASKED rather than the URL built, even though the feed
        could hand one over. The path contains a bucket that rounds the item
        number up to the next thousand, and while that rule held on every
        performer measured, a wrong guess here is a 404 at play time -- the
        worst place to find out. One request per playback is nothing next to
        the video it is about to stream, and the page states the answer.

        One source, no labels: fapello publishes exactly one file per post and
        states no height anywhere, so claiming a resolution would invent one.
        """

        slug, _, number = video_id.rpartition("/")
        if not slug or not number.isdigit():
            logger.debug(f"{self.key}: {video_id!r} is not a <slug>/<n> id")
            return []

        try:
            response = self._get(f"{self.base_url}/{slug}/{number}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no post page for {video_id}: {exc}")
            return []

        for url in _VIDEO_SRC_RE.findall(response.text):
            return [
                DirectSource(
                    url=url,
                    label="Source",
                    # No Referer: verified to serve 206 with byte ranges to a
                    # bare request. Sending one would be cargo-culted from the
                    # KVS scrapers, where it is load-bearing.
                    headers={},
                )
            ]

        logger.debug(f"{self.key}: no video on post {video_id}")
        return []

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        """One page of the site's performer index.

        ``/top-likes/`` rather than the homepage: the homepage mixes promoted
        performers into a feed of posts, while this is a plain list of people,
        which is the shape `list_accounts` promises.

        THE AJAX FRAGMENT IS THE PAGINATION, and the obvious guess is a trap.
        ``/top-likes/2/`` answers **200 with the site's soft-404 body**, not a
        404 -- so a walk built on the family's usual trailing-segment paging
        parses a not-found page, finds no performer cards in it, reads that as
        the end of the index, and stops after page one. It stored 24 accounts
        out of a site with thousands and reported a clean finish.

        ``/ajax/top-likes/page-<n>/`` is what the page's own scroll calls, and
        it pages properly.
        """

        response = self._get(f"{self.base_url}/ajax/top-likes/page-{max(page, 1)}/")
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
                thumbnail=thumbnail,
            )
            for number, body, thumbnail in cards
            if _PLAY_MARKER in body
        ]

    def account_images(self, handle: str, page: int = 1) -> list[DirectImage]:
        cards = self._cards(handle, page)

        return [
            DirectImage(
                image_id=f"{handle}/{number}",
                url=_full_size(thumbnail),
                thumbnail=thumbnail,
                # Served to a bare request, same as the video CDN.
                headers={},
            )
            for number, body, thumbnail in cards
            if _PLAY_MARKER not in body
        ]

    def _cards(self, handle: str, page: int) -> list[tuple[str, str, str]]:
        """One page of the feed as ``(number, card markup, thumbnail)`` triples.

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
        cards: list[tuple[str, str, str]] = []

        for slug, number, body in _CARD_RE.findall(response.text):
            # The template links other performers in its sidebar; only this
            # performer's own cards belong in their feed.
            if slug != handle or number in seen:
                continue

            thumbnail = next(
                (
                    src
                    for src in _IMG_SRC_RE.findall(body)
                    if f"/{handle}/" in src and "_300px" in src
                ),
                "",
            )
            # A card with no thumbnail of its own is not a post; skipping it is
            # what keeps a template change from producing items whose media
            # URLs are empty strings.
            if not thumbnail:
                continue

            seen.add(number)
            cards.append((number, body, thumbnail))

        return cards


def _page_suffix(page: int) -> str:
    return f"{page}/" if page and page > 1 else ""


def _slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", (text or "").lower()).strip("-")


def _display(handle: str) -> str:
    return " ".join(part.capitalize() for part in handle.replace("_", "-").split("-"))


def _full_size(thumbnail: str) -> str:
    """The full-resolution file beside a grid thumbnail.

    The grid crop and the original differ only by the ``_300px`` marker, so
    this is a rename rather than a second lookup.
    """

    return thumbnail.replace("_300px.", ".")


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
        if handle in seen:
            continue

        # A PERFORMER IS IDENTIFIED BY THEIR OWN ARTWORK, not by the href.
        # Every page on this site is one path segment deep, so the shape alone
        # matches `/forum/`, `/report/`, `/search_v2/` and `/2257/` as readily
        # as it matches a person -- a reserved-word list would need extending
        # every time the site adds a page, and would be wrong silently.
        #
        # A real card's thumbnail is that performer's own first post, at
        # `/content/<a>/<b>/<slug>/...`. Requiring the slug in the image path
        # ties the card to the handle, so a site page (no such image) and a
        # promoted card (artwork under `/assets/exclusive/`, linking out to
        # onlyfans.com) both fall out without being enumerated.
        avatar = next(
            (
                src
                for src in link.xpath(".//img/@src")
                if f"/content/{handle[0]}/{handle[1]}/{handle}/" in src
            ),
            None,
        )
        if not avatar:
            continue

        seen.add(handle)
        names = [text.strip() for text in link.xpath(".//text()") if text.strip()]

        accounts.append(
            DirectAccount(
                site=key,
                handle=handle,
                display_name=names[0] if names else _display(handle),
                page_url=href,
                avatar=avatar,
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

    # The template surrounds a profile with other performers -- recommended,
    # trending, recently viewed -- and every one of those cards is also an
    # image under /content/. Taking the first one put a stranger's photograph
    # on the account: bobbie-moore came back wearing sarai-fonseca's. The
    # performer's own files are the only ones with their slug in the path.
    avatars = [
        src
        for src in tree.xpath("//img/@src")
        if f"/{handle}/" in src and "_300px" not in src
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
