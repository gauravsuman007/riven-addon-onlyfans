"""Stored feeds: restoring them for a page, saving them back, keeping them warm.

A merged feed (`onlyfans_addon/feed.py`) costs a read of every site a
performer is on. Built at the moment a page opens, that is up to `DEADLINE`
seconds of waiting, every time the in-memory copy has expired. So feeds are
saved to `OnlyFansFeed` and a background job keeps the ones likely to be
opened fresh:

* saved performers,
* performers opened in the last `VIEWED_DAYS` days,
* the top `feed_top` by popularity and by trend.

Everyone else is built live on first open, as before -- and saved then, so
the second open is instant and the job picks them up as "recently opened".

THE JOB REBUILDS, IT DOES NOT TOP UP. New uploads arrive at the top of every
site's list, and inserting entries above what a reader has already paged past
would shift their offsets. A rebuild is a new list, installed in memory only
when nobody is scrolling the old one (`feed.put_feed`).
"""

from __future__ import annotations

import time
from datetime import timedelta
from typing import Callable

from loguru import logger
from sqlalchemy import or_, select

from program.db.db import db_session
from program.utils.time import utcnow

from onlyfans_addon import feed as feeds
from onlyfans_addon.config import settings as addon_settings
from onlyfans_addon.models import OnlyFansAccount, OnlyFansFeed
from onlyfans_addon.registry import registry


#: "Recently opened", for choosing what to keep warm.
VIEWED_DAYS = 30

#: Entries a background build reads down to. A page shows thirty; this is
#: several screens, so a reader rarely scrolls past the stored part, and
#: shallow enough that one build is a page or two per site.
DEPTH = 120

#: A background build can afford to wait for slow sites -- nobody is looking.
BUILD_DEADLINE = 45.0


class Inputs:
    """What building a performer's feed needs, read in one session."""

    __slots__ = ("account_id", "handle", "sources", "names")

    def __init__(self, account: OnlyFansAccount) -> None:
        self.account_id = account.id
        self.handle = account.handle
        self.sources = [(source.site, source.site_handle) for source in account.sources]
        self.names = feeds.name_words(
            account.display_name,
            account.handle,
            account.of_username,
            *(site_handle for _, site_handle in self.sources),
        )


def new_feed(inputs: Inputs, fetch_images: Callable) -> feeds.Feed:
    built = feeds.Feed(inputs.handle, inputs.sources, registry().services, inputs.names, fetch_images)
    built.built_at = utcnow()
    return built


def load(inputs: Inputs, fetch_images: Callable) -> feeds.Feed:
    """The stored feed if there is a usable one, else a new (empty) one.

    A stored feed older than twice the refresh age is not restored: it
    belongs to a performer the job is not keeping warm, and showing a week-old
    list as the current one would hide every upload since.
    """

    max_age = timedelta(hours=addon_settings().feed_max_age_hours * 2)

    with db_session() as session:
        row = session.get(OnlyFansFeed, inputs.account_id)
        if row is not None and utcnow() - row.built_at < max_age:
            state, built_at = row.state, row.built_at
        else:
            state = None

    if state is not None:
        restored = feeds.from_state(state, inputs.handle, registry().services, inputs.names, fetch_images)
        if restored is not None:
            restored.built_at = built_at
            return restored

    return new_feed(inputs, fetch_images)


def save(account_id: int, state: dict, entries: int, complete: bool, built_at) -> None:
    """Write a feed's state. Never raises: a failed save costs a rebuild, nothing more."""

    try:
        with db_session() as session:
            row = session.get(OnlyFansFeed, account_id)
            if row is None:
                row = OnlyFansFeed(account_id=account_id)
                session.add(row)
            row.state = state
            row.entries = entries
            row.complete = complete
            row.built_at = built_at
            row.saved_at = utcnow()
            session.commit()
    except Exception as exc:
        logger.warning(f"OnlyFans feed: could not save feed for account {account_id}: {exc}")


def snapshot(built: feeds.Feed) -> tuple[dict, int, bool]:
    """State to `save`. Call under the feed's lock."""

    return feeds.to_state(built), len(built.emitted), built.done


def progress(built: feeds.Feed) -> tuple[int, int]:
    """Changes whenever there is something new worth saving."""

    return len(built.emitted), sum(stream.page for stream in built.streams)


# --- Keeping feeds warm -----------------------------------------------------


def _targets(session, limit: int) -> list[int]:
    """Account ids whose feed is missing or stale, the most wanted first."""

    settings = addon_settings()
    now = utcnow()
    stale_before = now - timedelta(hours=settings.feed_max_age_hours)

    wanted: list[int] = []

    def add(ids) -> None:
        for account_id in ids:
            if account_id not in wanted:
                wanted.append(account_id)

    # Saved and recently opened first: those are the pages actually opened.
    add(
        session.execute(
            select(OnlyFansAccount.id)
            .where(
                or_(
                    OnlyFansAccount.saved.is_(True),
                    OnlyFansAccount.viewed_at >= now - timedelta(days=VIEWED_DAYS),
                )
            )
            .order_by(OnlyFansAccount.viewed_at.desc().nulls_last())
        ).scalars()
    )

    if settings.feed_top:
        for column in (OnlyFansAccount.popularity_score, OnlyFansAccount.trending_score):
            add(
                session.execute(
                    select(OnlyFansAccount.id)
                    .where(column.is_not(None))
                    .order_by(column.desc())
                    .limit(settings.feed_top)
                ).scalars()
            )

    if not wanted:
        return []

    built = dict(
        session.execute(
            select(OnlyFansFeed.account_id, OnlyFansFeed.built_at).where(
                OnlyFansFeed.account_id.in_(wanted)
            )
        ).all()
    )

    # Never built first (in wanted order), then the stalest.
    missing = [account_id for account_id in wanted if account_id not in built]
    stale = sorted(
        (account_id for account_id in wanted if account_id in built and built[account_id] < stale_before),
        key=lambda account_id: built[account_id],
    )
    return (missing + stale)[:limit]


def build_batch(fetch_images: Callable) -> int:
    """Build or rebuild one batch of stored feeds. Returns how many."""

    settings = addon_settings()

    with db_session() as session:
        ids = _targets(session, settings.feed_batch_size)
        inputs = [
            Inputs(account)
            for account in session.execute(
                select(OnlyFansAccount).where(OnlyFansAccount.id.in_(ids))
            ).scalars()
        ]

    built_count = 0
    started = time.monotonic()

    for item in inputs:
        if not item.sources:
            continue
        try:
            fresh = new_feed(item, fetch_images)
            with fresh.lock:
                fresh.fill(DEPTH, deadline=BUILD_DEADLINE)
                state, entries, complete = snapshot(fresh)
            save(item.account_id, state, entries, complete, fresh.built_at)
            feeds.put_feed(item.handle, fresh)
            built_count += 1
        except Exception as exc:
            logger.warning(f"OnlyFans feed: building {item.handle} failed: {exc}")

    if inputs:
        logger.info(
            f"OnlyFans: built {built_count} stored feeds in {time.monotonic() - started:.0f}s"
        )
    return built_count


def summary() -> dict:
    """How many feeds are stored, for the settings tab."""

    from sqlalchemy import func

    settings = addon_settings()
    stale_before = utcnow() - timedelta(hours=settings.feed_max_age_hours)
    with db_session() as session:
        stored = session.execute(select(func.count()).select_from(OnlyFansFeed)).scalar_one()
        fresh = session.execute(
            select(func.count()).select_from(OnlyFansFeed).where(OnlyFansFeed.built_at >= stale_before)
        ).scalar_one()
        waiting = len(_targets(session, 100000))
    return {"stored": stored, "fresh": fresh, "waiting": waiting}


__all__ = ["Inputs", "build_batch", "load", "new_feed", "progress", "save", "snapshot", "summary"]
