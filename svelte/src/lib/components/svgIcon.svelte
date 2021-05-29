<script>
    export let size = 24,
        stroke,
        classes,
        style,
        fill;
</script>

<svg
    class={classes}
    viewBox="0 0 32 32"
    width={size}
    height={size}
    stroke={stroke || "currentcolor"}
    stroke-width="2"
    fill={fill || "none"}
    {style}
>
    <slot />
</svg>

<style>
    svg {
        stroke-linecap: round;
        stroke-linejoin: round;
    }
</style>
