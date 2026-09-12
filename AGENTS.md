# riven-addon-onlyfans — agent notes

The OnlyFans performer index, as a Riven add-on. Everything the feature is
lives here; the host knows only what `riven_addon.py` declares. `README.md` is
the user-facing description — this file is the traps.

Several Claude Code sessions work across these repos at once. Before changing
anything: `git log --oneline -10`.

This repo absorbed the old `onlyfans_scrapers` repo and the OnlyFans half of
`riven-tpdb`. Neither of those carries any of it any more.

## The contract with the host

`riven_addon.py` defines `ADDON`. The host imports that file, reads the
manifest, validates settings, migrates the schema, calls `start()`, and mounts
the router at `/api/v1/x/onlyfans`. Nothing else about this repo is known to
it.

What the add-on is allowed to import from the host is small and stable:
`program.db.db.db_session`, `program.settings.settings_manager`,
`program.utils.time.utcnow`, `program.services.vpn`,
`program.services.directscrapers.{base,plugins}`, and `program.addons`.
Anything beyond that is reaching into the host's internals and will break.

### Traps specific to being an add-on

- **The folder name is the identity.** It is the Postgres schema, the route
  prefix and the settings key. `manifest.key` must equal it; the host refuses
  to load an add-on where they disagree, because its data would land somewhere
  its own uninstall would not look.
- **Imports in `riven_addon.py` must be eager.** The host puts this folder on
  `sys.path` only while that file executes, then removes it so two add-ons
  cannot shadow each other's packages. A submodule imported lazily afterwards —
  inside a request handler — would not resolve.
- **The package is `onlyfans_addon`, not `backend`.** Every add-on is imported
  into one interpreter; two packages named `backend` would collide in
  `sys.modules` and one add-on would silently run the other's code.
- **Never bind settings to an attribute.** Read through `config.settings()`
  every time. A save replaces the settings object, so a captured copy goes on
  serving stale values until restart — that bug shipped once here: enabling the
  profile lookup saved, read back as true, and did nothing for hours.
- **`config.save()` exists because `config.settings()` returns a copy.**
  Mutating what it hands back and calling the host's save writes the unchanged
  original.
- **Tables must carry `schema="onlyfans"`.** They use their own `Base`, not the
  host's — sharing the host's would put them in its metadata, where
  `create_all` and autogenerate both put them back in `public`, exactly where
  a `DROP SCHEMA` cannot reach them.
- **`ui/*.js` runes need `.svelte.js`.** `src/main.svelte.js` uses `$state`
  outside a component; as a plain `.js` the compiler leaves the call alone, the
  build succeeds with no warning, and the page dies on mount with
  `$state is not defined`.
- **The built bundle is committed.** Installing from a git URL must not require
  Node on the server. Rebuild with `cd ui && npm run build` and commit the
  output whenever `ui/src` changes.

### The onlyfans.com profile API

- **Do not scrape `onlyfans.com/<handle>`.** It is a single-page app; every
  handle — real, fake, banned — returns the same ~17.6KB shell whose `og:image`
  is the OnlyFans logo. Two real handles returned byte-identical pages.
- The data comes from `/api2/v2/users/<name>`, which answers a **guest** when
  the request is signed: a `sess` cookie from `/api2/v2/init`, then `sha1` over
  `static_param\ntime_ms\npath\nuser_id` plus a checksum summed from fixed
  digest positions. `user-id` must be `"0"` in the header **and** in the signed
  message. The constants rotate on every OnlyFans redeploy, so they come from a
  published rules feed with a vendored copy as the floor.
- **A 404 is definitive and is remembered; a failure is not.** Stamping an
  error would look identical to a rate limit and would permanently write off
  every account the pass reached during an outage.
- **`handle` is the wrong string to ask with** — it is stripped to
  alphanumerics for deduplication, so it 404s for anyone whose username has a
  dot or an underscore. Up to four candidates are tried, sites' slugs first.
- **`avatar_from_site`** marks a borrowed picture. Without it, `avatar_url or
  ...` could never upgrade an archive thumbnail to the performer's own.

## Planned work

`docs/recommendations.md` is the design for ranked rails (Trending, Most
popular, Rising, New). Nothing in it is implemented. Its two load-bearing
findings: popularity does **not** come from onlyfans.com, and `DirectVideo.views`
is already parsed by every scraper and then discarded.

## What a change here has to preserve

- **One file, one `DirectScraper` subclass.** `key` is unique and is what
  resolve and every content route are keyed on; changing it orphans anything
  already pointing at it.
- **Never import another plugin's internals.** Duplicate the helper. Five of
  these files carry the same `_kvs_sources` / `_unscramble` / `_license_token`
  block on purpose — a shared module would make one site's fix a five-site
  regression risk, and plugins are loaded individually by path.
- **Return `[]`, never raise, for "nothing here".** Raise only for a genuinely
  unreachable site. An empty result is a normal answer, especially for the
  gallery methods.
- **Never invent a resolution.** Report a height only where the site states
  one. An "HD" badge sets `hd`, not `resolution` — the same badge covers 720p
  and 4K.
- **Only `/get_file/` URLs are playable.** See the substituted-login-page trap
  in `README.md`. Anything else in a `video_url` slot is the site handing back
  a page instead of a file.
- **The account methods stay optional.** They are defaulted on the base class
  so the twenty tube plugins keep loading. Making one abstract breaks every
  existing plugin at construction time.

## The KVS shortcut

All five sites are the same CMS, and so are most candidates you will evaluate.
What that buys you:

- Performer index at `/models/`, 12–25 per page, paged either as
  `/models/<n>/` or via `?mode=async&function=get_block&block_id=...&from=<n>`.
- Model page at `/models/<slug>/`, paged the same way, with
  `?sort_by=post_date` for newest-first. **Ask for that sort explicitly** — a
  feed the user reads as chronological must not be ordered by popularity on one
  site out of five.
- Galleries, where they exist, at `/albums/models/<slug>/`, with full-size
  images behind `/get_image/...?i-acctoken=` (the image analogue of
  `/get_file/`), which 302s to signed storage.
- Media URLs sometimes scrambled behind `function/0/`, undone with the page's
  `license_code`. **Carry the unscrambler whether or not the site needs it
  today** — it is a per-deployment setting that flips on a version bump, and a
  scrambled URL used as-is is a well-formed 404 rather than a loud failure, so
  it surfaces months later as "this scraper quietly stopped working".

### Two traps in the scrapers that cost real time

Carried over from the scrapers' own repository, which this add-on absorbed.

**A gated rendition is substituted, not withheld.** A KVS player block happily
advertises a quality it will not serve signed-out:

```
video_alt_url2: 'https://ultrathots.com/?login'
video_alt_url2_text: '1080p'
```

Take the label at face value and the quality picker offers 1080p, the player
fetches it, and renders an HTML login page as video. **Only `/get_file/` URLs
are accepted as real renditions.** This is KVS behaviour rather than one
site's quirk, so assume it applies to any new site added here.

**The performer index and the content grids use different card classes** —
`item second-card` on the index, `main-card` on the video and album grids —
and those class names differ *between* sites while the URL shapes do not.
Selecting on a class name silently works on one page and returns nothing on
the next, which is why every selector here keys on the href shape instead.

## Evaluate a site before writing it

The two things that disqualify a candidate are cheap to check and expensive to
discover after the fact:

1. **Is there a browsable performer index?** `xxbrits.com` was dropped for this
   — it has per-star pages but `/pornsstar/` 404s and `/members/` is numeric
   user accounts, so there is no way to enumerate anyone.
2. **Does the media URL actually serve bytes?** A `206` with `video/mp4` and a
   valid header, fetched with the `Referer` the scraper would send. A page that
   parses beautifully and resolves to a login redirect is the common failure.

For galleries, also check how many images a *signed-out* request really gets,
against the count the gallery advertises. That gap is how the image feature
turned out to be much thinner than the album listings suggest.

## The scraper contract is vendored here

`onlyfans_addon/scraper_api/` holds `DirectScraper`, the VPN-routed session,
the result models and the plugin loader. It is a **copy**: the canonical one
is in riven-addon-tubescraper, which writes scrapers against the same
contract. Neither add-on may import the other -- either can be disabled or
removed underneath it -- and the host owns no scraper code at all.

To change the contract, edit it there and run:

    ./scripts/sync-scraper-api.sh ../riven-addon-tubescraper

**Never hand-edit this copy.** `_RoutedSession` is where the VPN proxy is
applied, so a divergence between the copies fails nothing visibly -- it just
sends this add-on's scraper traffic out of the wrong address, which is the
entire thing VPN routing exists to prevent. `scraper_api/drift.py` compares
the copies on the deployed machine, where both live under `/riven/addons`,
and `tests/test_onlyfans_addon.py` calls it.

## Running the tests

    docker exec riven-tpdb env PYTHONPATH=/riven/src:/riven/addons/onlyfans \
      /riven/.venv/bin/python /riven/addons/onlyfans/tests/test_onlyfans_addon.py

    cd ui && npm install && npm run build && npm run smoke

`ui/addon.js` is **committed build output** -- the host serves it and builds
nothing, so editing `ui/src/` without rebuilding ships the previous bundle
and everything looks fine.

## The bug the UI smoke test now guards

Opening a site on a performer's page fetched its videos, threw them away and
fetched again, forever. The effect that resets the list on a Videos/Images
change called `more()`, and `more()` READS `loading`, `done` and `page` --
the same state the effect WRITES, so every write re-ran it.

Nothing errored. Measured against the live server: twenty-five identical
`?site=notfans&page=1` requests, every one a 200, and not one video rendered.
From the outside that is indistinguishable from a site that has nothing,
which is how it was reported. The reset and fetch are now `untrack`ed.

The smoke test never opened a site, which is the gap it came through. It does
now, and asserts the request COUNT as well as the render -- "it rendered"
alone would pass while looping.

## Our CSS is outranked by the host unless the build says otherwise

`ui/postcss.config.js` prefixes every rule this add-on ships with four
`:not(#\#)` compounds. It is not decoration and it must not be removed.

The host downlevels its Tailwind v4 stylesheet for LG webOS
(`postcss.config.js` there, `chrome >= 94`), and postcss-preset-env emulates
`@layer` ordering with **specificity**: Tailwind's preflight, whose subject is
`*`, comes out at **(4,0,0)** because `:not()` takes its argument's specificity
and `#\#` is an id. Class-level CSS cannot reach that, so without the prefix
every declaration of ours that preflight also sets — padding, margin, border, a
button's background, a heading's font-size — is reset away, while colours and
`border-radius` survive.

That half-applied state looks precisely like a stylesheet that failed to load,
and was diagnosed as one twice. It is not: check
`getComputedStyle(el).padding` against the rule that sets it rather than the
network tab.

The host cannot fix this for us — it serves `ui/addon.css` verbatim — and it
cannot stop downleveling either, or webOS 23 renders it with no styles at all.

Keep authoring plain class selectors. The one rule the build must never touch
is a `@keyframes` selector: prefixing `0%` produces a keyframe that matches
nothing and kills the animation with no error.


## The television is a third surface, and it reads data not markup

`riven-tv` renders for sets running engines from about 2016 and **cannot run
`ui/addon.js`** — dynamic `import()` is Chromium 63, that target is 53. So
this add-on answers `tv/browse`, `tv/detail` and `tv/play` with plain JSON
(`onlyfans_addon/tv.py`) and a generic renderer over there draws it. The full
contract is `docs/tv.md`.

Two deliberate differences from the web page, both forced by the remote:

- **Every site is fetched on the detail screen**, where the web page makes
  each one a button. A page of buttons that each load a section is fine with a
  pointer and tedious with a directional pad, and the sections are what the
  viewer came for. A site that fails is named among the facts rather than
  raising — the other three still have videos on them.
- **No galleries.** The lightbox is a keyboard-and-pointer affordance, image
  coverage is thin ([[onlyfans-profile-match-rate]] territory: effectively one
  site, a handful per gallery), and a television is the worst surface for
  stills.

### Two of these hosts refuse a still to a viewer's device

hornyfap and porn4fans answer **403 to a plain GET** for their own
thumbnails. Not a referer check — `referrerpolicy="no-referrer"` covers those,
which is why the other sites are fine — a bot filter that wants a browser's
headers. A television asking directly gets twenty blank tiles, which reads as
a page that failed rather than a host being difficult.

`PROXY_THUMBNAILS` in `tv.py` names them, and their stills go out as a path on
this add-on's own mount which the set fetches back through itself. **A list,
not "proxy everything":** proxying is a round trip per picture and a grid is
sixty of them. Add a site when its stills come back blank, and not before —
all thirteen hosts the tube add-on's stills come from answer 200 directly.

`tv/thumb` is **not an open proxy**, which is why it takes a site as well as a
URL: the host must be the one that scraper serves, from its own `base_url`.
Without that it would fetch anything on the internet on request, from inside
the household's network and, when streaming is routed, from the far end of the
tunnel. Only a leading `www.` label is tolerated (porn4fans serves stills from
`www.` while its `base_url` is bare); a suffix comparison would admit
`porn4fans.com.attacker.net`.
