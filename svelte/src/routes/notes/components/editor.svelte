<script>
    import { onMount } from "svelte";

    let editor;
    export let data;

    onMount(() => {
        editor = new EditorJS({
            holder: "editorOfNotes",
            tools: {
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
                        endpoint: serverURL + "/requestMetadata", // Your backend endpoint for url data fetching
                    },
                },
                embed: {
                    class: Embed,
                    inlineToolbar: ["link"],
                },
            },
            data,
        });
        console.log(serverURL);
    });
</script>

<section id="editorOfNotes" />

<style>
    #editorOfNotes {
        margin: 20px 20px 0 20px;
        height: calc(100vh - 20px);
        overflow: scroll;
        border: 1px solid #8884;
        border-radius: 5px;
    }
</style>
