<script>
  export let videos = [];

  import { vidoer, stacker } from "../core/store";
</script>

<section class="p-20 flex" id="search" style="flex-wrap: wrap;">
  {#if videos.length}
    <div class="p-5" style="width:99vw;">
      <div on:click={() => (videos = [])}>Search</div>
    </div>
    {#each videos as vid}
      <div class="recom" style="position:relative;">
        <div
          on:click={stacker(vid)}
          style="position:absolute;right:5px;top:5px;border-radius:7px;">
          <svg
            class="p-5"
            viewBox="0 0 32 32"
            width="20"
            stroke="#fff"
            height="20"
            style="background:#000c;">
            <path d="M16 2 L16 30 M2 16 L30 16" />
          </svg>
        </div>
        <a
          href="#wrapper"
          on:click={vidoer}
          data-title={vid.snippet.title}
          id={vid.id.videoId}>
          <img src={vid.snippet.thumbnails.medium.url} alt="" />
          <div class="name">
            {@html vid.snippet.title.slice(0, 60)}
            {vid.snippet.title.length > 60 ? '...' : ''}
          </div>
          <div class="channel flex" style="justify-content:space-between;">
            <div>{vid.snippet.channelTitle}</div>
            <div>
              {new Intl.DateTimeFormat('en-GB').format(new Date(vid.snippet.publishedAt))}
            </div>
          </div>
        </a>
      </div>
    {/each}
  {/if}
</section>
