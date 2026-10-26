"""fapopedia.net -- a custom-CMS leak gallery, images only, no video of any
kind observed anywhere on the site.

**Not a tube, not WordPress.** The performer index is `/list/<letter>/`
(`a`-`z`), 100 cards a page, each a plain `<div class="shrt-pc">` linking
`/<slug>-nude-leaks/`. **Letter "a" alone states 415 pages** -- this is a
huge catalogue, and `list_accounts` deliberately does not try to walk all
of it: see the cap below.

**Every performer page is photos only.** Every account sampled states
"Count of nude photos" and nothing resembling a video count, no `<video>`
tag and no third-party embed appeared on any profile or post page
checked. `search`/`resolve` therefore always return `[]` -- there is
nothing here for either to do, which is the honest answer for a site with
no video, not a bug. `account_videos` stays at the base class's default
for the same reason.

**The thumbnail IS the full-size image, filename-mangled.** A profile
page's photo grid links `/<handle>/<id>.html` and shows a thumbnail at
`.../1000//t_<n>.jpg`; the full-size photo (confirmed on its own detail
page) is the identical path with the `t_` stripped --
`.../1000//<n>.jpg`. `account_images` derives the full URL from the grid
thumbnail directly and never opens the per-photo page, the same
local-rename shortcut `fapello.py` uses for its own `_300px` marker.

**`list_accounts`'s `page` is `(letter, internal sub-page group)`, capped
at 5 internal pages (500 accounts) per letter -- not the whole letter.**
Walking a real letter's full depth (415 pages measured on "a" alone) inside
one `list_accounts` call would be hundreds of requests for one page of the
contract; capped at 5, 26 external pages (one per letter) cover roughly
13,000 accounts, a meaningful slice rather than the full tens of thousands.
Documented rather than hidden: this index is deliberately incomplete, the
same honest trade `leakgallery.py` and `hornysimp.py` already accept for
their own un-paginated feeds.

**The page's own "Social" field is corrupted template output, not a
usable OnlyFans username.** Every profile checked renders
`href="https://onlyfans.com/https://onlyfans.com/<Display Name>"` --
the domain prefixed twice and the performer's *display name* (spaces and
all) substituted where a real username belongs, not a real lookup of
anything. `of_username` is never set from this field; surfacing it would
publish a guaranteed-wrong candidate on every single account.

**A heavily obfuscated anti-adblock script ships on every page** (a
`decodeURI` char-shift cipher feeding a URL-rewriter). It runs client-side
only and touches nothing this file reads -- every image, avatar and photo
link needed is already in the raw server response.
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
)


_LETTERS = "abcdefghijklmnopqrstuvwxyz"
#: See the module docstring -- not this letter's true last page.
_MAX_INTERNAL_PAGES = 5

_MODEL_HREF_RE = re.compile(r"^https://fapopedia\.net/([a-z0-9][a-z0-9\-]*)/$")
_RESERVED_SLUGS = {"list", "updates", "2257"}
_THUMB_FULLSIZE_RE = re.compile(r"/t_([^/]+)$")
#: A photo's own detail page -- `<handle>/<id>.html`. Selected on this href
#: shape rather than the surrounding `shrt-blk`/`shrt-pc` classes: the same
#: theme reuses those exact classes for an unrelated "More Models" promo
#: block lower on the page, and a class-only selector pulled in eight
#: stranger performers' avatars as if they were this account's own photos.
_PHOTO_HREF_RE = re.compile(r"^https://fapopedia\.net/[a-z0-9][a-z0-9\-]*/\d+\.html$")


class FapopediaScraper(DirectScraper):
    key = "fapopedia"
    name = "Fapopedia"
    base_url = "https://fapopedia.net"
    indexes_accounts = True

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        # No video anywhere on this site -- see the module docstring.
        return []

    def resolve(self, video_id: str) -> list[DirectSource]:
        return []

    # --- Performer accounts -------------------------------------------------

    def list_accounts(self, page: int = 1) -> list[DirectAccount]:
        index = max(page, 1) - 1
        if index >= len(_LETTERS):
            return []
        letter = _LETTERS[index]

        accounts: list[DirectAccount] = []
        seen: set[str] = set()
        for sub in range(1, _MAX_INTERNAL_PAGES + 1):
            suffix = f"{sub}/" if sub > 1 else ""
            try:
                response = self._get(f"{self.base_url}/list/{letter}/{suffix}")
            except Exception as exc:
                logger.debug(f"{self.key}: no /list/{letter}/{suffix}: {exc}")
                break

            batch = _accounts(response.text, self.base_url, self.key, seen)
            if not batch:
                break
            accounts.extend(batch)

        return accounts

    def account_profile(self, handle: str) -> DirectAccount | None:
        try:
            response = self._get(f"{self.base_url}/{handle}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no profile page for {handle}: {exc}")
            return None
        return _profile(response.text, self.base_url, self.key, handle)

    def account_images(self, handle: str, page: int = 1) -> list[DirectImage]:
        # The profile page states every photo at once on every account
        # sampled -- no further pagination observed. See the module
        # docstring for the one field (of_username) deliberately not read.
        if page and page > 1:
            return []

        try:
            response = self._get(f"{self.base_url}/{handle}/")
        except Exception as exc:
            logger.debug(f"{self.key}: no profile page for {handle}: {exc}")
            return []

        return _images(response.text, self.base_url)


def _accounts(page: str, base_url: str, key: str, seen: set[str]) -> list[DirectAccount]:
    tree = lxml_html.fromstring(page)
    accounts: list[DirectAccount] = []

    for link in tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' shrt-pc ')]/parent::a[@href]"
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
        avatar = images[0].get("src") if images else None
        names = link.xpath(".//p//text()")
        display_name = next((t.strip() for t in names if t.strip()), _display(handle))

        accounts.append(
            DirectAccount(
                site=key,
                handle=handle,
                display_name=display_name,
                page_url=urljoin(base_url + "/", href),
                avatar=urljoin(base_url + "/", avatar) if avatar else None,
            )
        )

    return accounts


def _profile(page: str, base_url: str, key: str, handle: str) -> DirectAccount | None:
    tree = lxml_html.fromstring(page)

    avatars = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' md-blk-pc ')]//img"
    )
    avatar = avatars[0].get("src") if avatars else None

    headings = tree.xpath("//h1//text()")
    display_name = next((t.strip() for t in headings if t.strip()), _display(handle))
    # The page title appends "Nude OnlyFans Leaks <year>" -- trimmed off
    # when present so the stored name matches the index card's own.
    display_name = re.sub(r"\s+Nude\s+OnlyFans\s+Leaks(\s+\d{4})?\s*$", "", display_name).strip()

    photo_count = None
    for item in tree.xpath(
        "//span[contains(., 'Count of nude photos')]/following-sibling::div//text()"
    ):
        digits = re.search(r"\d+", item)
        if digits:
            photo_count = int(digits.group())

    if not avatar and photo_count is None:
        return None

    return DirectAccount(
        site=key,
        handle=handle,
        display_name=display_name or _display(handle),
        page_url=f"{base_url}/{handle}/",
        avatar=urljoin(base_url + "/", avatar) if avatar else None,
        image_count=photo_count,
    )


def _images(page: str, base_url: str) -> list[DirectImage]:
    tree = lxml_html.fromstring(page)
    images: list[DirectImage] = []
    seen: set[str] = set()

    for link in tree.xpath("//a[@href]"):
        href = link.get("href") or ""
        if not _PHOTO_HREF_RE.match(href):
            continue

        thumbs = link.xpath(".//img")
        src = thumbs[0].get("src") if thumbs else None
        if not src:
            continue

        full = _THUMB_FULLSIZE_RE.sub(lambda m: "/" + m.group(1), src)
        full = urljoin(base_url + "/", full)
        if full in seen:
            continue
        seen.add(full)
        images.append(DirectImage(url=full, thumbnail=urljoin(base_url + "/", src)))

    return images


def _display(handle: str) -> str:
    return " ".join(part.capitalize() for part in handle.split("-"))
