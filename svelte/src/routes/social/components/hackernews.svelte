<script>
    import { date } from "$lib/shared/js/yoroi";
    import { onMount } from "svelte";

    let news = [];
    const HNBase = "https://hacker-news.firebaseio.com/v0/";
    const HNCfg = "?print=pretty";
    onMount(() => {
        fetch(HNBase + "topstories.json" + HNCfg)
            .then((res) => res.json())
            .then((r) => {
                Promise.all(
                    r
                        .slice(0, 40)
                        .map((e) =>
                            fetch(HNBase + "item/" + e + ".json" + HNCfg)
                        )
                )
                    .then((resp) => Promise.all(resp.map((r) => r.json())))
                    .then((result) => {
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
        <div class="rpm-10px blur">
            <a href={n.url} class="news">
                <div class="title">
                    {n.title} - <i>{n.by}</i>
                    <span class="desc">{urlP(n.url)}</span>
                </div>
                <div class="desc" style="font-size: 0.8em;">
                    {n.score} points | {n.descendants} comments | {date(
                        n.time * 1e3
                    )}
                </div>
            </a>
        </div>
    {/each}
</section>

<style>
    .desc {
        color: #888;
    }
</style>
