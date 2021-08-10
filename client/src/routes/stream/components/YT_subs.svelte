<script>
  import { substack } from "../shared/store";
  import { Kron } from "$lib/shared/molecular";
  import Card from "../shared/videoCard.svelte";

  $: videos = $substack;

  const clear = () => (videos = []);
</script>

<section class="ƒ p20 ƒ∑" id="search">
  {#if videos.length}
    <span class="w-100 p5" on:click={clear}>
      Youtube Subscriptions ({videos.length})
    </span>
    {#each videos.sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)) as vid, i}
      <Card
        title={vid.snippet.title}
        type="Youtube"
        slug={vid.snippet.resourceId.videoId}
        image={vid.snippet.thumbnails.medium.url}
        details={[
          vid.snippet.channelTitle,
          new Kron(vid.snippet.publishedAt).timeSince(),
        ]}
      />
    {/each}
  {/if}
</section>
