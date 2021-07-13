<script>
    import Lister from "./components/files.svelte";
    import Editor from "./components/editor.svelte";
    import Logo from "./micro/logo.svelte";
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    import { Button, SvgIcon } from "$lib/components";

    import { updateNote, deleteNote } from "./components/api";
    import { editorData } from "./components/store";

    let tools,
        currentData,
        saveButton = "#18f";

    const saver = async () => {
        const outputData = await editor.save();

        if (outputData === currentData) return;
        saveButton = "#06a";
        currentData = outputData;
        updateNote(mainEditor.dataset.id, outputData)
            .then((r) => (saveButton = "#18f"))
            .catch((e) => {
                console.log(e);
                saveButton = "#f44";
            });
        return 0;
    };

    const deleter = () => deleteNote(mainEditor.dataset.id);

    onMount(() => {
        window.mainEditor = document.querySelector("#editorOfNotes");
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

<main class="💪">
    <nav class="lhs w-20">
        <Logo />
        <section id="list">
            <Lister />
        </section>
        <functions class="💪" style="height:3.5rem;bottom:0;">
            <Button click={saver} theme={saveButton} style="margin:0;flex:1;">
                <SvgIcon>
                    <path
                        d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 18 L16 14 21 18 M16 14 L16 29"
                    />
                </SvgIcon>
            </Button>
            <Button click={deleter} theme="#f44" style="margin:0;flex:1;">
                <SvgIcon>
                    <path
                        d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6"
                    />
                </SvgIcon>
            </Button>
        </functions>
    </nav>
    <main class="rhs" style="z-index:0">
        <Editor />
    </main>
</main>

<style type="text/scss">
    main {
        height: 100%;
        overflow: hidden;
    }
    .lhs {
        z-index: 0;
        border-right: 1px solid #ccc8;
    }
    .rhs {
        width: 80%;
    }
    #list {
        overflow-y: scroll;
        max-height: calc(100vh - 68px - 3.5em);
    }
</style>
