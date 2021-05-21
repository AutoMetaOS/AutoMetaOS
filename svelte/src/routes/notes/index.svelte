<script>
    import List from "./components/files.svelte";
    import Editor from "./components/editor.svelte";
    import { onMount } from "svelte";

    import { getNotes } from "./components/api";
    import { notesList, editorData } from "./components/store";

    let tools;
    $: editor = 1;

    const updateEditor = (e) => {
        const mainEditor = document.querySelector("#editorOfNotes");
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
        getNotes().then((r) => ($notesList = r));

        tools = {
            header: {
                class: Header,
                inlineToolbar: ["link"],
            },

            image: {
                class: SimpleImage,
                inlineToolbar: ["link"],
            },
            list: {
                class: List,
                inlineToolbar: ["link"],
            },
            link: {
                class: LinkTool,
                inlineToolbar: ["link"],
                config: {
                    endpoint: serverURL + "requestMetadata", // Your backend endpoint for url data fetching
                },
            },
            embed: {
                class: Embed,
                inlineToolbar: ["link"],
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
    <script src="/helpers/notes/editorjs.js"></script>
    <script src="/helpers/notes/list.js"></script>
    <script src="/helpers/notes/embed.js"></script>
    <script src="/helpers/notes/link.js"></script>
    <script src="/helpers/notes/header.js"></script>
    <script src="/helpers/notes/simple-image.js"></script>
</svelte:head>

<main class="flex">
    <nav class="lhs">
        <header class="p-20 flex" style="background:#eee;">
            <img src="/icons/terrelys.svg" width="28px" height="28px" alt="" />
            <div style="position:relative;top:1px;left:5px;font-size:24px;">
                Terrelysium
            </div>
        </header>
        <lower>
            <List on:message={updateEditor} />
        </lower>
    </nav>
    <main class="rhs">
        <Editor />
    </main>
</main>

<style>
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
