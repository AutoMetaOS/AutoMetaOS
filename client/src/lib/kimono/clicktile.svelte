<script>
    import "./kimono.css";
    export let //
        light,
        disabled,
        href = "/";
</script>

<a {light} {disabled} class="kimono-ui-base †l w-100" {href}>
    <slot />
</a>

<style type="text/scss">
    a {
        background: var(--secondary-hl);
        border: 1px solid transparent;
        color: #fff;
        &:hover:not(:disabled) {
            background: var(--secondary);
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
