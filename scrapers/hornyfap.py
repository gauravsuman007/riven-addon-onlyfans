"""hornyfap.tv -- KVS archive of OnlyFans content, fingerprint-checked and scrambled.

A sibling of `ultrathots.py`; read that file first for the family's findings.
This deployment combines both of the family's obstacles.

**Plain `requests` gets a 403**, for the same TLS-fingerprint reason as
`porn4fans.py` and `noodlemagazine.py`, so requests go through `curl_cffi`.

**Media URLs are scrambled**, so the ``function/0/`` unscrambler is live here
rather than insurance.

**The video path is singular** (``/video/<id>/``), and there are no image
galleries -- ``/albums/`` lists nothing.
"""

import re
from urllib.parse import urljoin, urlparse, urlunparse

from loguru import logger
from lxml import html as lxml_html
from curl_cffi import requests as curl_requests

from onlyfans_addon.scraper_api.base import (
    DirectAccount,
    DirectScraper,
    DirectSource,
    DirectVideo,
    parse_count,
    parse_duration,
)


_RESOLUTION_RE = re.compile(r"(\d{3,4})p", re.IGNORECASE)
_FILENAME_HEIGHT_RE = re.compile(r"(?<=_)\d{3,4}p(?=\.)", re.IGNORECASE)
_HASH_LENGTH = 32

#: Every rendition KVS can actually play is served by this handler. Anything
#: else in a `video_url` slot is the site substituting a page for a file.
_MEDIA_PATH = "/get_file/"

_SLUG_RE = re.compile(r"[^a-z0-9]+")
_VIDEO_ID_RE = re.compile(r"/videos?/(\d+)")
_MODEL_SLUG_RE = re.compile(r"/models/([^/?#]+)")

_IMPERSONATE = "chrome124"


class HornyFapScraper(DirectScraper):
    key = "hornyfap"
    name = "HornyFap"
    base_url = "https://hornyfap.tv"
    indexes_accounts = True

    def __init__(self) -> None:
        super().__init__()
        # Not `self.session`: that is a `requests.Session` (see base.py) and
        # this host answers one with a 403 on every path. `curl_cffi`'s TLS
        # layer is the entire point of using it -- see the module docstring.
        self._http = curl_requests.Session()

    def _get(self, url: str, **kwargs):
        """The base class's helper, over a fingerprinted transport.

        Overridden rather than called around so that every method inherited
        from the family template routes through `curl_cffi` by construction --
        a new call site cannot reintroduce the 403 by writing ordinary code.
        """

        from program.services.vpn import SCRAPING, vpn

        kwargs.setdefault("timeout", 25)
        response = self._http.get(
            url,
            impersonate=_IMPERSONATE,
            proxies=vpn().proxies_for(SCRAPING) or None,
            **kwargs,
        )
        response.raise_for_status()
        return response

    def search(self, query: str, limit: int = 20) -> list[DirectVideo]:
        slug = _SLUG_RE.sub("-", query.strip().lower()).strip("-")
        if not slug:
            return []
        response = self._get(f"{self.base_url}/search/{slug}/")
        return _videos(response.text, self.base_url, self.key, limit)

    def resolve(self, video_id: str) -> list[DirectSource]:
        response = self._get(f"{self.base_url}/video/{video_id}/-/")
        return _kvs_sources(response.text, self.base_url, self.key)

    # --- Performer accounts -------------------------------------------------
    #
    # `account_galleries` and `gallery_images` are left at the base class's
    # empty default; the module docstring says why for this site.

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
        # ``sort_by=post_date`` rather than the site's default: a feed the user
        # reads as chronological must not silently be ordered by popularity on
        # one site out of five.
        response = self._get(
            f"{self.base_url}/models/{handle}/{_page_suffix(page)}",
            params={"sort_by": "post_date"},
        )
        return _videos(response.text, self.base_url, self.key, limit=None)


def _page_suffix(page: int) -> str:
    """KVS paths take the page as a trailing segment, and omit it for page 1."""

    return f"{page}/" if page and page > 1 else ""


def _accounts(page: str, base_url: str, key: str) -> list[DirectAccount]:
    """Every performer card in a model index page.

    Keyed on the href shape rather than a class name -- see the module
    docstring. The ``title`` attribute carries the display name with its
    original casing and spacing ("BeriGalaxy"), which the slug has thrown away.
    """

    tree = lxml_html.fromstring(page)
    accounts: list[DirectAccount] = []
    seen: set[str] = set()

    for link in tree.xpath("//a[@title and @href]"):
        href = link.get("href") or ""
        match = _MODEL_SLUG_RE.search(href)
        if not match:
            continue
        handle = match.group(1)
        # The index links its own header and breadcrumb back at /models/, and
        # a card's handle can repeat across the grid and the sidebar.
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
                # "2 videos" on most of the family, a bare count on the rest.
                video_count=parse_count(_first_text(link, "card-item-text", "videos")),
            )
        )

    return accounts


def _profile(
    page: str, base_url: str, key: str, handle: str
) -> DirectAccount | None:
    """Avatar and bio from a performer's own page.

    Returns None rather than an empty account when the page has no avatar: the
    caller uses a None to mean "nothing to add", and an account carrying blank
    strings would overwrite good values gathered from a sibling site.
    """

    tree = lxml_html.fromstring(page)

    avatars = tree.xpath(
        "//img[contains(concat(' ', normalize-space(@class), ' '), ' posted-image ')]"
    )
    avatar = _src(avatars[0], base_url) if avatars else None

    headings = tree.xpath("//h1")
    display_name = headings[0].text_content().strip() if headings else handle

    # The description block is optional on this template and absent on most
    # accounts; an empty one must stay None, not "".
    descriptions = tree.xpath(
        "//div[contains(concat(' ', normalize-space(@class), ' '), ' description ')]"
    )
    bio = descriptions[0].text_content().strip() if descriptions else ""

    if not avatar and not bio:
        return None

    return DirectAccount(
        site=key,
        handle=handle,
        display_name=display_name or handle,
        page_url=f"{base_url}/models/{handle}/",
        avatar=avatar,
        bio=bio or None,
    )


def _videos(
    page: str, base_url: str, key: str, limit: int | None
) -> list[DirectVideo]:
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
                duration=parse_duration(_first_text(link, "card-duration", "duration")),
                views=parse_count(_first_text(link, "card-item-text", "views")),
            )
        )
        if limit is not None and len(videos) >= limit:
            break

    return videos


def _image_src(element, base_url: str) -> str | None:
    """First image under `element`, as an absolute URL.

    ``src`` is a base64 spacer on every lazy-loaded card, so ``data-original``
    is tried first. Some of these hosts serve protocol-relative URLs, hence the
    join rather than the raw value.
    """

    found = element.xpath(".//img")
    return _src(found[0], base_url) if found else None


def _src(image, base_url: str) -> str | None:
    source = (
        image.get("data-original")
        or image.get("data-src")
        or image.get("src")
        or ""
    )
    if not source or source.startswith("data:"):
        return None
    return urljoin(base_url + "/", source)


def _first_text(element, *class_names: str) -> str:
    """Text of the first descendant carrying any of `class_names`, in order.

    Several class names rather than one because this family is not consistent
    about them: the same duration badge is ``card-duration`` on one deployment
    and ``duration`` on the next, and the per-account video tally is
    ``card-item-text`` on one and ``videos`` on the others. Trying them in
    order keeps one helper honest across all five rather than silently
    returning "" -- which `parse_duration` turns into None, so a wrong class
    name presents as "this site does not report duration" rather than as a bug.

    XPath rather than a CSS selector: lxml's cssselect support is an optional
    dependency that is not installed in the runtime image.
    """

    for class_name in class_names:
        found = element.xpath(
            f".//*[contains(concat(' ', normalize-space(@class), ' '), ' {class_name} ')]"
        )
        if found:
            text = found[0].text_content().strip()
            if text:
                return text
    return ""


def _normalise_resolution(text: str | None) -> str | None:
    """Map a quality the site actually printed onto the project's label scale.

    Only a stated figure is accepted -- "4K"/"2160p" and plain heights. A bare
    "HD" badge carries no height and must never be guessed at; that is what
    the `hd` flag exists for.
    """

    if not text:
        return None
    cleaned = text.strip().lower()
    if cleaned in ("4k", "uhd", "2160"):
        return "2160p"
    if cleaned in ("fhd",):
        return "1080p"
    match = _RESOLUTION_RE.search(cleaned)
    return f"{match.group(1)}p" if match else None


def _license_token(code: str) -> str:
    """The digit sequence KVS derives from ``license_code`` to shuffle a hash."""

    modified = code.replace("$", "").replace("0", "1")
    centre = len(modified) // 2
    modified = str(4 * abs(int(modified[: centre + 1]) - int(modified[centre:])))
    return "".join(
        str((int(code[offset + i]) + int(modified[offset])) % 10)
        for offset in range(centre + 1)
        for i in range(1, 5)
    )


def _unscramble(url: str, code: str | None, key: str) -> str:
    """Undo the ``function/0/`` hash shuffle KVS applies to a media URL.

    Only the first 32 characters of the path's hash segment are permuted; the
    rest of the URL is untouched. A scrambled URL used as-is is a perfectly
    well-formed 404, so every failure path here returns "" rather than handing
    back a string that would fail later as an opaque playback error.
    """

    if not url.startswith("function/0/"):
        return url
    if not code:
        logger.debug(f"{key}: scrambled video_url but no license_code on the page")
        return ""

    parsed = urlparse(url[len("function/0/") :])
    parts = parsed.path.split("/")
    if len(parts) < 4:
        return ""
    try:
        token = _license_token(code)
        if len(token) < _HASH_LENGTH:
            return ""
        digest = parts[3][:_HASH_LENGTH]
        order = list(range(_HASH_LENGTH))
        accumulator = 0
        for src in reversed(range(_HASH_LENGTH)):
            accumulator += int(token[src])
            dest = (src + accumulator) % _HASH_LENGTH
            order[src], order[dest] = order[dest], order[src]
        parts[3] = "".join(digest[i] for i in order) + parts[3][_HASH_LENGTH:]
    except (IndexError, ValueError):
        logger.debug(f"{key}: license_code did not decode the media URL")
        return ""
    return urlunparse(parsed._replace(path="/".join(parts)))


def _kvs_sources(page: str, base_url: str, key: str) -> list[DirectSource]:
    """Every rendition in a KVS player block, best quality first.

    The primary ``video_url`` and the numbered ``video_alt_url`` entries have
    to be collected separately even though both can carry an empty numeric
    suffix: ``video_alt_url`` (unnumbered) has its own ``video_alt_url_text``
    label, and keying both on "" would attribute that label to the primary and
    leave the alternate unlabelled -- losing the only resolution the page
    states.
    """

    code_match = re.search(r"license_code:\s*'([^']+)'", page)
    code = code_match.group(1) if code_match else None

    alt_labels = dict(re.findall(r"video_alt_url(\d*)_text:\s*'([^']+)'", page))
    primary_label = re.search(r"video_url_text:\s*'([^']+)'", page)

    entries: list[tuple[str | None, str]] = [
        (None, raw) for raw in re.findall(r"video_url:\s*'([^']+)'", page)
    ]
    entries += re.findall(r"video_alt_url(\d*):\s*'([^']+)'", page)

    sources: list[DirectSource] = []
    seen: set[str] = set()
    for suffix, raw in entries:
        url = _unscramble(raw, code, key)
        if not url or url in seen:
            continue
        # A gated rendition is not withheld, it is *substituted*: the player
        # block carries `video_alt_url2: 'https://site/?login'` still labelled
        # "1080p". Taking the label at face value publishes the site's login
        # page as the highest-quality source, so the picker offers 1080p and
        # the player renders an HTML page as video. Only the media handler is
        # a real rendition.
        if _MEDIA_PATH not in url:
            logger.debug(f"{key}: skipping gated rendition {label_of(suffix, primary_label, alt_labels)!r}")
            continue
        seen.add(url)
        label = (
            (primary_label.group(1) if primary_label else "")
            if suffix is None
            else alt_labels.get(suffix, "")
        )
        # Several of these deployments ship no ``_text`` labels at all, but
        # still name the rendition in the file (``..._720p.mp4``). Falling
        # back to the filename is what keeps those sites from reporting every
        # rendition as an unlabelled "Source" with no height.
        named = _FILENAME_HEIGHT_RE.search(url)
        resolution = _normalise_resolution(label) or _normalise_resolution(
            named.group(0) if named else None
        )
        sources.append(
            DirectSource(
                url=url,
                label=label or resolution or "Source",
                resolution=resolution,
                # KVS checks Referer on the get_file handler and 403s without it.
                headers={"Referer": base_url + "/"},
            )
        )

    sources.sort(key=_rank, reverse=True)
    if not sources:
        logger.debug(f"{key}: no playable rendition in the player block")
    return sources


def label_of(
    suffix: str | None, primary_label, alt_labels: dict[str, str]
) -> str:
    """The label a player block gave one rendition, for logging a skip."""

    if suffix is None:
        return primary_label.group(1) if primary_label else ""
    return alt_labels.get(suffix, "")


def _rank(source: DirectSource) -> int:
    match = _RESOLUTION_RE.search(source.resolution or source.label or "")
    return int(match.group(1)) if match else 0
