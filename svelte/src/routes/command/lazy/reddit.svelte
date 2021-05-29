<script>
  import { redditImage, fallback } from "$lib/shared/js/yoroi";
  export let news;

  import { show } from "../store";
  import { Button } from "$lib/components";
</script>

{#each news.sort((a, b) => {
  return new Date(a.data.created * 1e3) - new Date(b.data.created * 1e3);
}) as el}
  <div
    class="boxy2 m-5 blurW"
    style="width:{el.data.title.length > 280 ? '100%' : 'calc(50% - 10px)'}"
  >
    <img
      class="w-100"
      src={redditImage(el.data?.preview?.images[0]) || fallback}
      alt={el.data.title}
    />
    <div class="f-wt4 p-5">
      <a href={el.data.url_overridden_by_dest}>
        {@html el.data.title}
        <Button
          flat
          theme="#fff8"
          click={() => show(el.data.url_overridden_by_dest)}
          style="text-align: right;background:#0000;"
        >
          See &rarr;
        </Button>
      </a>
    </div>
  </div>
{/each}

<style type="text/scss">
  .boxy2 {
    border-radius: 3px;
    &:hover {
      background: #3338;
    }
    img {
      border-radius: 5px;
      object-fit: cover;
      height: 200px;
    }
  }
</style>
