<script>
    import "./kimono.css";
    export let //
        forceClass = "",
        icon,
        iconView = "0 0 32 32",
        kind = "primary",
        href = "#",
        disabled;
</script>

<a {href} class="†l kimono-ui-base {forceClass}" {kind} {disabled} on:click>
    {#if icon}
        <svg viewBox={iconView}>
            {@html icon}
        </svg>
    {/if}
    <slot />
</a>

<style type="text/scss">
    svg {
        position: relative;
        width: 1.1em;
        height: 1.1em;
        top: 0.2em;
        padding-right: 5px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
        stroke: currentColor;
        fill: none;
    }
    a {
        color: #fff;
        background: var(--primary);
        border: 1px solid transparent;
        margin: 10px;
        min-width: 100px;
        padding: 1em 1.33em;
        cursor: pointer;
        transition: all 0.2s ease;
        &:disabled {
            background: var(--disabled);
            pointer-events: none;
            color: var(--disabled-text);
        }
        &:hover:not(:disabled) {
            background: var(--primary);
        }
        &[kind="secondary"] {
            background: var(--secondary);
            &:hover:not(:disabled) {
                background: var(--secondary-hl);
            }
        }
        &[kind="tertiary"] {
            background: transparent;
            border: 1px solid var(--primary);
            color: var(--primary);
            &:hover:not(:disabled) {
                background: var(--primary);
                color: #fff;
            }
        }
        &[kind="ghost"] {
            background: transparent;
            color: var(--primary);
            &:hover:not(:disabled) {
                background: var(--secondary-hl);
            }
        }
        &[kind="danger"] {
            background: var(--danger);
            color: #fff;
            &:hover:not(:disabled) {
                background: var(--danger-hl);
            }
        }
        &[kind="danger-ghost"] {
            background: transparent;
            color: var(--danger);
            &:hover:not(:disabled) {
                background: var(--secondary-hl);
            }
        }
    }
</style>
