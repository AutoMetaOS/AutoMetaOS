<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  let body;
  const URLpars = () => {
    const entries = new URLSearchParams(window.location.search).entries();
    const params = {};
    for (let entry of entries) params[entry[0]] = entry[1];
    return params;
  };

  onMount(() => {
    fetch(serverURL + "social/google/search?q=" + URLpars().q)
      .then((res) => res.text())
      .then((r) => {
        let doc = new DOMParser().parseFromString(r, "text/html");
        doc
          .querySelectorAll(
            "script, noscript, textarea, input, footer, header, meta, iframe, frame"
          )
          .forEach((e) => e.remove());
        body.innerHTML = new XMLSerializer().serializeToString(doc);
        document.querySelector("#main").childNodes[0].remove();
        preprocess();
      });
  });

  const preprocess = () => {
    const query = URLpars().q;

    body.innerHTML =
      `<form action="${base}/search"><input class="searcher" type="text" name="q" value="${query}" /></form>` +
      body.innerHTML
        .replaceAll(`http://${window.location.host}/imgres?imgurl=`, "")
        .replaceAll(`/imgres?imgurl=`, "")
        .replaceAll(`http://${window.location.host}/url?q=`, "")
        .replaceAll("/url?q=", "")
        .replaceAll("�", " ");

    document.title = query;
    // FIX IMAGES
    document.querySelectorAll("img").forEach((e) => {
      if (e.parentElement.parentElement.tagName === "A")
        e.src = decodeURIComponent(
          e.parentElement.parentElement.href?.split("&")[0]
        );
      if (e.src.includes("data:")) e.src = null;
    });
    // MINIFY DIVS
    body.querySelectorAll("div").forEach((el) => {
      // REMOVE EMPTY
      if (el.childNodes.length === 0) el.remove();
    });
    // REMOVE RELATED
    document
      .querySelectorAll("h2")
      .forEach((e) => e.parentElement.parentElement.remove());
    // Remove Undefines
    document.head.querySelector("script").remove();
  };
</script>

<div id="body" bind:this={body} />

<svelte:head>
  <style>
    *::-webkit-scrollbar {
      display: none;
    }
    body {
      background: #fff;
      color: #000;
    }
    .searcher {
      font-size: 32px;
      padding: 10px 0;
    }
  </style>
</svelte:head>
