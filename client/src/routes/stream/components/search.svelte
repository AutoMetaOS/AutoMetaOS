<script>
  export let videos = [];

  import Card from "../shared/videoCard.svelte";
</script>

<section class="p-20 flex" id="search" style="flex-wrap: wrap;">
  {#if videos.length}
    <div class="p-5" style="width:99vw;">
      <div on:click={() => (videos = [])}>Search</div>
    </div>
    {#each videos as vid}
      <Card
        title={vid.snippet.title}
        type="YoutubeVideo"
        url={vid.id.videoId}
        lhs={vid.snippet.channelTitle}
        image={vid.snippet.thumbnails.medium.url}
        rhs={vid.snippet.publishedAt}
      />
    {/each}
  {/if}
</section>
