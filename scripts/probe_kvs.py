"""Ask each site which sort orders it actually honours, and where tags live.

RUN THIS IN THE CONTAINER, NEVER ON A LAPTOP:

    docker exec riven-tpdb env PYTHONPATH=/riven/src:/riven/addons/onlyfans \
      /riven/.venv/bin/python /riven/addons/onlyfans/scripts/probe_kvs.py

That is not a convenience. Every request a scraper makes goes out through
`_RoutedSession`, which applies the VPN policy; running this anywhere the
policy is not configured sends the requests from the real address, which is
the entire thing the routing exists to prevent. The scrapers are imported
here rather than reimplemented for the same reason -- this asks the questions
using exactly the transport the add-on uses.

WHY IT EXISTS

Two open questions, and both are about what these sites can be asked rather
than what they return for what we already ask.

1. KVS ships sort modes beyond `post_date` -- `most_viewed`, `rating`, and on
   most deployments weekly and monthly windowed variants. A windowed sort IS a
   trending feed, computed by the site, with no time series needed at our end.
   Operators disable individual sorts, and five deployments will not agree.

   THE FAILURE MODE IS SILENCE. A KVS sort key the site does not know is
   ignored, not rejected: the page comes back 200 in the default order, so
   "it worked" and "it did nothing" are indistinguishable from the status
   code. So this compares the ORDER of the returned ids against `post_date`
   and reports a sort as real only when the order actually differs. Same
   shape as the substituted-rendition trap in AGENTS.md, same treatment.

2. Nothing in this add-on captures a video's tags, which is what a real
   "more like this" would be built from. Tags are not on the grid cards --
   the card parsers in `scrapers/` would already have them -- so they are on
   the video page, and this dumps the candidate blocks from one so the
   selectors can be written against markup somebody has actually seen rather
   than guessed at.

It prints a report and changes nothing.
"""

import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

try:
    from lxml import html as lxml_html

    from onlyfans_addon.scraper_api.plugins import discover_plugins
except ModuleNotFoundError as exc:
    print(f"SKIP: {exc.name} is not installed; run this inside the riven-tpdb container")
    sys.exit(0)


#: The sorts worth asking for. `post_date` is the baseline every comparison is
#: made against -- it is the one the scrapers already rely on, so if it is not
#: honoured nothing below means anything either.
BASELINE = "post_date"

CANDIDATES = [
    "most_recent",
    "rating",
    "video_viewed",
    "video_viewed_week",
    "video_viewed_month",
    "post_date_and_view",
]


def _ids(videos) -> list[str]:
    return [video.video_id for video in videos]


def _probe_sorts(scraper, handle: str) -> None:
    """Which sorts change the order, for one performer's feed on one site."""

    url = f"{scraper.base_url}/models/{handle}/"

    try:
        baseline = _ids(
            _parse(scraper, scraper._get(url, params={"sort_by": BASELINE}))
        )
    except Exception as exc:
        print(f"    baseline {BASELINE} failed: {exc}")
        return

    if len(baseline) < 4:
        # Too short to tell a reordering from a coincidence. A performer with
        # three videos looks identical under every sort there is.
        print(f"    only {len(baseline)} videos; too few to compare sorts against")
        return

    print(f"    baseline {BASELINE}: {len(baseline)} videos")

    for candidate in CANDIDATES:
        try:
            got = _ids(_parse(scraper, scraper._get(url, params={"sort_by": candidate})))
        except Exception as exc:
            print(f"    {candidate:22} request failed: {exc}")
            continue

        if not got:
            print(f"    {candidate:22} returned nothing")
        elif got == baseline:
            # The silent case this whole script exists for.
            print(f"    {candidate:22} IGNORED (same order as {BASELINE})")
        else:
            moved = sum(1 for a, b in zip(got, baseline) if a != b)
            print(f"    {candidate:22} HONOURED ({moved}/{len(got)} positions differ)")


def _parse(scraper, response):
    """The scraper's own card parser, reached without knowing its name.

    Each plugin keeps a private `_videos` in its module -- duplicated on
    purpose, see AGENTS.md -- so this goes through the public method where it
    can and falls back to the module function where it cannot.
    """

    module = sys.modules[type(scraper).__module__]
    return module._videos(response.text, scraper.base_url, scraper.key, None)


def _probe_tags(scraper, video_id: str) -> None:
    """Where a video page keeps its tags, if it keeps them anywhere.

    Prints the candidates rather than deciding, because the class names differ
    between these deployments even where the URL shapes do not -- which is why
    every selector in `scrapers/` keys on href shape instead. The hrefs are
    what this is looking for.
    """

    try:
        response = scraper._get(f"{scraper.base_url}/video/{video_id}/-/")
    except Exception as exc:
        print(f"    could not open a video page: {exc}")
        return

    tree = lxml_html.fromstring(response.text)
    shapes = Counter()

    for link in tree.xpath("//a[@href]"):
        href = link.get("href") or ""

        for marker in ("/tags/", "/categories/", "/category/", "/tag/"):
            if marker in href:
                shapes[marker] += 1

    if not shapes:
        print("    no tag or category links on the video page")
        return

    for marker, count in shapes.most_common():
        sample = [
            (link.text_content() or "").strip()
            for link in tree.xpath(f"//a[contains(@href, '{marker}')]")
        ][:6]
        print(f"    {marker:14} {count:3} links, e.g. {', '.join(s for s in sample if s)}")


def main() -> None:
    found = discover_plugins(str(ROOT / "scrapers"))

    if found.errors:
        print(f"scrapers that would not load: {found.errors}\n")

    for key, plugin in sorted(found.plugins.items()):
        scraper = plugin.scraper
        print(f"\n{key} ({scraper.base_url})")

        try:
            accounts = scraper.list_accounts(1)
        except Exception as exc:
            print(f"    index unreachable: {exc}")
            continue

        # The performer with the most videos on page one of the index: the
        # more videos, the less likely two sorts agree by accident.
        accounts.sort(key=lambda a: a.video_count or 0, reverse=True)

        if not accounts:
            print("    index returned nothing")
            continue

        subject = accounts[0]
        print(f"    probing with {subject.handle} ({subject.video_count} videos)")

        _probe_sorts(scraper, subject.handle)

        try:
            videos = scraper.account_videos(subject.handle, 1)
        except Exception as exc:
            print(f"    could not list videos: {exc}")
            continue

        if videos:
            _probe_tags(scraper, videos[0].video_id)


if __name__ == "__main__":
    main()
