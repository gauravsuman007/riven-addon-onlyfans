# Recommendation rails — design notes

Not implemented. This is the plan for turning the flat, arbitrarily-ordered
account index into ranked rails (Trending, Most popular, Rising, New).

Read `AGENTS.md` first; everything below lives under the constraints it
describes, in particular the KVS shortcut and the onlyfans.com API section.

## The short version

Popularity does not come from onlyfans.com. It comes from the archive sites,
which already report per-video view counts that this add-on parses and then
discards. Trending additionally needs a time series, and nothing in the schema
is one yet — that is the single blocking gap.

## Why not onlyfans.com

- **There is no public directory, chart or leaderboard.** OnlyFans has no
  browse surface at all; discovery happens off-platform. There is nothing to
  scrape that ranks creators against each other.
- **The profile API gives a level, not a trend.** `/api2/v2/users/<name>`
  (already used by the enrichment pass — see AGENTS.md for the signing) yields
  `likes_count`, `posts_count`, `photos_count`, `videos_count`,
  `subscribe_price`. `likes_count` is a lifetime counter that only ever grows,
  so it says "big", never "hot". It is also only populated for the minority of
  accounts the enrichment pass resolves, which makes it useless as the primary
  sort key: ordering by it would rank "enriched" above "popular".
- **Scraping it harder is not worth it.** Anything beyond the guest-signed
  endpoint needs a real logged-in session, and hammering it with one is the
  standard way to lose that account. The payoff would still be a level.
- **Third-party rank aggregators** ("top 0.1%") are themselves estimates built
  under the same constraints, plus paid placement. Usable as a weak prior at
  most; not a source of truth.

**Conclusion:** onlyfans.com contributes profile detail, not ranking. Treat
`likes_count` as a tie-breaker with a low weight, never as the popularity
signal.

## Where the signal actually is

### 1. Per-video views — already parsed, currently thrown away

Every scraper fills `DirectVideo.views` (`scrapers/porntn.py`,
`hornyfap.py`, `notfans.py`, `porn4fans.py`, `ultrathots.py` — each via
`parse_count` on the card's views text). Nothing persists it:
`OnlyFansAccountSource` stores only `video_count` and `image_count`.

Summed across an account's videos, this is a real demand measure. Note what it
measures: appetite for this performer's *archived* content, not their OnlyFans
subscriber count. For a browsing surface that is arguably the better quantity —
it reflects the audience actually using this page.

### 2. KVS sort modes — a trending feed for free

All five sites are the same CMS. The add-on already relies on that for
`?sort_by=post_date`. KVS also ships `most_viewed` and `rating`, and on most
deployments time-windowed variants (weekly/monthly "most viewed"). A windowed
sort **is** a trending feed, computed by the site, with no history-keeping on
our side.

**Probe before building on it.** Operators disable individual sorts, and the
five deployments will not agree. The check is one request per site per mode:
ask for the sort, confirm the resulting order actually differs from
`post_date`. A KVS sort key the site does not know is silently ignored rather
than rejected — the page comes back 200 in default order, so "it worked" and
"it did nothing" look identical. That is the same failure shape as the
substituted-rendition trap in AGENTS.md and needs the same treatment:
verify the effect, do not trust the 200.

### 3. Signals already in the schema

- `source_count` — how many of the five sites carry the performer. Today's
  default ordering. Saturates at 5 and does so fast, so it must stay a
  tie-breaker or a small weighted term. Lead with it and every 5-source
  account outranks a genuinely surging 2-source one.
- `video_count` / `image_count` per source — archive depth.
- `created_at` — when this index first saw them. This is "new to us", which is
  a legitimate and honest rail; it is not "new on OnlyFans" and must not be
  labelled as such.
- `saved` — the only first-party behavioural signal there is.

## The blocking gap: nothing is a time series

Popularity is a level; trending is a derivative. No table records history, so
trending is currently uncomputable regardless of what gets scraped.

Sketch:

    OnlyFansAccountStat
        account_id   FK -> OnlyFansAccount.id, ON DELETE CASCADE
        site         str   -- per-site, not pre-aggregated (see below)
        captured_at  tz-aware datetime
        total_views  int | None
        video_count  int | None
        likes_count  int | None   -- from the OF profile, when known
        PRIMARY KEY / UNIQUE (account_id, site, captured_at)

Kept per-site rather than pre-summed. A site that goes dark for a week would
otherwise show up as every performer on it collapsing at once, and a
pre-aggregated row cannot be told apart from a real decline after the fact.
Per-site rows let a missing site be skipped instead of counted as zero.

Written by the existing sync, in the same pass that refreshes sources. Under
`onlyfans` schema and a migration in `onlyfans_addon/migrations/versions/`,
like everything else the add-on owns — so `DROP SCHEMA onlyfans CASCADE` still
takes it with it.

Retention: this grows by (accounts x sites) per cycle forever. Decide a
horizon up front — a rolling ~90 days is enough for every rail below — and
prune in the same job that writes, rather than discovering the table's size
later.

## Scoring

Two stored columns on `OnlyFansAccount`, both recomputed by the sync, both
indexed so the rails are an ORDER BY rather than a computation per request:

- `popularity_score` — the level.
- `trending_score` — the derivative.

**Normalise within each site before combining.** The five sites have wildly
different traffic. Raw summed views would let the single biggest site dictate
the entire ranking, and a performer carried only by the small sites could
never place. Rank- or z-normalise each site's view figures, then combine.

**Damp by age.** A back-catalogue with millions of lifetime views is not
trending. Trending is `(views_now - views_7d_ago)`, divided by a base that
keeps a huge account from winning on absolute delta alone.

**Rising** is the rail that earns its place: high velocity on a *low* base.
It is the only one that surfaces things the user has not already seen, and it
falls straight out of the same two numbers.

## The rails

Shippable with no new scraping:

- **Most carried** — `source_count`. Today's ordering, given a name.
- **New arrivals** — `created_at` desc. "New to this index", labelled honestly.
- **Deepest archives** — summed `video_count`.

After views are persisted:

- **Most popular** — `popularity_score`.

After snapshots exist:

- **Trending**, **Rising**.

## Recommendations proper

Collaborative filtering is off the table: one user, no interaction matrix.
What works here is content-based similarity —

- shared tags/categories on the archive sites (needs tag capture, which no
  scraper does today),
- co-occurrence in the same site rosters,
- a **Because you saved X** rail off the existing `saved` flag.

"More like this" on the detail page is the useful form. A personalised home
feed is not reachable with one user's data and should not be attempted.

## Suggested order of work

1. Persist `DirectVideo.views` per source. Nothing else needs to change to
   make **Most popular** real.
2. Probe the KVS windowed sorts across all five sites; record per site what
   actually works, the way the scrapers record everything else.
3. Add `OnlyFansAccountStat` + snapshot write + prune. Unblocks **Trending**
   and **Rising**.
4. Scoring columns, indexes, and the rails in the UI.
5. Tag capture, then "more like this".
