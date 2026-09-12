"""This add-on's settings.

Stored by the host under ``settings.addons["onlyfans"]`` and rendered as its
own Settings tab straight from this model's JSON Schema -- so the tab costs
the add-on no frontend code at all. Field descriptions below are what the user
reads in the form, which is why several of them are longer than a comment
would be.
"""

from pydantic import BaseModel, Field


class OnlyFansModel(BaseModel):
    """The performer index built from the OnlyFans archive sites.

    Off by default. Unlike the studio directory -- a fixed ~1,200 rows that
    changes about never -- these rosters run to tens of thousands of accounts
    across five sites, so this is something to opt into rather than something
    that starts crawling on first boot.
    """

    enabled: bool = Field(
        default=False,
        description="Index performer accounts from the OnlyFans archive sites",
    )
    plugin_dir: str = Field(
        default="",
        description=(
            "Folder holding the OnlyFans scraper plugins. Empty means the "
            "add-on's own bundled `scrapers/` folder, which is what you want "
            "unless you keep your own copies elsewhere. Deliberately not the "
            "host's direct-scraping folder: these answer a different question "
            "and keeping them apart is what stops an OnlyFans scraper "
            "appearing in the direct-play site list."
        ),
    )
    disabled: list[str] = Field(
        default_factory=list,
        description=(
            "Scraper keys to skip loading. A disabled scraper stays in the "
            "folder and can be re-enabled without re-importing it."
        ),
    )
    sites: list[str] = Field(
        default_factory=lambda: [
            "ultrathots",
            "notfans",
            "porntn",
            "porn4fans",
            "hornyfap",
        ],
        description=(
            "Scraper keys to index accounts from. A key that is not installed "
            "or does not index accounts is skipped rather than failing the run."
        ),
    )
    max_pages_per_site: int = Field(
        default=400,
        ge=1,
        le=5000,
        description=(
            "Pages of the performer index to read per site, 12-25 accounts "
            "each. A RUNAWAY GUARD, not a budget: the sync stops on its own "
            "when a site 404s the page after its last one or repeats a page, "
            "and a full walk of the deepest site takes about twenty seconds. "
            "Measured 2026-09-12: ultrathots 155 pages, hornyfap 246, "
            "porn4fans 66, porntn 8, notfans 2. Setting this low silently "
            "truncates the index rather than failing."
        ),
    )
    sync_day: str = Field(
        default="sun",
        description=(
            "Weekday to rebuild the account index on: mon, tue, wed, thu, "
            "fri, sat or sun. New accounts appear steadily but not urgently, "
            "so weekly is enough."
        ),
    )
    sync_hour: int = Field(
        default=4,
        ge=0,
        le=23,
        description="Hour of the day to rebuild the account index, local time",
    )
    enrich_batch_size: int = Field(
        default=200,
        ge=1,
        le=1000,
        description=(
            "Accounts to find a picture for per run, one or two requests "
            "each. The index runs to thousands of accounts and three of the "
            "five sites carry no avatar at all, so this has to clear a real "
            "backlog rather than trickle."
        ),
    )
    enrich_interval: int = Field(
        default=60 * 10,
        ge=300,
        description="How often to run the profile enrichment pass, in seconds",
    )
    onlyfans_enrich: bool = Field(
        default=True,
        description=(
            "Look up each account's own onlyfans.com profile for its real "
            "picture, bio, links and counts, via the platform's public guest "
            "API. Up to four username guesses per account, paced, and a "
            "definitive 404 is remembered so it is never retried. Turn off "
            "to rely only on what the archive sites publish, which for most "
            "accounts is a still from one of their videos."
        ),
    )
