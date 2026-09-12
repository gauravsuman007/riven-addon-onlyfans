# riven-addon-onlyfans

A performer index for [Riven](https://github.com/gauravsuman007/riven-tpdb),
built from five OnlyFans archive sites, with profiles read from OnlyFans
itself.

Everything the feature is lives here: its tables, its API, its scrapers, its
scheduled jobs, its settings and its pages. Riven knows only what
`riven_addon.py` declares.

## Install

Settings → Plugins → Add-ons → paste this repository's URL.

Or drop the folder into the host's add-ons directory (`/riven/addons` by
default) and press Rescan. The folder must be named `onlyfans`: the name is
the identity — it is the Postgres schema, the route prefix and the settings
key all at once.

> An add-on runs inside Riven with its database and its credentials. There is
> no sandbox. Install add-ons you would trust with a shell.

## What it does

- **Indexes accounts** from ultrathots, hornyfap, porn4fans, porntn and
  notfans — about 6,400 performers once duplicates across sites collapse.
- **Reads the real profile** from onlyfans.com's guest API: picture, banner,
  bio, website, location, and photo/video/post/like counts.
- **Streams videos and galleries live** from the archive sites, proxied so the
  browser never sees a tokened URL that would 403 on it.

## The scrapers come with it

`scrapers/` ships in this repository and is loaded from wherever the add-on is
installed, so there is nothing to mount and no separate folder to keep in
sync — installing the add-on installs the scrapers.

**Updating the add-on updates them.** Settings → Plugins → Add-ons →
*Check for updates*, then the update arrow: the host fast-forwards this
repository, forgets the add-on's cached modules and re-reads everything from
disk, scrapers included. No restart.

The `plugin_dir` setting overrides the folder and is empty by default. Set it
only if you keep your own copies somewhere else; an empty value means the
bundled `scrapers/`, which is what you want.

## What each site actually gives you

Measured against the live sites, not taken from their marketing. Worth reading
before expecting a feature to work:

| Site | Accounts/page | Avatars | Duration | Thumbnails | Per-account galleries |
| --- | --- | --- | --- | --- | --- |
| ultrathots | 25 | yes | yes | yes | yes, but gated |
| porn4fans | 20 | yes | yes | yes | none on the site |
| porntn | 12 | no | yes | yes | 1 image per album |
| hornyfap | 12 | no | yes | yes | none on the site |
| notfans | 12 | no | no | yes | not attributable |

Two gaps are the sites' doing rather than the scrapers':

- **Avatars exist on two of the five.** The other three render a "no image"
  placeholder for every model in their index, which is why accounts are
  deduplicated across sites and why the onlyfans.com profile lookup matters.
- **Images barely exist.** ultrathots is the only site tying galleries to a
  performer, and a signed-out visitor sees six images of a gallery whose own
  title advertises hundreds. notfans has full galleries it cannot attribute to
  anyone.

## Its data

One Postgres schema, `onlyfans`, holding three tables and its own
`alembic_version`. That is what makes removal complete:

```sql
DROP SCHEMA onlyfans CASCADE;
```

The host does exactly that when you remove the add-on and tick *also delete
its data*. Removing it without that leaves the schema alone, so reinstalling
finds the index where you left it.

## Layout

| path | what it is |
|---|---|
| `riven_addon.py` | the manifest, and the only thing the host imports |
| `onlyfans_addon/` | models, service, profile client, registry, router |
| `onlyfans_addon/migrations/versions/` | its own alembic chain |
| `scrapers/` | the five site plugins |
| `ui/` | the page, built to `ui/addon.js` + `ui/addon.css` |

## Building the UI

```bash
cd ui && npm install && npm run build
```

The built bundle is committed, because the host serves it straight from the
add-on folder and installing from git must not require a Node toolchain on the
server.

See `AGENTS.md` for the traps.
