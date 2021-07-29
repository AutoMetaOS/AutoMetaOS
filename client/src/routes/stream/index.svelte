<script>
    import Bar from "./components/bar.svelte";
    import Player from "./components/player.svelte";
    import Subsc from "./components/YT_subs.svelte";
    import NebSubsc from "./components/NB_subs.svelte";
    import Search from "./components/search.svelte";

    import { onMount } from "svelte";
    import { vId } from "./core/store";
    import { search } from "./core/api";

    let base = [];

    const searcher = (sc) => {
        const q = typeof sc === "string" ? sc : sc.target[0].value;
        if (!q) {
            chURL("q", "");
            return 0;
        } else search(q).then((r) => (base = r.items));
        chURL("q", q);
        window.location.href = "#search";
        return 0;
    };

    onMount(() => {
        URLpars().q && searcher(URLpars().q);
        vId.set(decodeURIComponent(URLpars().id || ""));
        return 0;
    });
</script>

<main>
    <Bar {searcher} />
    <Player />
    <Search videos={base} />
    <Subsc />
    <NebSubsc />
</main>

<style>
    main {
        overflow-x: hidden;
    }
</style>
