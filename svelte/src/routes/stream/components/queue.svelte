<script>
  import { vidoer, destacker, stack } from "../core/store";
  import { SvgIcon } from "$lib/components";
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
        <a
          href="#wrapper"
          on:click={vidoer}
          data-title={vid.snippet.title}
          id={vid.id.videoId || vid.snippet.resourceId.videoId}
        >
          <img src={vid.snippet.thumbnails.medium.url} alt="" />
          <div class="name">
            {@html vid.snippet.title.slice(0, 60)}
            {vid.snippet.title.length > 60 ? "..." : ""}
          </div>
          <div class="channel flex" style="justify-content:space-between;">
            <span>{vid.snippet.channelTitle}</span>
            <span>
              {new Intl.DateTimeFormat("en-GB").format(
                new Date(vid.snippet.publishedAt)
              )}
            </span>
          </div>
        </a>
      </div>
    {/each}
  {/if}
</section>
