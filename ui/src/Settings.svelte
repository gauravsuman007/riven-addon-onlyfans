<!--
    The installed scrapers, read-only, in this add-on's settings tab beside the
    generated form.

    A list rather than switches: every scraper in the folder always loads, so
    there is nothing to decide per site. What the tab CAN usefully say is what
    is installed and which build of it -- after updating the add-on, whether
    the server is really running the files you pushed.
-->
<script>
    import { listScrapers, startSync, syncStatus } from "./api.js";

    let status = $state(null);
    let failed = $state(false);

    async function refresh() {
        const next = await listScrapers();
        failed = next === null;
        if (next) status = next;
    }

    let sync = $state(null);
    let starting = $state(false);

    const refreshSync = async () => {
        const next = await syncStatus();
        if (next) sync = next;
    };

    async function run(sites) {
        starting = true;
        const next = await startSync(sites);
        if (next) sync = next;
        starting = false;
    }

    $effect(() => {
        refresh();
        refreshSync();
        // Polled only while a walk is in flight: a finished sync has nothing
        // new to say, and the weekly job can start one without this page.
        const timer = setInterval(() => {
            if (sync?.running) refreshSync();
        }, 3000);
        return () => clearInterval(timer);
    });

    const runs = $derived(
        Object.fromEntries((sync?.sites ?? []).map((row) => [row.site, row]))
    );

    function siteState(key) {
        const row = runs[key];
        if (!row) return "";
        if (row.state === "running") return `running, page ${row.pages}, ${row.accounts_seen} seen`;
        if (row.state === "ok")
            return `${row.accounts_seen} accounts (+${row.accounts_new}) ${day(row.finished_at)}`;
        if (row.state === "failed") return `failed: ${row.error ?? ""}`;
        return "never run";
    }

    const scrapers = $derived(status?.scrapers ?? []);
    const broken = $derived(Object.entries(status?.errors ?? {}));

    const day = (iso) => (iso ? iso.slice(0, 10) : "");
</script>

<div class="ofx ofx-settings">
    <div class="ofx-settings-head">
        <p class="ofx-settings-title">
            Account index{#if sync}: {sync.accounts} accounts, {sync.accounts_with_avatar} with a picture{/if}
        </p>
        <button
            type="button"
            class="ofx-btn"
            disabled={starting || sync?.running}
            onclick={() => run()}>
            {sync?.running ? "Syncing…" : "Sync all sites now"}
        </button>
    </div>

    {#if sync?.feeds}
        <p class="ofx-settings-note">
            Stored feeds: {sync.feeds.stored} ({sync.feeds.fresh} up to date), {sync.feeds.waiting} waiting to be built or refreshed
            for saved, recently opened, popular and trending performers.
        </p>
    {/if}

    <p class="ofx-settings-title">Installed scrapers ({scrapers.length})</p>
    <p class="ofx-settings-note">
        Loaded from <code>{status?.plugin_dir ?? "…"}</code>. All of them run; the version is the
        scraper's own if it declares one, otherwise a short hash of its file.
    </p>

    {#if failed}
        <p class="ofx-settings-error">Could not read the scraper list.</p>
    {/if}

    {#each broken as [file, message] (file)}
        <p class="ofx-settings-error"><strong>{file}</strong>: {message}</p>
    {/each}

    <table class="ofx-settings-table">
        <thead>
            <tr><th>Scraper</th><th>Site</th><th>Version</th><th>Updated</th><th>Index</th><th></th></tr>
        </thead>
        <tbody>
            {#each scrapers as scraper (scraper.key)}
                <tr>
                    <td>{scraper.name}{scraper.indexes_accounts ? "" : " (no index)"}</td>
                    <td>{scraper.base_url}</td>
                    <td><code>{scraper.version}</code></td>
                    <td>{day(scraper.updated)}</td>
                    <td>{scraper.indexes_accounts ? siteState(scraper.key) : ""}</td>
                    <td>
                        {#if scraper.indexes_accounts}
                            <button
                                type="button"
                                class="ofx-btn"
                                disabled={starting || runs[scraper.key]?.state === "running"}
                                onclick={() => run([scraper.key])}>Sync</button>
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
