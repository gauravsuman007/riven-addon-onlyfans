"""Reading this add-on's settings, live.

Always read through `settings()`; never bind the result to an attribute. A
settings save replaces the object these values live in, so anything holding a
copy goes on using what it was built with until the process restarts. That
exact bug shipped once in this code: enabling the profile lookup saved, read
back as true, and changed nothing for hours, because the service had captured
its settings in `__init__`.

Validating on every read is what materialises defaults for a key the user has
never touched, and it is a few microseconds on a model this size.
"""

from pathlib import Path

from program.settings import settings_manager

from onlyfans_addon.settings import OnlyFansModel


KEY = "onlyfans"

#: Where this file is, so the add-on can find the scrapers it ships with. Not
#: a configured path by default: an add-on that had to be told where its own
#: bundled files are is one more thing to get wrong on install.
ROOT = Path(__file__).resolve().parent.parent


def settings() -> OnlyFansModel:
    return OnlyFansModel.model_validate(
        settings_manager.settings.addons.get(KEY) or {}
    )


def plugin_dir() -> Path:
    """The scraper folder: the configured one, or the bundled one."""

    configured = settings().plugin_dir.strip()
    return Path(configured) if configured else ROOT / "scrapers"


def save(model: OnlyFansModel) -> None:
    """Write this add-on's settings back.

    Necessary because `settings()` returns a *validated copy*: mutating what
    it hands back and calling the host's save writes the unchanged original.
    Anything that changes configuration -- disabling a scraper, importing one
    -- has to come back through here.
    """

    settings_manager.settings.addons[KEY] = model.model_dump()
    settings_manager.save()
