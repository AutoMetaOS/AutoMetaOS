<script>
  import { substack } from "../core/store";

  $: videos = $substack;

  const coverage = (v) =>
    new Set(...v.map((e) => e.snippet.channelId)).size * 2 + "%";

  import Card from "../shared/videoCard.svelte";
</script>

<section class="flex p-20" id="search" style="flex-wrap: wrap;">
  {#if videos.length}
    <span class="w-100 p-5"
      >Youtube Subscriptions ({videos.length}) ({coverage(videos)})</span
    >
    {#each videos.sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)) as vid, i}
      <Card
        title={vid.snippet.title}
        type="YoutubeVideo"
        url={vid.snippet.resourceId.videoId}
        lhs={vid.snippet.channelTitle}
        image={vid.snippet.thumbnails.medium.url}
        rhs={~~((new Date() - new Date(vid.snippet.publishedAt)) / (36 * 1e5)) +
          " hours ago"}
      />
    {/each}
  {/if}
</section>
