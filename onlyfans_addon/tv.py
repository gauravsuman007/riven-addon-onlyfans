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
from urllib.parse import quote

from fastapi import APIRouter, HTTPException, Query
from loguru import logger

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
                        "image": video.thumbnail or "",
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
