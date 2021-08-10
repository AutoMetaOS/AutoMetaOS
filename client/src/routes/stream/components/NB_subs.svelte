<script>
    import { subscriptions } from "../shared/store";
    import { Kron } from "$lib/shared/molecular";
    import Card from "../shared/videoCard.svelte";

    $: videos = $subscriptions;

    const clear = () => (videos = []);
</script>

<section class="ƒ p20 ƒ∑" id="search">
    {#if videos.length}
        <span class="w-100 p5" on:click={clear}>
            Nebula Subscriptions ({videos.length})
        </span>
        {#each videos as vid}
            <Card
                title={vid.title}
                slug={vid.uri}
                type="Nebula"
                image={vid.image}
                token={vid.token}
                details={[vid.channel, new Kron(vid.date).timeSince()]}
            />
        {/each}
    {/if}
</section>
