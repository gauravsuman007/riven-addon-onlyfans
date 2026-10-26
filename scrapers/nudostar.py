"""nudostar.com -- a WordPress leak-blog archive, one performer per
category taxonomy term, posts holding whole galleries rather than one item
each.

NOT KVS, not the fapello shape either. A performer is a WordPress
*category* (not the custom "model" taxonomy the theme's own `/model/<slug>/`
page uses -- that one renders a single sticky bio/affiliate post with a
broken avatar path and is a decoy, same family as this file's own
WordPress-fuzzy-slug rejections elsewhere). The real per-performer archive
is the plain category permalink, `/<slug>/` -- confirmed by the fact that
`/model/allie-adams/` and `/allie-adams/`-style tag pages carry completely
different content, and a post's own rendered `class` list
(`category-kendra-cole category-kendracole category-onlyfans-leaks
category-pornstar category-video`) names performer and generic terms with
the identical `category-` prefix: one taxonomy, mixed vocabulary.

**The real index is the Yoast category-taxonomy sitemap, not a themed
directory page** -- same shape `fapnut.py` already documents for its own
site, a different theme. `category-sitemap1.xml` through
`category-sitemap13.xml` (confirmed to exist via the sitemap index,
~972 terms each) enumerate the whole taxonomy; `list_accounts` pages
through them directly, one file per page, the same way `fapnut.py` pages
through its own `actors-sitemap*.xml`.

**The taxonomy mixes a handful of generic descriptors in with performer
handles**, confirmed: `pornstar`, `video`, `onlyfans-leaks`,
`other-nude-models`, `celebrity` all showed up as bare category terms
next to real handles in the pages sampled. `_RESERVED_SLUGS` excludes the
ones found; this is not exhaustive against ~12,000+ terms, so a few
generic categories may still surface as decorative, contentless
"performers" in the index. Harmless (they are never misidentified as a
*specific* person, just a near-empty archive page), not chased further.

**A category archive page shows teaser excerpts, not the real content --
opening a post is not optional.** `/<handle>/` lists each post's title and
one lead image; the full set of images and `<video>` tags for that post
only renders on the post's own permalink. `account_videos`/
`account_images` therefore read the archive page for its post links (and
for `of_username`, see below) and then open every post on that page --
bounded by however many posts share one performer's tag (1-3 on every
account sampled, several dozen at the extreme), the same cost shape
`leakgallery.py`/`fapello.py` already accept per performer.

**A post bundles many images and videos together, interleaved, with no
separate album** -- the title literally states the count ("145 photos +
5 videos"). This is the fapello-shaped family (`account_images`, not
`account_galleries`), except every post here is itself a many-item feed
rather than a single item, so `video_id`/`image_id` carry
`<post-slug>#<index>` to address one item inside one post.

**The archive excerpt already states the performer's OnlyFans username,
no need to open a post for it.** Every account's teaser paragraph links
`onlyfans.com/<name>` in plain text (confirmed: `kendracole`,
`corinnakopf`) -- `account_profile` reads this straight off `/<handle>/`,
one request, and reports it as `of_username`: **a candidate, never a
confirmed identity** (same caveat as every other site here that states
one -- see `profile.py`/`discover.py`).

**Verified end to end, both media kinds, no special headers:** a video's
`<source src="...">` points at `cdn.nudostar.com` and served
`206 video/mp4` to a bare `requests.get`, Range header only; an image's
`data-src` points at `nudostar.com` itself and is a plain, unsigned URL
(same host, no CDN token observed). Neither needed a Referer or cookie.

**No stated resolution or duration anywhere** on this theme -- `<video>`
tags carry no quality labels and no `#EXT-X-STREAM-INF`-style variants
(these are plain progressive `.mp4` files, not HLS); `DirectSource` states
no `resolution`, and grid cards state no `duration`.
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


_CATEGORY_HREF_RE = re.compile(r"^https://nudostar\.com/([a-z0-9\-]+)/$")
_RESERVED_SLUGS = {
    "model",
    "models",
    "forum",
    "2257",
    "dmca",
    "contacts",
    "feed",
    "author",
    "page",
    "comments",
    "category",
    "tag",
    "video",
    "videos",
    "photo",
    "photos",
    "pornstar",
    "pornstars",
    "onlyfans-leaks",
    "other-nude-models",
    "celebrity",
    "celebrities",
    "patreon",
    "snapchat",
    "instagram",
    "twitter",
    "twitch",
    "manyvids",
    "youtube",
}
_SITEMAP_COUNT = 13

_OF_USERNAME_RE = re.compile(r'href="https://onlyfans\.com/([A-Za-z0-9_]+)"')
_POST_LINK_RE = re.compile(
    r'<h2 class="entry-title[^"]*"><a href="(https://nudostar\.com/[a-z0-9\-]+/)"'
)
_IMAGE_SRC_RE = re.compile(
    r'data-src="(https://nudostar\.com/wp-content/uploads/[^"]+\.(?:jpe?g|png|gif))"',
    re.IGNORECASE,
)
_VIDEO_SRC_RE = re.compile(
    r'<source\s+class="lazy lazy-hidden"\s+type="video/mp4"\s+src="(https://cdn\.nudostar\.com/[^"]+)"'
)


class NudoStarScraper(DirectScraper):
    key = "nudostar"
    name = "NudoStar"
    base_url = "https://nudostar.com"
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
        if page < 1 or page > _SITEMAP_COUNT:
            return []
        try:
            response = self._get(f"{self.base_url}/category-sitemap{page}.xml")
        except Exception as exc:
            logger.debug(f"{self.key}: no category-sitemap{page}.xml: {exc}")
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
                    # No avatar or name anywhere in the sitemap itself -- see
                    # `account_profile`, which reads the one real page.
                    display_name=_display(handle),
                    page_url=url,
                )
            )

        return accounts

    def account_profile(self, handle: str) -> DirectAccount | None:
        try:
            response = self._get(f"{self.base_url}/{handle}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no archive page for {handle}: {exc}")
            return None

        of_match = _OF_USERNAME_RE.search(response.text)
        image_match = _IMAGE_SRC_RE.search(response.text)

        if not of_match and not image_match:
            return None

        return DirectAccount(
            site=self.key,
            handle=handle,
            display_name=_display(handle),
            page_url=f"{self.base_url}/{handle}/",
            avatar=image_match.group(1) if image_match else None,
            of_username=of_match.group(1) if of_match else None,
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
            archive = self._get(f"{self.base_url}/{handle}/{suffix}").text
        except Exception as exc:
            logger.debug(f"{self.key}: no archive page {page} for {handle}: {exc}")
            return []

        results: list[DirectVideo | DirectImage] = []
        for post_url in dict.fromkeys(_POST_LINK_RE.findall(archive)):
            match = _CATEGORY_HREF_RE.match(post_url)
            slug = match.group(1) if match else None
            if not slug:
                continue

            try:
                post = self._get(post_url).text
            except Exception as exc:
                logger.debug(f"{self.key}: no post page for {slug}: {exc}")
                continue

            title = _title(post) or _display(handle)
            thumbnail = next(iter(_IMAGE_SRC_RE.findall(post)), None)

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

            for i, image_url in enumerate(_IMAGE_SRC_RE.findall(post)):
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


def _title(page: str) -> str | None:
    tree = lxml_html.fromstring(page)
    headings = tree.xpath(
        "//h1[contains(concat(' ', normalize-space(@class), ' '), ' entry-title ')]//text()"
    )
    text = next((t.strip() for t in headings if t.strip()), None)
    return text
