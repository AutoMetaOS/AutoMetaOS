<script>
    let maxwell;

    import { vId } from "../shared/store";
</script>

<div class="w-100 †c" id="wrapper">
    {#if $vId}
        <iframe
            title="vid"
            class="w-100 h-100"
            bind:this={maxwell}
            src={$vId}
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;picture-in-picture"
            sandbox="allow-scripts allow-same-origin"
        />
    {:else}
        <img class="m-h-auto" src="/assets/nebula.png" alt="" />
    {/if}
</div>

<style type="text/scss">
    #wrapper {
        height: 100vh;
        iframe {
            border: 0;
            background: #111;
        }
    }
    img {
        margin-top: 5%;
        filter: hue-rotate(100deg);
    }
</style>
