<script>
    import { untrack } from "svelte";

    import {
        accountVideos,
        accountGalleries,
        accountImages,
        photoUrl,
        videoInfo
    } from "./api.js";
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
        tab happens to be open, and coming back to All leaves a hole in the
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
                    // A still from a KVS player is 16:9 and a fapello card is
                    // portrait; both are corrected the moment the file
                    // decodes. This is the opening guess, not a claim.
                    aspect: 16 / 9,
                    posted: video.posted_at,
                    text: video.description,
                    // Asked for lazily, and only where the site has something
                    // to say -- see `reveal`.
                    hasText: video.has_text,
                    item: video
                })),
                ...(galleries ?? []).map((gallery) => ({
                    kind: "image",
                    key: `g:${gallery.gallery_id}`,
                    title: gallery.title,
                    thumbnail: gallery.cover,
                    badge: gallery.image_count ? `${gallery.image_count}` : null,
                    aspect: 3 / 4,
                    posted: gallery.posted,
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
                    aspect: 3 / 4,
                    posted: photo.posted_at,
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

    /*
        The mosaic is laid out from the files themselves.

        Each tile grows in proportion to its own aspect ratio, so a row of
        flex children ends up as a row of equal-height pictures that between
        them fill the width -- portrait and landscape side by side, neither
        cropped to a square. The ratio arrives from `Poster` when the image
        decodes; until then the tile sits at its kind's typical shape, which
        is close enough that the correction is not a visible jump.

        Rewritten as a new array rather than mutated in place: `items` holds
        plain objects, and Svelte 5 tracks the array, not their fields.
    */
    function measured(key, aspect) {
        if (!aspect || !Number.isFinite(aspect)) return;
        items = items.map((entry) =>
            entry.key === key ? { ...entry, aspect } : entry
        );
    }

    /*
        The caption, fetched when the tile is actually looked at.

        It costs a request per video -- the text lives on the video's own page,
        not on the grid page -- so it is asked for on first paint of the tile
        and never for a tile that stayed below the fold. `hasText` gates it
        before that: six of the seven archives publish no text at all, and
        asking them would be a request per card to learn nothing.
    */
    function reveal(node, entry) {
        if (!entry.hasText || entry.text) return;

        const observer = new IntersectionObserver((entries) => {
            if (!entries.some((record) => record.isIntersecting)) return;
            observer.disconnect();

            videoInfo(site, entry.item.video_id).then((info) => {
                if (!info) return;
                items = items.map((current) =>
                    current.key === entry.key
                        ? {
                              ...current,
                              text: info.description,
                              posted: current.posted ?? info.posted_at
                          }
                        : current
                );
            });
        });

        observer.observe(node);
        return { destroy: () => observer.disconnect() };
    }

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
            The difference matters: "this site has nothing" and "the open tab
            excludes everything this site has" look identical as an empty
            grid, and only one of them is something the reader can undo.
        -->
        <p class="ofx-note">
            {site} has no {[...kinds].join(" or ")} for this performer.
        </p>
    {/if}

    <div class="ofx-mosaic">
        {#each shown as entry (entry.key)}
            <article
                class="ofx-tile"
                style="--ofx-ar: {entry.aspect}; flex-grow: {entry.aspect}; flex-basis: {entry.aspect *
                    220}px"
                use:reveal={entry}>
                <button class="ofx-open" type="button" onclick={() => open(entry)}>
                    <div class="ofx-thumb">
                        <Poster
                            src={entry.thumbnail}
                            alt={entry.title}
                            name={entry.title}
                            onmeasure={(aspect) => measured(entry.key, aspect)} />
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
                </button>

                <!--
                    The post, rather than a filename under a thumbnail: title,
                    then whatever the site wrote about it, then when. Only
                    viralxxxporn writes the middle line, and it is that site's
                    editorial copy -- the performer's own caption exists only
                    on onlyfans.com and on Coomer, and neither is reachable
                    from here. Showing it as a caption would be a quotation we
                    cannot source.
                -->
                {#if entry.title || entry.text || entry.posted}
                    <div class="ofx-caption">
                        {#if entry.title}<p class="ofx-caption-title">{entry.title}</p>{/if}
                        {#if entry.text}<p class="ofx-caption-text">{entry.text}</p>{/if}
                        {#if entry.posted}<p class="ofx-caption-when">{entry.posted}</p>{/if}
                    </div>
                {/if}
            </article>
        {/each}

        {#if loading}
            {#each Array(4) as _, index (index)}
                <div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>
            {/each}
        {/if}

        <!--
            The last row would otherwise stretch its few tiles across the full
            width and blow them up to several times the height of the rows
            above. A spacer with a huge grow factor and no height eats the
            slack instead.
        -->
        <span class="ofx-mosaic-tail" aria-hidden="true"></span>
    </div>

    {#if !done && !failed && items.length > 0}
        <button class="ofx-btn ofx-outline" type="button" onclick={more} disabled={loading}>
            {loading ? "Loading…" : "Load more"}
        </button>
    {/if}
</section>
