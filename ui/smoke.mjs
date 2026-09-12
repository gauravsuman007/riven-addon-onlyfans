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
            String(url).includes("/videos")
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
const handle = mount({ target, path: "", api: "/api/v1/x/onlyfans", navigate: () => {} });

await new Promise((r) => setTimeout(r, 300));

const html = target.innerHTML;
console.log("api calls:", calls);
console.log("rendered h1:", /<h1[^>]*>([^<]*)/.exec(html)?.[1]?.trim());
console.log("renders the account:", html.includes("Demo Person"));
console.log("has search box:", html.includes('type="search"'));
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

handle.destroy();
console.log("after destroy, empty:", target.innerHTML.trim() === "");
