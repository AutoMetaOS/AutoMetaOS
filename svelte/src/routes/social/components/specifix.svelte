<script>
  import { onMount } from "svelte";
  import { date } from "$lib/shared/js/yoroi";

  let space = [];
  onMount(() => {
    fetch("https://www.spaceflightnewsapi.net/api/v2/articles")
      .then((res) => res.json())
      .then((r) => (space = r));
  });
</script>

<style type="text/scss">
  details summary::-webkit-details-marker {
    position: absolute;
    right: 1em;
    top: 3.75em;
    font-size: 1.25em;
    transform: rotate(-90deg);
  }
  .boxy {
    position: relative;
    height: 300px;
    img {
      height: 300px;
      object-fit: cover;
      z-index: 0;
    }
    .title {
      background: linear-gradient(to bottom, transparent, #000);
      position: absolute;
      bottom: 0;
      width: calc(100% - 40px);
      left: 0;
      word-wrap: break-word;
      font-size: 1.2em;
    }
    &:hover {
      background: #3338;
    }
  }
</style>

<section>
  <article class="w-33">
    {#each space as el}
      <a class="boxy m-20 w-100 blur" href={el.url}>
        <img src={el.imageUrl} class="w-100" alt={el.title} />
        <div class="title p-20">
          <span class="f-wt7">{el.title}</span>
          <hr />
          <details>
            <summary>{el.newsSite} / {date(el.publishedAt)}</summary>
            <p>{el.summary}</p>
          </details>
        </div>
      </a>
    {/each}
  </article>
</section>
