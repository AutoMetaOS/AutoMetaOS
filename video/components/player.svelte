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

<div id="wrapper">
    <iframe
        title="vid"
        bind:this={maxwell}
        src={`${yt}${$vId}${ext}`}
        allow={ald}
        sandbox={sbx}
    />
</div>

<style type="text/scss">
    #wrapper {
        width: 100%;
        height: 100vh;
        iframe {
            width: 100%;
            height: 100%;
            border: 0;
            background: #111;
        }
    }
</style>
