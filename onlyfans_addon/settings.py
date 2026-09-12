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
    stats_enabled: bool = Field(
        default=True,
        description=(
            "Sample how many views each performer's newest videos have on "
            "the archive sites, and rank the index from it. This is what the "
            "Trending, Rising, Popular and New rows on the OnlyFans page are "
            "built from; with it off those rows disappear and the page falls "
            "back to a plain alphabetical index. None of this comes from "
            "OnlyFans itself -- the platform publishes no chart, no "
            "directory and no popularity figure of any kind."
        ),
    )
    stats_batch_size: int = Field(
        default=150,
        ge=1,
        le=1000,
        description=(
            "Accounts to sample per run, one request per site each. Sized "
            "against the interval below rather than the index: the pass is a "
            "rotation that keeps coming back, not a backlog to clear once."
        ),
    )
    stats_interval: int = Field(
        default=60 * 15,
        ge=300,
        description="How often to sample view counts and rescore, in seconds",
    )
    stats_max_age_days: int = Field(
        default=6,
        ge=1,
        le=90,
        description=(
            "How old an account's figures may get before it is sampled "
            "again. Under the trending window below, or an account is never "
            "measured twice inside a window and can never be seen to move."
        ),
    )
    trending_window_days: int = Field(
        default=7,
        ge=1,
        le=60,
        description=(
            "How far back Trending compares against. Growth is measured "
            "against the oldest snapshot this far back, so nothing trends "
            "until the index has been sampled twice this far apart -- the "
            "row is empty for about a week after switching this on, which is "
            "the feature working rather than failing."
        ),
    )
    stats_retention_days: int = Field(
        default=90,
        ge=7,
        le=730,
        description=(
            "How long to keep the view-count history. It grows by one row "
            "per account per site per pass and nothing but Trending reads "
            "it, so anything past the trending window is only kept in case "
            "the window is widened later."
        ),
    )
    onlyfans_search: bool = Field(
        default=True,
        description=(
            "For the accounts whose username could not be guessed, look it up "
            "a second way: the archive sites' own published OnlyFans links "
            "first, and failing that a search engine. Measured 2026-09-12, "
            "the guessing pass identifies about 70% of the index; this is "
            "for the rest. Every candidate is still confirmed against "
            "onlyfans.com before it is recorded, and each account is searched "
            "once ever. Deliberately slow -- search engines rate-limit it."
        ),
    )
    search_batch_size: int = Field(
        default=50,
        ge=1,
        le=200,
        description=(
            "Accounts per fallback pass. Sized against the archive lookup, "
            "which is what actually finds these -- a couple of requests to a "
            "host already being crawled, about five seconds an account. A "
            "search engine, when one is reached at all, is far slower, but it "
            "stands down for fifteen minutes the moment it declines, so it "
            "does not hold the pass open."
        ),
    )
    search_interval: int = Field(
        default=1800,
        ge=300,
        description=(
            "How often to run the fallback username search, in seconds."
        ),
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
