<script>
    /*
        The OnlyFans landing page: a search box, then the recommendation rails,
        then a random selection.

        TWO MODES, ONE LIST. Typing in the box and pressing "show all" both
        land in the same paginated grid -- the browse mode -- because they are
        the same thing: a page of `/accounts` with a filter. Keeping one code
        path for both is what stops the searched grid and the full grid
        drifting into two subtly different lists.

        The rails are not fetched by this component. Each one asks for itself,
        so a rail the backend cannot answer yet costs its own row and nothing
        more -- which matters here because most of them are empty until the
        ranking pass has run, twice in Trending's case.
    */
    import { listAccounts, listRails } from "./api.js";
    import AccountCard from "./AccountCard.svelte";
    import Rail from "./Rail.svelte";

    let { navigate } = $props();

    const PAGE_SIZE = 60;
    const RANDOM_SIZE = 20;

    let items = $state([]);
    let total = $state(0);
    let loading = $state(false);
    let failed = $state(false);
    let search = $state("");

    /*
        The full index, opened from the random row's "show all". Deliberately
        component state rather than a route: this add-on routes on the first
        path segment and treats it as a performer's handle, so any word used
        for this would be a word no performer can be named.
    */
    let showAll = $state(false);

    /*
        The query the rows on screen belong to. A response is dropped unless
        the box still says the same thing -- otherwise a slow reply for "soph"
        lands after a fast one for "sophie" and overwrites it, which looks
        exactly like the filter randomly reverting.
    */
    let applied = $state("");
    let debounce;

    let randomRail = $state(null);

    /*
        The rails come from the backend, which is also where the television
        gets them. Written here as five literal components they drifted out of
        sync with the TV the first time one was added, and nothing failed --
        both surfaces drew a correct page, a version apart.

        Empty until it answers: a rail that cannot be listed is a rail that
        cannot be filled either, and the skeletons belong to each row.
    */
    let rails = $state([]);

    $effect(() => {
        listRails().then((result) => {
            rails = Array.isArray(result) ? result : [];
        });
    });

    const query = $derived(search.trim());
    const browsing = $derived(query !== "" || showAll);
    const hasMore = $derived(items.length < total);

    async function run(term, offset) {
        loading = true;

        const result = await listAccounts({ search: term, limit: PAGE_SIZE, offset });

        if (term !== search.trim()) {
            loading = false;
            return;
        }

        if (result) {
            items = offset === 0 ? result.items : [...items, ...result.items];
            total = result.total;
            applied = term;
            failed = false;
        } else {
            failed = true;
        }

        loading = false;
    }

    function onInput(event) {
        search = event.currentTarget.value;
        clearTimeout(debounce);
        // Server-side search rather than filtering what is loaded: the index
        // is thousands of accounts and only sixty of them are here.
        debounce = setTimeout(() => run(search.trim(), 0), 250);
    }

    function openAll() {
        showAll = true;
        // The browse grid is empty until something fills it, and clearing the
        // search is not what got us here, so this has to ask explicitly.
        run("", 0);
    }

    function closeAll() {
        showAll = false;
        search = "";
        items = [];
        total = 0;
        applied = "";
    }

    /*
        Infinite scroll via a sentinel below the grid. Guarded on `loading` as
        well as `hasMore`, because the observer fires again while the previous
        page is still in flight and would request the same offset twice.
    */
    function sentinel(node) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0]?.isIntersecting && hasMore && !loading) {
                run(applied, items.length);
            }
        }, { rootMargin: "600px" });

        observer.observe(node);
        return { destroy: () => observer.disconnect() };
    }
</script>

<h1>OnlyFans</h1>
<p class="ofx-sub">
    {#if browsing && total}
        {items.length.toLocaleString()} of {total.toLocaleString()}
        {applied ? `matching “${applied}”` : "accounts"}
    {:else if browsing && loading}
        loading…
    {:else if browsing}
        nothing found
    {:else}
        performers, gathered from the archive sites
    {/if}
</p>

<!-- Always first, and outside both modes: the search is how you leave the
     rails and how you leave the full grid, so it cannot live inside either. -->
<div class="ofx-search">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </svg>
    <input
        type="search"
        placeholder="Search performers"
        value={search}
        oninput={onInput}
        aria-label="Search performers" />
</div>

{#if failed}
    <p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>
{/if}

{#if browsing}
    {#if showAll && !query}
        <div class="ofx-controls">
            <button class="ofx-btn ofx-outline" type="button" onclick={closeAll}>
                ← Back to recommendations
            </button>
        </div>
    {/if}

    <div class="ofx-grid">
        {#each items as account (account.handle)}
            <AccountCard {account} {navigate} />
        {/each}

        {#if loading}
            {#each Array(12) as _, index (index)}
                <div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>
            {/each}
        {/if}
    </div>

    {#if hasMore}
        <div class="ofx-sentinel" use:sentinel></div>
    {/if}
{:else}
    <!--
        The rows, their wording and their order all arrive from `/rails`; the
        reasoning behind that order is in `onlyfans_addon/rails.py`, beside the
        list itself. Each rail hides itself when it has nothing, so on a fresh
        index this collapses to the last two and the random row rather than to
        five headings over five empty strips.

        The random row is drawn separately because it is the only one with
        controls of its own -- shuffle, and the way into the full grid.
    -->
    {#each rails.filter((rail) => rail.order !== "random") as rail (rail.order)}
        <Rail title={rail.title} note={rail.note} order={rail.order} {navigate} />
    {/each}

    <Rail
        bind:this={randomRail}
        title={rails.find((rail) => rail.order === "random")?.title ?? "Something else"}
        order="random"
        size={RANDOM_SIZE}
        {navigate}>
        {#snippet actions()}
            <button class="ofx-btn ofx-outline" type="button" onclick={() => randomRail?.reload()}>
                Shuffle
            </button>
            <button class="ofx-btn ofx-outline" type="button" onclick={openAll}>
                Show all
            </button>
        {/snippet}
    </Rail>
{/if}
