<script>
  import { onMount } from "svelte";

  let rss = [];

  onMount(() =>
    fetch(serverURL + "social/google/trends")
      .then((response) => response.json())
      .then((data) => (rss = data))
  );
</script>

<section>
  {#each rss as n}
    <div class="news rpm-10">
      <div class="body-first">
        <span class="rpm-5" style="background:#F56;color:#fff;">{n.title}</span>
        <i>{n.related.length ? `(${n.related.join(", ")})` : ""}</i>
      </div>
      <div class="container flex">
        {#each n.articles as nSub}
          <div class="innerCont">
            <a class="body m-10 flex" href={nSub.url}>
              <img src={nSub.image} alt="" />
              <article>
                <div class="title f-wt7">
                  {@html nSub.title}
                </div>
                <div class="desc">
                  {@html nSub.desc}
                </div>
                <div class="by"><i>{nSub.source}</i></div>
              </article>
            </a>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>

<style type="text/scss">
  .news {
    overflow-x: scroll;
    border: 1px solid #ccc8;
    img {
      width: 125px !important;
      height: 125px;
      border-radius: 3px;
      margin-right: 5px;
    }
    .innerCont {
      .body {
        width: 500px;
      }
    }
  }
</style>
