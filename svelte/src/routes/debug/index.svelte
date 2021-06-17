<script>
  import { onMount } from "svelte";
  import { w3, wordCount, initialize } from "./functions";
  import { Button } from "$lib/components";
  import { base } from "$app/paths";
  import csso from "csso";

  let //
    ifr,
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
    const htmlURI = html;
    if (oldHT === htmlURI) return 0;
    oldHT = htmlURI;

    ifr.document.open();
    ifr.document.write(htmlURI);
    ifr.document.close();

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
    ifr = document.querySelector("iframe");
    ifr = ifr.contentWindow || ifr.contentDocument?.document;
  });
</script>

<svelte:head>
  <title>Jupiter</title>
  {#each ["codemirror", "css", "xml+mixedHtml", "js"] as js}
    <script src="{base}/helpers/codes/{js}.js"></script>
  {/each}
  <link rel="stylesheet" href="{base}/helpers/codes/codemirror+cobalt.css" />
  <style>
    body {
      background: #000;
    }
  </style>
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
      <textarea spellcheck="true" id="code" value={w3} />
    </div>
  </div>
  <div class="boxies p-0 m-0 w-50">
    <iframe
      title="sim"
      src="/assets/repl.html"
      class="w-100 p-0"
      frameborder="0"
    />
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
