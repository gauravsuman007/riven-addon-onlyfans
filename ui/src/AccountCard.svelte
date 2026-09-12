<script>
    /*
        One performer, as a link. Extracted so the rails and the full grid
        cannot drift apart: they render the same card, and the only thing that
        differs between them is the container it sits in.
    */
    import Poster from "./Poster.svelte";

    let { account, navigate } = $props();
</script>

<a
    class="ofx-card"
    href="/x/onlyfans/{account.handle}"
    onclick={(event) => {
        // Left-click stays in the app; modified clicks and middle clicks keep
        // their normal browser meaning.
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
