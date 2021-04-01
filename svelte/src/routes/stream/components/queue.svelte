<script>
    import { vidoer, destacker, stack } from "../core/store";
</script>

<section class="flex p-20px" id="search" style="flex-wrap: wrap;">
    {#if $stack.length}
        <span class="w-100 p-5px">Queue ({$stack.length})</span>
        {#each $stack as vid, i}
            <div class="recom" style="position:relative;">
                <div
                    on:click={() => destacker(i)}
                    style="position:absolute;right:5px;top:5px;border-radius:7px;"
                >
                    <svg
                        class="p-5px"
                        viewBox="0 0 32 32"
                        width="20"
                        height="20"
                        stroke="#fff"
                        style="background:#000c;"
                    >
                        <path d="M2 30 L30 2 M30 30 L2 2" />
                    </svg>
                </div>
                <a
                    href="#wrapper"
                    on:click={vidoer}
                    data-title={vid.snippet.title}
                    id={vid.id.videoId || vid.snippet.resourceId.videoId}
                >
                    <img src={vid.snippet.thumbnails.medium.url} alt="" />
                    <div class="name">
                        {@html vid.snippet.title.slice(0, 60)}{vid.snippet.title
                            .length > 60
                            ? "..."
                            : ""}
                    </div>
                    <div
                        class="channel flex"
                        style="justify-content:space-between;"
                    >
                        <span>{vid.snippet.channelTitle}</span>
                        <span>
                            {new Intl.DateTimeFormat("en-GB").format(
                                new Date(vid.snippet.publishedAt)
                            )}
                        </span>
                    </div>
                </a>
            </div>
        {/each}
    {/if}
</section>
