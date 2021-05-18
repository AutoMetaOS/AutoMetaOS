<script>
  import { onMount } from "svelte";

  let rss = [];

  onMount(() =>
    fetch(serverURL + "social/google/trends")
      .then((response) => response.json())
      .then((data) => (rss = data))
  );
</script>

<style type="text/scss">
  .news {
    overflow-x: scroll;
    img {
      border-radius: 2px;
      margin-right: 5px;
    }
    .container {
      overflow-x: scroll;
      overflow: auto;
      .innerCont {
        .body {
          width: 500px;
          &-first {
            width: 200px;
          }
        }
      }
    }
  }
</style>

<section>
  {#each rss as n}
    <div class="news blur rpm-10">
      <div class="body-first">
        <span style="color:#f00">{n.title}</span>
        <i>{n.related.length ? `(${n.related.join(', ')})` : ''}</i>
      </div>
      <div class="container flex">
        {#each n.articles as nSub}
          <div class="innerCont">
            <a class="body m-10 flex" href={nSub.url}>
              <img src={nSub.image} alt="" />
              <div>
                <div class="by"><i>{nSub.source}</i></div>
                <div class="title f-wt7">
                  {@html nSub.title}
                </div>
                <div class="desc">
                  {@html nSub.desc}
                </div>
              </div>
            </a>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>
