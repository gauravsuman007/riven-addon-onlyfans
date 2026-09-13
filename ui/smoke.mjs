/*
    Does the built bundle actually mount and render?

    The host imports `addon.js` at runtime and hands it a DOM node, so nothing
    in the main application's build or typecheck ever looks at this file. The
    one failure that matters -- it loads, exports a function, and then throws
    on mount -- is invisible until someone opens the page. This runs it in a
    real DOM with a stubbed fetch and checks that both screens come out.

    It already caught one: `$state` in a plain `.js` compiles to nothing and
    dies with "$state is not defined" at mount, while the build succeeds
    silently. The entry is `main.svelte.js` for that reason.

        npm run build && npm run smoke
*/
import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><body><div id=root></div></body>", {
    url: "http://localhost/x/onlyfans",
    pretendToBeVisual: true
});

// HTMLMediaElement and friends matter: Svelte 5 feature-tests against them
// while mounting, and a missing one throws a ReferenceError from inside
// the framework that looks nothing like the component at fault.
for (const key of ["window", "document", "Node", "Text", "Comment", "DocumentFragment", "Element", "HTMLElement", "HTMLMediaElement", "HTMLImageElement", "HTMLVideoElement", "HTMLInputElement", "HTMLButtonElement", "HTMLAnchorElement", "Event", "CustomEvent", "requestAnimationFrame", "cancelAnimationFrame", "getComputedStyle", "MutationObserver", "CSS"]) {
    try {
        globalThis[key] = dom.window[key];
    } catch {
        // `navigator` and friends are getter-only on newer Node; the bundle
        // does not need them.
    }
}

// The grid uses IntersectionObserver for infinite scroll; jsdom has none.
globalThis.IntersectionObserver = class {
    observe() {}
    disconnect() {}
};
dom.window.IntersectionObserver = globalThis.IntersectionObserver;

const calls = [];
globalThis.fetch = async (url) => {
    calls.push(String(url));
    return {
        ok: true,
        json: async () =>
            // The rows of the landing page, which the backend owns so that
            // the television draws the same ones. The page renders whatever
            // this returns, so the stub is the contract.
            String(url).includes("/rails")
                ? [
                      { order: "trending", title: "Trending", note: "fastest growing", tv: true },
                      { order: "popular", title: "Most popular", note: "", tv: true },
                      { order: "random", title: "Something else", note: "", tv: false }
                  ]
                : String(url).includes("/similar")
                ? [
                      {
                          handle: "neighbour",
                          display_name: "A Neighbour",
                          avatar_url: null,
                          source_count: 3
                      }
                  ]
                : String(url).includes("/videos")
                ? [
                      {
                          site: "hornyfap",
                          video_id: "v1",
                          title: "A Clip",
                          thumbnail: "http://x/t.jpg",
                          duration: 125,
                          page_url: "http://x/1"
                      }
                  ]
                // These two must be matched BEFORE the bare `/accounts/`
                // branch below, which would otherwise swallow them and hand
                // the mixed grid an account object where it expects a list.
                // That is exactly what it did: `.map is not a function`, from
                // inside the bundle, with nothing naming the endpoint.
                : String(url).includes("/galleries")
                ? [
                      {
                          site: "hornyfap",
                          gallery_id: "g1",
                          title: "An Album",
                          cover: "http://x/c.jpg",
                          image_count: 8
                      }
                  ]
                : String(url).includes("/images")
                ? [{ index: 0, image_id: "demo/12", width: null, height: null }]
                : String(url).includes("/accounts/")
                ? {
                      handle: "demo",
                      display_name: "Demo Person",
                      avatar_url: null,
                      header_url: "http://x/h.jpg",
                      bio: "a bio",
                      is_verified: true,
                      source_count: 2,
                      photos_count: 12,
                      likes_count: 900,
                      of_username: "demo",
                      of_url: "https://onlyfans.com/demo",
                      website: "https://example.com",
                      location: "Somewhere",
                      sources: [{ site: "hornyfap", site_handle: "demo", video_count: 3 }]
                  }
                : // A rail the ranking pass has not reached yet. Trending needs
                  // the index sampled twice a week apart, so on a fresh
                  // install it is legitimately empty -- and the rail has to
                  // render nothing at all rather than a heading over a gap.
                  String(url).includes("order=trending")
                ? { items: [], total: 0 }
                : {
                      items: [
                          {
                              handle: "demo",
                              display_name: "Demo Person",
                              avatar_url: null,
                              source_count: 2
                          }
                      ],
                      total: 1
                  }
    };
};

const mount = (await import(process.argv[2])).default;
const target = dom.window.document.getElementById("root");
/*
    The host bridge, captured rather than stubbed away.

    A video must reach the HOST's player -- that is what carries the external
    hand-off, bookmarking and resume. This add-on rendered a `<video>` of its
    own instead, which inside the Android shell had nowhere to go but the
    browser; the assertion below is what stops it regressing to that.
*/
const played = [];
const host = { play: (options) => played.push(options) };

const handle = mount({
    target,
    path: "",
    api: "/api/v1/x/onlyfans",
    navigate: () => {},
    host
});

await new Promise((r) => setTimeout(r, 300));

const html = target.innerHTML;
console.log("api calls:", calls);
console.log("rendered h1:", /<h1[^>]*>([^<]*)/.exec(html)?.[1]?.trim());
console.log("renders the account:", html.includes("Demo Person"));
console.log("has search box:", html.includes('type="search"'));

/*
    THE RAILS.

    Each one asks for itself, so the count of requests is as much of the
    assertion as the markup: a rail whose effect reads the state it writes
    re-runs forever, renders correctly the whole time, and is invisible from
    the outside. That exact bug already shipped once in `SiteSection`.
*/
const railCalls = calls.filter((c) => c.includes("order="));
console.log("one request per rail:", railCalls.length === 3, `(${railCalls.length})`);
// The rows come from `/rails`, so the page asks for them and draws what it is
// given -- this is what keeps the web page and the television on one list.
console.log("asks the backend which rails exist:", calls.some((c) => c.includes("/rails")));
console.log(
    "draws no rail the backend did not name:",
    !html.includes("Carried by the most sites") && !html.includes("Rising")
);
console.log("popular rail rendered:", html.includes("Most popular"));
console.log("random rail rendered:", html.includes("Something else"));
// The stub answers `order=trending` with nothing, which is what a fresh index
// really looks like for a week.
console.log("empty rail hides itself:", !html.includes("Trending"));

// Shuffle: the same rail, asked again, and nothing else re-requested.
const beforeShuffle = calls.length;
[...target.querySelectorAll("button")]
    .find((b) => (b.textContent || "").includes("Shuffle"))
    ?.click();
await new Promise((r) => setTimeout(r, 200));
const shuffled = calls.slice(beforeShuffle);
console.log(
    "shuffle refetches only the random rail:",
    shuffled.length === 1 && shuffled[0].includes("order=random")
);

// Show all: out of the rails and into the paginated grid, which is the same
// list the page has always had.
[...target.querySelectorAll("button")]
    .find((b) => (b.textContent || "").includes("Show all"))
    ?.click();
await new Promise((r) => setTimeout(r, 200));
const all = target.innerHTML;
console.log("show all opens the full grid:", all.includes("ofx-grid"));
console.log("show all leaves the rails:", !all.includes("Something else"));
console.log("show all offers a way back:", all.includes("Back to recommendations"));

// ...and back, so the rails are not a one-way door.
[...target.querySelectorAll("button")]
    .find((b) => (b.textContent || "").includes("Back to recommendations"))
    ?.click();
await new Promise((r) => setTimeout(r, 200));
console.log("back returns to the rails:", target.innerHTML.includes("Something else"));

// The detail screen, reached the way the host reaches it: same mount, new path.
handle.update("demo");
await new Promise((r) => setTimeout(r, 300));
const detail = target.innerHTML;
console.log("detail name:", /<h1[^>]*>\s*([^<\n]*)/.exec(detail)?.[1]?.trim());
console.log("detail bio:", detail.includes("a bio"));
console.log("detail banner:", detail.includes("h.jpg"));
console.log("detail verified badge:", detail.includes("ofx-verified"));
console.log("detail profile link:", detail.includes("onlyfans.com/demo"));
console.log("detail stats:", detail.includes("photos") && detail.includes("likes"));
console.log("detail site button:", detail.includes("hornyfap"));
/*
    "More like this" returns a BARE LIST, not a page -- it is already capped
    and has no more to give -- while every other rail returns `{ items }`. The
    rail handles both, and this is what says so.
*/
console.log("similar rail rendered:", detail.includes("A Neighbour"));
console.log(
    "similar rail is titled for the performer:",
    detail.includes("More like Demo Person")
);

/*
    OPENING A SITE, which is where the content actually comes from.

    This was missing, and a real bug shipped through the gap: the section's
    effect read the same state it wrote, so it re-triggered itself, cleared
    the list and re-fetched forever. Every request returned 200 and no video
    ever rendered -- indistinguishable, from the outside, from a site that had
    nothing. The request COUNT is therefore asserted as well as the result:
    "it rendered" alone would have passed even while looping.
*/
const before = calls.length;
const siteButton = [...target.querySelectorAll("button")].find((b) =>
    (b.textContent || "").includes("hornyfap")
);
siteButton?.click();
await new Promise((r) => setTimeout(r, 400));

const opened = target.innerHTML;
const videoCalls = calls.slice(before).filter((c) => c.includes("/videos"));

console.log("site opens and renders its videos:", opened.includes("A Clip"));
console.log("fetches that site exactly once:", videoCalls.length === 1, `(${videoCalls.length})`);

/*
    THE MIXED GRID AND ITS FILTER.

    One page of a site is all three feeds at once -- videos, albums and loose
    images -- because an OnlyFans profile is one feed with both kinds in it
    rather than two lists behind a switch.

    The filter then hides what is drawn WITHOUT refetching. That is the part
    worth asserting: filtering at fetch time makes "load more" advance each
    feed by a different amount depending on which chips are lit, and turning a
    chip back on leaves a hole in the middle of the list.
*/
const opened2 = target.innerHTML;
console.log(
    "one page asks every feed the site has:",
    calls.some((c) => c.includes("/videos")) &&
        calls.some((c) => c.includes("/galleries")) &&
        calls.some((c) => c.includes("/images"))
);
console.log("the grid mixes both kinds:", opened2.includes("An Album") && opened2.includes("A Clip"));

const chip = (label) =>
    [...target.querySelectorAll("button")].find(
        (b) => (b.textContent || "").trim() === label
    );

console.log("both filter chips start selected:", 
    chip("Videos")?.getAttribute("aria-pressed") === "true" &&
    chip("Photos")?.getAttribute("aria-pressed") === "true");

const beforeFilter = calls.length;
chip("Photos")?.dispatchEvent(new dom.window.Event("click", { bubbles: true }));
await new Promise((r) => setTimeout(r, 150));
const filtered = target.innerHTML;

console.log("unselecting photos hides them:", !filtered.includes("An Album"));
console.log("...and leaves the videos:", filtered.includes("A Clip"));
console.log(
    "...without refetching anything:",
    calls.length === beforeFilter,
    `(${calls.length - beforeFilter} new)`
);

chip("Photos")?.dispatchEvent(new dom.window.Event("click", { bubbles: true }));
await new Promise((r) => setTimeout(r, 150));
console.log("reselecting brings them straight back:", target.innerHTML.includes("An Album"));

// Playing one: through the host, with everything the host's player needs to
// hand it to another application (site + videoId identify it; the host adds
// which add-on it came from).
const card = [...target.querySelectorAll("button")].find((b) =>
    (b.textContent || "").includes("A Clip")
);
card?.click();
await new Promise((r) => setTimeout(r, 50));

console.log("play goes to the host's player:", played.length === 1);
console.log(
    "hand-off identity travels:",
    played[0]?.site === "hornyfap" && played[0]?.videoId === "v1"
);
console.log(
    "no <video> of its own:",
    !target.innerHTML.includes("<video")
);

handle.destroy();
console.log("after destroy, empty:", target.innerHTML.trim() === "");
