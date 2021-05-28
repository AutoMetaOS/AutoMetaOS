<script>
    import List from "./components/files.svelte";
    import Editor from "./components/editor.svelte";
    import Logo from "./micro/logo.svelte";
    import { onMount } from "svelte";

    import { getNotes, updateNote } from "./components/api";
    import { notesList, editorData } from "./components/store";

    let tools, mainEditor, currentData;
    $: editor = 1;

    const saver = async () => {
        const outputData = await editor.save();
        if (JSON.stringify(outputData.blocks) === currentData)
            console.log("Already Saved");
        else {
            currentData = JSON.stringify(outputData.blocks);
            console.log(mainEditor.dataset.id, outputData);
            updateNote(mainEditor.dataset.id, outputData);
        }
    };

    const updateEditor = (e) => {
        if (!(mainEditor.dataset.id === e.detail.data.id)) {
            mainEditor.innerHTML = null;
            editor = new EditorJS({
                holder: "editorOfNotes",
                tools,
                data: JSON.parse(e.detail.data.body),
            });
            mainEditor.setAttribute("data-id", e.detail.data.id);
        }
    };

    onMount(() => {
        mainEditor = document.querySelector("#editorOfNotes");
        getNotes().then((r) => ($notesList = r));
        tools = {
            header: {
                class: Header,
            },
            image: {
                class: SimpleImage,
            },
            list: {
                class: List,
            },
            link: {
                class: LinkTool,
                config: {
                    endpoint: serverURL + "requestMetadata", // Your backend endpoint for url data fetching
                },
            },
            embed: {
                class: Embed,
            },
        };
        editor = new EditorJS({
            holder: "editorOfNotes",
            tools,
            data: $editorData,
        });
    });
</script>

<svelte:head>
    <style>
        body {
            background: #fff;
            color: #000;
            font: 200 16px Helvetica;
            min-height: 100vh;
        }
    </style>
    {#each ["editorjs", "header+embed", "link+list", "simple-image"] as js}
        <script src="/helpers/notes/{js}.js"></script>
    {/each}
</svelte:head>

<main class="flex">
    <nav class="lhs">
        <Logo />
        <lower>
            <List on:message={updateEditor} />
        </lower>
    </nav>
    <main class="rhs" style="z-index:0">
        <Editor />
    </main>
</main>
<div class="w-100" style="z-index:1">
    <button on:click={saver} id="save" style="bottom:1rem;right:1rem;">
        <svg
            viewBox="0 0 32 32"
            width="24"
            height="24"
            stroke="currentcolor"
            stroke-width="2"
            fill="none"
        >
            <path
                d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 18 L16 14 21 18 M16 14 L16 29"
            />
        </svg>
        <span style="vertical-align:super;"> Save </span>
    </button>
</div>

<style type="text/scss">
    #save {
        position: absolute;
        padding: 10px 15px 8px 10px;
        color: #fff;
        border-radius: 32px;
        background: #18f;
        transition: background 0.2s ease;
        &:hover {
            background: #06d;
        }
    }
    main {
        height: 100%;
        overflow: hidden;
    }
    .lhs {
        width: 20%;
        border-right: 1px solid #ccc;
        height: 100vh;
    }
    .rhs {
        width: 80%;
    }
</style>
