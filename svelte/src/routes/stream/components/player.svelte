<script>
    let maxwell;

    import { vId } from "../core/store";

    let [allow, sandbox] = [
        "accelerometer;autoplay;clipboard-write;encrypted-media;picture-in-picture",
        "allow-scripts allow-same-origin",
    ];
</script>

{#if $vId}
    <div class="w-100" id="wrapper">
        <iframe
            title="vid"
            class="w-100"
            bind:this={maxwell}
            src={$vId}
            {allow}
            {sandbox}
        />
    </div>
{:else}
    <div
        class="w-100 tx-c"
        style="height:400px;margin-top: 10%;font: italic 100 48px Helvetica;"
    >
        Helios
    </div>
{/if}

<style type="text/scss">
    #wrapper {
        height: 100vh;
        iframe,
        .iframe {
            height: 100%;
            border: 0;
            background: #111;
        }
    }
</style>
