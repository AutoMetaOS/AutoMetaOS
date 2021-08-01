<script>
    import Lister from "./components/files.svelte";
    import Editor from "./components/editor.svelte";
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    import { Button } from "$lib/components";
    import { serverURL } from "$lib/shared/molecular";

    import { updateNote, deleteNote } from "./components/api";
    import { editorData } from "./components/store";

    let tools,
        currentData,
        saveButton = "#0000";

    const saver = async () => {
        const outputData = await editor.save();

        if (outputData === currentData) return;
        saveButton = "#f44";
        currentData = outputData;
        updateNote(mainEditor.dataset.id, outputData)
            .then((r) => (saveButton = "#0000"))
            .catch(console.log);
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
        if (e.metaKey && e.keyCode === 83) {
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

<main class="w-100" style="z-index: 0;">
    <functions class="fns ƒ">
        <Lister />
        <hr class="m0" />
        <Button classes="ƒ fw5 m0 p5" click={saver} theme={saveButton}>
            <svg viewBox="0 0 32 32">
                <path
                    stroke="#1af"
                    d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 18 L16 14 21 18 M16 14 L16 29"
                />
            </svg>
            <span style="font-size:1.25em;color:#000;">&nbsp;Save</span>
        </Button>
        <hr class="m0" />
        <Button classes="ƒ fw5 m0 p5" click={deleter}>
            <svg viewBox="0 0 32 32">
                <path
                    stroke="#f22"
                    d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6"
                />
            </svg>
            <span style="font-size:1.25em;color:#000;">&nbsp;Delete</span>
        </Button>
    </functions>
    <Editor />
</main>

<style type="text/scss">
    hr {
        height: 1em;
        margin-top: 26px;
    }
    .fns {
        justify-content: center;
        padding: 0 10%;
        width: 80%;
    }
    svg {
        width: 24px;
        height: 24px;
        fill: none;
        stroke: #000;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 3;
    }
    main {
        height: 100vh;
        overflow: hidden;
    }
</style>
