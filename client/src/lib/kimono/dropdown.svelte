<script>
    export let //
        light,
        type = "block",
        size,
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
    {light}
    {type}
    class="fw5 kimono-ui-base {size || ''}"
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
        display: block;
        width: auto;
        -webkit-appearance: none;
        border: none;
        font-size: 1.25em;
        min-width: 100px;
        border-bottom: 2px solid #000;
        z-index: 1;
        background: var(--secondary-hl);
        &[light] {
            background: #fff;
        }
        &[type="inline"] {
            display: inline;
            background: transparent;
            border-bottom: 2px solid #0000;
        }
        &:hover {
            background: var(--secondary-hl);
        }
        &::after {
            content: "D";
            width: 10px;
            height: 10px;
            position: absolute;
            color: #000;
            top: 0;
        }
    }
    .lg {
        width: 100%;
    }
</style>
