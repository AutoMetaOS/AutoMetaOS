<script>
    import Bar from "./components/bar.svelte";
    import Player from "./components/player.svelte";
    import Queue from "./components/queue.svelte";
    import Subsc from "./components/subscriptions.svelte";
    import Search from "./components/search.svelte";
    import Plist from "./components/playlists.svelte";

    import NebSubsc from "./componentsNebula/subscriptions.svelte";

    import { onMount } from "svelte";
    import { vId, stack, channels } from "./core/store";

    import { search, plSearch } from "./core/api";

    let [base, plStack] = [[], []];

    const searcher = (sc) => {
        const q = typeof sc === "string" ? sc : sc.target[0].value;
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
        vId.set(decodeURIComponent(URLpars().id || ""));
        if (URLpars().stack)
            stack.set(JSON.parse(localStorage.getItem(URLpars().stack)));
        if (window.location.href.split("/stream")[1] === "") channels();

        return 0;
    });
</script>

<main>
    <Bar {searcher} {channels} />
    <Player />
    <Queue />
    <Search videos={base} />
    <Subsc />
    <NebSubsc />
    <Plist videos={plStack} />
</main>

<style>
    main {
        overflow-x: hidden;
    }
</style>
