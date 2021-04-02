<script>
    import { onMount } from "svelte";
    export let searcher, channels;

    let bar,
        searchText = "";

    onMount(() => (searchText = URLpars().q || ""));
</script>

<section class="o-0 p-10px flex blur" bind:this={bar}>
    <div>Mars</div>

    <form on:submit|preventDefault={searcher} style="background:#444;">
        <input
            class="p-5px"
            id="srcBox"
            size="35"
            placeholder="Search"
            value={searchText}
        />
        <svg
            viewBox="0 0 32 32"
            width="22"
            height="22"
            style="position:relative;top:3px;left:5px"
        >
            <circle cx="14" cy="14" r="12" />
            <path d="M23 23 L30 30" />
        </svg>
        <input class="o-0 w-0" type="submit" value="" />
    </form>

    <button on:click={channels}> ★ </button>
</section>

<style type="text/scss">
    section {
        z-index: 9;
        font-size: 1.1em;
        width: calc(100% - 20px);
        position: fixed;
        top: 0;
        justify-content: space-between;
        transition: all 0.3s ease;
        align-items: center;
        &:hover {
            opacity: 1;
        }
        input {
            color: #fff;
            &::placeholder {
                color: #aaaa;
            }
        }
    }
    svg {
        stroke: #fff;
        fill: none;
        stroke-width: 1;
    }
    button {
        height: 36px;
        width: 36px;
        font-size: 1em;
        color: #fff;
        border-radius: 20px;
        background: #c22;
        color: #fff;
    }
</style>
