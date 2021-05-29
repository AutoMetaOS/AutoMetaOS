<script>
    export let theme,
        style = "",
        disabled,
        click = "",
        rx = 0,
        flat;
</script>

<button
    {flat}
    {disabled}
    on:click={click}
    class="btn "
    style={`${style};--theme:${theme};border-radius:${rx};`}
>
    <slot />
</button>

<style type="text/scss">
    .btn {
        --theme: #18f;
        cursor: pointer;
        margin: 10px;
        padding: 10px 20px;
        transition: all 0.2s ease;
        &:disabled {
            opacity: 0.5;
        }

        color: #fff;
        background: var(--theme);

        &:hover:not(:disabled) {
            background: var(--theme);
            color: #ddd;
            opacity: 0.9;
        }

        &[flat] {
            color: var(--theme);
            background: #fff;
            &:hover:not(:disabled) {
                color: var(--theme);
                background: #ddd;
            }
        }
    }
</style>
