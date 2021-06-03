<script>
  import { onMount } from "svelte";
  import { w3, wordCount, initialize } from "./functions";
  import { Button } from "$lib/components";
  import csso from "csso";

  let //
    iframe,
    words,
    oldHT = "";

  const cssMin = () => {
    const minifiedCss = csso.minify(editor.getValue()).css;
    recalculate("<div>" + minifiedCss + "</div>");
  };

  const render = () => {
    const html = editor.getValue();
    recalculate(html);
  };

  const recalculate = (html) => {
    const blob = new Blob([html], { type: "text/html" });
    const htmlURI = window.URL.createObjectURL(blob);
    if (oldHT === htmlURI) return 0;
    oldHT = htmlURI;
    iframe.src = htmlURI;
    words = wordCount(editor.getValue());
  };

  onMount(() => {
    let x = setInterval(() => {
      if (CodeMirror) {
        initialize();
        render();
        clearInterval(x);
      }
    }, 10);
  });
</script>

<svelte:head>
  <title>Jupiter</title>
  {#each ["codemirror", "css", "xml+mixedHtml", "js"] as js}
    <script src="/helpers/codes/{js}.js"></script>
  {/each}
  <link rel="stylesheet" href="/helpers/codes/codemirror+cobalt.css" />
</svelte:head>

<section class="flex" style="background:#666">
  <div class="boxies p-0 m-0 w-50" on:keyup={debounce(render, 1000)}>
    <div class="flex w-100 p-0 m-0" style="justify-content: space-between;">
      <div>
        <Button click={render} theme="#18f" style="margin:0;">Render</Button>
        <Button click={cssMin} theme="#18f" style="margin:0;">Min CSS</Button>
      </div>
      <div class="p-10">{words}</div>
    </div>
    <div class="w-100 codeContainer" style="position:relative;height:96%;">
      <textarea spellcheck="true" id="code" value={w3.base} />
    </div>
  </div>
  <div class="boxies p-0 m-0 w-50">
    <iframe title="sim" class="w-100 p-0" frameborder="0" bind:this={iframe} />
  </div>
</section>

<style type="text/scss">
  iframe {
    background: #fff;
    height: 100%;
  }
  .boxies {
    flex-wrap: wrap;
    color: #fff;
    height: 100vh;
    overflow-y: scroll;
  }
</style>
