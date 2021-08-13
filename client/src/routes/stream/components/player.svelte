<script>
    let maxwell;

    import { vId } from "../shared/store";
    import { AspectRatio } from "$hakama";
</script>

<AspectRatio class="w-100 †c" ratio="16x9">
    {#if $vId}
        <iframe
            title="vid"
            class="w-100 h-100"
            frameborder="0"
            bind:this={maxwell}
            src={$vId}
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;picture-in-picture"
            sandbox="allow-scripts allow-same-origin"
        />
    {:else}
        <img class="m-h-auto" src="/assets/nebula.png" alt="" />
    {/if}
</AspectRatio>

<style type="text/scss">
    img {
        margin-top: 5%;
        filter: hue-rotate(100deg);
    }
</style>
