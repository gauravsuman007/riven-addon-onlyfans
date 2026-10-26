"""The OnlyFans scrapers, loaded from their own folder.

A second registry rather than a second folder on the existing one. The
discovery mechanism is generic -- `discover_plugins` only cares about a path --
but the two *sets* are not interchangeable, and merging them would be wrong in
both directions: an OnlyFans scraper would appear in the direct-play site list
and be run against library titles, and a tube scraper would appear in the
OnlyFans tab claiming to index performers.

Keeping them apart also means the two folders can be enabled, disabled and
imported into independently, which is what the separate settings tab is for.

The failure contract is the folder's, not this module's: a broken file is
recorded against its filename and skipped, so it shows up in the tab as a
broken plugin rather than as an absence.
"""

import hashlib
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path

from loguru import logger

from onlyfans_addon.scraper_api.base import DirectScraper
from onlyfans_addon.scraper_api.plugins import discover_plugins
from onlyfans_addon.config import plugin_dir


@dataclass(slots=True)
class ScraperInfo:
    """One scraper as the settings tab needs to describe it."""

    key: str
    name: str
    base_url: str
    source_file: str
    indexes_accounts: bool
    #: The scraper's own `version` if it declares one, otherwise the short
    #: hash of its file. None of the bundled scrapers declares one, and a
    #: hash is the honest answer to "is the server running the file I
    #: pushed": it changes exactly when the file does.
    version: str
    #: When the file was last written, UTC ISO date-time.
    updated: str


def _path(folder: str, source_file: str) -> Path | None:
    # `source_file` is a bare filename, relative to the plugin folder.
    path = Path(folder) / source_file if source_file else None
    return path if path is not None and path.is_file() else None


def _version(scraper: DirectScraper, folder: str, source_file: str) -> str:
    declared = str(getattr(scraper, "version", "") or "").strip()

    if declared:
        return declared

    path = _path(folder, source_file)

    if path is None:
        return ""

    return hashlib.sha1(path.read_bytes()).hexdigest()[:8]


def _updated(folder: str, source_file: str) -> str:
    path = _path(folder, source_file)

    if path is None:
        return ""

    return datetime.fromtimestamp(path.stat().st_mtime, timezone.utc).isoformat(
        timespec="seconds"
    )


class OnlyFansScraperRegistry:
    """Every scraper in the OnlyFans plugin folder. All of them load."""

    def __init__(self) -> None:
        # The add-on's own bundled folder unless told otherwise, so a fresh
        # install has working scrapers without anyone configuring a path.
        self.plugin_dir = str(plugin_dir())

        discovery = discover_plugins(self.plugin_dir)

        #: Filename -> what went wrong. Kept even when empty so the tab can say
        #: "no errors" rather than having to infer it.
        self.errors: dict[str, str] = dict(discovery.errors)
        self.sources: dict[str, str] = {
            key: loaded.source_file for key, loaded in discovery.plugins.items()
        }
        #: Every scraper found.
        self.all: dict[str, DirectScraper] = {
            key: loaded.scraper for key, loaded in discovery.plugins.items()
        }
        #: Same set under the name the service layer reads. There is no
        #: per-scraper switch: thirty toggles nobody used was the setting
        #: this replaced, and a site that breaks fails on its own.
        self.services: dict[str, DirectScraper] = self.all

        if self.errors:
            logger.warning(
                f"OnlyFans scrapers: {len(self.errors)} file(s) failed to load"
            )
        logger.debug(
            f"OnlyFans scrapers: {len(self.all)} loaded from {self.plugin_dir}"
        )

    def describe(self) -> list[ScraperInfo]:
        """What the settings tab lists."""

        return [
            ScraperInfo(
                key=key,
                name=getattr(scraper, "name", key),
                base_url=getattr(scraper, "base_url", ""),
                source_file=self.sources.get(key, ""),
                indexes_accounts=getattr(scraper, "indexes_accounts", False),
                version=_version(scraper, self.plugin_dir, self.sources.get(key, "")),
                updated=_updated(self.plugin_dir, self.sources.get(key, "")),
            )
            for key, scraper in sorted(self.all.items())
        ]


_registry: "OnlyFansScraperRegistry | None" = None


def registry() -> OnlyFansScraperRegistry:
    """The process-wide OnlyFans scraper registry.

    A singleton for the same reason the direct one is: rebuilding it per
    request would re-scan the folder and reset every site's connection pool.
    """

    global _registry

    if _registry is None:
        _registry = OnlyFansScraperRegistry()

    return _registry


def reset() -> None:
    """Drop the cached registry so a rescan, an import or a settings change
    takes effect without a restart."""

    global _registry
    _registry = None


__all__ = ["OnlyFansScraperRegistry", "ScraperInfo", "registry", "reset"]
