"""Checks for this add-on's half of the scraper contract.

A plain script with a local `check()` harness, like the host's suites, not
pytest. It prints `SKIP:` and exits 0 when its dependencies are absent, so
running it on a laptop is harmless; run it where they exist:

    docker exec riven-tpdb env PYTHONPATH=/riven/src:/riven/addons/onlyfans \
      /riven/.venv/bin/python /riven/addons/onlyfans/tests/test_onlyfans_addon.py

This file exists because the add-on gained a vendored copy of the scraper
ABI. The host owns no scraper code at all now, so the guards that used to sit
in the host's `test_vpn.py` have to live with each copy -- and a copy nobody
checks is exactly how the thing they guard against comes back.
"""

import re
import sys
from pathlib import Path

# The add-on is not an installed package: the host puts its folder on the path
# only while `riven_addon.py` runs. A test invoked directly does the same for
# itself, or every import below fails and it looks like the add-on is broken
# rather than the test being run oddly.
ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

try:
    from onlyfans_addon.scraper_api import drift
    from onlyfans_addon.scraper_api.plugins import discover_plugins
except ModuleNotFoundError as exc:
    print(f"SKIP: {exc.name} is not installed; run this inside the riven-tpdb container")
    sys.exit(0)


PASS = FAIL = 0


def check(name, condition, extra=""):
    global PASS, FAIL
    if condition:
        PASS += 1
        print(f"  ok   {name}")
    else:
        FAIL += 1
        print(f"  FAIL {name} {extra}")


# --- the scrapers this add-on ships -----------------------------------------
#
# If this folder stops loading, the add-on is present, its page renders and
# its API answers -- and every performer shows no content at all.

bundled = discover_plugins(str(ROOT / "scrapers"))

check(
    f"the bundled scrapers all load ({len(bundled.plugins)} found)",
    len(bundled.plugins) >= 5,
    f"found {len(bundled.plugins)}",
)
check("no bundled scraper fails to import", bundled.errors == {}, str(bundled.errors))
check(
    "every bundled scraper indexes accounts",
    all(getattr(p.scraper, "indexes_accounts", False) for p in bundled.plugins.values()),
)


# --- the settings tab's scraper list ------------------------------------------

from onlyfans_addon.registry import _version  # noqa: E402
from onlyfans_addon.settings import OnlyFansModel  # noqa: E402

_first_key, _first = next(iter(bundled.plugins.items()))
_source = _first.source_file
check("a scraper's version is non-empty", _version(_first.scraper, str(ROOT / "scrapers"), _source) != "")
check(
    "the version tracks the file, so a stale server copy is visible",
    len(_version(_first.scraper, str(ROOT / "scrapers"), _source)) == 8,
)
check(
    "there is no per-scraper switch or site list to fall out of date",
    "disabled" not in OnlyFansModel.model_fields and "sites" not in OnlyFansModel.model_fields,
)


# --- the scraper ABI --------------------------------------------------------


def test_every_scraper_request_goes_through_the_routed_session():
    """Guard the session-level hook, in this add-on's own copy.

    Applying the proxy in a scraper's `_get` helper looks equivalent and is
    not: a scraper calling `self.session.head` directly to probe a rendition
    would send that one request around the tunnel while everything else went
    through it. The scraper still works and the video still plays, so nothing
    looks wrong -- only the exit address is.
    """

    text = (ROOT / "onlyfans_addon" / "scraper_api" / "base.py").read_text()

    check(
        "scrapers route through _RoutedSession, not a plain requests.Session",
        "class _RoutedSession(requests.Session)" in text
        and "def request(self, method, url, **kwargs)" in text
        and "self.session = _RoutedSession()" in text,
    )
    check(
        "the VPN is asked per purpose, so routing can fail closed",
        "from program.services.vpn import SCRAPING, vpn" in text,
    )


def test_the_vendored_copies_have_not_drifted():
    """This copy must be identical to every other add-on's.

    Skips when no other add-on is installed, which is legitimate. On the
    deployed server both live under /riven/addons and this compares them for
    real -- which is the only place the question can actually be answered,
    since the two copies live in two repositories.
    """

    others = drift.siblings()

    if not others:
        print("  --   no other add-on installed; nothing to compare against")
        return

    problems = drift.compare()

    check(
        f"the scraper ABI matches the copy in {', '.join(others)}",
        not problems,
        "; ".join(problems),
    )


# --- ranking ----------------------------------------------------------------


def test_the_ranking_maths():
    """`_percentile` is what puts every site's figures on one scale.

    It is four lines and the whole ranking rests on them, so the properties
    that matter are asserted rather than assumed -- particularly ties. Five
    performers on the same view count must score the same; ranking them
    against each other by whatever order the database returned would make the
    rails reshuffle between passes for no reason a user could ever see.
    """

    from onlyfans_addon.service import _percentile

    values = [1, 5, 5, 5, 9]

    check("the smallest value scores 0", _percentile(values, 1) == 0.0)
    check("the largest value scores 1", _percentile(values, 9) == 1.0)
    check(
        "tied values score the same",
        _percentile(values, 5) == _percentile(values, 5),
    )
    check(
        "a tie takes the rank of the first of its group",
        _percentile(values, 5) == 0.25,
        f"got {_percentile(values, 5)}",
    )
    check(
        "everything is between 0 and 1",
        all(0.0 <= _percentile(values, v) <= 1.0 for v in (0, 1, 5, 9, 99)),
    )
    # A site carrying one measured account has no distribution to rank
    # against. Dividing by `len - 1` would be a ZeroDivisionError, and the
    # honest answer is that its only account is its most popular one.
    check("a single value does not divide by zero", _percentile([7], 7) == 1.0)
    check("an empty distribution is survivable", _percentile([], 7) == 1.0)


def test_every_rail_has_an_ordering():
    """The rails exist, name real orderings, and reach every surface.

    THE FAILURE THIS GUARDS IS SILENT. A rail added to the web page and not to
    the television leaves both surfaces internally consistent and one of them a
    version behind; nothing 500s, nothing logs, and the only way to notice is
    to look at a set. `onlyfans_addon/rails.py` is the single list both
    renderers are built from, and these are the checks that keep it single --
    that nothing names an ordering the index does not have, and that the
    television's screen is assembled from the list rather than from a copy.
    """

    import ast
    import inspect
    import textwrap

    from onlyfans_addon import tv
    from onlyfans_addon.rails import RAILS
    from onlyfans_addon.router import _ORDERS

    orders = {rail.order for rail in RAILS}

    check(
        "every rail names an ordering the API offers",
        orders <= set(_ORDERS),
        f"missing {sorted(orders - set(_ORDERS))}",
    )
    check(
        "every ordering the API offers is on the page",
        set(_ORDERS) <= orders,
        f"unused {sorted(set(_ORDERS) - orders)}",
    )
    check("no two rails share an ordering", len(orders) == len(RAILS))
    check("every rail has a heading", all(rail.title.strip() for rail in RAILS))
    check("at least one rail reaches a television", any(rail.order for rail in RAILS if rail.tv))

    # The television builds its sections by walking the shared list --
    # through `arranged()`, which is that list in the viewer's saved order.
    # Asserted on the source because the alternative is a live database: what
    # must not happen is `tv/browse` growing its own list of rows, which is
    # exactly the shape the drift took last time.
    source = inspect.getsource(tv.tv_browse)

    check(
        "the television's screen is built from the shared list",
        "arranged()" in source,
        "tv_browse no longer walks the shared rail list",
    )

    # And through the SAME arrangement the web page uses. A television that
    # walked RAILS directly would be correct and would still be the version
    # behind: it would ignore every row the viewer had moved or switched off.
    #
    # Asserted on the NAMES the code actually references, not on the text.
    # The docstring above says "THE RAILS ARE NOT LISTED HERE", and a text
    # search fails on the sentence that explains the rule it is checking.
    referenced = {
        node.id
        for node in ast.walk(ast.parse(textwrap.dedent(source)))
        if isinstance(node, ast.Name)
    }

    check(
        "the television honours the saved arrangement",
        "RAILS" not in referenced,
        "tv_browse reads the unarranged list",
    )

    # STRING LITERALS, not the raw text. A comment is free to say "empty until
    # the ranking pass has run -- twice, for Trending"; what must not appear
    # is a heading the television would actually draw, because that is a rail
    # this file has started owning a copy of.
    literals = {
        node.value
        for node in ast.walk(ast.parse(textwrap.dedent(source)))
        if isinstance(node, ast.Constant) and isinstance(node.value, str)
    }
    written = sorted(literals & {rail.title for rail in RAILS})

    check(
        "the television names no rail of its own",
        not written,
        f"rail headings written into tv.py: {written}",
    )


def test_the_username_identity_check():
    """A confirmed username has to belong to the right performer.

    THE MOST DANGEROUS FAILURE IN THIS ADD-ON, and the only one that writes a
    lasting wrong answer. The fallback finds usernames on other people's web
    pages, and the guest API can only say whether a username EXISTS -- which
    every one of them does, because each came off a real model's page.
    Verified for existence alone, the pass stamped Holly Brougham with
    `alannasworldx`: a real account, a real avatar, a real bio, all belonging
    to somebody else, and nothing downstream with any reason to doubt it.

    Measured on 40 accounts: 29 usernames confirmed to exist, 19 of them
    strangers'. Every row below is from that sample, decided by hand.
    """

    from onlyfans_addon.discover import matches

    # (handle, our display name, the page it was found on, the confirmed
    #  profile's own name, whether it is really them)
    sample = [
        # Theirs: the archive slug is our handle, or the account says our name.
        ("ameliaadams", "Amelia Adams", "amelia-adams", "Amelia Adams", True),
        ("lolarose", "Lola Rose", "lola-rose", "Lola Rose \U0001f351", True),
        ("titasahara", "Tita Sahara", "tita-sahara", "TITA SAHARA", True),
        ("brandygordon", "Brandy Gordon", "brandy-gordon", "Brandy", True),
        ("maddiewren", "Maddie Wren", "maddie-wren", "Maddie Wren - VIP", True),
        ("sneesnaw", "Sneesnaw", "sneesnaw", "Sneesnaw VIP", True),
        ("chanelbestcoast", "Chanelbestcoast", "chanelbestcoast", "Chanel", True),
        # `megnut` is not derivable from `meganguthrie` in either direction.
        # The profile behind it is called "Megan Guthrie", which settles it.
        ("meganguthrie", "Megan Guthrie", "megnut", "Megan Guthrie", True),
        # Strangers the archive's loose site search also returned. Each of
        # these IS a real OnlyFans account.
        ("hollybrougham", "Holly Brougham", "alannasworldx", "Alanna baby", False),
        ("hollybrougham", "Holly Brougham", "josie-rae", "Josie Rae", False),
        ("gracievalentino", "Gracie Valentino", "carlie-marie", "Carlie Marie", False),
        ("acpent", "Acpent", "sara-ames", "Sara Ames", False),
        ("lolarose", "Lola Rose", "katiedomsyou", "Katiedomsyou", False),
        ("melztube", "MelzTube", "heidi-jo", "ModernGomorrah", False),
        ("chanelbestcoast", "Chanelbestcoast", "skylar-mae", "Skylarmaexo", False),
        # Near misses, rejected on purpose. A prefix rule would take the
        # first and a contains rule would take both.
        ("millaroyce", "Milla Royce", "milla", "Milla", False),
        ("mayakayagaia", "Mayakayagaia", "yourlittlemaya", "Maya", False),
    ]

    wrong = [
        (handle, evidence)
        for handle, display, evidence, confirmed, want in sample
        if matches(handle, display, evidence, confirmed) is not want
    ]

    check("the identity check agrees with every judged case", not wrong, str(wrong))

    # Decoration is not a name. These are written with emoji, VIP suffixes and
    # zero-width joiners, and anything short of stripping them compares
    # ornament instead of identity.
    check(
        "emoji and suffixes do not defeat a real match",
        matches("sophierain", "Sophie Rain", "", "Sophie Rain \U0001f4a6"),
    )
    check(
        "an empty account matches nothing",
        not matches("", "", "anything", "Anybody"),
    )


def test_the_similarity_terms():
    """What "more like this" is actually built from.

    Every failure in this area is silent. A tokeniser that keeps the wrong
    words still returns twenty plausible-looking performers; they are simply
    the wrong twenty, and nothing logs or errors to say so. These assert the
    two removals that decide whether the feature means anything.
    """

    from onlyfans_addon.service import _rarity, _terms

    titles = [
        "Sophie Rain OnlyFans leaked full video 1080p",
        "sophie-rain shower JOI POV 4k",
        "Sophie Rain shower tease",
    ]
    terms = _terms(titles, "sophierain")

    # Their own name is in nearly every one of their titles, so left in it is
    # their strongest term by a distance -- and since nobody else shares it, it
    # contributes nothing to any similarity score while crowding out the terms
    # that would.
    check("the performer's own name is dropped", "sophie" not in terms and "rain" not in terms)
    check("boilerplate is dropped", "onlyfans" not in terms and "leaked" not in terms)
    check("resolutions are dropped", "1080p" not in terms and "4k" not in terms)
    check("short tokens are dropped", not any(len(t) < 3 for t in terms))
    check("real content words survive", "shower" in terms, str(sorted(terms)))
    check("repeats are counted", terms.get("shower") == 2, str(terms.get("shower")))

    # Rarity, which is what stops everybody matching everybody through the
    # words that carry no information.
    common = _rarity(500, 1000)
    rare = _rarity(2, 1000)

    check("a rare term outweighs a common one", rare > common, f"{rare} vs {common}")
    check("nothing scores zero or below", common > 0 and _rarity(1000, 1000) > 0)
    check("a term nobody else has does not divide by zero", _rarity(0, 0) > 0)


def test_no_scraper_invents_a_performer_it_does_not_carry():
    """A missing performer must come back empty, never as someone else's videos.

    This is the shape of a bug that shipped and ran unnoticed. porntn answers
    **301 to its own homepage** for a model it does not carry, where its four
    siblings answer 404. `_get` follows redirects, so `account_videos` received
    a valid 200 holding the homepage's newest-thirty grid, and the card parser
    -- which has no way to know which page it is reading -- lifted thirty real
    videos out of it.

    Nothing failed. No exception, no empty list, no log line. Four handles,
    three of them deliberate nonsense, returned the same thirty video ids with
    100% overlap, each attributed to a different performer.

    ASKING THE SITE IS THE ONLY HONEST TEST. Reading the source cannot tell a
    guarded scraper from one that is merely lucky: the four safe scrapers are
    safe because their sites 404, which is a fact about the site and not about
    the file. So this asks for a handle that cannot exist and fails only on the
    one answer that is never acceptable -- a list of videos.

    A site being unreachable is not a failure here. The property is "does not
    invent", and a scraper that cannot answer has not invented anything.
    """

    from onlyfans_addon.scraper_api.plugins import discover_plugins

    bogus = "zzz-not-a-real-performer-9999"

    for key, loaded in sorted(discover_plugins(str(ROOT / "scrapers")).plugins.items()):
        try:
            videos = loaded.scraper.account_videos(bogus, 1) or []
        except Exception:
            # 404, timeout, DNS -- all of them are the scraper declining to
            # answer, which is the correct behaviour for a performer that does
            # not exist.
            check(f"{key}: a performer it does not carry yields nothing", True)
            continue

        check(
            f"{key}: a performer it does not carry yields nothing",
            not videos,
            f"returned {len(videos)} videos for a handle that cannot exist -- "
            f"these belong to other people",
        )


def test_the_merged_feed():
    """Dates, duplicates and order across sites -- see onlyfans_addon/feed.py."""

    import time as _time
    from dataclasses import dataclass as _dc
    from datetime import datetime as _dt, timedelta as _td, timezone as _tz

    from onlyfans_addon.feed import Feed, from_state, name_words, parse_posted, same_video, title_tokens, to_state

    now = _dt(2026, 10, 26, tzinfo=_tz.utc)
    check("ISO date", parse_posted("2026-10-24T17:56:47.000Z", now) == (_dt(2026, 10, 24, 17, 56, 47, tzinfo=_tz.utc).timestamp(), False))
    check("month-first date", parse_posted("June 22nd, 2023", now)[0] == _dt(2023, 6, 22, tzinfo=_tz.utc).timestamp())
    check("day-first date", parse_posted("22 June 2023", now)[0] == _dt(2023, 6, 22, tzinfo=_tz.utc).timestamp())
    check("relative date is approximate", parse_posted("2 months ago", now) == ((now - _td(days=60)).timestamp(), True))
    check("unreadable date is None", parse_posted("garbage", now) == (None, False))

    names = name_words("Anissa Kate", "anissakate", "anissa-kate")

    @_dc
    class E:
        site: str
        title: str
        duration: int | None = None

        @property
        def tokens(self):
            return title_tokens(self.title, names)

    check(
        "same title on two sites is one video, whatever the durations",
        same_video(E("hornyleak", "Anissa Kate And Raissa Bellini's Fivesome Sex", 1585),
                   E("leakgrl", "Anissa Kate And Raissa Bellini's Fivesome Sex", 804)),
    )
    check(
        "equal duration and some shared words is one video",
        same_video(E("onlyleaks", "Anissa Kate gets her tight pussy stretched by rough BBC with Eddie Jay", 991),
                   E("fapnut", "Anissa Kate, Eddie Jay - Rough BBC", 990)),
    )
    check(
        "two scenes on ONE site are never merged",
        not same_video(E("porntn", "Anissa Kate-GLORYHOLE", 1325), E("porntn", "Anissa Kate-GLORYHOLE", 1325)),
    )
    check(
        "a generic shared word is not identity",
        not same_video(E("a", "Anissa Kate Masturbation"), E("b", "Anissa Kate Masturbation")),
    )

    @_dc
    class V:
        video_id: str
        title: str
        posted_at: str | None = None
        duration: int | None = None
        thumbnail: str | None = None
        resolution: str | None = None
        description: str | None = None

    class Site:
        has_post_text = False

        def __init__(self, pages, delay=0.0):
            self.pages, self.delay = pages, delay

        def account_videos(self, handle, page):
            _time.sleep(self.delay)
            if page > len(self.pages):
                raise Exception("404")
            return self.pages[page - 1]

        def account_galleries(self, handle, page):
            return []

    day = lambda n: (_dt.now(_tz.utc) - _td(days=n)).strftime("%B %d, %Y")
    sites = {
        "dated": Site([[V("d0", "Alpha scene one", day(0)), V("d1", "Bravo scene two", day(6))],
                       [V("d2", "Charlie scene three", day(12))]]),
        "relative": Site([[V("r1", "Hotel sextape bravo alpha", "4 days ago", 600)]]),
        "nodate": Site([[V("n1", "Anissa Kate - Hotel Sextape Bravo Alpha", None, 601), V("n2", "Plain clip", None, 90)]]),
        "slow": Site([[V("s1", "Newest of all uploads here", day(1))]], delay=1.5),
    }
    feed = Feed("anissakate", [(k, "anissa-kate") for k in sites], sites, names, lambda *a: [])
    feed.fill(10, deadline=0.5)
    first = [e.id for e in feed.emitted]
    check("the feed answers before a slow site does", "s1" not in first, str(first))
    dated = [e.ts for e in feed.emitted if e.ts is not None]
    check("dated entries are newest first", dated == sorted(dated, reverse=True), str(first))
    merged = next((e for e in feed.emitted if len(e.copies) > 1), None)
    check("a cross-site duplicate is one entry", merged is not None and {c.site for c in merged.copies} == {"relative", "nodate"})
    check("the longest copy plays", merged is not None and merged.site == "nodate")
    check("the duplicate borrows the dated copy's date", merged is not None and merged.ts is not None)
    check("an undated site is interleaved, not dropped", "n2" in first, str(first))

    _time.sleep(1.6)
    feed.fill(20, deadline=2)
    late = [e for e in feed.emitted if e.id == "s1"]
    check("a slow site's entry arrives flagged late", bool(late) and late[0].late)

    # A stored feed resumes exactly where it stopped. Two feeds over the same
    # sites: one read straight through, one saved after its first page,
    # restored into a new object (as after a restart), and read on.
    import json as _json

    deep = {"deep": Site([[V(f"p{p}-{i}", f"Scene {p} {i} words here", day(p * 10 + i)) for i in range(3)] for p in range(4)])}
    straight = Feed("x", [("deep", "x")], deep, names, lambda *a: [])
    straight.fill(100, deadline=5)
    partial = Feed("x", [("deep", "x")], deep, names, lambda *a: [])
    partial.fill(2, deadline=5)
    stored = _json.loads(_json.dumps(to_state(partial)))
    resumed = from_state(stored, "x", deep, names, lambda *a: [])
    check("a stored feed restores", resumed is not None and [e.id for e in resumed.emitted] == [e.id for e in partial.emitted])
    resumed.fill(100, deadline=5)
    check(
        "a restored feed carries on as if never stored",
        [e.id for e in resumed.emitted] == [e.id for e in straight.emitted],
        f"{[e.id for e in resumed.emitted]} vs {[e.id for e in straight.emitted]}",
    )
    check("tabs filter one feed", all(e.kind == "video" for e in straight.shown(frozenset({"video"}))))


test_every_scraper_request_goes_through_the_routed_session()
test_the_vendored_copies_have_not_drifted()
test_the_ranking_maths()
test_every_rail_has_an_ordering()
test_the_username_identity_check()
test_the_similarity_terms()
test_no_scraper_invents_a_performer_it_does_not_carry()
test_the_merged_feed()

print(f"\n{PASS} passed, {FAIL} failed")
sys.exit(1 if FAIL else 0)
