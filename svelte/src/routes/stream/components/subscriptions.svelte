<script>
  import { onMount } from "svelte";

  import { vidoer, stacker, substack } from "../core/store";

  let videos = $substack;

  onMount(() => setInterval(() => console.log(videos), 1e4));
</script>

<section class="flex p-20" id="search" style="flex-wrap: wrap;">
  {#if videos.length}
    <span class="w-100 p-5"
      >Subscriptions ({videos.length}) ({(new Set(
        ...videos.map((e) => e.snippet.channelId)
      ).size *
        100) /
        50 +
        "%"})</span
    >
    {#each videos.sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)) as vid, i}
      <div class="recom" style="position:relative;">
        <div
          on:click={stacker(vid)}
          style="position:absolute;right:5px;top:5px;border-radius:7px;"
        >
          <svg
            stroke="#fff"
            viewBox="0 0 32 32"
            width="20"
            height="20"
            class="p-5"
            style="background:#000c;"
          >
            <path d="M16 2 L16 30 M2 16 L30 16" />
          </svg>
        </div>
        <a
          href="#wrapper"
          on:click={vidoer}
          data-title={vid.snippet.title}
          id={vid.snippet.resourceId.videoId}
        >
          <img src={vid.snippet.thumbnails.medium.url} alt="" />
          <div class="name">
            {@html vid.snippet.title.slice(0, 60)}
            {vid.snippet.title.length > 60 ? "..." : ""}
          </div>
          <div class="channel flex" style="justify-content:space-between;">
            <span>{vid.snippet.channelTitle}</span>
            <span>
              {~~(
                (new Date() - new Date(vid.snippet.publishedAt)) /
                (36 * 1e5)
              )}
              hours ago
            </span>
          </div>
        </a>
      </div>
    {/each}
  {/if}
</section>
