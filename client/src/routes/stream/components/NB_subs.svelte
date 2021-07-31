<script>
    import { subscriptions } from "../core/api";
    import Card from "../shared/videoCard.svelte";

    $: videos = $subscriptions;

    const clear = () => (videos = []);
</script>

<section class="ƒ p20 ƒ∑" id="search">
    {#if videos.length}
        <span class="w-100 p5" on:click={clear}
            >Nebula Subscriptions ({videos.length})</span
        >
        {#each videos as vid}
            <Card
                title={vid.title}
                url={vid.embedURL}
                type="NebulaVideo"
                image={vid.image}
                lhs={vid.channel}
                rhs={vid.date}
            />
        {/each}
    {/if}
</section>
