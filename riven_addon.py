"""The OnlyFans performer index, as a Riven add-on.

Everything this feature is lives in this repository: its tables, its API, its
scrapers, its scheduled jobs and its settings. The host knows only what the
manifest below declares.

Its data lives in a Postgres schema named ``onlyfans``, which is what makes
removing it a single statement -- see ``onlyfans_addon/models.py``.

WHY THE IMPORTS AT THE TOP ARE EAGER

The host puts this folder on ``sys.path`` only while this file is executing,
then removes it so that two add-ons cannot shadow each other's packages. Any
submodule imported lazily *after* that -- inside a request handler, say --
would fail to resolve. Importing everything here puts them all in
``sys.modules`` permanently, where the lazy imports scattered through the
service find them. Do not make these imports lazy to save startup time.
"""

from pathlib import Path

from program.addons import Addon, AddonManifest, AddonNav, AddonTv

from onlyfans_addon import config, profile, registry, router, service, tv
from onlyfans_addon.models import metadata as onlyfans_metadata
from onlyfans_addon.settings import OnlyFansModel


HERE = Path(__file__).resolve().parent


class OnlyFansAddon(Addon):
    manifest = AddonManifest(
        key="onlyfans",
        name="OnlyFans",
        description=(
            "A searchable index of performers gathered from five OnlyFans "
            "archive sites, with videos and galleries streamed live from "
            "those sites and profiles read from OnlyFans itself."
        ),
        version="1.0.0",
        nav=AddonNav(label="OnlyFans", icon="users", tv=True),
        # A screen of its own on the television: the performer grid, one
        # performer's videos, and playback. No `title` -- this add-on knows
        # nothing about a library item, so it has nothing to contribute to
        # one's page.
        tv=AddonTv(browse=True),
    )

    def settings_model(self):
        return OnlyFansModel

    def metadata(self):
        return onlyfans_metadata

    def migrations_dir(self):
        return HERE / "onlyfans_addon" / "migrations" / "versions"

    def router(self):
        """One router, with the television's routes mounted inside it.

        Mounted here rather than returned separately so the host keeps a
        single mount point per add-on: everything this add-on serves lives
        under `/api/v1/x/onlyfans/`, which is also the prefix `riven-tv`
        refuses to let a stream path escape from.
        """

        # Idempotent. `router()` is called once per load today, but mounting
        # is a side effect and a second call would duplicate every television
        # route -- which FastAPI accepts silently and answers from whichever
        # it matches first.
        if not any(getattr(route, "path", "").startswith("/tv/") for route in router.router.routes):
            router.router.include_router(tv.router)

        return router.router

    def jobs(self):
        settings = config.settings()

        if not settings.enabled:
            return {}

        return {
            # Weekly and overnight: a crawl of five sites' model indexes,
            # where new accounts appear steadily but never urgently.
            service.scheduled_sync: {
                "cron": {
                    "day_of_week": settings.sync_day,
                    "hour": settings.sync_hour,
                    "minute": 0,
                }
            },
            # Pictures and profiles are one or two requests per account and
            # are what makes the grid look like anything, so they fill in on
            # an ordinary batch cadence rather than waiting a week.
            service.scheduled_enrich: {"interval": settings.enrich_interval},
            # The ranking pass. Registered whatever `stats_enabled` says and
            # gated inside the job instead, because the job map is read once
            # at load: gating it here would mean toggling the setting did
            # nothing until the next restart, which is the same trap as
            # binding settings to an attribute.
            service.scheduled_stats: {"interval": settings.stats_interval},
            # The tail: accounts whose username the guesses could not reach.
            # Its own job because its cost profile is nothing like the
            # enrichment pass's -- a search engine answers about three times a
            # minute before it starts refusing, so this one is paced in
            # seconds per account rather than accounts per second. Registered
            # unconditionally and gated inside `search_batch`, for the same
            # reason the ranking pass is.
            service.scheduled_search: {"interval": settings.search_interval},
        }

    def start(self) -> None:
        # Both caches dropped rather than warmed. The add-on may be starting
        # because it was just updated or re-enabled, in which case anything
        # either of them is holding was built by the previous version.
        registry.reset()
        service.reset()

    def stop(self) -> None:
        registry.reset()
        service.reset()

    def status(self):
        return service.index_summary()


ADDON = OnlyFansAddon()
