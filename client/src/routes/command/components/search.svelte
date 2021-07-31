<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  import { engine, preprocessor } from "../samurai";
  import { recommendations } from "../store";

  import Recoms from "./suggestion.svelte";

  let magic;

  const go = (e) => {
    const send = engine(magic.value);
    const recs = $recommendations.map((e) => e.name || e.q);
    switch (e.keyCode) {
      case 40:
        magic.value = `!${send.key} ${recs[0]}`;
        break;
      case 38:
        magic.value = `!${send.key} ${recs[1]}`;
        break;
      case 13:
        window.location.href = preprocessor(send);
        break;
      default:
        recommendations.set([]);
        break;
    }
    return send;
  };

  onMount(() => magic.focus());
</script>

<section class="ƒ-col">
  <form on:submit|preventDefault>
    <div class="wrapper ƒ p5">
      <img id="engineImage" src="{base}/icons/Basic.svg" alt="" />
      <input
        on:keyup={go}
        placeholder="Ronin"
        bind:this={magic}
        id="magic"
        required
        size="150"
      />
    </div>
    <input id="submit" type="submit" value=" " style="display:none;" />
  </form>
  {#if $recommendations}
    <Recoms />
  {/if}
</section>

<style type="text/scss">
  section {
    justify-content: center;
    align-items: center;
  }
  form {
    padding-top: 27.5%;
    justify-content: center;
    .wrapper {
      background: #3348;
      font-size: 1.25rem;
      align-items: center;
      width: calc(80vw - 1em);
      img {
        width: 32px;
        height: 32px;
        border-radius: 5px;
      }
      #magic {
        padding: 0.25em 0.5em;
        font-size: 1.75rem;
        overflow: hidden;
        background: transparent;
        color: white;
      }
    }
  }
</style>
