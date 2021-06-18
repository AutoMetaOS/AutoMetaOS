<script>
  import { vidoer, destacker, stack } from "../core/store";
  import { SvgIcon } from "$lib/components";
  import Card from "../shared/videoCard.svelte";
</script>

<section class="flex p-20" id="search" style="flex-wrap: wrap;">
  {#if $stack.length}
    <span class="w-100 p-5">Queue ({$stack.length})</span>
    {#each $stack as vid, i}
      <div class="recom" style="position:relative;">
        <div
          on:click={() => destacker(i)}
          style="position:absolute;right:5px;top:5px;border-radius:7px;"
        >
          <SvgIcon
            size="20"
            classes="p-5"
            stroke="#fff"
            style="background:#000c;"
          >
            <path d="M2 30 L30 2 M30 30 L2 2" />
          </SvgIcon>
        </div>
        <Card
          title={vid.snippet.title}
          type="YoutubeVideo"
          url={vid.id.videoId || vid.snippet.resourceId.videoId}
          lhs={vid.snippet.channelTitle}
          image={vid.snippet.thumbnails.medium.url}
          rhs={~~(
            (new Date() - new Date(vid.snippet.publishedAt)) /
            (36 * 1e5)
          ) + " hours ago"}
        />
      </div>
    {/each}
  {/if}
</section>
