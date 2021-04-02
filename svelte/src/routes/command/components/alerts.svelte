<script>
    import { smc } from "$lib/shared/js/yoroi";
    import { onMount } from "svelte";
    import Alert from "../micro/alert.svelte";

    let promise;
    onMount(() => (promise = smc()));

    const safety = (resp) => {
        if (resp) {
            const cpu = +resp.cpu.split("°")[0];
            const mbo = +resp.board.split("°")[0];
            const fan = +resp.fan.split(" ")[0];
            if (cpu > 90 && mbo > 72 && fan < 3000) return 2;
            if (cpu > 75 && mbo > 65 && fan < 2000) return 1;
        }
        return 1;
    };
</script>

{#await promise}
    <div class="w-100" style="text-align:center;">Checking System...</div>
{:then response}
    <div style="display:none;">{JSON.stringify(response)}</div>
    {#if safety(response) === 2}
        <Alert
            icon={`<circle cx="16" cy="16" r="14" /><path d="M6 6 L26 26" />`}
            text={"System too Hot! " + response?.fan.split(" ")[0] || "∞"}
            color={"alert"}
        />
    {:else if safety(response)}
        <Alert
            text={"System Heating Up " + response?.fan.split(" ")[0] || "∞"}
            color={"warn"}
        />
    {:else}
        <Alert
            icon={`<circle cx="16" cy="16" r="14"></circle><g transform="scale(0.5) translate(15,17)"><path stroke-width="4" d="M2 20 L12 28 30 4"></path></g>`}
            text={"System Nominal"}
            color={"safe"}
        />
    {/if}
{:catch err}
    <Alert text="Unknown error, try again!" color="warn" />
{/await}
