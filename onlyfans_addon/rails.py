"""The rows on the landing page, defined once for every surface that draws them.

THIS FILE EXISTS BECAUSE A RAIL WAS ADDED AND ONLY HALF THE APP GOT IT. The
recommendation rows were written into ``ui/src/Grid.svelte`` as five literal
components, and ``tv/browse`` went on answering with the flat alphabetical grid
it had always answered with. Nothing failed: the television drew a correct
screen, just not the one the add-on had grown. There is no test that catches
"this surface is a version behind" as long as both surfaces are internally
consistent, and there never can be while the definition is duplicated.

So a rail is DATA, here, and both renderers are fed from it:

* the web page fetches ``GET /rails`` and renders one ``Rail`` per entry;
* ``tv/browse`` builds one section per entry.

Adding a rail is one tuple. Both surfaces gain it on the next load, without a
build of either, and ``tests/test_onlyfans_addon.py`` asserts the television
offers exactly what this file declares -- which is what turns "the TV is behind"
from something nobody notices into a failing test.

ORDER IS PART OF THE DEFINITION. What is moving now, then what is moving from
nowhere, then what is simply big, then what just arrived, then breadth. Each
rail hides itself when it has nothing to say, so on a fresh index this collapses
to the last two rather than to five headings over five empty strips.
"""

from dataclasses import dataclass


@dataclass(frozen=True, slots=True)
class Rail:
    """One row of the landing page.

    `order` is a key of `router._ORDERS`, so a rail cannot name an ordering the
    index does not have -- the test asserts that too, and `/accounts` answers
    400 for an unknown one rather than silently serving the default.
    """

    order: str
    title: str
    note: str = ""
    #: Whether a television draws this one. `random` is the exception: its
    #: point on the page is the shuffle button beside it, and a remote control
    #: has nothing to press. A set gets the full index as its last section
    #: instead, which is the same row's "Show all".
    tv: bool = True


RAILS: tuple[Rail, ...] = (
    Rail("trending", "Trending", "fastest growing this week"),
    Rail("rising", "Rising", "growing fast from a small base"),
    Rail("popular", "Most popular", "most watched across the archive sites"),
    Rail("new", "New to the index"),
    Rail("carried", "Carried by the most sites"),
    Rail("random", "Something else", tv=False),
)
