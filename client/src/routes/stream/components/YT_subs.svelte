<script>
  import { substack } from "../core/store";

  $: videos = $substack;

  const coverage = (v) =>
    new Set(...v.map((e) => e.snippet.channelId)).size * 2 + "%";

  import Card from "../shared/videoCard.svelte";

  const clear = () => (videos = []);
</script>

<section class="ƒ p20 ƒ∑" id="search">
  {#if videos.length}
    <span class="w-100 p5" on:click={clear}
      >Youtube Subscriptions ({videos.length}) ({coverage(videos)})</span
    >
    {#each videos.sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)) as vid, i}
      <Card
        title={vid.snippet.title}
        type="YoutubeVideo"
        url={vid.snippet.resourceId.videoId}
        lhs={vid.snippet.channelTitle}
        image={vid.snippet.thumbnails.medium.url}
        rhs={vid.snippet.publishedAt}
      />
    {/each}
  {/if}
</section>
