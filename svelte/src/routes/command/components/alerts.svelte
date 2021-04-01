<script>
    import { fade } from "svelte/transition";
    import { smc } from "$lib/shared/js/yoroi";
    import { onMount } from "svelte";

    let promise;
    onMount(() => (promise = smc()));

    const safety = (resp) => {
        if (resp) {
            const cpu = +resp.cpu.split("°")[0];
            const mbo = +resp.board.split("°")[0];
            const fan = +resp.fan.split(" ")[0];
            console.log(cpu);
            console.log(mbo);
            console.log(fan);
            if (cpu > 90 && mbo > 72 && fan < 3000) return 2;
            if (cpu > 75 && mbo > 65 && fan < 2000) return 1;
        }
        return 0;
    };
</script>

{#await promise}
    <div class="a m-h-auto blur flex safe" href="/">
        <svg viewBox="0 0 32 32" fill="none" stroke="currentcolor">
            <path d="M16 14 L16 23 M16 8 L16 10" />
            <circle cx="16" cy="16" r="14" />
        </svg>
        Checking...
    </div>
{:then response}
    <div style="display:none;">{JSON.stringify(response)}</div>
    <div
        in:fade
        class="a m-h-auto blur flex {safety(response) === 2
            ? 'alert'
            : safety(response)
            ? 'warn'
            : 'safe'}"
    >
        <svg viewBox="0 0 32 32" fill="none" stroke="currentcolor">
            <path d="M16 14 L16 23 M16 8 L16 10" />
            <circle cx="16" cy="16" r="14" />
        </svg>
        {#if safety(response) === 2}
            System too Hot! {response.fan.split(" ")[0]}
        {:else if safety(response) === 1}
            System Heating Up {response.fan.split(" ")[0]}
        {:else}
            System Nominal
        {/if}
    </div>
{:catch err}
    <div in:fade class="a m-h-auto blur flex warn">
        <svg viewBox="0 0 32 32" fill="none" stroke="currentcolor">
            <path d="M16 14 L16 23 M16 8 L16 10" />
            <circle cx="16" cy="16" r="14" />
        </svg>
        Unknown error, try again!
    </div>
{/await}

<style type="text/scss">
    .a {
        align-items: center;
        justify-content: center;
        width: 400px;
        padding: 10px 5px;
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
