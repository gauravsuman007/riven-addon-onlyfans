<script>
    /*
        An image that is allowed to be missing, which most of these are.

        Three of the five archive sites publish no avatar at all, and the
        profile lookup only reaches an account once it comes up in the
        enrichment queue -- so "no picture yet" is the common case, not an
        error. Initials are the fallback rather than a broken-image icon,
        and a URL that 404s falls back to the same place.
    */
    let { src = null, alt = "", name = "", onmeasure = null } = $props();

    let failed = $state(false);

    const initials = $derived(
        (name || alt || "?")
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word[0]?.toUpperCase() ?? "")
            .join("")
    );

    /*
        The real shape of the file, reported upwards.

        The mosaic cannot be laid out from the markup: a KVS thumbnail is
        16:9, a fapello one is whatever the performer posted, and nothing in
        the feed states either. The only place the answer exists is the
        decoded image, so the tile is drawn at an assumed ratio and corrected
        here -- once, on load, rather than by measuring the DOM every frame.
    */
    function measured(event) {
        const image = event.currentTarget;
        if (onmeasure && image.naturalWidth && image.naturalHeight) {
            onmeasure(image.naturalWidth / image.naturalHeight);
        }
    }
</script>

{#if src && !failed}
    <img {src} {alt} loading="lazy" onload={measured} onerror={() => (failed = true)} />
{:else}
    <span class="ofx-initials">{initials}</span>
{/if}
