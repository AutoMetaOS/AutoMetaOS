<script>
    import { onMount } from "svelte";

    let newzes = [
        { name: "TechNews", news: [] },
        { name: "Physics", news: [] },
        { name: "Science", news: [] },
        { name: "TodayILearned", news: [] },
    ];

    const [cfg, r] = ["/top/.json?limit=5", "https://www.reddit.com/r/"];

    onMount(() => {
        Promise.all(newzes.map((e) => fetch(r + e.name + cfg)))
            .then((resp) => Promise.all(resp.map((r) => r.json())))
            .then((result) =>
                result.map((r, i) => (newzes[i].news = r.data.children))
            );
    });
</script>

<section class="flex">
    {#each newzes as topic}
        <article class="w-25 p-5 m-5">
            <div class="boxy p-10" style="border: 1px solid #ccc8;">
                r/{topic.name}
            </div>
            {#each topic.news as el}
                <div class="boxy">
                    <a href={el.data.url_overridden_by_dest}>
                        <img
                            class="w-100"
                            src={el.data.thumbnail ||
                                "https://i.redd.it/1if85xwae7qy.jpg"}
                            alt=""
                            onerror="this.onerror=null;this.src=;'https://i.redd.it/1if85xwae7qy.jpg'"
                        />
                        <div class="p-5 f-wt4">
                            {el.data.title.replace(/TIL/g, "")}
                        </div>
                    </a>
                </div>
            {/each}
        </article>
    {/each}
</section>

<style type="text/scss">
    .boxy {
        margin: 5px 0;
        border: 1px solid #ccc8;
        border-radius: 10px;
        img {
            object-fit: cover;
            height: 200px;
        }
    }
</style>
