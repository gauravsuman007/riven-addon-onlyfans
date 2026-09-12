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
