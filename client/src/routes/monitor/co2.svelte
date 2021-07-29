<script>
     import { getCo2 } from "./functions";

const changeCheck = (curr, prev) => {
    if (curr >= prev) return 1;
    return 0;
};
</script>

<div>
    {#await getCo2()}
        Wait
    {:then resp}
        <span
            class="{changeCheck(resp.current.value, resp.previous.value)
                ? 'up'
                : 'down'} ℹ6"
            style="font-size: 3em;"
        >
            {resp.current.value} ppm
        </span>
        <span>
            ∆ {(resp.current.value - resp.previous.value).toFixed(2)}
        </span>
    {/await}
</div>
<h2>CO<sub>2</sub> conc</h2>

<style>
     .up {
        color: #f00;
    }
    .down {
        color: #0f0;
    }
</style>