<script>
    import { onMount } from "svelte";
    let dataSetId;

    const randomString = (len) => {
        let arr = new Uint8Array((len || 40) / 2);
        window.crypto.getRandomValues(arr);
        return Array.from(arr, dec2hex).join("");
    };

    onMount(() => (dataSetId = randomString(6)));
</script>

<section data-new="true" data-id={dataSetId} id="editorOfNotes" />

<style>
    #editorOfNotes {
        height: calc(100vh - 1px);
        overflow: scroll;
    }
</style>
