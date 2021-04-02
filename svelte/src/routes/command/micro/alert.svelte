<script>
    export let //
        icon,
        text,
        color;

    import { fade } from "svelte/transition";
</script>

<div in:fade class="a p-10px m-h-auto blur flex {color || 'warn'}">
    <svg viewBox="0 0 32 32" fill="none" stroke="currentcolor">
        {@html icon ||
            '<path d="M16 14 L16 23 M16 8 L16 10" /><circle cx="16" cy="16" r="14" />'}
    </svg>
    {text || "Nominal"}
</div>

<style type="text/scss">
    .a {
        align-items: center;
        justify-content: center;
        width: 400px;
        border-radius: 20px;
        animation: aja 1s ease forwards;
        animation-delay: 1s;
        svg {
            padding: 0 5px 0 0;
            stroke-width: 2;
            height: 20px;
            width: 20px;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
    }
    .alert {
        background: #a448;
        color: #f88;
    }
    .safe {
        background: #4a48;
        color: #8f8;
    }
    .warn {
        background: #aa48;
        color: #ff8;
    }
</style>
