<script>
    import { onMount } from "svelte";

    import { w3, replLinks } from "./micro/functions";

    let iframe;

    const recalculate = () => {
        iframe.src =
            "data:text/html;charset=utf-8," +
            encodeURI(editor.getValue()) +
            encodeURI(w3.style);
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
            scrip.innerText = `
            let editor = CodeMirror.fromTextArea(document.getElementById("code"), {lineNumbers: true,mode: "htmlmixed",lineWrapping: true,matchBrackets: true});
            editor.setSize("50vw", "100%");;
            editor.setOption("theme", "material");
            document.title="Jupiter Code"`;
            document.head.appendChild(scrip);
            recalculate();
        }, 500);
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

<section class="flex">
    <div class="blur boxes" style="background:#8f8">
        <div class="flex w-100" style="padding:0;height:2em;">
            <button on:click={recalculate}>Render</button>
        </div>
        <div
            class="w-100 codeContainer"
            on:keyup={recalculate}
            style="position:relative;height:95vh;"
        >
            <textarea spellcheck="true" id="code" value={w3.base} />
        </div>
    </div>
    <div class="blur boxes">
        <iframe
            src="data:text/html;charset=utf-8,"
            title="simulator"
            class="w-100"
            frameborder="0"
            bind:this={iframe}
            style="padding:0;"
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
