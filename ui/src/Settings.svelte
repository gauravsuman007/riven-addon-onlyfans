<!--
    The installed scrapers, read-only, in this add-on's settings tab beside the
    generated form.

    A list rather than switches: every scraper in the folder always loads, so
    there is nothing to decide per site. What the tab CAN usefully say is what
    is installed and which build of it -- after updating the add-on, whether
    the server is really running the files you pushed.
-->
<script>
    import { listScrapers } from "./api.js";

    let status = $state(null);
    let failed = $state(false);

    async function refresh() {
        const next = await listScrapers();
        failed = next === null;
        if (next) status = next;
    }

    $effect(() => {
        refresh();
    });

    const scrapers = $derived(status?.scrapers ?? []);
    const broken = $derived(Object.entries(status?.errors ?? {}));

    const day = (iso) => (iso ? iso.slice(0, 10) : "");
</script>

<div class="ofx ofx-settings">
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
            <tr><th>Scraper</th><th>Site</th><th>Version</th><th>Updated</th></tr>
        </thead>
        <tbody>
            {#each scrapers as scraper (scraper.key)}
                <tr>
                    <td>{scraper.name}{scraper.indexes_accounts ? "" : " (no index)"}</td>
                    <td>{scraper.base_url}</td>
                    <td><code>{scraper.version}</code></td>
                    <td>{day(scraper.updated)}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
