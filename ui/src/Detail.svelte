<script>
    import { getAccount, galleryImages, imageUrl, streamUrl } from "./api.js";
    import Poster from "./Poster.svelte";
    import SiteSection from "./SiteSection.svelte";

    let { handle, navigate, host } = $props();

    let account = $state(null);
    let failed = $state(false);
    let mode = $state("videos");
    let opened = $state(new Set());
    /*
        Collapsed until asked, because an OnlyFans bio is 20-40 lines of
        marketing copy and `.ofx-bio` honours every line break in it. Left
        open, the header card is a full screen of text and the site buttons
        are below the fold.
    */
    let bioOpen = $state(false);

    /*
        Only used when there is no host player to hand the video to.

        There always is one in this app -- the host lends its player to every
        add-on it mounts -- so this is the fallback for a host too old to pass
        a bridge, not a second player with a life of its own. The host's is
        strictly better: external hand-off, bookmarking, resume, gestures, and
        inside the Android shell a route to a real player instead of a
        `<video>` the WebView can only send to the browser.
    */
    let playing = $state(null);
    let lightbox = $state(null);
    let lightboxError = $state(null);

    $effect(() => {
        getAccount(handle).then((result) => {
            if (result) account = result;
            else failed = true;
        });
    });

    /*
        Counts from the performer's own onlyfans.com profile, built as a list
        and filtered rather than rendered one #if at a time -- an account with
        two of the four should show two neat figures, not the gaps between
        them.
    */
    const stats = $derived(
        [
            // OnlyFans' own order on a profile, which is the page this one
            // is meant to read as.
            ["posts", account?.posts_count],
            ["photos", account?.photos_count],
            ["videos", account?.videos_count],
            ["likes", account?.likes_count]
        ].filter(([, value]) => value != null)
    );

    function toggleSite(site) {
        const next = new Set(opened);
        next.has(site) ? next.delete(site) : next.add(site);
        opened = next;
    }

    function play(video) {
        if (!host?.play) {
            playing = video;
            return;
        }

        host.play({
            // The backend proxy, never the site's own URL: that one carries a
            // short-lived token and these hosts check Referer, so a player
            // pointed straight at it would 403.
            src: streamUrl(video.site, video.video_id),
            title: video.title,
            // The real type is not known until the backend resolves the
            // source, and the proxy reports it on the response. MP4 is the
            // right opening guess; the player falls back if the element
            // rejects it.
            mimeType: "video/mp4",
            poster: video.thumbnail ?? undefined,
            site: video.site,
            videoId: video.video_id,
            // What the player labels a bookmark with. The performer is the
            // context these videos were found under.
            contextTitle: account?.display_name || handle,
            duration: video.duration,
            resolution: video.resolution,
            size: video.size
        });
    }

    async function openGallery(gallery) {
        lightboxError = null;
        const images = await galleryImages(gallery.site, gallery.gallery_id);

        if (!images) {
            lightboxError = "Could not open that gallery";
            return;
        }

        if (images.length === 0) {
            lightboxError = "That site served no images for this gallery";
            return;
        }

        lightbox = { gallery, count: images.length, index: 0 };
    }

    function step(by) {
        if (!lightbox) return;
        // Wraps rather than clamps: at a handful of images per gallery,
        // running off the end and stopping feels broken.
        lightbox = {
            ...lightbox,
            index: (lightbox.index + by + lightbox.count) % lightbox.count
        };
    }

    function onKey(event) {
        if (event.key === "Escape") {
            playing = null;
            lightbox = null;
            return;
        }

        if (!lightbox) return;
        if (event.key === "ArrowRight") step(1);
        if (event.key === "ArrowLeft") step(-1);
    }
</script>

<svelte:window onkeydown={onKey} />

{#if failed}
    <p class="ofx-error">That account could not be loaded.</p>
{:else if account}
    <header class="ofx-header">
        <!--
            The banner is the performer's own onlyfans.com header and is absent
            far more often than not, which is why it is conditional rather than
            a fixed slot: with no banner the card closes up instead of leaving
            a hole, and the avatar simply stops overlapping.
        -->
        {#if account.header_url}
            <div class="ofx-banner">
                <img src={account.header_url} alt="" />
            </div>
        {/if}

        <!--
            Only the avatar is lifted into the banner. The whole block used to
            be, which put the name -- a clamp() that reaches 2.75rem -- over
            the artwork with nothing but the banner's gradient behind it.
        -->
        <div class="ofx-identity">
            <div class="ofx-avatar" class:ofx-overlap={!!account.header_url}>
                <Poster
                    src={account.avatar_url}
                    alt={account.display_name}
                    name={account.display_name} />
            </div>

            <div style="min-width:0;flex:1">
                <h1>
                    {account.display_name}
                    {#if account.is_verified}
                        <svg
                            class="ofx-verified"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            aria-label="Verified">
                            <path
                                d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                    {/if}
                </h1>
                <p class="ofx-sub">
                    {account.source_count}
                    {account.source_count === 1 ? "site" : "sites"} · {account.handle}
                </p>

                {#if account.bio}
                    <p class="ofx-bio" class:ofx-clamped={!bioOpen}>{account.bio}</p>
                    <button
                        class="ofx-more"
                        type="button"
                        onclick={() => (bioOpen = !bioOpen)}>
                        {bioOpen ? "less" : "more"}
                    </button>
                {/if}

                {#if stats.length}
                    <div class="ofx-stats">
                        {#each stats as [label, value] (label)}
                            <span><b>{value.toLocaleString()}</b> {label}</span>
                        {/each}
                    </div>
                {/if}

                <div class="ofx-links">
                    {#if account.location}
                        <span>{account.location}</span>
                    {/if}
                    {#if account.website}
                        <a href={account.website} target="_blank" rel="noreferrer noopener">
                            {account.website.replace(/^https?:\/\//, "")}
                        </a>
                    {/if}
                    {#if account.of_url}
                        <a href={account.of_url} target="_blank" rel="noreferrer noopener">
                            onlyfans.com/{account.of_username}
                        </a>
                    {/if}
                </div>
            </div>
        </div>

        <div class="ofx-tabs">
            {#each ["videos", "images"] as option (option)}
                <button
                    class="ofx-tab"
                    class:ofx-on={mode === option}
                    type="button"
                    onclick={() => (mode = option)}>
                    {option}
                </button>
            {/each}
        </div>
    </header>

    <div class="ofx-controls">
        <span class="ofx-note">Load from:</span>
        {#each account.sources as source (source.site)}
            <button
                class="ofx-btn ofx-outline"
                class:ofx-on={opened.has(source.site)}
                type="button"
                onclick={() => toggleSite(source.site)}>
                {source.site}
                {#if source.video_count}
                    <span class="ofx-count">{source.video_count}</span>
                {/if}
            </button>
        {/each}

        <button class="ofx-btn" type="button" onclick={() => navigate("/x/onlyfans")}>
            ← All accounts
        </button>
    </div>

    {#if lightboxError}
        <p class="ofx-error">{lightboxError}</p>
    {/if}

    {#if opened.size === 0}
        <p class="ofx-note">Pick a site above to load this performer's content from it.</p>
    {/if}

    {#each account.sources.filter((source) => opened.has(source.site)) as source (source.site)}
        <SiteSection
            handle={account.handle}
            site={source.site}
            {mode}
            onplay={(video) => play(video)}
            ongallery={openGallery} />
    {/each}
{:else}
    <p class="ofx-note">Loading…</p>
{/if}

<!--
    The fallback player, shown only when the host lent no bridge (see `play`).
    Playback goes through the backend proxy either way, never the site's own
    URL: that one carries a short-lived token and these hosts check Referer,
    so a <video src> pointed straight at it would 403.
-->
{#if playing}
    <div class="ofx-overlay">
        <button class="ofx-close" type="button" onclick={() => (playing = null)} aria-label="Close">
            ✕
        </button>
        <!-- svelte-ignore a11y_media_has_caption -->
        <!-- No captions exist to offer: these are scraped from archive sites
             that publish none, and an empty track would be a worse lie than
             the absence. -->
        <video src={streamUrl(playing.site, playing.video_id)} controls autoplay></video>
    </div>
{/if}

{#if lightbox}
    <div class="ofx-overlay">
        <button
            class="ofx-close"
            type="button"
            onclick={() => (lightbox = null)}
            aria-label="Close">✕</button>
        {#if lightbox.count > 1}
            <button class="ofx-step ofx-prev" type="button" onclick={() => step(-1)} aria-label="Previous">‹</button>
            <button class="ofx-step ofx-next" type="button" onclick={() => step(1)} aria-label="Next">›</button>
        {/if}
        <img
            src={imageUrl(lightbox.gallery.site, lightbox.gallery.gallery_id, lightbox.index)}
            alt="{lightbox.gallery.title} {lightbox.index + 1} of {lightbox.count}" />
    </div>
{/if}
