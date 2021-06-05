<script>
  import { playlist } from "../core/api.js";

  export let videos = [];

  import { fullStacker } from "../core/store";

  const usePL = (e) => {
    playlist(e.target.parentElement.id).then((r) =>
      fullStacker(
        r.items
          .sort(
            (a, b) =>
              new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
          )
          .reverse()
      )
    );
    return 0;
  };
</script>

<section class="p-20 flex" id="search" style="flex-wrap: wrap;">
  {#if videos.length}
    <span class="w-100 p-5">Playlists</span>
    {#each videos as vid}
      <div on:click={usePL} class="recom" id={vid.id.playlistId}>
        <img src={vid.snippet.thumbnails.medium.url} alt="" />
        <div class="name" title={vid.snippet.title}>
          {@html vid.snippet.title.length > 60
            ? vid.snippet.title.slice(0, 60) + "..."
            : vid.snippet.title}
        </div>
        <div class="channel flex" style="justify-content:space-between;">
          <span>{vid.snippet.channelTitle}</span>
          <span>
            {new Intl.DateTimeFormat("en-GB").format(
              new Date(vid.snippet.publishedAt)
            )}
          </span>
        </div>
      </div>
    {/each}
  {/if}
</section>
