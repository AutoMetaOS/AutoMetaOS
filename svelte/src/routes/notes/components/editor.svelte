<script>
    import { onMount } from "svelte";
    let dataSetId;

    onMount(() => (dataSetId = randomString(6)));
</script>

<section data-id={dataSetId} id="editorOfNotes" />

<style>
    #editorOfNotes {
        height: calc(100vh - 1px);
        overflow: scroll;
    }
</style>
