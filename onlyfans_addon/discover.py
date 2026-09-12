"""Finding a performer's onlyfans.com username when it cannot be guessed.

THE LAST RESORT, AND ONLY FOR THE TAIL
--------------------------------------

`profile.py` identifies an account by GUESSING its username from the slugs the
archive sites use, and checking each guess against the platform's guest API.
That is cheap, exact, and it works for most of the index. Measured over the
whole index on 2026-09-12: **4,487 of 6,402 accounts, 70.1%** -- 66.0% for
accounts carried by a single site, 84-91% for those carried by two or more.

The 1,915 it cannot reach are not accounts it failed at. They are accounts
whose username is not derivable from the input: `sophia-locke` is
`thesophialocke` on the platform, `megan-guthrie` is `megnut`. No
transformation of a slug produces those, because the information is not in the
slug.

It is, however, published. One of the five archives -- porn4fans -- puts a
performer's OnlyFans link in the social row of their model page, and its site
search finds performers under slugs this index does not carry. So the fallback
is: **search that archive by name, open each model it returns, and read the
link.** A search engine is tried after that, for the accounts it does not
reach.

EVERYTHING HERE PRODUCES A CANDIDATE, NEVER AN ANSWER

Two separate things have to be true before a username is written to the index,
and conflating them is the trap this module is mostly built around:

1. **The username exists.** Answered by the guest API, which 404s a handle
   that is not an account.
2. **It is THIS performer's.** Answered by nothing above -- and this is the
   half that bites. The archive's site search is loose: searching it for
   "Holly Brougham" returns Holly's page *and* several unrelated models, and
   every one of those has a real, existing OnlyFans username on it. Verified
   for existence alone, this pass confidently stamped Holly Brougham with
   `alannasworldx`, complete with the wrong woman's avatar and bio. Measured
   on a sample of 40: 29 usernames confirmed to exist, **of which 19 belonged
   to somebody else.**

`matches()` is the second test, and it is deliberately strict -- see there.

MEASURED AFTER THE IDENTITY CHECK, same 40-account sample: 10 accepted, 0
wrong. About a quarter of the tail, which would take the index from 70.1% to
roughly 78%. Recall was traded for precision on purpose: an unmatched account
keeps the picture an archive site lent it and looks unremarkable, while a
wrongly matched one shows another woman's face and bio under this performer's
name, and nothing downstream would ever question it.

WHAT THIS WILL NOT DO

There is no captcha solving and no attempt to look like something it is not.
If an engine answers with a challenge instead of results, that is the engine
declining: the pass backs off and leaves the account unstamped so it comes
round again. Working around that would be working around a bot filter.

ON THE SEARCH ENGINES, HONESTLY: measured from this deployment on 2026-09-12,
DuckDuckGo answered two queries and then served its anomaly page (HTTP 202) to
everything for a long while, and Mojeek answered a captcha page. Bing answered
but returns no onlyfans.com links for these queries at all. So the engine half
currently contributes close to nothing from this host, and the archive half is
doing the work. It is kept because it costs nothing when the engines refuse,
because the exit address can change, and because the identity check above
makes a bad engine result harmless rather than dangerous.
"""

import random
import re
import threading
import time
from typing import Any
from urllib.parse import quote_plus, unquote, urlparse

from loguru import logger

#: The archive whose model pages publish the link, and whose site search finds
#: performers this index does not carry a source for. Named rather than
#: "whichever scraper has it" because it is the only one of the five that
#: does, and pretending otherwise would mean opening every model page on every
#: site to discover that four of them never have it.
#:
#: If another site starts publishing the link, add it here -- the scraper side
#: is already generic: `DirectAccount.of_username` is filled by whichever
#: scraper can fill it.
ARCHIVES = ("porn4fans",)

#: Models to open per site search. The search is loose and ordered by its own
#: relevance, so the performer being looked for is at or near the top when
#: they are there at all; opening ten would mostly be opening strangers.
PER_SEARCH = 3

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
)

#: The engines to ask, in order, until one returns a usable page.
#:
#: Two of them because a single one having a bad day would otherwise stall the
#: whole pass, and these two disagree often enough to be worth both: DuckDuckGo
#: reflects Bing's index, Mojeek runs its own crawler entirely.
#:
#: Both are the plain HTML endpoints these engines publish for clients without
#: JavaScript. Nothing here pretends to be a browser beyond a user agent, and
#: nothing works around a challenge page -- see the module docstring.
ENGINES = (
    "https://html.duckduckgo.com/html/?q={query}",
    "https://www.mojeek.com/search?q={query}",
)

#: Seconds between requests, with jitter. A search engine asked as fast as a
#: loop can ask is a search engine that stops answering, and this pass has
#: thousands of accounts and no deadline -- it is explicitly the slow one.
MIN_INTERVAL = 20.0
JITTER = 10.0

#: How long to stand down after an engine declines. Long, deliberately: the
#: accounts are stamped only on a definitive answer, so nothing is lost by
#: waiting and a great deal is lost by hammering.
COOLDOWN = 900.0

#: Usernames are 3-30 characters of letters, digits, underscore and dot on
#: OnlyFans. Anchored, so a path segment carrying anything else is not a
#: username and is discarded rather than trimmed into one.
_USERNAME = re.compile(r"^[A-Za-z0-9._]{3,30}$")

#: Paths under onlyfans.com that are the site's own, not a performer's. A
#: search for a performer very often returns one of these, and "help" is not
#: an account -- but it IS a valid-looking username, so the shape check above
#: cannot catch it.
_RESERVED = {
    "about", "blog", "contact", "help", "home", "legal", "login", "my",
    "posts", "privacy", "search", "signup", "support", "terms", "action",
}

#: Where a username is actually found in a results page.
#:
#: MEASURED, AND THE MEASUREMENT CHANGED THE DESIGN. The obvious plan --
#: "find the onlyfans.com link in the results" -- returns nothing at all:
#: onlyfans.com is absent from these engines' results for performer names, on
#: every query tried. What IS there is the aggregator sites, and several of
#: them put the username in their own URLs: `babepedia.com/onlyfans/<user>`,
#: `coomer.st/onlyfans/user/<user>`. So the username is mined from wherever it
#: appears rather than from one host.
#:
#: Every one of these is a THIRD PARTY REPEATING SOMETHING. Nothing here is
#: believed: each is handed to the guest API and only a username onlyfans.com
#: confirms is written to the index, so a bad pattern costs one request.
_PATTERNS = (
    # The platform itself, when it does appear -- in a link or in the plain
    # text of a snippet, which is the more common of the two.
    re.compile(r"onlyfans\.com/([A-Za-z0-9._]{3,30})", re.IGNORECASE),
    # Aggregators that key their own pages on the username.
    re.compile(r"/onlyfans/user/([A-Za-z0-9._]{3,30})", re.IGNORECASE),
    re.compile(r"/onlyfans/([A-Za-z0-9._]{3,30})", re.IGNORECASE),
)

class _Searcher:
    """One paced search client, shared across the pass.

    A lock and a clock, exactly like `profile._Client`, and for the same
    reason: the pass may run from more than one worker and the pacing has to
    be a property of the engine being asked, not of a caller.
    """

    def __init__(self) -> None:
        self._lock = threading.Lock()
        self._session: Any = None
        self._last = 0.0
        self._cool_until = 0.0

    def _proxies(self) -> dict[str, str] | None:
        # THROUGH THE TUNNEL, like every other outbound request this add-on
        # makes. A search engine is a third party being told which performers
        # this household is interested in; that it is an ordinary website
        # rather than an archive site does not change who is asking.
        try:
            from program.services.vpn import SCRAPING, vpn

            return vpn().proxies_for(SCRAPING) or None
        except Exception:
            return None

    def _ensure(self) -> Any:
        if self._session is None:
            import requests

            self._session = requests.Session()
            self._session.headers.update(
                {
                    "User-Agent": USER_AGENT,
                    "Accept": "text/html,application/xhtml+xml",
                    "Accept-Language": "en-US,en;q=0.9",
                }
            )

        return self._session

    def _pace(self) -> None:
        wait = self._last + MIN_INTERVAL + random.uniform(0, JITTER) - time.time()

        if wait > 0:
            time.sleep(wait)

        self._last = time.time()

    def search(self, query: str) -> str | None:
        """The first engine that answers with a page. `None` if none did."""

        with self._lock:
            if time.time() < self._cool_until:
                return None

            session = self._ensure()

            for template in ENGINES:
                url = template.format(query=quote_plus(query))

                self._pace()

                try:
                    response = session.get(
                        url, proxies=self._proxies(), timeout=20, allow_redirects=True
                    )
                except Exception as exc:
                    logger.debug(f"OnlyFans search: {url} failed: {exc}")
                    continue

                # 202 IS A REFUSAL, not an acceptance. DuckDuckGo answers an
                # anomaly check with 202 and its ordinary home page, which
                # parses as zero results -- indistinguishable from a performer
                # who has no OnlyFans, and that would be stamped as a
                # definitive miss and never asked again.
                if response.status_code in (202, 403, 429) or _challenged(response.text):
                    # The engine is declining. Not an error to log loudly and
                    # not something to route around -- stand down for a while
                    # and let the unstamped accounts come back tomorrow.
                    logger.debug(
                        f"OnlyFans search: {urlparse(url).netloc} declined "
                        f"({response.status_code}); standing down"
                    )
                    self._cool_until = time.time() + COOLDOWN
                    return None

                if response.status_code == 200 and response.text:
                    return response.text

        return None


def _challenged(body: str) -> bool:
    """Whether a 200 is actually a "prove you are human" page.

    Checked because these engines answer a refusal with 200 and a challenge
    body far more often than with a status code, and a challenge parsed as
    results is simply zero usernames -- indistinguishable from a performer who
    has no OnlyFans, which would then be stamped as a definitive miss.
    """

    head = body[:4000].lower()

    return any(
        marker in head
        for marker in ("captcha", "unusual traffic", "are you a robot", "challenge-form")
    )


_searcher = _Searcher()


def answered() -> bool:
    """Whether the last search actually reached an engine.

    The caller needs this to tell two identical-looking outcomes apart: "the
    engines answered and this performer has no OnlyFans" is a fact worth
    stamping and never asking again, while "every engine is standing down" is
    somebody else's rate limit. Stamping the second would write off however
    many accounts the pass happened to reach during the cooldown, permanently.
    """

    return time.time() >= _searcher._cool_until


def usernames(display_name: str, handle: str, limit: int = 3) -> list[str]:
    """Candidate onlyfans.com usernames for a performer, best first.

    Returns a list because a search returns several links and the right one is
    not always first -- a fan page's link to the wrong creator outranks the
    creator often enough to matter. Every candidate is checked against the
    guest API by the caller, so a wrong guess costs one request and nothing
    else; what must never happen is a username being believed because it
    appeared in a search result.
    """

    name = " ".join((display_name or "").split())

    if not name:
        return []

    body = _searcher.search(f'"{name}" onlyfans')

    if not body:
        return []

    found: list[str] = []

    for candidate in _links(body):
        if candidate.casefold() in (value.casefold() for value in found):
            continue

        found.append(candidate)

        if len(found) >= limit:
            break

    if found:
        logger.debug(f"OnlyFans search: {handle} -> {found}")

    return found


def _links(body: str) -> list[str]:
    """Every plausible username named anywhere in a results page.

    Deliberately regex over the raw HTML rather than a parse of one engine's
    result markup: the engines lay their results out differently, both rewrite
    it without notice, and what is being looked for is unambiguous wherever it
    appears. A parser tuned to a results list is the part that silently
    returns nothing after a redesign -- and "nothing" here is not an error, it
    is a performer recorded as having no OnlyFans.

    DuckDuckGo wraps every outbound link in its own redirector with the real
    URL percent-encoded inside, so the page is unquoted first -- twice, since
    a URL inside a redirector inside an HTML attribute is encoded twice over.
    Without it every link on the page is a `duckduckgo.com` one and this finds
    nothing at all.
    """

    text = body

    for _ in range(2):
        try:
            text = unquote(text)
        except Exception:
            break

    out: list[str] = []

    for pattern in _PATTERNS:
        for match in pattern.finditer(text):
            name = match.group(1)

            if not _USERNAME.match(name) or name.casefold() in _RESERVED:
                continue

            out.append(name)

    return out


# --- The archive that publishes the link ------------------------------------


_MODEL_SLUG = re.compile(r"/models/([a-z0-9-]+)/", re.IGNORECASE)


def archive_candidates(
    display_name: str, handle: str, scrapers: dict
) -> list[tuple[str, str]]:
    """`(username, the slug it was found under)` from the archives' own pages.

    The slug travels with the username because it is the evidence. A username
    on its own cannot be judged -- `alannasworldx` is a perfectly real
    OnlyFans account, it simply is not Holly Brougham's -- and by the time the
    guest API has confirmed it, the only thing left that ties it to a person
    is the page it came from. See `matches()`.

    Cheap in the way that matters: these are hosts the add-on already crawls,
    through the same paced session its scrapers use, with no captcha and no
    rate limit worth the name.
    """

    slug = re.sub(r"[^a-z0-9]+", "-", (display_name or handle or "").lower()).strip("-")

    if not slug:
        return []

    out: list[tuple[str, str]] = []

    for site in ARCHIVES:
        scraper = scrapers.get(site)

        if scraper is None:
            continue

        try:
            results = scraper._get(f"{scraper.base_url}/search/{slug}/")
        except Exception as exc:
            logger.debug(f"OnlyFans discover: {site} search failed: {exc}")
            continue

        models = list(dict.fromkeys(_MODEL_SLUG.findall(results.text)))[:PER_SEARCH]

        for model in models:
            # Through the scraper, not a regex here. Knowing where this
            # particular site keeps the link is site knowledge and belongs in
            # the file that owns the site -- `DirectAccount.of_username` is
            # the contract, and any other scraper that learns to fill it is
            # picked up by this loop without a line changing.
            try:
                found = scraper.account_profile(model)
            except Exception as exc:
                logger.debug(f"OnlyFans discover: {site}/{model} failed: {exc}")
                continue

            name = getattr(found, "of_username", None) if found else None
            pair = (name, model)

            if name and pair not in out:
                out.append(pair)

    return out


# --- Is it the same person? -------------------------------------------------


def _flat(value: str | None) -> str:
    """A name reduced to the letters and digits in it, lowercased.

    These names are written with emoji, VIP suffixes, currency symbols and
    zero-width joiners -- "Sophie Rain 💦", "🧨𝙆𝙞𝙡𝙡𝙚𝙧_𝙆𝙖𝙩𝙧𝙞𝙣 🧨" -- so anything
    short of this compares decoration rather than names.
    """

    return re.sub(r"[^a-z0-9]+", "", (value or "").lower())


def matches(handle: str, display_name: str, evidence: str, confirmed_name: str) -> bool:
    """Whether a confirmed username really belongs to this performer.

    THE GUEST API CANNOT ANSWER THIS. It answers "is there an account called
    that", and there always is -- every username reached here came off a real
    model's page. What it cannot say is whose. Without this check the pass
    measured 29 confirmations on 40 accounts and 19 of them were strangers.

    Two ways in, and a candidate needs only one:

    * **The page it was found on is this performer's.** The archive's slug,
      flattened, is our handle. `amelia-adams` is `ameliaadams`; the unrelated
      models the site search also returned are `carlie-marie`, `alannasworldx`,
      `killer-katrin`, and none of those is anybody's handle but their own.
    * **The account it points at says our name.** `megnut` is not derivable
      from `meganguthrie` in either direction -- but the profile behind it is
      called "Megan Guthrie", which settles it.

    DELIBERATELY NOT FUZZY. A prefix rule would accept `milla` for
    `millaroyce`, a contains rule would accept far worse, and every mistake
    here is permanent and invisible: the account keeps a stranger's avatar,
    bio and link under this performer's name, and nothing downstream has any
    reason to doubt it. The cost of being strict is an account that stays
    unidentified and looks exactly as it does today.
    """

    ours = _flat(handle)
    name = _flat(display_name)

    if not ours and not name:
        return False

    found = _flat(evidence)
    theirs = _flat(confirmed_name)

    if found and (found == ours or found == name):
        return True

    # An OnlyFans display name is frequently the real name plus decoration
    # that `_flat` has already removed; what is left has to be equal, not
    # merely overlapping.
    return bool(theirs) and theirs in (ours, name)
