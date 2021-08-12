<script>
    import { onMount } from "svelte";
    import { IBMProcessor } from "./functions";

    let //
        x = "<h2 class='p5 m20'>Processing</h2>",
        z = 0,
        y;

    fetch("https://api.nukes.in/quick/qiskit")
        .then((response) => response.text())
        .then((text) => (x = text), (z = 1));

    onMount(() => {
        let a = setInterval(() => {
            if (z === 1) {
                IBMProcessor();
                x = y.querySelectorAll(".bx--row")[2].innerHTML;
                clearInterval(a);
            }
        }, 5e1);
    });
</script>

<section class="p20 m20">
    <h1 class="p0 m20">IBM</h1>
    <style>
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
    <section class="ƒ ƒ∑" bind:this={y}>{@html x}</section>
</section>
