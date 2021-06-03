<script>
    import List from "./components/files.svelte";
    import Editor from "./components/editor.svelte";
    import Logo from "./micro/logo.svelte";
    import { onMount } from "svelte";

    import { Button, SvgIcon } from "$lib/components";

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
            updateNote(mainEditor.dataset.id, outputData);
        }
    };

    const deleter = async () => {
        console.log(mainEditor.dataset.id);
    };

    const updateEditor = (e) => {
        if (!(mainEditor.dataset.id === e.detail.data.id)) {
            editor.render(JSON.parse(e.detail.data.body));
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
                    endpoint: serverURL + "requestMetadata",
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
    <title>Terrelysium</title>
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
<div class="options p-20 flex">
    <Button square click={saver} rx="32px" theme="#18f">
        <SvgIcon>
            <path
                d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 18 L16 14 21 18 M16 14 L16 29"
            />
        </SvgIcon>
    </Button>
    <Button square click={deleter} rx="32px" theme="#f44">
        <SvgIcon>
            <path
                d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6"
            />
        </SvgIcon>
    </Button>
</div>

<style type="text/scss">
    main {
        height: 100%;
        overflow: hidden;
    }
    .lhs {
        z-index: 0;
        width: 20%;
        border-right: 1px solid #ccc8;
        height: 100vh;
    }
    .rhs {
        width: 80%;
    }
    .options {
        opacity: 0.5;
        z-index: 10;
        position: absolute;
        bottom: 0rem;
        transition: all 0.3s ease;
        & * {
            transform: translateY(50px);
            transition: transform 0.3s ease;
        }
        &:hover {
            opacity: 1;
            & * {
                transform: translateY(0);
            }
        }
    }
</style>
