"""Building and enriching the performer index.

Two passes, deliberately separate.

`sync` walks each site's model index and records who is there. It is wide and
cheap: one request per page, 12-25 accounts each, and no per-account requests
at all. `enrich_batch` is narrow and expensive: one request per account, for
the avatar and bio that only exist on the account's own page.

Splitting them is what keeps the weekly job bounded. Enriching inline would
turn a five-site sync into tens of thousands of requests in one run; instead
the index fills immediately and the artwork arrives over the following hours,
prioritised so that accounts a user saved are done first.

The failure model throughout is the one the rest of this codebase uses:
degrade, never raise. A site that is down costs its own accounts and nothing
else, and a run that dies halfway leaves everything it already committed.
"""

import bisect
import re
from datetime import datetime, timedelta

from loguru import logger
from sqlalchemy import delete, func, select, update

from program.db.db import db_session
from onlyfans_addon.models import (
    OnlyFansAccount,
    OnlyFansAccountSource,
    OnlyFansAccountStat,
    OnlyFansSyncRun,
)
from onlyfans_addon.config import settings as addon_settings
from program.utils.time import utcnow


_COLLAPSE_RE = re.compile(r"[^a-z0-9]+")

#: Handles shorter than this are almost always a parsing accident -- a
#: pagination link read as a performer, an empty slug -- rather than a real
#: account. Cheap guard on the way in, because a junk row is far more work to
#: find and remove later than to refuse now.
_MIN_HANDLE_LENGTH = 2


def normalise_handle(value: str) -> str:
    """The identity a performer is deduplicated on.

    Casefolded and stripped to alphanumerics, so ``Sophie Rain``,
    ``sophie-rain`` and ``sophie_rain`` are one account. Deliberately exact
    once collapsed and never fuzzy: merging two people who happen to have
    similar handles is silent and unrecoverable, and afterwards there is no
    way to tell which site contributed what. Refusing to guess is the same
    stance `studios.pick_site` takes for the same reason.
    """

    return _COLLAPSE_RE.sub("", (value or "").casefold())


class OnlyFansService:
    """The performer index: who exists, and which sites carry them."""

    def __init__(self) -> None:
        self.initialized = False

        if not self.settings.enabled:
            return

        self.initialized = True
        logger.success("OnlyFans performer index initialized!")

    @property
    def settings(self):
        """Read through to the live settings, never a snapshot.

        Binding these in `__init__` looks harmless and is not: a save replaces
        the settings object, so a long-lived service goes on reading the
        values it was constructed with. That is how enabling the profile
        lookup did nothing at all -- the switch was saved, read back as true,
        and the service kept consulting its copy until the next restart. It
        is the same shape as the scheduler bug that made every editable
        interval a no-op, and the same fix: do not keep a copy.
        """

        return addon_settings()

    # --- Building the index -------------------------------------------------

    def sync(self, sites: list[str] | None = None) -> int:
        """Walk each configured site's model index. Returns accounts touched.

        `sites` narrows the run to a subset, which is what the per-site "run
        now" button in Settings uses. Unknown names are ignored rather than
        rejected: the list is configuration and a plugin can be removed from
        the folder between the page rendering and the button being pressed.
        """

        from onlyfans_addon.registry import registry

        scrapers = registry().services
        wanted = [key for key in self.settings.sites if sites is None or key in sites]
        touched = 0

        for key in wanted:
            scraper = scrapers.get(key)

            if scraper is None:
                # Not an error: the sites list is configuration and a plugin
                # can be disabled from the Plugins tab at any time.
                logger.debug(f"OnlyFans: no scraper named {key}, skipping")
                continue

            if not getattr(scraper, "indexes_accounts", False):
                logger.debug(f"OnlyFans: {key} does not index accounts, skipping")
                continue

            # Each site gets its own guard. With five sources, letting one
            # failure end the run would mean a single dead site costs the
            # other four their weekly update -- and the sites in this family
            # go down and change domains often.
            try:
                touched += self._sync_site(key, scraper)
            except Exception as exc:
                logger.error(f"OnlyFans: {key} index failed: {exc}")
                _record(key, state="failed", error=str(exc)[:500], finished=True)

        logger.info(f"OnlyFans: indexed {touched} accounts")
        return touched

    def _sync_site(self, key: str, scraper) -> int:
        """One site's index, paged until the site says there is no more.

        These indexes are deeper than they look -- measured 2026-09-12:
        ultrathots 155 pages, hornyfap 246, porn4fans 66, porntn 8, notfans 2
        -- and each full walk costs about twenty seconds, so the page cap is a
        runaway guard rather than a budget. It was 3, which silently truncated
        the index to 223 accounts out of roughly eight thousand.
        """

        seen: set[str] = set()
        touched = 0
        created = 0
        page = 0

        _record(key, state="running", started=True, pages=0, seen=0, new=0, error=None)

        for page in range(1, self.settings.max_pages_per_site + 1):
            try:
                accounts = scraper.list_accounts(page)
            except Exception as exc:
                # THE END OF THE INDEX IS A 404, not an empty page. Four of
                # the five sites answer the page after the last one with a
                # 404, which reads as a site failure and used to lose the
                # whole site's count and log an error for an ordinary
                # outcome. Only a first-page failure is a real failure.
                if page > 1 and _is_end_of_index(exc):
                    logger.debug(f"OnlyFans: {key} index ends at page {page - 1}")
                    break
                raise

            if not accounts:
                break

            # A site that has run out of accounts may also serve the last page
            # again rather than 404ing, so "no new handles" is the other end
            # of the index.
            fresh = [a for a in accounts if a.handle not in seen]
            if not fresh:
                break
            seen.update(a.handle for a in fresh)

            for account in fresh:
                stored, is_new = self._store(key, account)
                touched += stored
                created += is_new

            # Per page, not per run: a walk of two hundred pages that reports
            # nothing until it finishes cannot answer "is this moving", which
            # is the only question anyone has while it runs.
            _record(key, pages=page, seen=len(seen), new=created)

        _record(
            key,
            state="ok",
            finished=True,
            pages=page,
            seen=len(seen),
            new=created,
            error=None,
        )
        logger.debug(
            f"OnlyFans: {key} walked {page} pages, {len(seen)} accounts, {created} new"
        )
        return touched

    def _store(self, key: str, account) -> tuple[bool, bool]:
        """Upsert one account and its source row. Returns (stored, created).

        The two are separate because a re-run must be legible: "3859 seen, 0
        new" says the walk worked and nothing had changed, which a single
        number cannot.

        One session and one commit per account rather than per run: a sync
        that dies on its four-thousandth account keeps the first three
        thousand nine hundred and ninety-nine.
        """

        handle = normalise_handle(account.handle)

        if len(handle) < _MIN_HANDLE_LENGTH:
            logger.debug(f"OnlyFans: {key} yielded unusable handle {account.handle!r}")
            return False, False

        try:
            with db_session() as session:
                existing = session.execute(
                    select(OnlyFansAccount).where(OnlyFansAccount.handle == handle)
                ).scalar_one_or_none()
                created = existing is None

                if existing is None:
                    existing = OnlyFansAccount(
                        handle=handle,
                        display_name=account.display_name or account.handle,
                        avatar_url=account.avatar,
                        bio=account.bio,
                    )
                    session.add(existing)
                    session.flush()
                else:
                    # `or` per field, so a site that carries no avatar cannot
                    # blank one already found on a sibling site. Three of the
                    # five render "no image" for every model, which makes this
                    # the normal case rather than an edge one.
                    existing.avatar_url = existing.avatar_url or account.avatar
                    existing.bio = existing.bio or account.bio

                existing.refreshed_at = utcnow()

                source = session.execute(
                    select(OnlyFansAccountSource).where(
                        OnlyFansAccountSource.account_id == existing.id,
                        OnlyFansAccountSource.site == key,
                    )
                ).scalar_one_or_none()

                if source is None:
                    source = OnlyFansAccountSource(
                        account_id=existing.id, site=key
                    )
                    session.add(source)

                # The site's own slug, not the collapsed handle: it is what
                # this site's URLs are built from and cannot be derived back.
                source.site_handle = account.handle
                source.page_url = account.page_url
                source.video_count = account.video_count
                source.image_count = account.image_count
                source.refreshed_at = utcnow()

                session.flush()
                # Recounted from the table rather than incremented: an
                # increment is only correct the first time a site contributes
                # an account, and a re-run of the sync would otherwise turn
                # this into a count of how many times the job has run.
                existing.source_count = (
                    session.execute(
                        select(func.count())
                        .select_from(OnlyFansAccountSource)
                        .where(OnlyFansAccountSource.account_id == existing.id)
                    ).scalar_one()
                )

                session.commit()
                return True, created
        except Exception as exc:
            logger.debug(f"OnlyFans: could not store {key}:{account.handle}: {exc}")
            return False, False

    # --- Ranking ------------------------------------------------------------
    #
    # A third pass, and separate from the other two for the same reason they
    # are separate from each other. `sync` is wide and cheap, `enrich_batch`
    # is narrow and expensive per account, and this one is narrow, expensive
    # AND periodic: it has to come back to the same account repeatedly,
    # because the thing it measures is a rate of change.
    #
    # WHY NONE OF THIS COMES FROM ONLYFANS.COM. There is no public directory,
    # chart or leaderboard on the platform -- discovery happens off it -- so
    # there is nothing to scrape that ranks creators. The profile API this
    # add-on already uses reports `likes_count`, which is a lifetime counter
    # that only ever grows: it says "big", never "hot", and it is populated
    # only for the minority of accounts the profile pass resolved. Ordering by
    # it would rank "enriched" above "popular". See docs/recommendations.md.

    def stats_batch(self, limit: int | None = None) -> int:
        """Sample view counts for accounts whose figures are stale.

        One request per account per site: the newest page of that site's feed
        for that performer, which is 12-25 videos with a view count on each.
        The scrapers already parse those into `DirectVideo.views` -- nothing
        used to keep them.

        Deliberately a sample. Summing every video of every performer is a
        request per page per account per site, which is hundreds of thousands
        of requests to produce a ranking that comes out the same. It is also
        the better measurement for these rails: a Trending row should not be
        decided by a back catalogue nobody is watching.

        Returns accounts attempted, not accounts measured. A site that answers
        nothing is a normal outcome.
        """

        from onlyfans_addon.registry import registry

        limit = limit or self.settings.stats_batch_size
        scrapers = registry().services
        cutoff = utcnow() - timedelta(days=self.settings.stats_max_age_days)

        with db_session() as session:
            pending = (
                session.execute(
                    select(OnlyFansAccount)
                    .where(
                        (OnlyFansAccount.stats_checked_at.is_(None))
                        | (OnlyFansAccount.stats_checked_at < cutoff)
                    )
                    # Saved accounts first, then the ones the most sites agree
                    # exist, then the longest unmeasured. The last clause is
                    # what makes this a rotation rather than a queue that only
                    # ever serves the top of the index.
                    .order_by(
                        OnlyFansAccount.saved.desc(),
                        OnlyFansAccount.source_count.desc(),
                        OnlyFansAccount.stats_checked_at.asc().nulls_first(),
                    )
                    .limit(limit)
                )
                .scalars()
                .all()
            )
            account_ids = [account.id for account in pending]

        attempted = 0

        for account_id in account_ids:
            try:
                self._stats_one(account_id, scrapers)
                attempted += 1
            except Exception as exc:
                logger.debug(f"OnlyFans: stats failed for {account_id}: {exc}")

        logger.debug(f"OnlyFans: sampled view counts for {attempted} accounts")
        return attempted

    def _stats_one(self, account_id: int, scrapers: dict) -> None:
        """Sample one account across every site that carries it.

        `stats_checked_at` is stamped whatever happens, success or failure,
        for the same reason `of_checked_at` is: a batch that only stamps on
        success re-selects whatever keeps failing on every run and never
        reaches the rest of the index.
        """

        with db_session() as session:
            account = session.get(OnlyFansAccount, account_id)

            if account is None:
                return

            now = utcnow()

            for source in account.sources:
                scraper = scrapers.get(source.site)

                if scraper is None:
                    continue

                try:
                    videos = scraper.account_videos(source.site_handle, 1) or []
                except Exception as exc:
                    logger.debug(
                        f"OnlyFans: {source.site} gave no feed for "
                        f"{source.site_handle}: {exc}"
                    )
                    continue

                # Only videos the site actually put a number on. Counting a
                # missing view count as zero would make a site that does not
                # publish them look like a site nobody watches.
                counted = [video.views for video in videos if video.views is not None]

                if not counted:
                    continue

                source.recent_views = sum(counted)
                source.sampled_videos = len(counted)

                session.add(
                    OnlyFansAccountStat(
                        account_id=account.id,
                        site=source.site,
                        captured_at=now,
                        recent_views=source.recent_views,
                        sampled_videos=source.sampled_videos,
                        video_count=source.video_count,
                    )
                )

            account.stats_checked_at = now
            session.commit()

    def rescore(self) -> int:
        """Recompute every account's popularity and trending score.

        Wholesale rather than incremental, and that is what makes it cheap:
        both scores are *relative*, so one account's new figures move everyone
        else's rank anyway. Roughly two queries and a sort over the index.

        Returns the number of accounts given a popularity score.
        """

        with db_session() as session:
            rows = session.execute(
                select(
                    OnlyFansAccountSource.account_id,
                    OnlyFansAccountSource.site,
                    OnlyFansAccountSource.recent_views,
                ).where(OnlyFansAccountSource.recent_views.is_not(None))
            ).all()

            if not rows:
                logger.debug("OnlyFans: nothing sampled yet, nothing to score")
                return 0

            # NORMALISED WITHIN EACH SITE BEFORE ANYTHING IS COMBINED, and
            # this is not a refinement. The five sites have wildly different
            # traffic; on raw view counts the biggest one dictates the entire
            # ranking and a performer carried only by the small sites can
            # never place, however well they do there.
            per_site: dict[str, list[int]] = {}

            for _, site, views in rows:
                per_site.setdefault(site, []).append(views)

            for values in per_site.values():
                values.sort()

            ranked: dict[int, list[float]] = {}

            for account_id, site, views in rows:
                ranked.setdefault(account_id, []).append(
                    _percentile(per_site[site], views)
                )

            trending = self._trending_deltas(session)
            scored = self._apply_scores(session, ranked, trending)

            # Pruned here rather than in its own job: this is the only thing
            # that reads the series, so it is the only thing that knows what
            # is safe to drop. The table grows by (accounts x sites) per pass
            # and would otherwise grow forever.
            session.execute(
                delete(OnlyFansAccountStat).where(
                    OnlyFansAccountStat.captured_at
                    < utcnow() - timedelta(days=self.settings.stats_retention_days)
                )
            )
            session.commit()

        logger.info(f"OnlyFans: scored {scored} accounts")
        return scored

    def _trending_deltas(self, session) -> dict[int, float]:
        """How much each account's sampled views grew over the trailing week.

        Paired per site and only where BOTH ends exist. A site that was not
        reachable when one of the two snapshots was taken contributes nothing
        rather than contributing a collapse -- which is the whole reason the
        series is stored per site instead of pre-summed.
        """

        window = self.settings.trending_window_days
        now = utcnow()
        older_than = now - timedelta(days=window)
        # A floor as well as a ceiling: without one, an account measured for
        # the first time three months ago and again today would read as a
        # week's growth.
        newer_than = now - timedelta(days=window * 3)

        # The earliest snapshot still inside the window, per account per site.
        earliest = (
            select(
                OnlyFansAccountStat.account_id,
                OnlyFansAccountStat.site,
                func.min(OnlyFansAccountStat.captured_at).label("captured_at"),
            )
            .where(
                OnlyFansAccountStat.captured_at <= older_than,
                OnlyFansAccountStat.captured_at >= newer_than,
                OnlyFansAccountStat.recent_views.is_not(None),
            )
            .group_by(OnlyFansAccountStat.account_id, OnlyFansAccountStat.site)
            .subquery()
        )

        before: dict[tuple[int, str], int] = {
            (row.account_id, row.site): row.recent_views
            for row in session.execute(
                select(
                    OnlyFansAccountStat.account_id,
                    OnlyFansAccountStat.site,
                    OnlyFansAccountStat.recent_views,
                ).join(
                    earliest,
                    (OnlyFansAccountStat.account_id == earliest.c.account_id)
                    & (OnlyFansAccountStat.site == earliest.c.site)
                    & (OnlyFansAccountStat.captured_at == earliest.c.captured_at),
                )
            ).all()
        }

        if not before:
            return {}

        deltas: dict[int, float] = {}

        for account_id, site, views in session.execute(
            select(
                OnlyFansAccountSource.account_id,
                OnlyFansAccountSource.site,
                OnlyFansAccountSource.recent_views,
            ).where(OnlyFansAccountSource.recent_views.is_not(None))
        ).all():
            was = before.get((account_id, site))

            if was is None:
                continue

            # DAMPED BY THE BASE IT GREW FROM. On absolute delta a huge back
            # catalogue wins every week without doing anything interesting;
            # this asks "how much did it grow relative to its own size",
            # which is what puts a small account that doubled above a large
            # one that moved a percent. The constant stops a performer with
            # almost no views turning a handful into an enormous ratio.
            deltas[account_id] = deltas.get(account_id, 0.0) + (
                (views - was) / (was + _TRENDING_FLOOR)
            )

        return deltas

    def _apply_scores(
        self,
        session,
        ranked: dict[int, list[float]],
        trending: dict[int, float],
    ) -> int:
        """Write both scores onto the accounts."""

        # Rank-normalised too, so the two scores are on one scale and a rail
        # can be read as a percentile in both cases.
        trend_sorted = sorted(trending.values())
        scored = 0

        # EVERY account, not just the measured ones. Walking the whole table is
        # what lets a score be CLEARED: an account whose sites stopped
        # reporting view counts has to drop out of the rails, and a pass that
        # only visited the measured ones could never do that -- it would keep
        # whatever rank it was last given, forever, with nothing behind it.
        #
        # Two columns rather than whole objects, because `sources` is a
        # selectin relationship: loading the entities here would fetch every
        # source row for every account in the index to read one integer.
        updates = []

        for account_id, source_count in session.execute(
            select(OnlyFansAccount.id, OnlyFansAccount.source_count)
        ).all():
            sites = ranked.get(account_id)

            if not sites:
                updates.append(
                    {
                        "id": account_id,
                        "popularity_score": None,
                        "trending_score": None,
                    }
                )
                continue

            demand = sum(sites) / len(sites)

            # SATURATING, AND KEPT SMALL ON PURPOSE. `source_count` tops out
            # at five and gets there fast, so weighted any higher it stops
            # being a tie-breaker and starts being the ranking -- and then
            # every five-site account outranks a two-site one that is
            # genuinely surging.
            breadth = min(source_count, 5) / 5

            updates.append(
                {
                    "id": account_id,
                    "popularity_score": 0.85 * demand + 0.15 * breadth,
                    "trending_score": (
                        _percentile(trend_sorted, trending[account_id])
                        if account_id in trending
                        else None
                    ),
                }
            )
            scored += 1

        if updates:
            # One executemany keyed on the primary key, rather than a
            # statement per account. The index is tens of thousands of rows
            # and this runs on an interval.
            session.execute(update(OnlyFansAccount), updates)

        return scored

    # --- Enrichment ---------------------------------------------------------

    def enrich_batch(self, limit: int | None = None) -> int:
        """Fetch profiles for accounts that still have no artwork.

        Ordered so that the accounts someone actually follows are done first,
        then the ones the most sites agree exist. Returns accounts attempted,
        not accounts improved -- a miss is a normal outcome here.
        """

        from onlyfans_addon.registry import registry

        limit = limit or self.settings.enrich_batch_size
        scrapers = registry().services

        # An account still needs work if it has no picture at all -- or if the
        # picture it has was borrowed from an archive site and its own profile
        # has not been looked for yet. The second half is conditional on the
        # setting for a reason: with the profile pass off, nothing ever stamps
        # `of_checked_at`, so an unconditional clause would re-select the same
        # accounts forever and the ones with no picture would never come up.
        wanted = OnlyFansAccount.avatar_url.is_(None)

        if self.settings.onlyfans_enrich:
            wanted = wanted | OnlyFansAccount.of_checked_at.is_(None)

        with db_session() as session:
            pending = (
                session.execute(
                    select(OnlyFansAccount)
                    .where(wanted)
                    .order_by(
                        OnlyFansAccount.saved.desc(),
                        # Nothing at all before merely-borrowed.
                        OnlyFansAccount.avatar_url.is_(None).desc(),
                        OnlyFansAccount.source_count.desc(),
                    )
                    .limit(limit)
                )
                .scalars()
                .all()
            )
            account_ids = [account.id for account in pending]

        attempted = 0
        for account_id in account_ids:
            try:
                if self._enrich_one(account_id, scrapers):
                    attempted += 1
            except Exception as exc:
                logger.debug(f"OnlyFans: enrichment failed for {account_id}: {exc}")

        return attempted

    def _enrich_one(self, account_id: int, scrapers: dict) -> bool:
        with db_session() as session:
            account = session.get(OnlyFansAccount, account_id)

            if account is None:
                return False

            # THE PERFORMER'S OWN PROFILE FIRST, because it is the only
            # source here that is actually about the person rather than about
            # one archive's copy of them: real picture, real bio, real counts.
            # Everything below is a substitute for it.
            if self.settings.onlyfans_enrich and account.of_checked_at is None:
                self._apply_onlyfans_profile(account)

            for source in account.sources:
                scraper = scrapers.get(source.site)

                if scraper is None:
                    continue

                profile = scraper.account_profile(source.site_handle)

                if profile is not None:
                    if profile.avatar and not account.avatar_url:
                        account.avatar_url = profile.avatar
                        # Borrowed: the performer's own profile picture
                        # replaces it if one is ever found.
                        account.avatar_from_site = True

                    account.bio = account.bio or profile.bio

                if account.avatar_url:
                    break

                # THE NEWEST VIDEO'S THUMBNAIL, as the avatar of last resort.
                #
                # Three of the five sites render "no image" for every model in
                # their index AND on the model's own page, so an account
                # carried only by those had no picture at all and fell back to
                # its initials -- which was most of the index. Every one of
                # them does carry video thumbnails, and a still from the
                # performer's own content is a far better answer than two
                # letters.
                #
                # Stored in the same column deliberately: the card wants "a
                # picture of this person", and keeping a second column for
                # "but it came from a video" would have every reader choose
                # between them identically.
                try:
                    videos = scraper.account_videos(source.site_handle, 1)
                except Exception as exc:
                    logger.debug(f"OnlyFans: {source.site} videos failed: {exc}")
                    continue

                for video in videos:
                    if video.thumbnail:
                        account.avatar_url = video.thumbnail
                        account.avatar_from_site = True
                        break

                if account.avatar_url:
                    break

            account.refreshed_at = utcnow()
            session.commit()
            return True

    # --- The performer's own profile ----------------------------------------

    #: Candidates tried per account before giving up. Each is one request, and
    #: the index runs to thousands of accounts, so this is a budget rather
    #: than an exhaustive search: the first two forms cover almost everything
    #: and the tail is guesswork that costs the same as a hit.
    _MAX_CANDIDATES = 4

    def _of_candidates(self, account: OnlyFansAccount) -> list[str]:
        """The usernames this account might have on onlyfans.com.

        `handle` has been stripped to alphanumerics so that three sites'
        spellings collapse to one identity, which makes it exactly wrong as a
        URL for anyone whose real username contains a dot or an underscore.
        The sites' own slugs usually preserve the separator, so they go first;
        the collapsed form is the fallback, and the last two are the two
        separators OnlyFans actually allows, reinstated.
        """

        candidates: list[str] = []

        for source in account.sources:
            slug = (source.site_handle or "").strip().strip("/")

            # Archive slugs are hyphenated by convention; OnlyFans usernames
            # cannot contain a hyphen, so a hyphenated slug is the site's
            # spelling and not a username.
            if slug and "-" not in slug:
                candidates.append(slug)

        candidates.append(account.handle)
        candidates.append(account.handle.replace(" ", "_"))

        for source in account.sources:
            slug = (source.site_handle or "").strip().strip("/")

            if slug and "-" in slug:
                candidates.extend([slug.replace("-", "_"), slug.replace("-", ".")])

        seen: list[str] = []
        for candidate in candidates:
            if candidate and candidate.casefold() not in [
                value.casefold() for value in seen
            ]:
                seen.append(candidate)

        return seen[: self._MAX_CANDIDATES]

    def _apply_onlyfans_profile(self, account: OnlyFansAccount) -> None:
        """Fill the account from onlyfans.com. Never raises.

        The stamp is the subtle part. `of_checked_at` means "asked and
        answered", so it is written for a hit and for a definitive 404 -- but
        NOT when every candidate merely failed. A rate limit or a signing
        rotation looks like a miss from here, and stamping those would
        permanently write off every account the pass happened to reach during
        the outage.
        """

        from onlyfans_addon import profile as of_profile

        found: dict | None = None
        definitive = False

        try:
            for candidate in self._of_candidates(account):
                outcome, data = of_profile.profile(candidate)

                if outcome == "ok" and data:
                    found = data
                    definitive = True
                    break

                if outcome == "missing":
                    # This candidate is not an account; the next one still
                    # might be. Only meaningful once they ALL say so.
                    definitive = True
                    continue

                # "error" -- we do not know. Stop, and stamp nothing.
                definitive = False
                break
        except Exception as exc:
            logger.debug(f"OnlyFans: profile lookup failed for {account.handle}: {exc}")
            return

        if definitive:
            account.of_checked_at = utcnow()

        if not found:
            return

        # The picture and the bio OVERWRITE what an archive site lent us --
        # that is the whole point of the pass -- but never overwrite a
        # previous profile hit, and never clear a field the profile left
        # empty. A performer with no bio on OnlyFans should not lose the one
        # an archive site wrote for them.
        if found.get("avatar") and (account.avatar_url is None or account.avatar_from_site):
            account.avatar_url = found["avatar"]
            account.avatar_from_site = False

        if found.get("bio"):
            account.bio = found["bio"]

        for column, key in (
            ("header_url", "header"),
            ("website", "website"),
            ("location", "location"),
            ("of_user_id", "of_user_id"),
            ("of_username", "of_username"),
            ("posts_count", "posts_count"),
            ("photos_count", "photos_count"),
            ("videos_count", "videos_count"),
            ("likes_count", "likes_count"),
            ("subscribe_price", "subscribe_price"),
        ):
            if found.get(key) is not None:
                setattr(account, column, found[key])

        account.is_verified = bool(found.get("is_verified"))

        logger.debug(
            f"OnlyFans: profile matched {account.handle} -> {found['of_username']}"
        )


#: An unfinished run older than this is treated as abandoned rather than in
#: progress. Nothing can correct a `running` row once the process that wrote
#: it is gone, and a permanently spinning progress bar is worse than a stale
#: result: it is a claim that something is still happening.
STALE_AFTER = 3600


#: Added to the denominator when a growth rate is computed, so that a performer
#: who went from two views to twelve does not outrank the whole index. Roughly
#: "a page nobody watched" -- below this, a delta is noise rather than a trend.
_TRENDING_FLOOR = 500


def _percentile(sorted_values: list, value) -> float:
    """Where `value` falls in `sorted_values`, as 0.0 to 1.0.

    `bisect_left` rather than an enumerate, so equal values get equal scores
    -- three accounts on the same view count must not be ranked against each
    other by whatever order the database happened to return them in.

    Clamped, because `bisect_left` returns `len` for anything past the end and
    that is 1.25 on a five-element distribution, not 1.0. Every caller here
    passes a value drawn from the same list, so it cannot happen today -- but
    a score above 1 is silent: it stores fine, sorts fine, and quietly breaks
    the one property the rails rely on, that both scores are percentiles on
    one scale.
    """

    if len(sorted_values) < 2:
        return 1.0

    rank = min(bisect.bisect_left(sorted_values, value), len(sorted_values) - 1)
    return rank / (len(sorted_values) - 1)


def _is_end_of_index(exc: Exception) -> bool:
    """Whether a page request failed because there are no more pages.

    Four of the five sites 404 the page AFTER the last one rather than
    serving an empty list, so this is the ordinary way a walk ends, not a
    fault. Both exception shapes are checked because the scrapers do not
    agree on an HTTP client -- two use `requests` (an HTTPError carrying a
    `response`) and two use `urllib` (an HTTPError that IS the response, with
    `code`). Matching on only one of them made half the sites log an error
    and lose their count at the end of every successful walk.
    """

    status = getattr(getattr(exc, "response", None), "status_code", None)

    if status is None:
        status = getattr(exc, "code", None)

    return status in (404, 410)


def _record(
    site: str,
    *,
    state: str | None = None,
    started: bool = False,
    finished: bool = False,
    pages: int | None = None,
    seen: int | None = None,
    new: int | None = None,
    error: str | None = None,
) -> None:
    """Write one site's progress. Never raises.

    Status is a readout, so a failure to write it must not be able to end the
    run it is describing -- that would turn "the progress bar broke" into "the
    sync died", which is exactly backwards.
    """

    try:
        with db_session() as session:
            run = session.get(OnlyFansSyncRun, site)

            if run is None:
                run = OnlyFansSyncRun(site=site)
                session.add(run)

            if state is not None:
                run.state = state
            if started:
                run.started_at = utcnow()
                run.finished_at = None
            if finished:
                run.finished_at = utcnow()
            if pages is not None:
                run.pages = pages
            if seen is not None:
                run.accounts_seen = seen
            if new is not None:
                run.accounts_new = new

            # Cleared explicitly on a good run rather than left behind: a
            # stale error next to a green state reads as a current problem.
            if error is not None or state in ("running", "ok"):
                run.error = error

            session.commit()
    except Exception as exc:
        logger.debug(f"OnlyFans: could not record status for {site}: {exc}")


# --- What the host schedules and asks about ---------------------------------
#
# The host's scheduler knows nothing about this add-on beyond the callables
# `riven_addon.jobs()` hands it, so these are the whole of the interface. Each
# one builds its own service and swallows its own exceptions: a job that
# raises into APScheduler produces a traceback from a background thread with
# nothing in it naming the add-on responsible.


_service: "OnlyFansService | None" = None


def _shared() -> "OnlyFansService":
    global _service

    # Rebuilt whenever it is not initialized, which is how enabling the
    # feature takes effect without a restart: the disabled instance refuses
    # to initialize, so the next call constructs a new one that does.
    if _service is None or not _service.initialized:
        _service = OnlyFansService()

    return _service


def reset() -> None:
    global _service

    _service = None


def scheduled_sync() -> None:
    """Rebuild the performer index from the archive sites. Weekly."""

    service = _shared()

    if not service.initialized:
        return

    try:
        service.sync()
    except Exception as exc:
        logger.error(f"OnlyFans account index sync failed: {exc}")


def scheduled_enrich() -> None:
    """Fill in pictures, bios and profiles for accounts that lack them."""

    service = _shared()

    if not service.initialized:
        return

    try:
        service.enrich_batch()
    except Exception as exc:
        logger.error(f"OnlyFans account enrichment failed: {exc}")


def scheduled_stats() -> None:
    """Sample view counts, then rescore the whole index.

    One job rather than two. Scoring reads what sampling writes, and the
    scores are relative -- so a rescore that ran on its own schedule would
    spend most of its runs recomputing the same ranking from the same
    figures, and the one run that mattered would be whichever happened to
    land after a batch.
    """

    service = _shared()

    if not service.initialized or not service.settings.stats_enabled:
        return

    try:
        service.stats_batch()
    except Exception as exc:
        logger.error(f"OnlyFans view sampling failed: {exc}")
        # Falls through to the rescore deliberately: a batch that died
        # halfway still committed everything it reached, and those figures
        # should count.

    try:
        service.rescore()
    except Exception as exc:
        logger.error(f"OnlyFans scoring failed: {exc}")


def index_is_empty() -> bool:
    """Whether the index has nothing in it.

    A failure to check counts as "not empty", so a database hiccup cannot
    trigger a five-site crawl.
    """

    try:
        with db_session() as session:
            return session.execute(select(OnlyFansAccount).limit(1)).first() is None
    except Exception as exc:
        logger.debug(f"Could not check the OnlyFans account index: {exc}")
        return False


def index_summary() -> dict[str, int]:
    """The figures the add-on management page shows for this add-on."""

    try:
        with db_session() as session:
            return {
                "accounts": session.execute(
                    select(func.count()).select_from(OnlyFansAccount)
                ).scalar_one(),
                "with_picture": session.execute(
                    select(func.count())
                    .select_from(OnlyFansAccount)
                    .where(OnlyFansAccount.avatar_url.is_not(None))
                ).scalar_one(),
                "with_profile": session.execute(
                    select(func.count())
                    .select_from(OnlyFansAccount)
                    .where(OnlyFansAccount.of_username.is_not(None))
                ).scalar_one(),
                "ranked": session.execute(
                    select(func.count())
                    .select_from(OnlyFansAccount)
                    .where(OnlyFansAccount.popularity_score.is_not(None))
                ).scalar_one(),
                "trending": session.execute(
                    select(func.count())
                    .select_from(OnlyFansAccount)
                    .where(OnlyFansAccount.trending_score.is_not(None))
                ).scalar_one(),
            }
    except Exception:
        # The management page must still render -- and still offer to remove
        # this add-on -- when the thing being described is broken.
        return {}
