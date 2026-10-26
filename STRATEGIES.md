# Scraper strategies

Every reverse-engineering technique, recurring gate shape and dead end learned
while getting archive site scrapers to work. [AGENTS.md](AGENTS.md) says what is
allowed (everything here is); this file is the *how*. Add a technique or a
confirmed dead end here whenever you learn one.

Reading notes for this repo:

- The techniques below were worked out partly on live-TV and VOD sources where
  the research tools are Node and Playwright. They are tools for FINDING the
  recipe. The plugin you ship here is Python: port the recovered algorithm into
  plain Python (`hashlib`, `hmac`, `cryptography`/`pycryptodome` for AES-GCM,
  `base64`, `curl_cffi` for the TLS fingerprint). Where the text below says
  "port into TypeScript", read "port into Python".
- All five live sites are KVS deployments. The gate you are usually fighting is
  a Cloudflare front or a scrambled media URL (`function/0/...` prefix undone
  by `_unscramble`), not a signing scheme. The signing and WASM sections apply
  when you encounter a non-KVS candidate.
- "Resolver", "handle", "ScrapedStream" and "host relay" are live-TV
  vocabulary; the equivalent here is `resolve()` returning a playable URL or
  the `account_videos` / `gallery_images` calls returning signed `/get_file/`
  addresses.
- Research tools (Playwright, jsdom, wabt, FlareSolverr, Node itself) belong
  in a scratch directory or a throwaway container, not in the plugin's imports.

## Order of attack (cheapest first)

1. **Look at the real page's requests before assuming a gate.** Several sources
   written off as "needs a browser" were a JSON API behind a click, or the
   stream list already inlined in the server-rendered HTML (Next.js flight data:
   `self.__next_f.push([1,"..."])` string chunks, concatenated; or an inline
   `window.x = {...}` / `rawLinks` array). Log every request *and* response of
   the real page first.
2. **Grep the bundle for the endpoint** when nothing crypto shows in the network
   log. A static key (`x-player-key`, an AES key hex constant next to
   `crypto.subtle.importKey`) is usually a literal in `assets/index-*.js`;
   re-read it from there when decryption starts failing.
3. **Run the site's code to learn, don't decode it** (see appendices below).
   Instrument, then port the result into clean Python.
4. **Check whether the result is even deliverable** before going deep. A
   `/get_file/` URL that 302s to signed storage is deliverable; one that
   redirects to a login page or needs per-segment cookies is not.

## Techniques, in the order they paid off

- **Real Playwright with `context.addInitScript`**, never a sandboxed
  MCP/agent browser: those inject after the page's own scripts ran and silently
  drop network history. Playwright is research-only here -- install it in a
  scratch directory, never as a dependency of the repo or a scraper.
- **Hook `crypto.subtle` and log a stack trace on every call** (args *and*
  results, `exportKey` too). The stack names the bundle and column of each
  crypto step: "where does this come from" becomes a lookup, and a "random"
  field turns out to be an XOR key.
- **Log requests with `request.allHeaders()`** (includes cookies) and log *all*
  requests, not just `/api/`: half of one protocol was a Next.js **server
  action** (`POST` to the page URL with a `next-action` header, answer
  `text/x-component`), invisible to an `/api/` filter.
- **Hand the page a substitute WASM instance.** `instance.exports` is frozen
  -- assigning a wrapper into it does nothing. Wrap
  `WebAssembly.instantiate`/`instantiateStreaming` and *return a different
  object* `{ module, instance: { exports: { ...wrapped } } }`; dump linear
  memory at every pointer argument before and after the call.
- **Splice test in a real session.** Let the browser build a request, then in
  `page.route` replace one component with your Node-built one and see whether
  the server still accepts. Isolates the single rejected field in a few runs.
- **Replay an observed request verbatim with `curl`** before porting anything:
  write the body to a file and use `--data-binary @file` (shell quoting mangles
  base64's `+`/`/`).
- **Observe a front-end instead of reading it.** Let it load a performer page
  and read `performance.getEntriesByType('resource')`; many apps push every
  upstream call through their own relay with the destination URL-encoded in a
  query parameter.
- **Test where you will run.** A resolve that works on a laptop can return
  nothing from the host's datacentre IP (providers are chosen by address; an IP
  in the token ties it to the resolving network). Test inside the real container
  before calling it fixed.
- **When curl works and Python 403s with identical headers, suspect the TLS
  handshake, not the request.** Use `curl_cffi`; cap at TLS 1.2; test ALPN
  http/1.1. Run through the matrix before hunting headers.
- **A wasm-bindgen player: read its data instead of its code.** Hook the
  imports; the call sequence names the steps and linear memory after a decode
  has the plaintext beside the ciphertext. Crate names in the module's strings
  (`chacha20-0.9.1`) say which primitives it uses.
- **Never trust a plausible URL.** A site can answer an outdated handshake with
  a looping decoy video, a master whose segments all 403, or a login page served
  as video. Fetch the first bytes before reporting it playable.

## Recurring shapes

- **Scrambled KVS media URL.** `video_url` of the form
  `function/0/https://.../get_file/N/<hash>/...`. Strip the prefix and the URL
  is well-formed but returns 404 -- the first 32 characters of the hash segment
  are permuted with a key derived from the page's `license_code`. `_unscramble`
  in any of the five live plugins is the working implementation. Carry it even
  when the current deployment serves plain URLs: it is a per-site setting that
  flips on a version bump, and a scrambled URL used as-is is a well-formed 404
  rather than a loud failure.
- **Gated rendition substituted, not withheld.** A KVS player block advertises
  a quality it will not serve signed-out, substituting a login page URL. Only
  `/get_file/` URLs are accepted as real renditions.
- **Encrypted JSON envelope, static key.** `base64(iv[12] ‖ ciphertext ‖ tag)`
  or hex, AES-256-GCM, key a hex literal in the client bundle. When it fails,
  the key rotated: re-read it.
- **Key derived from the request.** `SHA-256("<label>|<path>|<token>")` used
  directly as the AES-GCM key; the label is a constant inside an obfuscated
  player script.
- **Custom base64 alphabet** and **ROT13 + marker deletion + char-code shift
  + reverse** wrappers: ten lines each; find them next to the `fetch`.
- **XOR then encrypt** and **keystreams from a seed** (FNV-1a + murmur3
  `fmix32`): found by the `crypto.subtle` hook showing a key used twice.
- **Proof-of-work gates.** Often named SHA-256 but not: check the real hash. A
  device-attestation endpoint that only *scores* a client profile often passes
  with a made-up desktop profile and a fresh ECDSA key.
- **Rotating embed domains** and **cookies from the embed's own API**: send
  them on every later call of that handshake.
- **A site's own structured data can BE the scrape.** `leakgallery.com`
  (shipped 2026-10-26) is an Angular SPA whose raw server response for every
  index and profile page carries a full `<script type="application/ld+json">`
  block -- `CollectionPage`/`ItemList` for a listing, `ProfilePage`/`Person`
  with a `hasPart` array of `ImageObject`/`VideoObject` for a profile, direct
  `contentUrl`s, no token. `json.loads` on one `<script>` tag replaced every
  card selector this file would otherwise need. Worth checking for on any
  SPA-shaped candidate before concluding it needs a browser: view-source the
  page (not devtools, which shows the hydrated DOM) and grep for
  `application/ld+json` before writing off a client-rendered site.
- **A DDoS-Guard-fronted API can publish its own bypass in the block page.**
  `coomer.st`'s `/api/v1/*` answered 403 with a `text/plain` body reading
  "If you want to scrape, use \"Accept: text/css\" header in your requests
  for now" -- DDoS-Guard's heuristic flags `Accept: application/json` from a
  script as a bot signature, and the operator worked around their own
  vendor's filter rather than fight it. Sending `Accept: text/css` on an
  otherwise ordinary request got real JSON back immediately. Read the body of
  a 403 before escalating to a heavier bypass -- sometimes the answer is
  printed on the door.
- **Two anchors to the same URL on one card is a trap for "read the first
  match."** `leak.xxx`'s video cards render an `<a href="/video/...">`
  wrapping the thumbnail (carrying the HD/duration badges) and a *second*
  `<a href="/video/...">` titled `v-title` inside a sibling `.v-meta` block
  (carrying the view count and posted-at date) -- neither alone has
  everything. A scraper that dedupes on the video id and reads fields from
  "the matching anchor" silently gets the first one in document order and
  loses whatever only lived on the second. Select the containing card and
  read fields from the whole card, not from whichever anchor matched first.
- **A third-party HLS backend can hide behind an iframe-of-an-iframe, and
  still need no auth at all.** `hornyleak.tv` (2026-10-26): a video's own
  page embeds `/embed/<id>/` on the same domain, which embeds a
  *different* domain's `/embed/<token>` ("BEpeak HLS Stream System"),
  whose inline script names a real, server-decoded HLS master playlist.
  Every hop -- including the final MPEG-TS segment -- answered with a bare
  `requests.get`, no cookie, no Referer. `leakgrl.com` turned out to front
  the exact same backend directly from its own domain (a Laravel-signed
  `/s/p/<id>?expires=...&signature=...` URL), with a completely different,
  non-overlapping performer catalogue -- a shared *media* network across
  otherwise-unrelated storefronts, the same relationship the KVS family
  already has with each other.
- **The Accept header as a bot-detection heuristic is not a one-off.**
  `hornyleak.tv`'s `hdplayer.gives/list/...` endpoint 404s this family's
  default `BROWSER_HEADERS` Accept value
  (`text/html,application/xhtml+xml,...`) and serves the real playlist to
  a plain `*/*` -- the same shape as `coomer.st`'s documented
  `Accept: text/css` bypass below. Two independent sites doing this is
  enough to make "try overriding Accept to `*/*` on a 404" a standing
  move, not a one-off curiosity, whenever a response smells like it is
  being refused for *looking* automated rather than for anything about the
  request itself.
- **A WordPress plugin can put the real `<video>` tag inside a base64 query
  string, decodable without ever requesting the iframe it's destined for.**
  `fapnut.net`'s "clean-tube-player" plugin renders
  `<iframe src=".../player-x.php?q=<base64>">`; the `q` value is plain
  base64 of a URL-encoded query string (`post_id=...&type=video&tag=<the
  real HTML>`), and the decoded `tag` *is* the final `<video><source>`
  markup. Decode locally with `base64.b64decode` + `urllib.parse.parse_qs`
  and the iframe itself never needs to be fetched.
- **A post's own `VideoObject` schema.org block is worth checking before
  any HTML-parsing route, on any WordPress candidate.** Three unrelated
  deployments this pass (`amateurdoporn.com`, `gotanynudes.com`, and
  `leakgallery.com` from the pass before) all put the real, direct
  `contentUrl` in a `<script type="application/ld+json">` `VideoObject`
  node -- sometimes top-level, sometimes nested in an `@graph` array next
  to `Article`/`Person`/`BreadcrumbList` siblings. Check both shapes before
  concluding a post has no structured data.
- **A Yoast taxonomy sitemap can be the only real performer index a site
  has, when the site's own "directory" page is a decoy.** `fapnut.net`'s
  visible `/pornstars/` page is actually a filtered *video* grid with no
  performer cards at all; the complete, real enumeration
  (`/actors-sitemap.xml` through `-sitemap5.xml`, ~4,500 pages) only showed
  up by checking `/sitemap.xml`'s own sitemap-of-sitemaps. Worth checking
  on any WordPress candidate whose visible directory looks thin: the
  taxonomy term count in the Yoast sitemap is the ground truth, not the
  themed page.
- **A declared charset can be wrong, and `requests.text` trusts it anyway.**
  `gotanynudes.com` declares `ISO-8859-1` in a response header while
  serving UTF-8 bytes (`response.apparent_encoding` correctly says so); an
  em dash in a title decoded as `â€”` was the visual tell. Decode via
  `response.content.decode("utf-8")` explicitly rather than `.text` on any
  site where accented characters or punctuation look mangled.
- **A WordPress rewrite can 200 an unrelated single post for a guessed
  index path.** `/models/`, `/pornstar/`, `/girls/`, `/performers/` all
  returned `200` on several candidates this pass (`realpornclip.com`,
  `thesauceis.com`, `fapptime.com`, `theleaksbay.com`, `naughtyblog.org`) --
  but the response was one specific blog post whose slug happened to start
  with that word, not a listing. The tell: the "hit" URL in `r.url` after
  redirects is a long, specific post permalink (often with a numeric post id
  prefix), not the clean path requested. Check `r.url`, not just the status
  code, before concluding an index path works.

## Dead ends: how they looked, so you stop early

- A CDN that refuses every requester except the site's own undocumented internal
  client (`428`, no request ever visible in the page's own network log): not a
  header or signature you are missing. Park it with the date.
- A site that parses beautifully but every `video_url` resolves to a login-page
  HTML response: a login page is `text/html`, not a video. Check the final
  `Content-Type` of a HEAD before reporting it fixed.
- A browsable site with no performer index: no way to enumerate who is on it.
  Check `/models/`, `/pornstar/`, the sitemap, or the search before concluding
  an index exists.
- **Declared limits that nothing enforces are worse than no limit.** A walk that
  hits a 403 partway through is indistinguishable from the end of the index at
  the point of failure, and reports success. "No more pages" and "the site
  stopped talking to me" arrive as the same empty result; only one of them means
  the index is complete. Raise (or set a flag) on a 403 mid-walk.
- **A bait front-end**: pages that open "install this extension to unlock"
  popups or redirect to an installer. Malvertising, not a source. Skip.
- **A file-locker-backed archive is a different reverse-engineering project,
  not a gate on the archive itself.** `fans-here.com`/`freefans.tv`
  (DataLife Engine, "videok2s" theme, recognisable by its nav: "Home
  (Categories) / Videos / Tags / Models / Request Board") route every
  single post through a `k2s.cc` preview widget pointing at a
  `tezfiles.com` file page -- itself a JS-only React SPA that would need
  its own separate reverse-engineering of a third company's download flow
  (typically timer/captcha-gated) before a byte could be fetched. Recognise
  the theme/nav fingerprint and park both sites together rather than
  evaluating the same locker twice.
- **A real age-verification wall is not a bot-detection challenge, and this
  repo's bypass policy does not cover it.** `pimpbunny.com` serves "Age
  verification is required in your region" with zero model/video links in
  the raw response -- a client-side identity-verification product
  (Persona/Yoti-shaped), categorically different from a Cloudflare/
  Turnstile check. The bypass order in this file is about bot detection and
  browser fingerprinting; treat an age-verification gate as the "blocked,
  not bypassed" case this file's own limits section already carves out for
  logins and paywalls.
- **A classic packed/obfuscated embed (`'...'.split('|')` style) is a
  parked lead, not a dead end -- just not unpacked yet.** `hornysimp.com`'s
  video posts carry a real `VideoObject.embedUrl` to a third-party embed
  (`hrnyvid.xyz`) whose player script is the Dean-Edwards-packer shape:
  a long pipe-delimited string, `.split('|')`, substituted back into
  minified identifiers. Recognisable on sight by the `split('|')` call next
  to a huge literal; worth a follow-up pass with the string substituted
  back in by hand or run through the site's own code per this file's
  "running an obfuscated bundle" appendix, not attempted this pass.
- A host that does not resolve at all (NXDOMAIN) or a decommissioned route that
  returns the same landing-page HTML for every id.
- **A zero-import WASM is a function, not a lock.** `WebAssembly.Module.imports(
  module).length === 0` and a small export list means it only computes. Worth
  shipping as a black box once the algorithm is confirmed; do not reject it
  without checking the import count.
- **An IP lock is not a dead end when the host does the fetching.** A page that
  says "Access Denied (IP Lock)" to a second egress is fine when the resolver
  runs on the deployment's own address. Test the whole chain from the machine
  that will run it.
- **A short-lived token is a resolver's job, not a reason to reject** a source:
  mint it when someone plays. The window for a `/get_file/` acctoken is short
  but starts at the click, not at index time.
- **`coomer.st` (checked 2026-10-26): a fully working, documented API, parked
  only because the media CDN was unreachable from the evaluating sandbox, not
  confirmed broken.** This is the Kemono/Coomer family (open-source Patreon/
  Fansly/OnlyFans archive). The DDoS-Guard bypass above (`Accept: text/css`)
  gets real JSON from:
  `/api/v1/creators` (~27MB, every creator across every service -- filter
  `service == "onlyfans"`), `/api/v1/onlyfans/user/<id>/profile`, and
  `/api/v1/onlyfans/user/<id>/posts` (full post objects: `file` and
  `attachments` arrays, each `{"name", "path"}`, unwatermarked original
  filenames -- `belledelphine`'s posts carried both `.jpg` and `.mp4`
  attachments on the same post, 1000 posts stated on her profile). Media URLs
  are `https://coomer.st/data<path>`, which 302s to a shard
  (`n1`-`n4`.coomer.st); thumbnails are `https://coomer.st/thumbnail/data<path>`
  via `img.coomer.st`, which also serves `/icons/onlyfans/<id>` and
  `/banners/onlyfans/<id>` directly. **`img.coomer.st` verified serving real
  bytes (`200 image/jpeg`) from this sandbox for icon, banner and thumbnail
  paths.** The `n1`-`n4.coomer.st` shards that serve full-resolution originals
  did not: DNS resolved correctly (e.g. `n3.coomer.st` -> `91.149.227.12`) but
  a raw TCP connect to port 443 timed out completely, on every shard, with
  plain `requests` and with `curl_cffi` impersonation alike -- a sandbox
  egress block, not a site gate, going by `img.coomer.st` working fine on
  what is presumably different infrastructure. **Retried 2026-10-26, same
  result**: `n1`-`n4.coomer.st` all still time out on a raw `socket.connect`
  from this sandbox. Unchanged finding, not a new data point -- the sandbox
  itself still can't reach that subnet. **Before shipping:** retry the
  `n1`-`n4` shards from the real deployment (or through its VPN-routed
  session) and confirm one serves a `200`/`206` on an actual `/data/<path>`
  from a real post's `file`/`attachments` entry. If that resolves, this is
  close to a same-day ship: the API is already fully mapped above.

Record the working recipe (or the dead end, with what was tried and the date)
in the scraper's docstring. A source parked as "blocked" is worth retrying when
its bundle changes -- note the last attempt date so retriage knows when it is
stale.

## Appendix: running an obfuscated bundle in Node to recover a crypto/signing scheme

1. **Download the real bundle** (`curl` the `<script src>` the page loads) and
   confirm it is self-contained.
2. **Load it in `node:vm`** (`vm.createContext` + `vm.runInContext`) with
   browser globals stubbed just enough to parse and start: `document`,
   `window`/`self`/`globalThis` all pointing at the sandbox, `TextEncoder`/
   `TextDecoder`, `crypto` = Node's `require("crypto").webcrypto`, no-op
   `MutationObserver`/`ResizeObserver`/`IntersectionObserver`, `URL`/
   `URLSearchParams`/`Headers`/`Request`/`Response`/`Blob` from Node's globals,
   and a `fetch` stub that **throws an error containing the full request**
   (url, method, headers, body) instead of going to the network. Top-level
   `function` declarations become sandbox properties even if the script throws
   partway; `const`/`let` do not.
3. **Call the function that builds the request directly**, `.catch()` the thrown
   fetch stub's message. Replay it with `curl --data-binary @file`.
4. **If step 2 throws first** (a bundled React app bootstrapping against
   `document.getElementById` returning null): accept the partial failure
   (declarations are hoisted) or use `jsdom` for a DOM that really mounts.
   jsdom's `window.crypto` is read-only: use
   `Object.defineProperty(window, "crypto", { value: webcrypto, configurable: true })`.
5. **Instrument, do not decode.** Wrap `crypto.subtle.digest/importKey/encrypt`
   to log arguments before delegating.
6. **Port the recovered algorithm** into clean Python, using the language's own
   crypto, not the site's minified functions.

## Appendix: WASM-gated sources

- Load the `.wasm` in Node with `WebAssembly.instantiate` and the site's glue,
  stubbing only the browser globals it touches.
- Disassemble with `wasm2wat`/wabt; compare with the JS wrapper to see how
  arguments are encoded (pointer + length into linear memory is common).
- Reproduce one captured input/output pair in Node first; then treat the module
  as a black box.
- `instance.exports` is frozen. Wrap `WebAssembly.instantiate`/
  `instantiateStreaming` and return `{ module, instance: { exports: {...} } }`
  with logging wrappers; dump linear memory at each pointer argument before
  and after.
- Imports into canvas/`navigator`/`localStorage` often only feed anti-bot
  checks around a pure key schedule: stub `performance.now()` as an old page
  until it decrypts once, then recover the algorithm. Rebuild natively; if you
  ship a module, only a zero-import one.

## Appendix: getting past Cloudflare/Turnstile

- Order: `curl_cffi` impersonation, then a patched browser (Patchright, nodriver,
  Camoufox, undetected-chromedriver), then FlareSolverr
  (`docker run -p 8191:8191 ghcr.io/flaresolverr/flaresolverr`, `POST /v1`
  `{"cmd":"request.get","url":"...","maxTimeout":60000}` returns cookies, the
  solving User-Agent and the body).
- Stock headless Chromium clears a simple/legacy JS challenge in a second or
  two, but never a managed challenge or Turnstile (it fingerprints CDP and
  `navigator.webdriver`).
- `cf_clearance` is tied to the solving IP and User-Agent. If only the page/API
  is gated and the media URLs are cookie-free (signed, token in the query),
  FlareSolverr is just a research tool. If the media itself needs the cookie,
  fetch it from the same egress with the same UA and cookie jar.
- "Cloudflare-blocked" can be the ISP's DNS: retest over DoH.

## Appendix: running a site's own code inside a plugin (safeguards)

Download the player code at resolve time and execute it. Same-origin scripts of
the one site only, with a count and byte cap and a timeout per script; run it
in a subprocess with an explicit whitelist of globals (never the app's secrets,
`process`, `require`, real console); its `fetch` resolves against the site's
origin and rejects other hosts. Locate entry points by shape (`indexOf` on a
stable string anchor plus a small regex on a short slice, never a regex over
megabytes). Return empty the moment a shape is missing. Serialise runs (player
code keeps module state), cache the built runtime per script-URL set for a few
hours, fetch short-lived tokens fresh. Treat the output as untrusted (http(s)
URLs only, verified). Document in the docstring what runs, how it is found, and
what would make it return empty.
