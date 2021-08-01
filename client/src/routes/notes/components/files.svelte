<script>
    import { notesList } from "./store";
    import { getNotes, getNote } from "./api";
    import { onMount } from "svelte";

    $: notes = $notesList;

    const widthCalc = (elt) => {
        const index = notes.findIndex((p) => p.id === elt);
        const inputText = notes[index]?.title || "AA Scratch";
        const font = "500 20px Helvetica";

        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        ctx.font = font;

        let formattedWidth =
            Math.ceil(ctx.measureText(inputText).width) + 15 + "px";
        return formattedWidth;
    };

    let selected,
        width = "110px";

    const noteUpdate = () => {
        getNote(selected);
        width = widthCalc(selected);
    };

    onMount(() => {
        getNotes();
    });
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select
    class="fw5"
    bind:value={selected}
    on:change={noteUpdate}
    style="width:{width}"
>
    {#each notes as note}
        <option data-title={note.title} value={note.id}>
            {note.title}
        </option>
    {/each}
</select>

<style type="text/scss">
    select {
        outline: none;
        width: auto;
        -webkit-appearance: none;
        border: none;
        font-size: 1.25em;
        color: #000;
        cursor: pointer;
        z-index: 1;
    }
</style>
