<!--
    One feed for the performer, merged across every archive that carries them.

    The merging is the backend's (`onlyfans_addon/feed.py`): newest first,
    each video once however many sites copied it, with whatever text any copy
    has. This component pages through it and draws it.

    Two things here exist because of how the merge has to work:

    LATE ENTRIES ARE INSERTED, NOT APPENDED. A slow archive (20s+ is normal
    for some) answers after the page has already moved past its dates. The
    backend keeps its offsets append-only, so paging never shifts, and flags
    those entries `late`; this slots them in by date among what is shown.

    COPIES ARE CHOICES. A merged video lists every site it was found on. The
    tile plays the longest copy; the chips under it play the others, which is
    the recourse when one archive's link is dead.
-->
<script>
    import { untrack } from "svelte";
    import { accountFeed, photoUrl, videoInfo } from "./api.js";
    import Poster from "./Poster.svelte";

    let { handle, kind, onplay, ongallery, onphoto } = $props();

    const PAGE = 30;

    let items = $state([]);
    let offset = $state(0);
    let done = $state(false);
    let loading = $state(false);
    let failed = $state(false);
    let sources = $state([]);
    let sentinel = $state(null);

    async function more() {
        if (loading || done) return;
        loading = true;
        const mine = generation;

        const result = await accountFeed(handle, { offset, limit: PAGE, kinds: kind });

        // The tab changed while this was in flight; its answer belongs to a
        // feed that is no longer on screen.
        if (mine !== generation) return;

        if (!result) {
            failed = items.length === 0;
            loading = false;
            return;
        }

        let next = items;
        for (const raw of result.items) {
            const entry = shape(raw);
            next = raw.late ? insertByDate(next, entry) : [...next, entry];
        }
        items = next;
        offset = result.next_offset;
        sources = result.sources;
        done = result.done;
        loading = false;

        // The observer only fires when the sentinel CROSSES into view. A page
        // too short to push it back out leaves it in view, and scrolling
        // would stall with more to load, so look again after drawing.
        requestAnimationFrame(() => {
            if (mine !== generation || done || !sentinel) return;
            if (sentinel.getBoundingClientRect().top < window.innerHeight + 800) more();
        });
    }

    function shape(raw) {
        return {
            ...raw,
            // Photos are addressed by position on their site's page and served
            // through the proxy, at grid size for the tile.
            thumb:
                raw.kind === "photo"
                    ? photoUrl(raw.site, handle, raw.page, raw.index, true)
                    : raw.thumbnail,
            full: raw.kind === "photo" ? photoUrl(raw.site, handle, raw.page, raw.index) : null,
            aspect: raw.kind === "video" ? 16 / 9 : 3 / 4,
            text: raw.description
        };
    }

    function insertByDate(list, entry) {
        if (!entry.posted_at) return [...list, entry];
        const at = list.findIndex((other) => other.posted_at && other.posted_at < entry.posted_at);
        return at < 0 ? [...list, entry] : [...list.slice(0, at), entry, ...list.slice(at)];
    }

    let generation = 0;

    /*
        A derived, not the props read directly. A prop passed as
        `handle={account.handle}` is a getter over the parent's whole
        `account`, so an effect reading it re-runs whenever ANY field of the
        account changes -- pressing Save reloaded the feed from the top. A
        derived compares its value and stays quiet when it is the same string.
    */
    const feedKey = $derived(`${handle}\n${kind}`);

    $effect(() => {
        feedKey;
        // Untracked for the same reason as SiteSection: `more()` reads the
        // state this resets, and tracking it would loop silently.
        untrack(() => {
            generation++;
            items = [];
            offset = 0;
            done = false;
            failed = false;
            loading = false;
            sources = [];
            more();
        });
    });

    // Infinite scroll: one sentinel after the last tile.
    $effect(() => {
        if (!sentinel) return;
        const observer = new IntersectionObserver(
            (records) => {
                if (records.some((record) => record.isIntersecting)) more();
            },
            { rootMargin: "800px" }
        );
        observer.observe(sentinel);
        return () => observer.disconnect();
    });

    /*
        Caption text that lives on the video's own page, fetched when the tile
        is actually looked at -- a request per video, so never for one that
        stayed below the fold, and only where a copy's site keeps any.
    */
    function reveal(node, entry) {
        if (!entry.text_site || entry.text) return;
        const observer = new IntersectionObserver((records) => {
            if (!records.some((record) => record.isIntersecting)) return;
            observer.disconnect();
            videoInfo(entry.text_site, entry.text_id).then((info) => {
                if (!info?.description) return;
                items = items.map((current) =>
                    current.key === entry.key ? { ...current, text: info.description } : current
                );
            });
        });
        observer.observe(node);
        return { destroy: () => observer.disconnect() };
    }

    function measured(key, aspect) {
        if (!aspect || !Number.isFinite(aspect)) return;
        items = items.map((entry) => (entry.key === key ? { ...entry, aspect } : entry));
    }

    function video(entry, copy) {
        return {
            site: copy?.site ?? entry.site,
            video_id: copy?.id ?? entry.id,
            title: entry.title,
            thumbnail: entry.thumbnail,
            duration: copy?.duration ?? entry.duration,
            resolution: copy?.resolution ?? entry.resolution
        };
    }

    function open(entry) {
        if (entry.kind === "video") onplay(video(entry));
        else if (entry.kind === "photo") onphoto(entry);
        else ongallery({ site: entry.site, gallery_id: entry.id, title: entry.title });
    }

    function duration(seconds) {
        if (!seconds) return null;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const rest = String(seconds % 60).padStart(2, "0");
        return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${rest}` : `${minutes}:${rest}`;
    }

    /*
        A stated date is shown as a date. An approximate one is shown in the
        site's own words where it had some ("2 months ago"), because turning
        that into "26 Aug 2026" would claim a precision nobody has; a date
        borrowed from a neighbour gets a "~".
    */
    function when(entry) {
        if (!entry.posted_at) return null;
        if (entry.approximate && entry.posted_label && /ago|yesterday|today/i.test(entry.posted_label)) {
            return entry.posted_label;
        }
        const date = new Date(entry.posted_at).toLocaleDateString(undefined, {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
        return entry.approximate ? `~${date}` : date;
    }

    const loadingSites = $derived(sources.filter((s) => s.state === "loading").map((s) => s.site));
    const failedSites = $derived(sources.filter((s) => s.state === "failed").map((s) => s.site));
</script>

<section class="ofx-section">
    {#if loadingSites.length || failedSites.length}
        <p class="ofx-note ofx-feed-status">
            {#if loadingSites.length}Still loading: {loadingSites.join(", ")}. {/if}
            {#if failedSites.length}Not answering: {failedSites.join(", ")}.{/if}
        </p>
    {/if}

    {#if failed}
        <p class="ofx-error">The feed could not be loaded.</p>
    {:else if done && items.length === 0}
        <p class="ofx-note">None of this performer's sites has anything here.</p>
    {/if}

    <div class="ofx-mosaic">
        {#each items as entry (entry.key)}
            <article
                class="ofx-tile"
                style="--ofx-ar: {entry.aspect}; flex-grow: {entry.aspect}; flex-basis: {entry.aspect * 220}px"
                use:reveal={entry}>
                <button class="ofx-open" type="button" onclick={() => open(entry)}>
                    <div class="ofx-thumb">
                        <Poster
                            src={entry.thumb}
                            alt={entry.title}
                            name={entry.title}
                            onmeasure={(aspect) => measured(entry.key, aspect)} />
                        {#if entry.kind === "video" && duration(entry.duration)}
                            <span class="ofx-badge">{duration(entry.duration)}</span>
                        {:else if entry.kind === "gallery" && entry.image_count}
                            <span class="ofx-badge">{entry.image_count}</span>
                        {/if}
                        {#if entry.kind === "video"}
                            <span class="ofx-play" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                            </span>
                        {/if}
                    </div>
                </button>

                <div class="ofx-caption">
                    {#if entry.title}<p class="ofx-caption-title">{entry.title}</p>{/if}
                    {#if entry.text}<p class="ofx-caption-text">{entry.text}</p>{/if}
                    <p class="ofx-caption-when">
                        {#if when(entry)}{when(entry)} · {/if}
                        {#if entry.copies.length > 1}
                            {#each entry.copies as copy (`${copy.site}:${copy.id}`)}
                                <button
                                    type="button"
                                    class="ofx-copy"
                                    class:ofx-on={copy.site === entry.site && copy.id === entry.id}
                                    title="Play the {copy.site} copy{copy.duration ? ` (${duration(copy.duration)})` : ''}"
                                    onclick={() => onplay(video(entry, copy))}>{copy.site}</button>
                            {/each}
                        {:else}
                            <span class="ofx-copy-site">{entry.site}</span>
                        {/if}
                    </p>
                </div>
            </article>
        {/each}

        {#if loading}
            {#each Array(4) as _, index (index)}
                <div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>
            {/each}
        {/if}

        <span class="ofx-mosaic-tail" aria-hidden="true"></span>
    </div>

    {#if !done && !failed}
        <div bind:this={sentinel} class="ofx-feed-sentinel" aria-hidden="true"></div>
    {/if}
</section>
