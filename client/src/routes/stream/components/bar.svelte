<script>
  import { onMount } from "svelte";
  import { nebula } from "../core/api";
  import { SvgIcon } from "$lib/components";
  import { channels } from "../core/store";

  export let searcher;

  let bar,
    searchText = "";

  const caller = () => {
    nebula();
    channels();
  };

  onMount(() => (searchText = getµ().q || ""));
</script>

<section class="o-0 ◼ 💪 🥃" bind:this={bar}>
  <div>Helios</div>

  <form on:submit|preventDefault={searcher}>
    <input
      class="◼"
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
    <button class="red" on:click={caller}> ★ </button>
  </div>
</section>

<style type="text/scss">
  form {
    background: #444;
  }
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
</style>
