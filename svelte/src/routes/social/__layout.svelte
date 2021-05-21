<script>
  import TechNews from "./components/technews.svelte";
  import Google from "./components/gtrends.svelte";
  import HNews from "./components/hackernews.svelte";
  import Specifics from "./components/specifix.svelte";

  let state = { src: "Specifics" };
  const pages = [
    { name: "TechNews", component: TechNews },
    { name: "Google", component: Google },
    { name: "HackerNews", component: HNews },
    { name: "Specifics", component: Specifics },
  ];

  const chNews = (e) => (state.src = e.target.innerText);
</script>

<style type="text/scss">
  nav {
    justify-content: space-around;
    .ln {
      transform: scale(1);
      color: #fff;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
</style>

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
      <button class="ln rpm-10 {state.src === pg.name && 'blurW'}">
        {pg.name}
      </button>
    {/each}
  </nav>

  <svelte:component
    this={pages[pages.findIndex((x) => x.name === state.src)].component} />
</section>
