<script>
    import { recommendations } from "../store";
</script>

<ul id="autoComplete" class="◼ m-h-auto">
    {#each $recommendations.slice(0, 2) as rec}
        <li id={rec.name || rec.q} class="💪">
            <img src={rec.img || "https://i.imgur.com/drIqvV8.jpg"} alt="" />
            <div>
                {#if rec.is_entity}
                    <div class="ℹ7">{rec.name}</div>
                    <span>{rec.desc}</span>
                {:else}
                    <div class="ℹ7">{rec.q}</div>
                {/if}
            </div>
        </li>
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
