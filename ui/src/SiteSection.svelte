<script>
    import { untrack } from "svelte";

    import { accountVideos, accountGalleries, accountImages, photoUrl } from "./api.js";
    import Poster from "./Poster.svelte";

    let { handle, site, kinds, onplay, ongallery, onphoto } = $props();

    let items = $state([]);
    let page = $state(0);
    let loading = $state(false);
    let done = $state(false);
    let failed = $state(false);

    /*
        ONE PAGE IS ALL THREE FEEDS, INTERLEAVED.

        The page used to be a Videos/Images switch, which asked one endpoint
        and rebuilt the list when it flipped. An OnlyFans profile is not two
        lists -- it is one reverse-chronological feed with both kinds in it --
        so the fetch now takes a page from each feed the site offers and the
        filter decides what is *drawn*, not what is fetched.

        That split matters for paging: filtering at fetch time means "load
        more" advances different feeds by different amounts depending on which
        chips happen to be lit, and turning a chip back on leaves a hole in the
        middle of the list. Fetching everything and hiding some of it keeps one
        page number honest for all three.
    */
    async function more() {
        if (loading || done) return;

        loading = true;
        const next = page + 1;

        const [videos, galleries, photos] = await Promise.all([
            accountVideos(handle, site, next),
            accountGalleries(handle, site, next),
            accountImages(handle, site, next)
        ]);

        // Only a total failure is this site's failure. A site that files
        // images into albums answers nothing for `images` and a site with no
        // albums answers nothing for `galleries`; neither is an error, and
        // treating an empty list as one would black out half the archives.
        if (videos === null && galleries === null && photos === null) {
            failed = true;
        } else {
            const batch = [
                ...(videos ?? []).map((video) => ({
                    kind: "video",
                    key: `v:${video.video_id}`,
                    title: video.title,
                    thumbnail: video.thumbnail,
                    badge: duration(video.duration),
                    item: video
                })),
                ...(galleries ?? []).map((gallery) => ({
                    kind: "image",
                    key: `g:${gallery.gallery_id}`,
                    title: gallery.title,
                    thumbnail: gallery.cover,
                    badge: gallery.image_count ? `${gallery.image_count}` : null,
                    item: gallery
                })),
                ...(photos ?? []).map((photo) => ({
                    kind: "image",
                    key: `p:${photo.image_id ?? `${next}:${photo.index}`}`,
                    title: "",
                    // Through the proxy and at grid size: the originals are
                    // several megabytes each and a page holds 32 of them.
                    thumbnail: photoUrl(site, handle, next, photo.index, true),
                    full: photoUrl(site, handle, next, photo.index),
                    badge: null,
                    item: photo
                }))
            ];

            items = [...items, ...batch];
            page = next;
            if (batch.length === 0) done = true;
        }

        loading = false;
    }

    const shown = $derived(items.filter((entry) => kinds.has(entry.kind)));

    $effect(() => {
        /*
            The dependencies, read deliberately and in full. `kinds` is NOT
            among them: the filter hides what is already loaded and must not
            throw the feed away and refetch it -- see `more()`.
        */
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

    function open(entry) {
        if (entry.kind === "video") onplay(entry.item);
        else if (entry.full) onphoto(entry);
        else ongallery(entry.item);
    }

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
    {:else if !loading && shown.length === 0}
        <!--
            The difference matters: "this site has nothing" and "you have
            hidden everything this site has" look identical as an empty grid,
            and only one of them is something the reader can undo.
        -->
        <p class="ofx-note">
            {site} has no {[...kinds].join(" or ")} for this performer.
        </p>
    {/if}

    <div class="ofx-tiles">
        {#each shown as entry (entry.key)}
            <button class="ofx-tile" type="button" onclick={() => open(entry)}>
                <div class="ofx-thumb">
                    <Poster src={entry.thumbnail} alt={entry.title} name={entry.title} />
                    {#if entry.badge}
                        <span class="ofx-badge">{entry.badge}</span>
                    {/if}
                    {#if entry.kind === "video"}
                        <span class="ofx-play" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </span>
                    {/if}
                </div>
                {#if entry.title}
                    <p>{entry.title}</p>
                {/if}
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
