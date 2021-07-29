<script>
  import { onMount } from "svelte";

  import TopBar from "./command/components/topbar.svelte";
  import SummaryBox from "./command/components/sumbox.svelte";
  import Search from "./command/components/search.svelte";

  import { base } from "$app/paths";
</script>

<svelte:head>
  <script>
    let suggList = [],
      suggI = null;

    const returnSug = (data) => {
      const bar = document.getElementById("magic");
      check = (e) => {
        bar.value = e.innerText;
        bar.focus();
      };
      document.getElementById("autoComplete").innerHTML = data[1]
        .slice(0, 2)
        .map((el) => `<li onclick="check(this)">${el[0]}</li>`)
        .join("<br />");
      suggList = data[1].slice(0, 5).map((el) => el[0]);
    };
  </script>
  <link rel="preconnect" href="https://web.whatsapp.com/" />
  <link rel="preconnect" href="https://en.wikipedia.org/" />
  <link rel="preconnect" href="https://github.com" />
  <link rel="prefetch" href="{base}/stream" />
  <link rel="prefetch" href="{base}/search" />
  <style>
    *::-webkit-scrollbar {
      display: none;
    }
  </style>
</svelte:head>

<div id="bgContainer" class="o-50">
  <img
    src="https://picsum.photos/1440/810.webp?random=1"
    class="w-100 h-100"
    alt=""
  />
</div>

<section class="w-100">
  <TopBar />
  <SummaryBox />
  <Search />
</section>

<style type="text/scss">
  #bgContainer {
    position: fixed;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    background: url(/shared/images/Terra.jpg);
    img {
      object-fit: cover;
    }
  }
  @keyframes downBar {
    to {
      bottom: 0.5em;
    }
  }
  section {
    position: relative;
    height: 100vh;
    z-index: 1;
  }
</style>
