"""jizzy.org -- a WordPress (Bimber theme) archive, post-per-item, posts
holding whole galleries rather than one item each.

NOT KVS, and not quite `gotanynudes.py`'s shape either even though both
run Bimber: this deployment has no MAZ "models" addon (`/models/` and
`/models/<letter>/` both render fine but carry zero `.maz-model` cards --
one of them turned out to be a single post's own tag-cloud footer, not a
directory at all, the same WordPress-fuzzy-slug shape this repo keeps
finding on themed "directory" pages that are actually something else).

**The real index is the plain WordPress category taxonomy, one sitemap
file for the whole thing.** A performer is a category
(`/category/<slug>/`); `category-sitemap.xml` is a single page listing
all ~670 of them (confirmed, not paginated the way `nudostar.py`'s
13-file taxonomy sitemap is -- `list_accounts` returns everything on
`page == 1` and `[]` after). This repo's own `post_tag` taxonomy is a
*different*, much larger vocabulary (44 sitemap files, generic topical
tags like "fired"/"teacher"/"nude") seen cross-tagged onto posts
alongside the real performer category and is not used here.

**A small number of generic categories sit in the same sitemap as real
performers** (`vip-nude-videos`, `xxx-videos` confirmed) --
`_RESERVED_SLUGS` drops the ones found; not exhaustive against ~670
terms, same caveat `nudostar.py` already carries for its own taxonomy
noise.

**A category archive lists unrelated posts too.** Below the category's
own posts sits a "more posts" grid in identical `entry-title` card markup,
so `_items` keeps a post only if its own `<article>` carries
`category-<handle>` (`_in_category`). Measured 2026-10-27 over ten sampled
performers: all 260 videos the scraper served came from that grid and
belonged to other people. jizzy files video posts under its generic
categories (`xxx-videos`), not under performers, so a performer here is
photos only -- an empty video list is the right answer, not a gap.

**A category archive page shows teaser excerpts only; the real media is
on each post's own permalink** -- same shape as `nudostar.py`.
`account_videos`/`account_images` open the archive page for its post
links, then open every post on that page (bounded the same way,
confirmed: a photo post carries ~19 full-size images, a video post
carries exactly one `<video>` tag; never both kinds on the same
measured post).

**A video post embeds a plain, direct `<video src="...">` -- no player
block, no ld+json, no third-party host.** `schema.org` structured data
on this deployment states only `Article`/`WebPage`/`ImageObject`/
`Person` nodes, never a `VideoObject`, so (unlike `gotanynudes.py`,
a different Bimber configuration) `resolve` reads the HTML `<video>` tag
directly rather than ld+json. Verified: `206 video/mp4` to a bare
`requests.get`, no Referer, no cookie, self-hosted on `jizzy.org` itself
(no separate CDN subdomain).

**No `of_username` anywhere observed** -- unlike `nudostar.py`'s teaser
paragraphs, no post sampled here links an `onlyfans.com/<name>` URL
anywhere in the response. `account_profile` states only `avatar` (the
category archive's own heading has no bio, just the bare slug as its
`<h1>`, so `display_name` stays the humanised handle rather than that
redundant text).
"""

import re

from loguru import logger
from lxml import html as lxml_html

from onlyfans_addon.scraper_api.base import (
    DirectAccount,
    DirectImage,
    DirectScraper,
    DirectSource,
    DirectVideo,
)


_CATEGORY_HREF_RE = re.compile(r"^https://jizzy\.org/category/([a-z0-9\-]+)/$")
_RESERVED_SLUGS = {
    "vip-nude-videos",
    "nude-cosplay-albums",
    "xxx-videos",
    "onlyfans",
    "onlyfans-leaks",
    "nude-videos",
    "leaked",
    "leaks",
}

_POST_HREF_RE = re.compile(r"^https://jizzy\.org/([a-z0-9\-]+)/$")
_VIDEO_SRC_RE = re.compile(r'<video[^>]*\ssrc="(https://jizzy\.org/wp-content/uploads/[^"]+\.mp4)"')
_IMAGE_SRC_RE = re.compile(
    r'<img[^>]*class="[^"]*wp-image-\d+[^"]*"[^>]*\ssrc="(https://jizzy\.org/wp-content/uploads/[^"]+\.(?:jpe?g|png|gif))"',
    re.IGNORECASE,
)


class JizzyScraper(DirectScraper):
    key = "jizzy"
    name = "Jizzy"
    base_url = "https://jizzy.org"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        slug = _slugify(query)
        if not slug:
            return []
        videos = self.account_videos(slug, 1)
        return videos[:limit] if limit else videos

    def resolve(self, video_id: str) -> list[DirectSource]:
        slug, _, index = video_id.partition("#")
        if not slug or not index.isdigit():
            logger.debug(f"{self.key}: {video_id!r} is not a <post-slug>#<n> id")
            return []

        try:
            response = self._get(f"{self.base_url}/{slug}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no post page for {video_id}: {exc}")
            return []

        urls = _VIDEO_SRC_RE.findall(response.text)
        position = int(index)
        if position >= len(urls):
            logger.debug(f"{self.key}: post {slug} has no video at index {position}")
            return []

        return [
            DirectSource(
                url=urls[position],
                label="Source",
                # Verified with no headers at all -- see the module docstring.
                headers={},
            )
        ]

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        if page != 1:
            # The whole taxonomy is one sitemap file -- see the module
            # docstring. Anything past page 1 is an honest "no more".
            return []
        try:
            response = self._get(f"{self.base_url}/category-sitemap.xml")
        except Exception as exc:
            logger.debug(f"{self.key}: no category-sitemap.xml: {exc}")
            return []

        accounts: list[DirectAccount] = []
        for url in re.findall(r"<loc>([^<]+)</loc>", response.text):
            match = _CATEGORY_HREF_RE.match(url)
            if not match:
                continue
            handle = match.group(1)
            if handle in _RESERVED_SLUGS:
                continue
            accounts.append(
                DirectAccount(
                    site=self.key,
                    handle=handle,
                    display_name=_display(handle),
                    page_url=url,
                )
            )

        return accounts

    def account_profile(self, handle: str) -> DirectAccount | None:
        try:
            response = self._get(f"{self.base_url}/category/{handle}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no category archive for {handle}: {exc}")
            return None

        image_match = _IMAGE_SRC_RE.search(response.text)
        if not image_match:
            return None

        return DirectAccount(
            site=self.key,
            handle=handle,
            display_name=_display(handle),
            page_url=f"{self.base_url}/category/{handle}/",
            avatar=image_match.group(1),
        )

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        return [item for item in self._items(handle, page) if isinstance(item, DirectVideo)]

    def account_images(self, handle: str, page: int = 1) -> list[DirectImage]:
        return [item for item in self._items(handle, page) if isinstance(item, DirectImage)]

    def _items(self, handle: str, page: int) -> list[DirectVideo | DirectImage]:
        """Every photo and video across every post on one archive page.

        One request for the archive page's own post links, then one more
        per post -- the teaser excerpt never carries the real media, see
        the module docstring.
        """

        suffix = f"page/{page}/" if page and page > 1 else ""
        try:
            archive = self._get(f"{self.base_url}/category/{handle}/{suffix}").text
        except Exception as exc:
            logger.debug(f"{self.key}: no archive page {page} for {handle}: {exc}")
            return []

        tree = lxml_html.fromstring(archive)
        post_urls: list[str] = []
        seen_posts: set[str] = set()
        for link in tree.xpath(
            "//h2[contains(concat(' ', normalize-space(@class), ' '), ' entry-title ')]/a[@href]"
            " | //h3[contains(concat(' ', normalize-space(@class), ' '), ' entry-title ')]/a[@href]"
        ):
            href = link.get("href") or ""
            if href not in seen_posts and _POST_HREF_RE.match(href):
                seen_posts.add(href)
                post_urls.append(href)

        results: list[DirectVideo | DirectImage] = []
        for post_url in post_urls:
            match = _POST_HREF_RE.match(post_url)
            slug = match.group(1) if match else None
            if not slug:
                continue

            try:
                post = self._get(post_url).text
            except Exception as exc:
                logger.debug(f"{self.key}: no post page for {slug}: {exc}")
                continue

            # The archive's `entry-title` links include a "more posts" grid
            # of unrelated recent posts below the category's own, in the SAME
            # card markup. Measured 2026-10-26: Anissa Kate's archive had one
            # post of hers and ten of other people's, and their videos were
            # being served as hers. A post belongs to the performer only if
            # its own article is filed in their category.
            if not _in_category(post, handle):
                logger.debug(f"{self.key}: {slug} is not filed under {handle}, skipping")
                continue

            title = _title(post) or _display(handle)
            images = _IMAGE_SRC_RE.findall(post)
            thumbnail = images[0] if images else None

            for i, video_url in enumerate(_VIDEO_SRC_RE.findall(post)):
                results.append(
                    DirectVideo(
                        site=self.key,
                        video_id=f"{slug}#{i}",
                        title=title,
                        page_url=post_url,
                        thumbnail=thumbnail,
                    )
                )

            for i, image_url in enumerate(images):
                results.append(
                    DirectImage(
                        image_id=f"{slug}#{i}",
                        url=image_url,
                        headers={},
                    )
                )

        return results


def _slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", (text or "").lower()).strip("-")


def _display(handle: str) -> str:
    return " ".join(part.capitalize() for part in handle.split("-"))


def _in_category(page: str, handle: str) -> bool:
    """Whether a post page's own article is filed under category `handle`.

    WordPress puts `category-<slug>` on the post's `<article>`; the first
    article on a single-post page is the post itself, the rest are the
    related-posts grid.
    """

    tree = lxml_html.fromstring(page)
    articles = tree.xpath("//article/@class")
    if not articles:
        return False
    return f"category-{handle}" in articles[0].split()


def _title(page: str) -> str | None:
    tree = lxml_html.fromstring(page)
    headings = tree.xpath("//h1[contains(@class, 'entry-title')]//text()")
    text = next((t.strip() for t in headings if t.strip()), None)
    return text
