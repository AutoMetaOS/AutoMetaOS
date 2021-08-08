<script>
    export let //
        light,
        disabled,
        href = "/";
</script>

<a {light} {disabled} class="†l w-100" {href}>
    <slot />
</a>

<style type="text/scss">
    a {
        padding: 1em;
        background: var(--secondary);
        border: 1px solid transparent;
        transition: all 0.2s ease;
        color: #fff;
        &:hover:not(:disabled) {
            background: var(--secondary-hl);
        }
        &[light] {
            background: #fff;
            color: #000;
            &:hover:not(:disabled) {
                background: var(--disabled-text);
            }
        }
        &[disabled] {
            pointer-events: none;
            background: var(--disabled);
            color: var(--disabled-text);
        }
    }
</style>
