<script>
    import { untrack } from "svelte";

    import { accountVideos, accountGalleries } from "./api.js";
    import Poster from "./Poster.svelte";

    let { handle, site, mode, onplay, ongallery } = $props();

    let items = $state([]);
    let page = $state(0);
    let loading = $state(false);
    let done = $state(false);
    let failed = $state(false);

    /*
        Mounting is what starts the request, and the parent only mounts a
        section once its site button is pressed. So an unopened site costs
        nothing, and five sites never fetch at once unless asked to.
    */
    async function more() {
        if (loading || done) return;

        loading = true;
        const next = page + 1;
        const fetcher = mode === "images" ? accountGalleries : accountVideos;
        const result = await fetcher(handle, site, next);

        if (result === null) {
            // This site's failure, shown against this site. The other
            // sections stay up: an archive being down is routine and must not
            // read as the whole page being broken.
            failed = true;
        } else {
            items = [...items, ...result];
            page = next;
            if (result.length === 0) done = true;
        }

        loading = false;
    }

    $effect(() => {
        // The dependencies, read deliberately and in full: the Videos/Images
        // toggle is a different list entirely rather than more of this one,
        // and the section is reused across handles and sites.
        mode;
        handle;
        site;

        /*
            EVERYTHING ELSE IS UNTRACKED, AND THAT IS THE WHOLE POINT.

            `more()` READS `loading`, `done` and `page` -- and this effect
            WRITES all three. Tracked, that is a loop: the effect runs, resets
            the list, fetches, writes state, and the write re-triggers the
            effect, which resets the list again. The request succeeds every
            time, so there is no error anywhere; the results are simply thrown
            away by the next pass before they can render.

            Observed against the live server: twenty-five identical
            `?site=notfans&page=1` requests, every one a 200, and not one
            video on the page. It reads as "scraping returns nothing", which
            is the opposite of what is happening.
        */
        untrack(() => {
            items = [];
            page = 0;
            done = false;
            failed = false;
            loading = false;
            more();
        });
    });

    function duration(seconds) {
        if (!seconds) return null;
        const minutes = Math.floor(seconds / 60);
        return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
    }
</script>

<section class="ofx-section">
    <h2>{site}</h2>

    {#if failed}
        <p class="ofx-error">{site} did not answer.</p>
    {:else if !loading && items.length === 0}
        <p class="ofx-note">Nothing here on {site}.</p>
    {/if}

    <div class="ofx-tiles">
        {#each items as item (item.video_id ?? item.gallery_id)}
            <button
                class="ofx-tile"
                type="button"
                onclick={() => (mode === "images" ? ongallery(item) : onplay(item))}>
                <div class="ofx-thumb">
                    <Poster
                        src={mode === "images" ? item.cover : item.thumbnail}
                        alt={item.title}
                        name={item.title} />
                    {#if mode === "images" && item.image_count}
                        <span class="ofx-badge">{item.image_count}</span>
                    {:else if duration(item.duration)}
                        <span class="ofx-badge">{duration(item.duration)}</span>
                    {/if}
                </div>
                <p>{item.title}</p>
            </button>
        {/each}

        {#if loading}
            {#each Array(4) as _, index (index)}
                <div class="ofx-skeleton"></div>
            {/each}
        {/if}
    </div>

    {#if !done && !failed && items.length > 0}
        <button class="ofx-btn ofx-outline" type="button" onclick={more} disabled={loading}>
            {loading ? "Loading…" : "Load more"}
        </button>
    {/if}
</section>
