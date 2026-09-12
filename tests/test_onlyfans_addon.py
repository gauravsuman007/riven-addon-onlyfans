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
    """The rails the page asks for are the orders the API offers.

    These are two lists in two languages -- `Grid.svelte` names them as
    strings, `router.py` keys a dict on them -- and a typo in either produces
    a 400 for one row of the page while every other row works.
    """

    from onlyfans_addon.router import _ORDERS

    wanted = {"trending", "rising", "popular", "new", "carried", "random"}

    check(
        "the API offers every order the page asks for",
        wanted <= set(_ORDERS),
        f"missing {sorted(wanted - set(_ORDERS))}",
    )
    check(
        "the API offers nothing the page does not ask for",
        set(_ORDERS) <= wanted,
        f"extra {sorted(set(_ORDERS) - wanted)}",
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


test_every_scraper_request_goes_through_the_routed_session()
test_the_vendored_copies_have_not_drifted()
test_the_ranking_maths()
test_every_rail_has_an_ordering()
test_the_similarity_terms()

print(f"\n{PASS} passed, {FAIL} failed")
sys.exit(1 if FAIL else 0)
