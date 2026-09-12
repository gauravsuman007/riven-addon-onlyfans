<script>
    import { configure } from "./api.js";
    import Grid from "./Grid.svelte";
    import Detail from "./Detail.svelte";

    let { path = "", api, navigate, host } = $props();

    configure(api);

    /*
        The add-on routes its own sub-path. The host owns `/x/onlyfans` and
        hands over everything after it, so "" is the account grid and anything
        else is that handle's page. Deliberately not a router library: there
        are two screens.
    */
    const handle = $derived((path || "").split("/").filter(Boolean)[0] ?? "");
</script>

<div class="ofx">
    <div class="ofx-wrap">
        {#if handle}
            {#key handle}
                <Detail {handle} {navigate} {host} />
            {/key}
        {:else}
            <Grid {navigate} />
        {/if}
    </div>
</div>
