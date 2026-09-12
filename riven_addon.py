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

from program.addons import Addon, AddonManifest, AddonNav

from onlyfans_addon import config, profile, registry, router, service
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
        nav=AddonNav(label="OnlyFans", icon="users", tv=False),
    )

    def settings_model(self):
        return OnlyFansModel

    def metadata(self):
        return onlyfans_metadata

    def migrations_dir(self):
        return HERE / "onlyfans_addon" / "migrations" / "versions"

    def router(self):
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
