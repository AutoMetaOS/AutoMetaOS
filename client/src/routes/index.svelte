<script>
  // import TopBar from "./command/components/topbar.svelte";
  import SummaryBox from "./command/components/sumbox.svelte";
  import Search from "./command/components/search.svelte";

  import { base } from "$app/paths";
</script>

<svelte:head>
  <link rel="preconnect" href="https://api.nukes.in/" />
  <link rel="preload" href="https://api.nukes.in/data/NASA/img" as="image" />
  <link rel="preconnect" href="https://web.whatsapp.com/" />
  <link rel="preconnect" href="https://en.wikipedia.org/" />
  <link rel="preconnect" href="https://github.com" />
  <link rel="prefetch" href="{base}/stream" />
  <link rel="prefetch" href="{base}/notes" />
</svelte:head>

<section class="w-100">
  <!-- <TopBar /> -->
  <SummaryBox />
  <Search />
</section>

<style type="text/scss">
  @keyframes downBar {
    to {
      bottom: 0.5em;
    }
  }
  section {
    background: url(https://api.nukes.in/data/NASA/img) center center no-repeat;
    background-size: cover;
    position: relative;
    height: 100vh;
    z-index: 1;
  }
</style>
