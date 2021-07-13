<script>
  import Logo from "./micro/logo.svelte";

  const pages = [{ name: "Home", url: "" }, { name: "HackerNews" }];
</script>

<svelte:head>
  <style>
    body {
      color: #000;
      background: #fff;
    }
  </style>
  <title>Saturn Social</title>
</svelte:head>

<section>
  <nav class="💪">
    <Logo />
    <div class="💪 ⬛">
      {#each pages as pg}
        <a class="◼" href="/social/{pg.url ?? pg.name}">{pg.name}</a>
      {/each}
    </div>
  </nav>

  <slot />
</section>

<style type="text/scss">
  nav {
    justify-content: space-between;
    font: 300 16px Helvetica;
    border-bottom: 1px solid #ccc8;
  }
</style>
