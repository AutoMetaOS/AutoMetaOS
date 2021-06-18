<script>
  import { date } from "$lib/shared/molecular";
  import { onMount } from "svelte";
  import { Riquest } from "$lib/shared/molecular";

  const request = new Riquest("https://hacker-news.firebaseio.com/v0", "json");

  let news = [];
  const HNCfg = "?print=pretty";
  onMount(() => {
    request.get("/topstories.json" + HNCfg).then((r) => {
      Promise.all(
        r.slice(0, 40).map((e) => request.get(`/item/${e}.json${HNCfg}`))
      ).then((result) => {
        result.map((e) => {
          return {
            title: e.title,
            by: e.by,
            descendants: e.descendants,
            score: e.score,
            url: e.url,
            time: e.time,
          };
        });
        news = result;
      });
    });
  });

  const urlP = (url) => {
    let t2 = "";
    if (url) {
      const type = new URL(url);
      t2 = type.hostname;
      if (t2.includes("www")) t2 = t2.replace("www.", "");
      return `(${t2})`;
    }
    return t2;
  };
</script>

<section>
  {#each news as n}
    <div class="p-10 m-20" style="border-bottom: 1px solid #ccc8;">
      <a href={n.url} class="news">
        <div class="title">
          {n.title} - <i>{n.by}</i>
          <span class="desc">{urlP(n.url)}</span>
        </div>
        <div class="desc">
          {n.score} points | {n.descendants} comments | {date(n.time * 1e3)}
        </div>
      </a>
    </div>
  {/each}
</section>

<style>
  .desc {
    font-size: 0.8em;
    color: #888;
  }
</style>
