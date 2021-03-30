<script>
    import TechNews from "./components/technews.svelte";
    import Google from "./components/gtrends.svelte";
    import HNews from "./components/hackernews.svelte";
    import Specifics from "./components/specifix.svelte";

    let state = { src: "TechNews" };

    const pages = [
        { name: "TechNews", component: TechNews },
        { name: "Google", component: Google },
        { name: "HackerNews", component: HNews },
        { name: "Specifics", component: Specifics },
    ];

    const chNews = (e) => (state.src = e.target.title);
</script>

<svelte:head>
    <style>
        body {
            background: url(./shared/images/Saturn.jpg) no-repeat fixed;
            background-size: cover;
        }
    </style>
    <title>Saturn Social</title>
</svelte:head>

<section>
    <nav class="rpm-10 flex blur" on:click={chNews}>
        {#each pages as pg}
            <div title={pg.name} class="ln {state.src === pg.name && 'blurW'}">
                {pg.name}
            </div>
        {/each}
    </nav>

    <svelte:component
        this={pages[pages.findIndex((x) => x.name === state.src)].component}
    />
</section>

<style type="text/scss">
    nav {
        justify-content: space-around;
        .ln {
            padding: 5px 10px;
            border-radius: 5px;
            transform: scale(1);
            cursor: pointer;
            &:hover {
                transform: scale(1.01);
            }
        }
    }
</style>
