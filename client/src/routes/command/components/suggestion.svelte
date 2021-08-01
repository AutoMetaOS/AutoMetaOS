<script>
    import { recommendations } from "../store";
</script>

<ul id="autoComplete" class="p5 m-h-auto">
    {#each $recommendations as rec}
        {#if rec}
            <li class="ƒ">
                <img
                    src={rec[3]?.zs || "https://i.imgur.com/drIqvV8.jpg"}
                    alt=""
                />
                <div>
                    {#if rec[3]}
                        <div class="fw7">{@html rec[3]?.zh || rec[0]}</div>
                        <span>{rec[3]?.zi || ""}</span>
                    {:else}
                        <div class="fw7">{@html rec[0]}</div>
                    {/if}
                </div>
            </li>
        {/if}
    {/each}
</ul>

<style type="text/scss">
    #autoComplete {
        background: #3348;
        font-size: 1.25rem;
        width: calc(80vw - 1em);
        list-style-type: none;
        &:empty {
            opacity: 0;
        }
    }
    li {
        &:not(:last-child) {
            margin-bottom: 7px;
        }
        & img {
            border-radius: 2px;
            width: 50px;
            height: 50px;
            object-fit: contain;
            padding-right: 7px;
        }
    }
</style>
