<script>
    /*
        An image that is allowed to be missing, which most of these are.

        Three of the five archive sites publish no avatar at all, and the
        profile lookup only reaches an account once it comes up in the
        enrichment queue -- so "no picture yet" is the common case, not an
        error. Initials are the fallback rather than a broken-image icon,
        and a URL that 404s falls back to the same place.
    */
    let { src = null, alt = "", name = "" } = $props();

    let failed = $state(false);

    const initials = $derived(
        (name || alt || "?")
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word[0]?.toUpperCase() ?? "")
            .join("")
    );
</script>

{#if src && !failed}
    <img {src} {alt} loading="lazy" onerror={() => (failed = true)} />
{:else}
    <span class="ofx-initials">{initials}</span>
{/if}
