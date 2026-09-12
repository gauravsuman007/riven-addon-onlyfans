<script>
    /*
        One recommendation row.

        A RAIL THAT HAS NOTHING TO SAY RENDERS NOTHING AT ALL -- no heading, no
        empty strip, no "coming soon". Trending needs the index sampled twice a
        week apart and Popular needs it sampled once, so on a fresh install
        most of these rails are legitimately empty for a while. A heading over
        an empty strip reads as a broken feature; an absent row reads as a page
        that only shows what it knows, which is what this is.

        Each rail is its own request. They are small (twenty rows), they are
        independent, and one that fails should cost its own row rather than the
        page -- `listAccounts` returns null instead of throwing for exactly
        that reason.
    */
    import { listAccounts } from "./api.js";
    import AccountCard from "./AccountCard.svelte";

    let {
        title,
        note = "",
        order,
        navigate,
        size = 20,
        /** Rendered to the right of the heading, for a rail that has controls
         *  of its own. The random row's shuffle and show-all live here. */
        actions
    } = $props();

    let items = $state([]);
    let loading = $state(true);
    /** Bumped to re-run the fetch without changing anything else about the
     *  rail. The random row's shuffle is this and nothing more. */
    let nonce = $state(0);

    export function reload() {
        nonce += 1;
    }

    $effect(() => {
        // Read first so the effect depends on them, then fetch untracked --
        // `items` and `loading` are written below and reading them inside the
        // tracked part would make this re-run itself.
        const which = order;
        const count = size;
        nonce;

        let stale = false;

        loading = true;
        listAccounts({ order: which, limit: count, offset: 0 }).then((result) => {
            if (stale) return;
            items = result?.items ?? [];
            loading = false;
        });

        return () => {
            // A rail whose order changed must not be filled in by the reply to
            // the question it used to be asking.
            stale = true;
        };
    });
</script>

{#if loading}
    <section class="ofx-rail">
        <h2>{title}</h2>
        <div class="ofx-rail-strip">
            {#each Array(8) as _, index (index)}
                <div class="ofx-rail-item">
                    <div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>
                </div>
            {/each}
        </div>
    </section>
{:else if items.length}
    <section class="ofx-rail">
        <div class="ofx-rail-head">
            <h2>{title}</h2>
            {#if note}
                <span class="ofx-note">{note}</span>
            {/if}
            {#if actions}
                <div class="ofx-rail-actions">{@render actions()}</div>
            {/if}
        </div>

        <div class="ofx-rail-strip">
            {#each items as account (account.handle)}
                <div class="ofx-rail-item">
                    <AccountCard {account} {navigate} />
                </div>
            {/each}
        </div>
    </section>
{/if}
