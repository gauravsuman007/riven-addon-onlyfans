"""What a television draws for this add-on.

`riven-tv` is a second, JavaScript-free renderer for sets running engines from
about 2016, and it cannot run this add-on's ``ui/addon.js`` -- dynamic
``import()`` is Chromium 63 and the target is 53. So the add-on reaches that
surface the only way anything does there: it answers plain JSON and one
generic renderer over there draws it. The contract is in ``docs/tv.md``.

Three shapes, and they are the performer index reduced to what a panel across
a room and a directional pad can actually deal with:

* ``tv/browse``  -- the performer grid, searchable, paged by an opaque cursor.
* ``tv/detail``  -- one performer, and their videos grouped by the site each
  came from, which is the same grouping the web page uses.
* ``tv/play``    -- where the bytes for one video are.

WHAT IS DELIBERATELY MISSING: the galleries. The lightbox on the web page is a
keyboard-and-pointer affordance, image coverage across these sites is thin
(effectively one of them, a handful of pictures per gallery), and a television
is the worst of the surfaces for looking at stills. Videos are what a set is
for, so videos are what it gets.

PAGING IS A CURSOR, NOT A PAGE NUMBER. The television hands back whatever
string it was given last, so the encoding is private to this file -- it is the
offset today, and could become a keyset without the other side being told.
"""

from typing import Annotated, Any
from urllib.parse import quote, urlparse

import httpx
from fastapi import APIRouter, HTTPException, Query
from fastapi.responses import StreamingResponse
from loguru import logger

from program.services.vpn import STREAMING, VpnUnavailable, vpn

from onlyfans_addon.scraper_api.base import BROWSER_HEADERS

router = APIRouter(prefix="/tv", tags=["onlyfans-tv"])

#: How many performers one screenful holds. Larger than the web grid's page
#: because scrolling with a directional pad is slow and every "Show more" is a
#: round trip the viewer waits through, and small enough that the set is not
#: decoding two hundred avatars at once.
PAGE = 60

#: Videos asked of each site for one performer. One page per site, not all of
#: them: a performer can carry hundreds across four sites, and a television
#: that fetches the lot before drawing anything looks broken.
PER_SITE = 24


def _thumbnail(site: str, url: str | None) -> str:
    """The picture for one card, direct or proxied.

    Most of these hosts serve their own stills to anybody. Some do not:
    hornyfap answers **403 to a plain GET** -- not a referer check, which
    `referrerpolicy="no-referrer"` would have handled on the client, but a
    bot filter that wants a browser's headers. A television asking directly
    gets nothing, and a grid of twenty blank tiles reads as a page that
    failed rather than as a host being difficult.

    So a still is handed over as an absolute URL where that works, and as a
    path on this add-on's own mount where it does not -- which the television
    fetches back through itself. Deciding here rather than on the other side
    keeps the knowledge of which hosts misbehave with the code that knows
    these hosts.
    """

    if not url:
        return ""

    return (
        f"/api/v1/x/onlyfans/tv/thumb?site={quote(site, safe='')}&u={quote(url, safe='')}"
        if site in PROXY_THUMBNAILS
        else url
    )


#: Sites whose stills cannot be fetched by the viewer's device.
#:
#: A list rather than "proxy everything": proxying is a round trip through
#: this server per picture, and a grid is sixty of them. Add a site here when
#: its stills come back blank, and not before.
PROXY_THUMBNAILS = {"hornyfap"}


@router.get("/thumb", operation_id="onlyfans_tv_thumb")
async def tv_thumb(
    site: Annotated[str, Query(min_length=1, max_length=32)],
    u: Annotated[str, Query(min_length=8, max_length=1024)],
) -> StreamingResponse:
    """One still, fetched with a browser's headers.

    NOT AN OPEN PROXY, and the check is the whole point of the endpoint
    taking a site as well as a URL: the host must be the one that scraper
    serves, taken from its own `base_url`. Without that this route would
    fetch anything on the internet on request, from inside the household's
    network and, when streaming is routed, from the far end of the tunnel.
    """

    from onlyfans_addon.registry import service as of_registry

    scraper = of_registry().services.get(site)

    if scraper is None:
        raise HTTPException(status_code=404, detail="No such site")

    wanted = urlparse(u)
    allowed = urlparse(getattr(scraper, "base_url", "") or "")

    if wanted.scheme not in ("http", "https") or not wanted.netloc:
        raise HTTPException(status_code=400, detail="Not a fetchable image")

    if not allowed.netloc or wanted.netloc.lower() != allowed.netloc.lower():
        raise HTTPException(status_code=403, detail="Not this site's image")

    try:
        proxy = vpn().proxy_for(STREAMING)
    except VpnUnavailable as exc:
        raise HTTPException(status_code=503, detail=str(exc)) from exc

    client = httpx.AsyncClient(follow_redirects=True, timeout=20.0, proxy=proxy)

    try:
        upstream = await client.send(
            client.build_request(
                "GET",
                u,
                # Its own page as the referer: these filters want a request
                # that looks like it came from the site, which is exactly
                # what a browser on that site would send.
                headers={**BROWSER_HEADERS, "Referer": scraper.base_url},
            ),
            stream=True,
        )
    except Exception as exc:
        await client.aclose()
        logger.debug(f"OnlyFans thumb failed for {site}: {exc}")
        raise HTTPException(status_code=502, detail="Upstream connection failed")

    if upstream.status_code >= 400 or not upstream.headers.get(
        "content-type", ""
    ).startswith("image/"):
        status = upstream.status_code
        await upstream.aclose()
        await client.aclose()
        raise HTTPException(status_code=404, detail=f"No image ({status})")

    async def body():
        try:
            async for chunk in upstream.aiter_bytes():
                yield chunk
        finally:
            await upstream.aclose()
            await client.aclose()

    return StreamingResponse(
        body(),
        media_type=upstream.headers["content-type"],
        headers={"cache-control": "private, max-age=3600"},
    )


def _offset(cursor: str) -> int:
    try:
        value = int(cursor)
    except (TypeError, ValueError):
        return 0

    return max(0, value)


@router.get("/browse", operation_id="onlyfans_tv_browse")
def tv_browse(
    q: Annotated[str | None, Query(max_length=120)] = None,
    cursor: Annotated[str | None, Query(max_length=32)] = None,
) -> dict[str, Any]:
    """The performer grid.

    Reuses `list_accounts` rather than re-querying: the search there already
    matches the collapsed handle as well as the display name, which is the
    whole reason the collapsed form is stored, and a second query here would
    be a second set of rules for the same box.
    """

    from onlyfans_addon.router import list_accounts

    offset = _offset(cursor or "")
    page = list_accounts(search=q, saved=None, limit=PAGE, offset=offset)

    cards = [
        {
            "id": account.handle,
            "title": account.display_name,
            # The number of archives that carry them, which is also what the
            # grid is ordered by -- so the ordering is legible rather than
            # mysterious.
            "subtitle": f"{account.source_count} sites"
            if account.source_count != 1
            else "1 site",
            "image": account.avatar_url or "",
            "action": "open",
        }
        for account in page.items
    ]

    return {
        "title": "OnlyFans",
        "searchable": True,
        "placeholder": "Search performers",
        "sections": [{"cards": cards}] if cards else [],
        "cursor": str(offset + PAGE) if offset + PAGE < page.total else None,
        "empty": "No performers matched that."
        if (q or "").strip()
        else "No performers indexed yet.",
    }


@router.get("/detail", operation_id="onlyfans_tv_detail")
def tv_detail(id: Annotated[str, Query(min_length=1, max_length=128)]) -> dict[str, Any]:
    """One performer: who they are, then their videos grouped by site.

    EVERY SITE IS FETCHED HERE, where the web page makes each one a button the
    viewer presses. That difference is the remote: a page of buttons that each
    load a section is fine with a pointer and tedious with a directional pad,
    and the sections are what the viewer came for. A site that fails is named
    in the facts rather than raising -- the other three still have videos on
    them, and an error page would throw those away too.
    """

    from onlyfans_addon.router import account_videos, get_account

    try:
        account = get_account(id)
    except HTTPException:
        raise
    except Exception as exc:
        logger.warning(f"OnlyFans TV: {id} could not be read: {exc}")
        raise HTTPException(status_code=404, detail="No such performer") from exc

    lines: list[str] = []

    if account.bio:
        # One line, not the whole bio. These run to twenty or forty lines of
        # marketing copy with a break between each, and the renderer on the
        # other side has no way to collapse one.
        flattened = " ".join(account.bio.split())
        lines.append(flattened[:220] + ("…" if len(flattened) > 220 else ""))

    counts = [
        (account.posts_count, "posts"),
        (account.photos_count, "photos"),
        (account.videos_count, "videos"),
        (account.likes_count, "likes"),
    ]
    figures = [f"{value:,} {label}" for value, label in counts if value]

    if figures:
        lines.append(" · ".join(figures))

    sections: list[dict[str, Any]] = []
    failed: list[str] = []

    for source in account.sources:
        try:
            videos = account_videos(id, site=source.site, page=1)
        except Exception as exc:
            logger.debug(f"OnlyFans TV: {source.site} failed for {id}: {exc}")
            failed.append(source.site)
            continue

        if not videos:
            continue

        sections.append(
            {
                "title": source.site,
                "cards": [
                    {
                        # Opaque to the television and handed back to
                        # `tv/play` verbatim. A colon is safe: the id travels
                        # in a query string, never as a path segment.
                        "id": f"{video.site}:{video.video_id}",
                        "title": video.title,
                        "image": _thumbnail(video.site, video.thumbnail),
                        "duration": int(video.duration or 0),
                        "badges": [
                            value
                            for value in (
                                str(video.resolution)
                                if video.resolution
                                else ("HD" if video.hd else ""),
                                f"{int(video.views):,} views" if video.views else "",
                            )
                            if value
                        ],
                        "action": "play",
                    }
                    for video in videos[:PER_SITE]
                ],
            }
        )

    if failed:
        lines.append(f"Could not read: {', '.join(sorted(failed))}")

    return {
        "title": account.display_name,
        "subtitle": f"@{account.of_username or account.handle}",
        "image": account.avatar_url or "",
        "lines": lines,
        "sections": sections,
    }


@router.get("/play", operation_id="onlyfans_tv_play")
def tv_play(id: Annotated[str, Query(min_length=3, max_length=256)]) -> dict[str, Any]:
    """Where the bytes for one card are.

    A PATH on this add-on's own mount, never the CDN's URL. These URLs expire
    and are bound to whoever fetched them, so a television handed one plays
    for a while and then stops with a 403 and nothing on screen to explain it.
    The proxy re-resolves per range request, which is also what makes a seek
    work an hour in.

    No title and no duration: resolving a video is a live fetch that yields a
    URL and a MIME type, so the television keeps the title from the card that
    was pressed -- the one it has already shown the viewer.
    """

    site, _, video_id = id.partition(":")

    if not site or not video_id:
        raise HTTPException(status_code=404, detail="No such video")

    return {
        "stream": (
            "/api/v1/x/onlyfans/stream"
            f"?site={quote(site, safe='')}&video_id={quote(video_id, safe='')}&index=0"
        ),
        "content_type": "video/mp4",
    }
