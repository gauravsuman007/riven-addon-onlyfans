<!--
    Arranging this page's rows.

    THIS PAGE OFFERS ONLY THIS ADD-ON'S ROWS. The host's Home and Explore
    pages offer everything installed, because they are the viewer's pages;
    this one is the add-on's, and a performer row belongs on it by nature
    while a storefront shelf does not. Putting one of these rows on Home is
    done from Home.

    THE ARRANGEMENT IS THE HOST'S, not this add-on's. It is written to
    `/api/v1/rails/x/onlyfans`, which is the same list the television reads --
    so moving a row here moves it on the set in the living room, which is what
    somebody who moved it would expect and what two stored orders could never
    give.

    Up and down rather than dragging: this is as likely to be arranged from a
    phone as from a desk, and a drag needs a pointer that can hover to
    discover it is possible at all.
-->
<script>
    import { getLayout, saveLayout } from "./api.js";

    let {
        /** The rails as `/rails` describes them: order, title, note, key. */
        rails,
        /** Called with the saved arrangement so the page can redraw. */
        onsaved
    } = $props();

    let open = $state(false);
    let saving = $state(false);
    let error = $state(null);
    let draft = $state([]);

    async function start() {
        const saved = await getLayout();
        const known = new Map(rails.map((rail) => [rail.key, rail]));
        const placed = new Set();
        const ordered = [];

        for (const entry of saved) {
            placed.add(entry.key);
            if (known.has(entry.key)) ordered.push({ ...entry });
        }

        // A row the saved order has never heard of -- one an update added --
        // is appended and ON, rather than hidden from exactly the people who
        // have arranged this page.
        for (const rail of rails) {
            if (!placed.has(rail.key)) ordered.push({ key: rail.key, enabled: true });
        }

        draft = ordered;
        error = null;
        open = true;
    }

    function move(index, by) {
        const target = index + by;
        if (target < 0 || target >= draft.length) return;

        const next = [...draft];
        [next[index], next[target]] = [next[target], next[index]];
        draft = next;
    }

    function toggle(index) {
        draft = draft.map((entry, at) =>
            at === index ? { ...entry, enabled: !entry.enabled } : entry
        );
    }

    function titleOf(key) {
        return rails.find((rail) => rail.key === key)?.title ?? key;
    }

    async function save() {
        saving = true;
        error = null;

        if (await saveLayout(draft)) {
            await onsaved?.();
            open = false;
        } else {
            // The draft stays. Closing would discard an arrangement somebody
            // just made, in order to report that it was not kept.
            error = "Could not save. Your changes are still here.";
        }

        saving = false;
    }
</script>

<button class="ofx-btn ofx-outline" type="button" onclick={start}>Edit rows</button>

{#if open}
    <div class="ofx-drawer">
        <div class="ofx-drawer-head">
            <strong>Rows on this page</strong>
            <button class="ofx-btn ofx-outline" type="button" onclick={() => (open = false)}>
                Close
            </button>
        </div>

        <p class="ofx-note">
            Drawn top to bottom. A hidden row keeps its place, so turning it back on does not drop
            it to the bottom.
        </p>

        <ul class="ofx-drawer-list">
            {#each draft as entry, index (entry.key)}
                <li class:ofx-off={!entry.enabled}>
                    <span class="ofx-drawer-name">{titleOf(entry.key)}</span>
                    <button
                        class="ofx-btn ofx-outline"
                        type="button"
                        aria-label={entry.enabled
                            ? `Hide ${titleOf(entry.key)}`
                            : `Show ${titleOf(entry.key)}`}
                        onclick={() => toggle(index)}>
                        {entry.enabled ? "Shown" : "Hidden"}
                    </button>
                    <button
                        class="ofx-btn ofx-outline"
                        type="button"
                        disabled={index === 0}
                        aria-label={`Move ${titleOf(entry.key)} up`}
                        onclick={() => move(index, -1)}>↑</button>
                    <button
                        class="ofx-btn ofx-outline"
                        type="button"
                        disabled={index === draft.length - 1}
                        aria-label={`Move ${titleOf(entry.key)} down`}
                        onclick={() => move(index, 1)}>↓</button>
                </li>
            {/each}
        </ul>

        {#if error}
            <p class="ofx-error">{error}</p>
        {/if}

        <div class="ofx-drawer-foot">
            <button class="ofx-btn ofx-outline" type="button" onclick={() => (open = false)}>
                Cancel
            </button>
            <button class="ofx-btn" type="button" disabled={saving} onclick={save}>
                {saving ? "Saving…" : "Save"}
            </button>
        </div>
    </div>
{/if}
