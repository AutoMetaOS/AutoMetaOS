<script>
    export let //
        items = [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
        ];

    const widthCalc = (elt) => {
        const index = notes.findIndex((p) => p.key === elt);
        const inputText = notes[index].value || "AA Scratch";
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
        width = widthCalc(selected);
    };
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select
    class="fw5"
    bind:value={selected}
    on:change={noteUpdate}
    style="width:{width}"
>
    {#each items as item}
        <option data-title={item.key} id={item.id} value={item.value}>
            {item.value}
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
