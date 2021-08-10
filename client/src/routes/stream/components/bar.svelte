<script>
  import { onMount } from "svelte";
  import { SvgIcon } from "$lib/components";
  import { channels, nebula } from "../shared/store";

  export let searcher;

  let searchText = "";

  onMount(() => {
    if (getµ().q || getµ().id) {
      searchText = getµ()?.q || "";
    } else {
      nebula();
      channels();
    }
  });
</script>

<section class="o-0 p5 🥃">
  <form class="ƒ w-33 m-h-auto" on:submit|preventDefault={searcher}>
    <input
      class="p5"
      id="srcBox"
      size="40"
      placeholder="Search"
      value={searchText}
    />
    <SvgIcon size="22" style="position:relative;top:3px;left:5px">
      <circle stroke="#fff" cx="14" cy="14" r="12" />
      <path stroke="#fff" d="M23 23 L30 30" />
    </SvgIcon>
    <input class="o-0 w-0" type="submit" value="" style="display: none;" />
  </form>
</section>

<style type="text/scss">
  form {
    justify-content: space-between;
  }
  section {
    z-index: 9;
    font-size: 1.1em;
    width: calc(100% - 10px);
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
</style>
