<script>
    import { onMount } from "svelte";
    import { w3, replLinks, debounce } from "./micro/functions";

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
        }, 1000);
    });
</script>

<svelte:head>
    <style>
        body {
            background: url(./shared/images/Jupiter.jpg) no-repeat fixed;
            background-size: cover;
        }
        body::-webkit-scrollbar {
            display: none;
        }
        .CodeMirror {
            height: auto;
        }
    </style>
</svelte:head>

<section class="flex blurW">
    <div
        class="boxes"
        style="background:#666"
        on:keyup={debounce(recalculate, 1000)}
    >
        <div class="flex w-100" style="padding:0;height:2em;">
            <button on:click={recalculate}>Render</button>
        </div>
        <div class="w-100 codeContainer" style="position:relative;height:95vh;">
            <textarea spellcheck="true" id="code" value={w3.base} />
        </div>
    </div>
    <div class="boxes">
        <iframe
            src="data:text/html;charset=utf-8,"
            title="simulator"
            class="w-100"
            frameborder="0"
            bind:this={iframe}
            style="padding:0;background:#fff"
        />
    </div>
</section>

<style type="text/scss">
    section {
        flex-wrap: wrap;
        button {
            margin: 0;
            color: #fff;
            background: #1ad;
            font-size: 1em;
            border-radius: 0;
            cursor: pointer;
            height: 2em;
            width: 100px;
        }
        .boxes {
            flex-wrap: wrap;
            color: #fff;
            padding: 0;
            width: 50%;
            margin: 1px 0;
            border-radius: 0;
            height: 99.9vh;
            overflow-y: scroll;
        }
    }
</style>
