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

    import { search, plSearch, playlist, k, YT } from "./core/api";

    let [base, plStack] = [[], []];
    $: states = { plist: 0 };
    $: substack = [];

    const channels = () => {
        substack = [];
        chanList.forEach((cList) => {
            const link = `${YT}channels?part=snippet%2CcontentDetails&id=${cList
                .map((el) => el.id)
                .join("%2C")}&key=${k}`;
            fetch(link)
                .then((res) => res.json())
                .then((r) => {
                    r.items
                        .map((el) => el.contentDetails.relatedPlaylists.uploads)
                        .forEach((el) => {
                            playlist(el + "&order=date", 4).then((r2) => {
                                const arr = r2.items.filter(
                                    (r1) =>
                                        new Date() -
                                            new Date(r1.snippet.publishedAt) <=
                                        2 * 864e5
                                );
                                if (arr) substack = [...substack, ...arr];
                            });
                        });
                });
        });
    };

    const searcher = (sc) => {
        const q = typeof sc === "string" ? sc : sc.target[0].value;
        search(q).then((r) => (base = r.items));
        window.location.href = "#search";
        chURL("q", q);
        if (states.plist) plSearch(q).then((r) => (plStack = r.items));
    };

    onMount(() => {
        URLpars().q && searcher(URLpars().q);
        vId.set(URLpars().id);
        if (URLpars().stack)
            stack.set(JSON.parse(localStorage.getItem(URLpars().stack)));
    });
</script>

<main>
    <Bar {searcher} {states} {channels} />
    {#if $vId}
        <Player />
    {/if}
    <Queue />
    <Search videos={base} />
    <Subsc videos={substack} />
    <Plist videos={plStack} />
</main>

<svelte:head>
    <script>
        const URLpars = () => {
            const entries = new URLSearchParams(
                window.location.search
            ).entries();
            const params = {};
            for (let entry of entries) params[entry[0]] = entry[1];
            return params;
        };
        const chURL = (key, value) => {
            let searchParams = new URLSearchParams(window.location.search);
            searchParams.set(key, value);
            let newurl =
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname +
                "?" +
                searchParams.toString();
            window.history.pushState({ path: newurl }, "", newurl);
        };
    </script>
</svelte:head>

<style>
    main {
        overflow-x: hidden;
    }
</style>
