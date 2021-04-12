<script>
    const dashL1 = [
        [10, 0],
        [6, 1],
        [10, 0],
        [4, 1],
        [24, 0],
        [11, 1],
        [14, 1],
    ];

    const limit = 100 - dashL1.length * 3;

    const sumtill = (t) => {
        let base = 0;
        for (let i = 0; i < t; i++) base += dashL1[i][0] + 3;
        return (base * 360) / 100;
    };
    const tau = 2 * Math.PI;
    const circL1 = (tau * 180).toFixed(2);
</script>

physially add gaps as a part of the array
<svg viewBox="0 0 512 512">
    {#each dashL1 as vec, i}
        <circle
            transform="rotate({sumtill(i)}, 256, 256)"
            stroke={vec[1] ? "#888" : "#000"}
            cx="256"
            cy="256"
            r="180"
            stroke-dasharray="{~~((circL1 * vec[0]) / 100)}, {circL1}"
        />
    {/each}
</svg>

<svelte:head>
    <style>
        body {
            background: #fff;
        }
    </style>
</svelte:head>

<style>
    svg {
        width: 600px;
        height: 600px;
    }

    svg circle {
        stroke-width: 24px;
        stroke-linecap: round;
        fill: none;
    }
</style>
