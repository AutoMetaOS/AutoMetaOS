<script>
    let maxwell;

    import { vId } from "../core/store";

    const [ext, yt, ald, sbx] = [
        "?autoplay=1&enablejsapi=1",
        "https://www.youtube-nocookie.com/embed/",
        "accelerometer;autoplay;clipboard-write;encrypted-media;picture-in-picture",
        "allow-scripts allow-same-origin",
    ];
</script>

<div class="w-100" id="wrapper">
    <iframe
        title="vid"
        class="w-100"
        bind:this={maxwell}
        src={`${yt}${$vId}${ext}`}
        allow={ald}
        sandbox={sbx}
    />
</div>

<style type="text/scss">
    #wrapper {
        height: 100vh;
        iframe {
            height: 100%;
            border: 0;
            background: #111;
        }
    }
</style>
