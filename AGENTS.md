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

## The ranking pass

`docs/recommendations.md` is the whole design; the traps:

- **No ranking signal comes from onlyfans.com.** There is no public directory,
  chart or leaderboard on the platform, so there is nothing to scrape that
  ranks creators. `likes_count` from the profile API is a lifetime counter --
  it says "big", never "hot" -- and it is only populated for the minority of
  accounts the profile pass resolved, so ordering by it would rank *enriched*
  above *popular*. The signal is `DirectVideo.views` from the archive sites.
- **`recent_views` is a SAMPLE, not a total.** The newest page of a
  performer's feed, per site. Summing every video would be hundreds of
  thousands of requests for a ranking that comes out the same.
- **Normalise within a site before combining anything.** The five sites have
  wildly different traffic; on raw counts the biggest one decides the whole
  ranking and a performer carried only by the small sites can never place.
- **Trending needs two passes a week apart** and is null until then. An empty
  Trending rail on a new install is the feature working.
- **`OnlyFansAccountStat` is kept per site, never pre-summed.** A site that
  goes dark would otherwise read as every performer on it collapsing at once,
  and afterwards that is indistinguishable from a real decline.
- **`rescore` walks every account, not just the measured ones.** That is the
  only way a score gets *cleared* when its sites stop reporting.
- **`order=random` is not pageable.** The order is redrawn per request, so
  `offset` would skip and repeat. Shuffle is a fresh request at offset 0.

### "More like this"

- **`OnlyFansAccountTerm` holds words from video TITLES, not scraped tags.**
  Tags live on the video page, never on the grid cards, so real tags are a
  request per video; titles come free with the sampling pass. Do not describe
  this as tags anywhere a user reads.
- **`count` and `weight` are separate columns on purpose.** `weight` is always
  recomputed from `count`. Derive it from itself and it compounds -- within a
  few passes the scores say more about how often the job has run than about
  the titles.
- **Every failure in this area is silent.** A wrong tokeniser, a missing
  rarity weighting, an unfiltered ubiquitous term: all of them still return
  twenty plausible-looking performers. Nothing logs and nothing 500s. The
  tests in `tests/test_onlyfans_addon.py` are the only thing that notices.
- **Collaborative filtering is not available and never will be here.** One
  user, no interaction matrix. Do not add a "personalised feed".

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

### Rejected candidates (2026-10-26 pass over theporndude's OnlyFans category)

Shipped from this pass: `thothub.to`, `leakgallery.com`, `hornyfans.to`,
`leak.xxx`, `x-video.tube`, `thothd.com`, `analegg.com`, `xxthots.com` (see
their own docstrings). Everything below was evaluated and rejected, with the
specific evidence, so it is not re-walked from scratch:

- **A free-text tube search is not a performer index.** `erothots.is` has no
  working `/models/`, `/pornstar/` or `/pornstars/` — all three 302 to the
  homepage or to a different domain (`erothots.co`, itself a live-cam
  affiliate directory under `/girls/<category>/`, not an OnlyFans archive).
  Its own `/search/<query>/` redirects to `/videos/<query>` and answers with
  videos whose *titles* matched the text, the same "search can't enumerate
  people" shape `fapello.py`'s docstring describes — except this site has no
  people index to fall back on at all.
- **SimpCity is a forum** (per this task's own standing instruction) **and its
  given domain doesn't currently resolve.** `simpcity.su` is NXDOMAIN against
  a public resolver (Cloudflare DoH), not merely ISP-blocked — consistent with
  third-party reports that the forum rotates domains to dodge takedowns. Not
  worth chasing a moving domain for a forum that was already out of scope.
- **`onlyfaps.com` and `fapfolder.com` are dead domains repurposed to a
  cam-affiliate directory.** Both resolve to the same IP and both redirect to
  `erothot.co`, a live-cam aggregator (`/girls/cheap-privates`,
  `/girls/cam2cam`), not an OnlyFans archive.
- **`teenager365.com` is a mirror, not a new site.** It redirects straight to
  `hornyfap.tv`, an alt-TLD of the already-shipped `hornyfap.com` — same
  catalogue, per this file's own "never a mirror" rule.
- **Dead/unreachable, checked 2026-10-26:** `ultrahqporn.com` (DNS resolves,
  TCP connect refused outright, plain and via `curl_cffi`), `simpshub.com` and
  `fansteek.com` (DNS resolves to Cloudflare, every request 522s — Cloudflare
  reports the origin itself as unreachable), `coomerfans.com` (503 on every
  path), `fapdungeon.com` and `slutvids.com` (521 on every path). `jizzy.tv`,
  `onlyjerk.com`, `tittytube.net`, `vippussy.net` are NXDOMAIN against public
  DoH — no domain was given for these four in the task brief, so this is "the
  guessed domain is wrong or gone," not a verdict on the site by that name.
  `pornleaks.in` answers 404/0 bytes on every path checked, including its own
  `/models/`; only `/packs.php` answers anything.
- **A WordPress rewrite fuzzy-matching `/models`, `/pornstar/`, `/girls/` or
  `/performers/` to one specific blog post is not an index.** These are
  gossip/aggregator blogs with a tag taxonomy, confirmed by checking that the
  "hit" URL is a single post's own permalink, not a listing:
  `realpornclip.com`, `thesauceis.com`, `naughtyblog.org` (now
  `naughtyblog.st`), `fapptime.com`, `theleaksbay.com`.
- **Four index-path guesses returning byte-identical content is a single
  SPA/landing-page fallback, not four real routes.** `borntobefuck.com`,
  `fapfappy.com`, `baddieschicks.com`, `fapshots.com`, `onlychickshub.com`,
  `leakporner.com` (redirects every path to `tv.leakporner.com`'s homepage),
  `celebexposed.com` (same fallback on three of the four, `403` on the
  fourth).
- **`nsfw247.com` and `ososedki.com` stayed `403` even under `curl_cffi`
  Chrome impersonation** on every index path tried — a step past a bare
  TLS-fingerprint gate. Time-boxed out rather than escalating to a real
  patched browser or FlareSolverr for a site that was not yet confirmed to
  have anything worth that effort.
- **No working index path and no sitemap, on every attempt
  (`/models/`, `/pornstar/`, `/girls/`, `/performers/`, plus the homepage and
  `/sitemap.xml` where that differed):** `internetchicks.com`, `dirtyship.com`,
  `picazor.com`, `wildskirts.com`, `thotslife.com`, `ibradome.com`,
  `hotscope.tv`, `asstoo.com`, `nudecosplaygirls.com`, `thotflix.com`,
  `influencersgonewild.com`, `thotchicks.com`, `saucesenpai.com`,
  `uncut-x.com`, `fastleaks.com`, `baddies.xxx`, `share-nude.com`,
  `fapelloleaks.com`, `tnapics.com`.

Not evaluated at all this pass, well past a hundred candidates past the ones
above: see the session's final report for the "not yet evaluated, confirmed
KVS or confirmed real index" shortlist worth picking up first next time.

## What you are allowed to do to get a site working

The full catalogue of techniques, recurring gate shapes and dead ends is in
[STRATEGIES.md](STRATEGIES.md); read it before reverse-engineering anything and add to it
whenever you learn something.

The maintainer's standing policy: **a site that does not hand over its media in
plain HTML is not a reason to give up, and none of the following needs asking
first.** Try the cheap routes before the heavy ones, and write down in the file
what was tried and why.

**Order of attack, cheapest first**

1. Read what the real page does before assuming a gate. Many "browser-only"
   sites are a JSON API behind a click, or have the media list inlined in the
   server-rendered page (Next.js flight data `self.__next_f.push([1,"..."])`,
   an inline `window.x = {...}`, a `data-links` attribute). Log every request
   and response of the real page, not just `/api/`.
2. Grep the site's bundle for the endpoint, the key, the base URL. Static keys
   and API roots are usually literals; re-read them when decryption starts
   failing (they rotated).
3. Run the site's code to learn what it does instead of decoding it by hand.
4. Check that the result is something a player can use: fetch the URL, decode a
   few seconds. **Never trust a plausible URL**: a site can answer a stale
   handshake with a looping decoy, or serve a login page as video.

**Cloudflare, Turnstile, Anubis and other bot gates: bypassing is allowed.**
Use whatever works, in this order of effort:

- `curl_cffi` with a browser `impersonate=` profile (a TLS/HTTP2 fingerprint
  gate often needs only that).
- A real browser: Playwright/Patchright/nodriver/undetected-chromedriver, or
  Camoufox. Stock headless Chromium does NOT clear a managed challenge or
  Turnstile (it fingerprints CDP and `navigator.webdriver`); a patched build
  does.
- [FlareSolverr](https://github.com/FlareSolverr/FlareSolverr)
  (`docker run -p 8191:8191 ghcr.io/flaresolverr/flaresolverr`; `POST /v1`
  with `{"cmd":"request.get","url":"...","maxTimeout":60000}`) returns cleared
  cookies, the User-Agent it solved with, and the body. A shipped plugin MAY
  call a FlareSolverr the deployment provides (read its URL from the plugin's
  settings, never hard-code a host); `cf_clearance` is tied to the solving
  IP and User-Agent, so fetch the media with the same cookies, UA and egress.
- Solve the gate yourself: proof-of-work, device-attestation endpoints that
  only *score* a client profile (a made-up desktop profile and a fresh key
  often passes).
- A different front or mirror of the same catalogue.
- Limit: this is about bot detection and browser checks. It is not licence to
  break into accounts, defeat a paywall with someone else's credentials, or
  use stolen keys; a source that needs a login the user has not given is
  blocked, not bypassed.

**Reverse engineering is allowed, including running the site's own code.**

- Download the bundle and run it. In the container that means `node` (or
  `quickjs`/`py_mini_racer`/`js2py` when Node is not available) via a
  subprocess, with browser globals stubbed just enough.
- Shipping a plugin that downloads the site's player code at resolve time and
  runs it is allowed when no native route exists. Run only the code of the
  site being scraped, cap the number and size of scripts, give every run a
  timeout, run in a subprocess, expose no secrets of the app to it. Return
  empty (never guess) the moment a shape is missing. Treat its output as
  untrusted: only `http(s)` URLs, verified.
- Hook `crypto.subtle` (digest, importKey, encrypt/decrypt, exportKey) and
  log a stack trace: that turns "reverse-engineer a signing scheme" into
  "read the log".
- WASM: load the `.wasm` in Node or `wasmtime`, wrap `WebAssembly.instantiate`
  to dump linear memory around each call. A module with imports into
  canvas/`navigator` often only feeds an anti-bot check around a pure
  computation; recover the algorithm and port it.
- Recurring shapes worth recognising: AES-GCM envelopes with a static key or a
  key derived from the date/request, custom base64 alphabets, ROT13 plus
  character shifts, XOR-then-encrypt, seeded keystreams.

**Network blocks and geoblocks: working around them is allowed.** DNS-level
blocks by the ISP (use DoH), region locks (send the market/country parameter or
cookie the site's own client sends, or go out through a VPN, SOCKS/HTTP proxy
or a remote shell in the right country). `self.session` already honours the
user's VPN setting. When curl returns 200 and Python gets 403 with identical
headers, suspect the TLS handshake (use `curl_cffi`), not the headers.

**Tokens and IPs.** A signed URL can be bound to the resolving network
(`asn=`, an IP in the token). Resolve at play time, from the deployment's own
egress, and test inside the real container
(`docker exec <riven container> python3 ...`) before calling a source fixed.

**Dead ends are recorded, not repeated.** When an approach fails for a reason
that is architectural (the media is behind a paywall, a login, DRM), say so in
the plugin's docstring with the date, so the next attempt starts from there.
Retry a dead end when the site's bundle changes.

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

Asking the sites what they support -- which sort orders they honour, where a
video page keeps its tags. Container only, because its requests go through the
VPN-routed session:

    docker exec riven-tpdb env PYTHONPATH=/riven/src:/riven/addons/onlyfans \
      /riven/.venv/bin/python /riven/addons/onlyfans/scripts/probe_kvs.py

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

## A screen's shape is data, or one surface falls behind

The rails were added to `ui/src/Grid.svelte` as five literal components and
`tv/browse` was not touched. Nothing failed -- the web page and the television
each drew a correct screen, a version apart, and there is no test that can see
that while the definition is duplicated.

`onlyfans_addon/rails.py` is now the one list, served at `GET /rails`. The web
page renders one `Rail` per entry; `tv/browse` builds one section per entry.
**Add a rail by adding a tuple**, and both surfaces have it on the next load
with no build of either. `tests/test_onlyfans_addon.py` asserts that
`tv_browse` walks `RAILS` and that no rail heading appears as a string literal
inside `tv.py` -- the check reads the parsed tree, not the raw source, so a
comment mentioning Trending is fine and a hard-coded heading is not.

The same rule is the answer for anything else that grows a second renderer.

## The avatar, the banner, and stacking order

Two separate bugs, both reported as "overlap":

- **`.ofx-banner` is positioned and `.ofx-avatar` was not.** Within one
  stacking context a positioned element paints over a static one whatever the
  document order, so the avatar's negative margin lifted it into the banner
  and the banner painted straight back over the lifted half. The avatar is
  `position: relative; z-index: 1` now. Anything else that has to sit above
  the banner needs the same.
- **A fixed banner height with `object-fit: cover` crops hard.** An 8rem strip
  across a 1200px card shows a 9:1 slice of a 3:1 picture. OnlyFans serves
  headers at 3:1, so the box is `aspect-ratio: 3 / 1` and nothing is cropped.
  **Do not add `max-height` back**: `aspect-ratio` plus a cap does not crop,
  it narrows the element, which is the empty strip to the right of the banner
  that was reported two fixes before this one.

## Identifying a performer is two questions, not one

`profile.py` answers "does this username exist" -- a handle that is not an
account 404s, which is the whole reason the guest API is trusted to write to
the index. It does **not** answer "is this account this performer's", and for
a guessed username that did not matter, because the guess was built out of the
account's own handle.

`discover.py` changes that. It takes usernames off other people's web pages:
the archive's site search for "Holly Brougham" returns Holly *and* several
unrelated models, and every one of those has a real OnlyFans username on it.
Measured on 40 accounts: 29 usernames confirmed to exist, **19 of them
strangers'**. The pass had stamped Holly Brougham with `alannasworldx`,
complete with the wrong woman's avatar and bio.

`discover.matches` is the second question and it is deliberately strict: the
archive's slug must flatten to our handle, or the confirmed profile must be
named after this performer. A prefix rule takes `milla` for `millaroyce`; a
contains rule takes far worse. **Never loosen it to raise the hit rate.** An
unidentified account keeps the picture an archive lent it and looks
unremarkable; a wrongly identified one wears another woman's face under this
performer's name, permanently, and nothing downstream has any reason to doubt
it.

Anything that reaches `_apply_onlyfans_profile` with a `candidates` list MUST
pass an `accept` callback.

## The search engines do not work from this host

Measured 2026-09-12 from the deployment: DuckDuckGo answered two queries and
then served its anomaly page (HTTP 202) to everything for a long while, Mojeek
answered a captcha page, and Bing answers but carries no onlyfans.com links
for these queries at all. The engine half of `discover.py` therefore
contributes close to nothing today; **the archive half is doing the work**.

It is kept because it costs nothing when the engines refuse, and because the
identity check above makes a bad engine result harmless. Do not "fix" it by
working around a challenge page -- that is a bot filter, and a challenge is
the engine declining. The account is left unstamped so it comes round again.
If this needs to actually work, it needs a keyed search API, not a cleverer
scrape.

## A site is not ruled out until its own listings have been enumerated

fapello was written off in one session and shipped as a scraper in the next.
The first pass tried this index's handles as fapello slugs -- `izzygreen`,
`caroline-zalog`, `jameliz` -- got four 404s, and concluded the site soft-404s
everything. Its real slugs are `mina-shirakawa`, `bobbie-moore`,
`sumikowrestles`, and they are printed on its own homepage.

Testing a site with another site's identifiers tests the *mapping*, not the
site. Read slugs off the site's listing pages before concluding anything about
what it holds.

## Declared limits that nothing enforces are worse than no limit

`DirectScraper.rate_limit` existed from the first commit and was never applied.
The fapello index walk found it: eleven pages served, then 403 on everything,
including requests a user was waiting on. The run stored eleven accounts out of
thousands and **reported success** -- a 403 partway through a walk is
indistinguishable from the end of the index, so the walk stopped and the sync
called it a clean finish.

Two lessons, and the second is the general one:

- Pace in `_get`, not in `_RoutedSession.request`. A scraper probing a
  rendition with `session.head` is answering a click and must not queue behind
  an index walk's budget.
- **A walk that ends early must be able to say so.** "No more pages" and "the
  site stopped talking to me" arrive as the same empty result, and only one of
  them means the index is complete.

## The two site families, and why `account_images` is separate

The KVS archives file images into albums: `account_galleries` lists them and
`gallery_images` opens one. The post-per-item archives (fapello and its clones)
have no albums at all -- every item is its own post, images and video
interleaved in one reverse-chronological feed, which is what an OnlyFans
profile looks like.

Collapsing the two would either mint thousands of one-image albums or throw
away paging over a feed running to thousands of items. A site answers one or
the other; the mixed grid asks both and interleaves the results.

**Filter at draw time, not at fetch time.** The grid's Videos/Photos chips hide
what is already loaded. Filtering the fetch means "load more" advances each
feed by a different amount depending on which chips are lit, and turning a chip
back on leaves a hole in the middle of the list.

## Account search is fuzzy, and the ordering has a trap in it

`GET /accounts?search=` used to be two `ilike` clauses, which is a substring
test rather than search: a single dropped letter returned nothing at all, and
an empty page reads as "not indexed" rather than "mistyped".

It now goes through the host's `program.utils.fuzzy`. That is a host import,
like `program.db.db` and `program.utils.time` already were -- the add-on runs
inside the host process and shares its database, so sharing its matching rules
is what keeps a search of studios and a search of accounts behaving the same
way. See the host's AGENTS.md for how the matching itself works.

Two things specific to this table:

* **The handle IS the collapsed spelling.** It is passed as `collapsed=`
  rather than being collapsed again in SQL, which is the whole reason that
  column is stored the way it is: "sophie rain", "sophierain" and
  "Sophie-Rain" all reach the same account.
* **TRAP: `order_by` APPENDS.** The relevance ranking has to be applied
  BEFORE `_ORDERS[order](query)`, not after. Put it after and the rail's own
  ordering leads while relevance becomes a tiebreak nobody ever reaches --
  a search inside "newest" would return the newest accounts that happen to
  match, in date order, which looks exactly like search not working.

Migration `0005_name_trgm` adds the GIN indexes, and breaking it once taught
two things worth keeping:

* **Qualify the operator class: `public.gin_trgm_ops`.** The host runs an
  add-on's migrations with `search_path` set to the add-on's OWN schema, so
  an unqualified `gin_trgm_ops` fails with *operator class "gin_trgm_ops"
  does not exist for access method "gin"*.
* **An add-on's migrations run in a TRANSACTION**, unlike the host's, which
  `env.py` runs under AUTOCOMMIT. The host's pattern -- try/except per
  optional statement, carry on -- is therefore actively WRONG here: the first
  failure poisons the transaction, alembic's own version bump dies with
  `InFailedSqlTransaction`, and **the whole add-on fails to load**. Observed:
  `Addons: 1 loaded, 1 failed (onlyfans)`, and the entire OnlyFans surface
  gone because of an optional index. ASK whether the extension is usable and
  skip if not; never attempt-and-catch.

Creating the extension is the host's job, in `public`. Doing it here under the
add-on's search_path would install a second copy into the add-on's schema.

They are a PERFORMANCE property only (tens of thousands of rows here, against
~1,200 in the studio directory), so **verify them after deploying** -- a skip
is silent by design:

    SELECT indexname FROM pg_indexes WHERE schemaname = 'onlyfans';
