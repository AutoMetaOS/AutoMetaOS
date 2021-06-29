<script>
    let maxwell;

    import { vId } from "../core/store";

    let [allow, sandbox] = [
        "accelerometer;autoplay;clipboard-write;encrypted-media;picture-in-picture",
        "allow-scripts allow-same-origin",
    ];
</script>

<div class="w-100 tx-c" id="wrapper">
    {#if $vId}
        <iframe
            title="vid"
            class="w-100 h-100"
            bind:this={maxwell}
            src={"https://" + $vId}
            {allow}
            {sandbox}
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
