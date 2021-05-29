<script>
  import { onMount } from "svelte";
  import { w3, debounce } from "./functions";
  import { Button } from "$lib/components";

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
    setTimeout(() => {
      let scrip = document.createElement("script");
      scrip.innerText = `let editor = CodeMirror.fromTextArea(document.getElementById("code"), {lineNumbers: true,mode: "htmlmixed",lineWrapping: true,matchBrackets: true});editor.setSize("50vw", "100%");editor.setOption("theme", "material");document.title="Jupiter Code"`;
      document.head.appendChild(scrip);
      recalculate();
    }, 1.5e3);
  });
</script>

<svelte:head>
  {#each ["codemirror", "css", "xml+mixedHtml", "js"] as js}
    <script src="/helpers/codes/{js}.js"></script>
  {/each}
  <link rel="stylesheet" href="/helpers/codes/codemirror+material.css" />
</svelte:head>

<section class="flex" style="background:#666">
  <div class="boxies p-0 m-0 w-50" on:keyup={debounce(recalculate, 1000)}>
    <div class="flex w-100 p-0 m-0">
      <Button click={recalculate} theme="#18f" style="margin:0;">Render</Button>
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
      style="background:#fff;height:100%;"
    />
  </div>
</section>

<style type="text/scss">
  .boxies {
    flex-wrap: wrap;
    color: #fff;
    height: 100vh;
    overflow-y: scroll;
  }
</style>
