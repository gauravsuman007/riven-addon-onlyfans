<script>
    import { listAccounts } from "./api.js";
    import Poster from "./Poster.svelte";

    let { navigate } = $props();

    const PAGE_SIZE = 60;

    let items = $state([]);
    let total = $state(0);
    let loading = $state(false);
    let failed = $state(false);
    let search = $state("");

    /*
        The query the rows on screen belong to. A response is dropped unless
        the box still says the same thing -- otherwise a slow reply for "soph"
        lands after a fast one for "sophie" and overwrites it, which looks
        exactly like the filter randomly reverting.
    */
    let applied = $state("");
    let debounce;

    const hasMore = $derived(items.length < total);

    async function run(query, offset) {
        loading = true;

        const result = await listAccounts({ search: query, limit: PAGE_SIZE, offset });

        if (query !== search) {
            loading = false;
            return;
        }

        if (result) {
            items = offset === 0 ? result.items : [...items, ...result.items];
            total = result.total;
            applied = query;
            failed = false;
        } else {
            failed = true;
        }

        loading = false;
    }

    $effect(() => {
        run("", 0);
    });

    function onInput(event) {
        search = event.currentTarget.value;
        clearTimeout(debounce);
        // Server-side search rather than filtering what is loaded: the index
        // is thousands of accounts and only sixty of them are here.
        debounce = setTimeout(() => run(search, 0), 250);
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
    {#if total}
        {items.length.toLocaleString()} of {total.toLocaleString()}
        {applied ? `matching “${applied}”` : "accounts"}
    {:else if loading}
        loading…
    {:else}
        no accounts indexed yet
    {/if}
</p>

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

<div class="ofx-grid">
    {#each items as account (account.handle)}
        <a
            class="ofx-card"
            href="/x/onlyfans/{account.handle}"
            onclick={(event) => {
                // Left-click stays in the app; modified clicks and middle
                // clicks keep their normal browser meaning.
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
                event.preventDefault();
                navigate(`/x/onlyfans/${account.handle}`);
            }}>
            <figure>
                <Poster
                    src={account.avatar_url}
                    alt={account.display_name}
                    name={account.display_name} />
            </figure>
            <p title={account.display_name}>{account.display_name}</p>
            <small>
                {account.source_count}
                {account.source_count === 1 ? "site" : "sites"}
            </small>
        </a>
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
