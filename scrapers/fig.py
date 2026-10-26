"""fig.to -- a WordPress archive, post-per-item, performers as a dedicated
custom taxonomy.

**The themed "/model/" page is a decoy, the same shape this repo keeps
finding.** It is a plain tag named literally "model" grouping unrelated
posts by wording, not performers (confirmed: its own post titles are
scene descriptions mentioning several different women, with no per-
performer grouping at all) -- rule 1's exact failure mode if taken at
face value.

**The real index is a dedicated custom post-type taxonomy, `fig_creator`,
at `/creator/<slug>/`.** Found via the sitemap index rather than any
themed page: `fig_creator-sitemap.xml` through `-sitemap38.xml`
(~1000 terms each, confirmed real, ~38,000 performers) is a *separate*
sitemap family from the site's ordinary `category-sitemap*.xml` (24
files) and `post-sitemap*.xml` (146 files) -- this site built a proper
performer taxonomy, it just never linked it from a nav menu.
`list_accounts` pages through the `fig_creator` sitemap files directly,
the same shape `fapnut.py`/`nudostar.py` already use for their own
taxonomy sitemaps.

**Coverage per performer varies hugely and that is the site's own data,
not a bug.** A.J. Applegate -- a major, long-established name -- has
exactly one post tagged to her creator term while several much smaller
names checked had 3-12; nothing here should be read as a scraping gap
just because a famous performer looks thin.

**A post is one scene, one `<video>` tag, often cross-tagged to several
creators at once for a multi-performer scene** -- confirmed, one post
checked links ten different `/creator/<slug>/` pages, each a genuine
participant rather than spam cross-tagging (contrast `gotanynudes.py`'s
unrelated "Monthly Insights" roundup, which is not this). No filtering
needed here because every tag really is about that post.

**Verified end to end:** a post's `<source src="...">` points at a
different domain entirely (`fig<n>.famousinternetgirls.com`) and served a
real `206 video/mp4` to a bare `requests.get`, Range header only -- no
Referer, no cookie, and notably **plain `http://`, not `https://`**,
exactly as the site states it; rewriting the scheme was not needed and
was not attempted.

**No separate gallery route observed.** Every post checked is a single
video with a handful of `<picture>` preview images (thumbnail-sized
crops of the same scene, not a separate photo set) -- no `/photos/` or
`/gallery/` path exists on this theme, so `account_images`/
`account_galleries` stay at the base class's defaults.

**No stated resolution or duration anywhere** on this theme's player
markup; `DirectSource`/`DirectVideo` state neither.
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


_SITEMAP_COUNT = 38
_CREATOR_HREF_RE = re.compile(r"^https://fig\.to/creator/([a-z0-9_\-]+)/$")
#: A post's permalink has a category/subcategory prefix that varies per
#: post, so the id carries the whole path after the domain, not just the
#: trailing slug -- `resolve` needs the real path to refetch the page.
_POST_HREF_RE = re.compile(r"^https://fig\.to/([a-z0-9\-]+/[a-z0-9\-]+/[a-z0-9\-]+)/$")
_VIDEO_SRC_RE = re.compile(
    r'<source\s+src="(https?://[^"]+\.mp4[^"]*)"\s+type="video/mp4"', re.IGNORECASE
)


class FigScraper(DirectScraper):
    key = "fig"
    name = "Fig"
    base_url = "https://fig.to"
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

        match = _VIDEO_SRC_RE.search(response.text)
        if not match:
            logger.debug(f"{self.key}: no <video><source> on post {video_id}")
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
        if page < 1 or page > _SITEMAP_COUNT:
            return []
        suffix = "" if page == 1 else str(page)
        try:
            response = self._get(f"{self.base_url}/fig_creator-sitemap{suffix}.xml")
        except Exception as exc:
            logger.debug(f"{self.key}: no fig_creator-sitemap{suffix}.xml: {exc}")
            return []

        accounts: list[DirectAccount] = []
        for url in re.findall(r"<loc>([^<]+)</loc>", response.text):
            match = _CREATOR_HREF_RE.match(url)
            if not match:
                continue
            handle = match.group(1)
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
            response = self._get(f"{self.base_url}/creator/{handle}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no creator page for {handle}: {exc}")
            return None

        tree = lxml_html.fromstring(response.text)
        headings = tree.xpath(
            "//h1[contains(concat(' ', normalize-space(@class), ' '), ' bb-section__title ')]"
            "//text()"
        )
        title = next((t.strip() for t in headings if t.strip()), "")
        display_name = re.sub(r"^Creator:\s*", "", title).strip() or _display(handle)

        images = tree.xpath("//article//img")
        avatar = images[0].get("src") if images else None

        if not images and not title:
            return None

        return DirectAccount(
            site=self.key,
            handle=handle,
            display_name=display_name,
            page_url=f"{self.base_url}/creator/{handle}/",
            avatar=avatar,
        )

    def account_videos(self, handle: str, page: int = 1) -> list[DirectVideo]:
        suffix = f"page/{page}/" if page and page > 1 else ""
        try:
            response = self._get(f"{self.base_url}/creator/{handle}/{suffix}")
        except Exception as exc:
            logger.debug(f"{self.key}: no creator page {page} for {handle}: {exc}")
            return []
        return _videos(response.text, self.base_url, self.key)


def _slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "_", (text or "").lower()).strip("_")


def _display(handle: str) -> str:
    return " ".join(part.capitalize() for part in re.split(r"[-_]+", handle) if part)


def _videos(page: str, base_url: str, key: str) -> list[DirectVideo]:
    """Every post card ("bb-card") on a creator's archive page."""

    tree = lxml_html.fromstring(page)
    videos: list[DirectVideo] = []
    seen: set[str] = set()

    for article in tree.xpath(
        "//article[contains(concat(' ', normalize-space(@class), ' '), ' bb-card ')]"
    ):
        heading_links = article.xpath(
            ".//h2[contains(concat(' ', normalize-space(@class), ' '), ' bb-card__title ')]/a[@href]"
        )
        if not heading_links:
            continue
        href = heading_links[0].get("href") or ""
        match = _POST_HREF_RE.match(href)
        if not match:
            continue
        video_id = match.group(1)
        if video_id in seen:
            continue
        seen.add(video_id)

        title = heading_links[0].text_content().strip() or "Untitled"

        images = article.xpath(".//img")
        thumbnail = images[0].get("src") if images else None

        dates = article.xpath(
            ".//span[contains(concat(' ', normalize-space(@class), ' '), ' bb-chip ')]/text()"
        )
        posted_at = next(
            (t.strip() for t in dates if re.search(r"\d{4}", t)), None
        )

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
