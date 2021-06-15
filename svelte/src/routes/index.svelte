<script>
  import { onMount } from "svelte";

  import TopBar from "./command/micro/topbar.svelte";
  import SummaryBox from "./command/micro/sumbox.svelte";
  import Search from "./command/components/search.svelte";
  import IFrame from "./command/components/ifr.svelte";
  import News from "./command/lazy/news.svelte";

  import { base } from "$app/paths";

  import { SvgIcon } from "$lib/components";

  const state = { news: 0 };

  onMount(
    () =>
      (window.onscroll = () => (window.scrollY > 10 ? (state.news = 1) : null))
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

    const fadeIn = (el) => {
      el.style.opacity = 0;
      let tick = () => {
        el.style.opacity = +el.style.opacity + 0.025;
        if (+el.style.opacity < 0.66)
          (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
            setTimeout(tick, 1);
      };
      tick();
    };

    let bgImg = new Image(1440, 900);
    bgImg.src = "https://picsum.photos/1440/810?random=1";
    bgImg.onload = () => {
      const cont = document.getElementById("bgContainer");
      cont.appendChild(bgImg);
      fadeIn(bgImg);
      cont.childNodes[0].remove();
    };
  </script>
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
  <img src="./shared/images/Terra.jpg" class="w-100" alt="" />
</div>

<section class="w-100">
  <TopBar />
  <SummaryBox />
  <Search />
  <br />
  <div id="Qlinks">
    Scroll for Today <br />
    <SvgIcon>
      <path d="M30 12 L16 24 2 12" />
    </SvgIcon>
  </div>
</section>

<section style="padding:0 25%;height:auto;">
  <div id="newsBox" class="w-100 m-h-auto" style="margin-top:20%;">
    {#if state.news}
      <News />
    {:else}
      <div
        class="blurW rpm-5 p-20 w-100"
        style="text-align:center;font-size:100px;line-height:100px;"
      >
        &nbsp;
      </div>
    {/if}
  </div>
</section>

<IFrame />

<style type="text/scss">
  #bgContainer {
    position: fixed;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  #Qlinks {
    width: calc(100% - 10px);
    text-align: center;
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
