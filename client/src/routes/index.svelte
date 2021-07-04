<script>
  import { onMount } from "svelte";

  import TopBar from "./command/components/topbar.svelte";
  import SummaryBox from "./command/components/sumbox.svelte";
  import Search from "./command/components/search.svelte";
  import News from "./command/lazy/news.svelte";

  import { base } from "$app/paths";

  import { SvgIcon } from "$lib/components";

  let news = false;

  onMount(
    () => (window.onscroll = () => (window.scrollY > 2 ? (news = true) : null))
  );
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

<div id="bgContainer">
  <img
    id="terra"
    src="https://picsum.photos/1440/810.webp?random=1"
    onerror="this.src='./shared/images/Terra.jpg'"
    class="w-100 o-50 h-100"
    alt=""
  />
</div>

<section class="w-100">
  <TopBar />
  <SummaryBox />
  <Search />
  <br />
  <div id="Qlinks" class="tx-c">
    <SvgIcon>
      <path d="M30 12 L16 24 2 12" stroke-width="1" />
    </SvgIcon>
  </div>
</section>

<section style="padding:0 25%;height:auto;">
  <div id="newsBox" class="w-100 m-h-auto" style="margin-top:20%;">
    {#if news}
      <News />
    {:else}
      <div class="blurW rpm-5 p-20 w-100 tx-c m-20">&nbsp;</div>
    {/if}
  </div>
</section>

<style type="text/scss">
  #bgContainer {
    position: fixed;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    img {
      object-fit: cover;
    }
  }
  #Qlinks {
    width: calc(100% - 10px);
    animation: downBar 0.2s 0.5s ease forwards;
    position: absolute;
    bottom: -5em;
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
