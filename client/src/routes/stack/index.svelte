<script>
    import Stick from "./tile.svelte";
    import Adder from "./adder.svelte";
    import orbs from "./stack.json";
</script>

<section class="p5">
    <div class="ƒ ƒ∑">
        <Adder />
        {#each orbs as orb}
            <Stick data={orb} />
        {/each}
    </div>
    <style>
        .tile {
            padding: 0;
            width: 25%;
            height: 300px;
        }
    </style>
</section>
