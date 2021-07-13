<script>
    import { videoSet } from "../core/store";
    import { Kron } from "$lib/shared/molecular";
    import { SvgIcon } from "$lib/components";

    export let title = "",
        lhs,
        rhs,
        type,
        image,
        url;

    const [ext, yt] = [
        "?autoplay=1&enablejsapi=1",
        "www.youtube-nocookie.com/embed/",
    ];

    const embedCalculator = (type, url) => {
        if (type === "YoutubeVideo") return yt + url + ext;
        if (type === "NebulaVideo") return url;
    };
</script>

<div
    class="recom"
    data-type={type}
    style="position:relative;"
    on:click={videoSet}
>
    <div id="svgBox">
        <SvgIcon size="20" classes="◼" stroke="#fff" style="background:#000c;">
            <path d="M16 2 L16 30 M2 16 L30 16" />
        </SvgIcon>
    </div>
    <a href="#wrapper" data-title={title} data-url={embedCalculator(type, url)}>
        <img src={image} alt="" />
        <div class="name">
            {@html title.slice(0, 60)}
            {title.length > 60 ? "..." : ""}
        </div>
        <div class="channel 💪">
            <span>{lhs}</span>
            <span>{new Kron(rhs).timeSince()}</span>
        </div>
    </a>
</div>

<style type="text/scss">
    #svgBox {
        position: absolute;
        right: 5px;
        top: 5px;
        border-radius: 7px;
    }
    .recom {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        margin: 5px;
        font-size: 0.9em;
        width: calc(20% - 10px);
        background: #fff;
        color: #000;
        border-radius: 10px;
        overflow: hidden;
        img {
            width: 100%;
            height: auto;
            object-fit: cover;
            margin-bottom: 5px;
        }
        .name {
            padding: 0 5px;
            height: 2.2em;
        }
        .channel {
            justify-content: space-between;
            font-size: 0.8em;
            color: #888;
            padding: 10px 5px;
        }
        transition: transform 0.3s ease;
        &:hover {
            transform: scale(1.05);
        }
    }
</style>
