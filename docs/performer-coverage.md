# Why a performer's page shows seven videos and their OnlyFans shows three hundred

Measured 2026-09-13 against the live index (6,402 accounts, 8,065 sources).
This repo's sibling, riven-addon-tubescraper, carries a document of the same
name written a day earlier. **That document is about a different add-on** --
its diagnosis (search caps, a title-shaped query ladder, a ranker that drowns
a performer's name) is correct for the *scene search* pipeline and does not
apply here. This add-on never searches for a performer's videos. It enumerates
`/models/<slug>/` and skips the ranker entirely, which is the fix that document
proposes as its largest single win.

So the interesting question was: if the pipeline is already right, where does
the content go?

## The pipeline is not the bottleneck. The sites are.

Paging a performer's model feed until it repeats or 404s, live:

| performer | site | pages | unique videos |
|---|---|---|---|
| caroline-zalog | ultrathots | 2 | 46 |
| lillian-phillips | ultrathots | 4 | 82 |
| izzy-green | ultrathots | 1 | 19 |
| natalie-reynolds | ultrathots | 1 | 10 |
| gianna-dior | hornyfap | 1 | 5 |

Pagination is already exhaustive -- those are the sites' whole catalogues for
those people, not a first page. Across the index the mean is **7 videos per
source**, and `source_count` averages **1.26**: 5,084 of 6,402 accounts are
carried by exactly one site. Against a mean of 276 videos on the performers'
own OnlyFans profiles, that is roughly **3% coverage**, and it is the sites'
ceiling rather than ours.

Two ways of widening it were measured and both are worthless:

- **Probing sites an account is not yet linked to** (every scraper × the
  handle, the OF username, the display slug): 25 accounts, 160 probes, 22
  apparent hits -- *every one of them false*, all from the porntn bug below.
  Real gain: zero. The sync already walks each site's full model index, so
  there is nothing left for guessing to find.
- **A second slug on a site already linked**: 1 hit in 30 accounts
  (`savvysuxx` is also `savvy-suxx` on ultrathots, worth 5 extra videos). Noise.

## The bug this turned up

porntn answers **301 to its own homepage** for a model it does not carry, where
its four siblings answer 404. `_get` follows redirects, so `account_videos` got
a valid 200 holding the homepage's newest-thirty grid and parsed real video
cards out of it. Four handles, three of them nonsense, returned the same thirty
ids with 100% overlap.

It never reached a user: every stored `site_handle` comes from that site's own
`/models/` index, so the live pages only ever asked for models that exist -- all
84 porntn sources re-verified as real after the fix. It was latent, and it would
have fired the instant any handle-guessing feature shipped, which is exactly
what was being measured when it surfaced. Fixed by not following redirects on a
model page; guarded by a test that holds the property rather than the site's
current behaviour.

## The one real lever, and why it is not takeable here

**Coomer** is an OnlyFans archive with a public JSON API, and it publishes its
own scraping convention in the 403 body: send `Accept: text/css`. Keyed on the
OnlyFans username -- which this add-on already resolves for 4,531 accounts.
What it holds, measured:

| performer | we carry | coomer |
|---|---|---|
| izzygreen | 19 | **802** |
| thesophialocke | 1 | **1,443** |
| jamelizzzz | — | **222** |
| naturalnadia | 63 | **194** |
| carolinezalog | 46 | **179** |

A 10-40x lift, on the exact key we already have.

**Its media is unreachable from this deployment.** The API host (`coomer.st`,
190.115.31.237) answers fine; every file 302s to `n1`-`n4.coomer.st`
(91.149.227.10-13, plus an AAAA in 2a0a:cd80::/32) and those refuse TCP:
IPv4 times out, IPv6 fails in 19ms with no route. Tested from the host's own
ISP *and* through a Tailscale exit node in a different country on different
infrastructure; both fail identically. `coomer.cr` and `kemono.cr` are the same
four nodes. It is not a header, a cookie, a captcha or a user-agent -- nothing
completes a handshake.

So a Coomer scraper today would publish hundreds of videos per performer that
all fail to play, which is worse than seven that work. **It is worth building
the moment those nodes answer** -- the API is documented, stable, paginated 50
at a time at `/api/v1/onlyfans/user/<handle>/posts`, and attachment paths are
plain `.mp4`. Re-test with four HTTPS range requests before writing any code.

## Ruled out

- **fapello.com** -- soft-404s every performer slug tried, direct and via
  search.
- **thotslife, internetchicks, sexythots, influencersgonewild** -- WordPress
  blogs with a post per performer: no model index, no player, no `.mp4`.
- **nudostar.tv, thothub.lol, leakedzone** -- a model index exists but the model
  pages carry no video cards; not the KVS shape these scrapers read.
- **Forum and DDL siterip indexes** (the `0xxx.ws` shape) -- captcha per
  article, premium file hosts at the end. That verdict covers the class.

## What the UI should say

A profile with hundreds of videos has perhaps a few percent of it redistributed
anywhere at all. Parity is not reachable and a panel implying it reads as
broken. "46 found across 2 sites" is the honest statement.
