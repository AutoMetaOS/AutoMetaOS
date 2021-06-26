<script>
    import { onMount } from "svelte";
    import { date } from "$lib/shared/molecular";
    import { Riquest } from "$lib/shared/molecular";

    const request = new Riquest(
        "https://www.spaceflightnewsapi.net/api/v2/articles",
        "json"
    );

    let space = [];
    onMount(() => request.get().then((r) => (space = r)));
</script>

<section class="flex" style="flex-wrap: wrap;">
    {#each space as el}
        <a class="boxy m-20" href={el.url}>
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
</section>

<style type="text/scss">
    details summary::-webkit-details-marker {
        position: absolute;
        right: 1em;
        top: 3.75em;
        font-size: 1.25em;
        transform: rotate(180deg);
    }
    .boxy {
        color: #fff;
        position: relative;
        height: 350px;
        width: calc(33% - 40px);
        img {
            height: 100%;
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
