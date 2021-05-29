<script>
  import { onMount } from "svelte";
  import { nebula } from "../core/nebulaStore";
  import { SvgIcon } from "$lib/components";

  export let searcher, channels;

  let bar,
    searchText = "";

  onMount(() => (searchText = URLpars().q || ""));
</script>

<section class="o-0 p-10 flex blur" bind:this={bar}>
  <div>Mars</div>

  <form on:submit|preventDefault={searcher} style="background:#444;">
    <input
      class="p-5"
      id="srcBox"
      size="35"
      placeholder="Search"
      value={searchText}
    />
    <SvgIcon size="22" style="position:relative;top:3px;left:5px">
      <circle cx="14" cy="14" r="12" />
      <path d="M23 23 L30 30" />
    </SvgIcon>
    <input class="o-0 w-0" type="submit" value="" />
  </form>

  <div>
    <button class="blue" on:click={nebula}> ★ </button>
    <button class="red" on:click={channels}> ★ </button>
  </div>
</section>

<style type="text/scss">
  section {
    z-index: 9;
    font-size: 1.1em;
    width: calc(100% - 20px);
    position: fixed;
    top: 0;
    justify-content: space-between;
    transition: all 0.3s ease;
    align-items: center;
    &:hover {
      opacity: 1;
    }
    input {
      color: #fff;
      &::placeholder {
        color: #aaaa;
      }
    }
  }
  button {
    height: 36px;
    width: 36px;
    font-size: 1em;
    color: #fff;
    border-radius: 20px;
    color: #fff;
  }
  .red {
    background: #c22;
  }
  .blue {
    background: #22c;
  }
</style>
