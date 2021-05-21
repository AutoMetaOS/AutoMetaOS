<script>
    import List from "./components/files.svelte";
    import Editor from "./components/editor.svelte";

    let data = {
        blocks: [
            {
                type: "header",
                data: {
                    text: "Header 1",
                    level: 1,
                },
            },
            {
                type: "paragraph",
                data: {
                    text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.",
                },
            },

            {
                type: "list",
                data: {
                    items: [
                        "It is a block-style editor",
                        "It returns clean data output in JSON",
                        "Designed to be extendable and pluggable with a simple API",
                    ],
                    style: "unordered",
                },
            },

            {
                type: "image",
                data: {
                    url: "https://picsum.photos/200",
                    caption: "Random image From Picsum",
                },
            },
            {
                type: "link",
                data: {
                    link: "https://codex.so",
                    meta: {
                        title: "CodeX Team",
                        site_name: "CodeX",
                        description:
                            "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
                        image: {
                            url: "https://codex.so/public/app/img/meta_img.png",
                        },
                    },
                },
            },
        ],
    };
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
    <script
        src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/list@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/embed@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/link@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/header@latest"></script>
    <script
        src="https://cdn.jsdelivr.net/npm/@editorjs/simple-image@latest"></script>
</svelte:head>

<main class="flex">
    <nav class="lhs">
        <header class="p-20" style="background:#eee;">Terrelysium</header>
        <lower>
            <List />
        </lower>
    </nav>
    <main class="rhs">
        <Editor {data} />
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
