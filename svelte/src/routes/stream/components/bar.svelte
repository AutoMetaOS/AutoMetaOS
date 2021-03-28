<script>
    import { onMount } from "svelte";
    export let searcher, states, channels;

    let bar,
        searchText = "";

    onMount(() => (searchText = URLpars().q || ""));
</script>

<section bind:this={bar} style="z-index:9;">
    <button
        on:click={() => (states.plist ^= 1)}
        class="plist {states.plist && 'active'}"
    >
        PLAYLISTS
    </button>

    <form on:submit|preventDefault={searcher}>
        <input id="srcBox" size="40" placeholder="Search" value={searchText} />
        <input type="submit" value="Go" style="background:#fff0" />
    </form>

    <div style="width:6em;display:flex;">
        <button on:click={channels} class="plist active"> SUBSCRIBED </button>
    </div>
</section>

<style type="text/scss">
    section {
        width: calc(100% - 10px);
        display: flex;
        position: fixed;
        opacity: 0;
        top: 0;
        justify-content: space-between;
        background: #222;
        transition: all 0.3s ease;
        align-items: center;
        padding: 10px 5px;
        &:hover {
            opacity: 1;
        }
        input {
            padding: 5px 10px;
            background: #444;
            font-size: 1.1em;
            color: #fff;
            border: 0;
            border-radius: 2px;
            margin: 0;
            outline: none;
            &::placeholder {
                color: #aaaa;
            }
        }
    }
    .plist {
        border: 1px solid #444;
        background: transparent;
        color: #fff;
        border-radius: 5px;
        margin: 0 2px;
        padding: 10px;
        transition: all 0.2s ease;
        &:hover {
            border: 1px solid #c22;
        }
    }
    .active {
        background: #c22;
        color: #fff;
    }
</style>
