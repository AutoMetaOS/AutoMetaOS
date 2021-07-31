<script>
    import Lister from "./components/files.svelte";
    import Editor from "./components/editor.svelte";
    import Logo from "./micro/logo.svelte";
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    import { Button } from "$lib/components";

    import { updateNote, deleteNote } from "./components/api";
    import { editorData } from "./components/store";

    let tools,
        currentData,
        saveButton = "#0000";

    const saver = async () => {
        const outputData = await editor.save();

        if (outputData === currentData) return;
        saveButton = "#06a";
        currentData = outputData;
        updateNote(mainEditor.dataset.id, outputData)
            .then((r) => (saveButton = "#0000"))
            .catch((e) => {
                console.log(e);
                saveButton = "#f44";
            });
        return 0;
    };

    const deleter = () => deleteNote(mainEditor.dataset.id);

    onMount(() => {
        window.mainEditor = ƒ("#editorOfNotes");
        tools = {
            header: Header,
            alert: Alert,
            image: SimpleImage,
            list: List,
            link: {
                class: LinkTool,
                config: {
                    endpoint: serverURL + "requestMetadata",
                },
            },
            embed: Embed,
            table: Table,
            checklist: Checklist,
        };
        window.editor = new EditorJS({
            holder: "editorOfNotes",
            tools,
            data: $editorData,
        });
    });

    const handleKeyDown = (e) => {
        if (
            (window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) &&
            e.keyCode == 83
        ) {
            e.preventDefault();
            saver();
        }
    };
</script>

<svelte:head>
    <title>Terrelysium</title>
    <style>
        body {
            background: #fff;
            color: #000;
            font: 200 16px Helvetica;
            min-height: 100vh;
        }
    </style>
    {#each ["editorjs", "header+embed", "table+alert", "checklist+list", "simple-image+link"] as js}
        <script src="{base}/helpers/notes/{js}.js"></script>
    {/each}
</svelte:head>

<svelte:window on:keydown={handleKeyDown} />

<main class="ƒ">
    <nav class="lhs">
        <Logo />
        <section id="list">
            <Lister />
        </section>
    </nav>
    <main class="rhs">
        <functions class="ƒ w-100" style="direction: rtl;">
            <Button
                click={saver}
                theme={saveButton}
                style="margin:0;color:#888a;"
            >
                Save
            </Button>
            <Button click={deleter} theme="#0000" style="margin:0;color:#888a;">
                Delete
            </Button>
        </functions>
        <Editor />
    </main>
</main>

<style type="text/scss">
    .ƒ {
        bottom: 0;
    }
    main {
        height: 100vh;
        overflow: hidden;
    }
    .lhs {
        height: 100%;
        width: 17.5%;
        background: #f5f5f2;
        z-index: 0;
        border-right: 1px solid #ccc8;
    }
    .rhs {
        z-index: 0;
        width: 82.5%;
    }
    #list {
        overflow-y: scroll;
        height: calc(100vh - 68px);
    }
</style>
