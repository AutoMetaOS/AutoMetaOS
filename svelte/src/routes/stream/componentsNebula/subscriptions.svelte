<script>
    import { subscriptions } from "../core/nebulaStore";

    $: videos = $subscriptions;

    import Card from "../shared/videoCard.svelte";
</script>

<section class="flex p-20" id="search" style="flex-wrap: wrap;">
    {#if videos.length}
        <span class="w-100 p-5">Nebula Subscriptions ({videos.length})</span>
        {#each videos as vid}
            <Card
                title={vid.title}
                url={vid.embedURL}
                type="NebulaVideo"
                image={vid.image}
                lhs={vid.channel}
                rhs={~~((new Date() - new Date(vid.date)) / (36 * 1e5)) +
                    " hours ago"}
            />
        {/each}
    {/if}
</section>
