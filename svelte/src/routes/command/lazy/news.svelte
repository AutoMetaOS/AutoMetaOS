<script>
  import Google from "./google.svelte";
  import Reddit from "./reddit.svelte";

  const googleTrends = async () => {
    const resp = await fetch(serverURL + "social/google/top-trends");
    return await resp.json();
  };
  let [fast, slow] = [[], []];
  googleTrends().then((r) => ([fast, slow] = [r.slice(0, 6), r.slice(-6)]));

  import { getReddit } from "$lib/shared/js/yoroi";
  let subs = ["worldnews", "todayilearned"];
  let subs2 = ["TechNews", "Science"];
  let [news, news2] = [[], []];
  Promise.all(subs.map((e) => getReddit(e))).then((res) =>
    res.map((r) => (news = [...news, ...r]))
  );
  Promise.all(subs2.map((e) => getReddit(e))).then((res) =>
    res.map((r) => (news2 = [...news2, ...r]))
  );
</script>

<section class="flex" style="flex-wrap:wrap;">
  <Google google={fast} />
  <Reddit {news} />
  <Google google={slow} />
  <Reddit news={news2} />
</section>
