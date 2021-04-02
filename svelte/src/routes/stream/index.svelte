<script>
    import Bar from "./components/bar.svelte";
    import Player from "./components/player.svelte";
    import Queue from "./components/queue.svelte";
    import Subsc from "./components/subscriptions.svelte";
    import Search from "./components/search.svelte";
    import Plist from "./components/playlists.svelte";

    import cnls from "$lib/config/channels.json";

    const size = 49;
    const chanList = new Array(Math.ceil(cnls.length / size));
    for (let i = 0; i < chanList.length; i++)
        chanList[i] = cnls.splice(0, size);

    import { onMount } from "svelte";
    import { vId, stack } from "./core/store";

    import { search, plSearch, getRecents } from "./core/api";

    let [base, plStack] = [[], []];
    $: substack = [];

    const channels = () => {
        substack = [];
        chanList.forEach((cList) => {
            getRecents(cList).then(
                (arr) => (substack = [...substack, ...(arr || {})])
            );
        });
        
        return 0;
    };

    const searcher = (sc) => {
        const q = typeof sc === "string" ? sc : sc.target[0].value;
        console.log(q);
        if (!q) {
            chURL("q", "");
            return 0;
        } else if (q.charAt(0) === "+") {
            search(q.replace("+", "")).then((r) => (base = r.items));
            plSearch(q).then((r) => (plStack = r.items));
            return 0;
        } else search(q).then((r) => (base = r.items));
        chURL("q", q);
        window.location.href = "#search";
        return 0;
    };

    onMount(() => {
        URLpars().q && searcher(URLpars().q);
        vId.set(URLpars().id);
        if (URLpars().stack)
            stack.set(JSON.parse(localStorage.getItem(URLpars().stack)));
    });
</script>

<main>
    <Bar {searcher} {channels} />
    {#if $vId}
        <Player />
    {/if}
    <Queue />
    <Search videos={base} />
    <Subsc videos={substack} />
    <Plist videos={plStack} />
</main>

<style>
    main {
        overflow-x: hidden;
    }
</style>
