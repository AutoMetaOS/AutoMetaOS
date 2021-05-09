<script>
  import { onMount } from "svelte";
  import { w3, replLinks, debounce } from "./functions";

  let //
    iframe,
    oldHT = "";

  const recalculate = () => {
    const html = editor.getValue();
    const blob = new Blob([html], { type: "text/html" });
    const htmlURI = window.URL.createObjectURL(blob);
    if (oldHT === htmlURI) return 0;
    oldHT = htmlURI;
    iframe.src = htmlURI;
  };

  onMount(() => {
    replLinks.js.forEach((e) => {
      let scrip = document.createElement("script");
      scrip.src = e;
      document.head.appendChild(scrip);
    });
    replLinks.css.forEach((e) => {
      let rel = document.createElement("link");
      rel.setAttribute("rel", "stylesheet");
      rel.href = e;
      document.head.appendChild(rel);
    });
    setTimeout(() => {
      let scrip = document.createElement("script");
      scrip.innerText = w3.repl;
      document.head.appendChild(scrip);
      recalculate();
    }, 1.5e3);
  });
</script>

<style type="text/scss">
  button {
    color: #fff;
    background: #1ad;
    border-radius: 0;
    height: 2em;
    width: 100px;
  }
  .boxies {
    flex-wrap: wrap;
    color: #fff;
    height: 100vh;
    overflow-y: scroll;
  }
</style>

<section class="flex" style="background:#666">
  <div class="boxies p-0 m-0 w-50" on:keyup={debounce(recalculate, 1000)}>
    <div class="flex w-100 p-0 m-0">
      <button on:click={recalculate}>Render</button>
    </div>
    <div class="w-100 codeContainer" style="position:relative;height:96%;">
      <textarea spellcheck="true" id="code" value={w3.base} />
    </div>
  </div>
  <div class="boxies p-0 m-0 w-50">
    <iframe
      title="simulator"
      class="w-100 p-0"
      frameborder="0"
      bind:this={iframe}
      style="background:#fff;height:100%;" />
  </div>
</section>
