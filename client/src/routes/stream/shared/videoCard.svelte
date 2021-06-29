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
    <div style="position:absolute;right:5px;top:5px;border-radius:7px;">
        <SvgIcon
            size="20"
            classes="p-5"
            stroke="#fff"
            style="background:#000c;"
        >
            <path d="M16 2 L16 30 M2 16 L30 16" />
        </SvgIcon>
    </div>
    <a href="#wrapper" data-title={title} data-url={embedCalculator(type, url)}>
        <img src={image} alt="" />
        <div class="name">
            {@html title.slice(0, 60)}
            {title.length > 60 ? "..." : ""}
        </div>
        <div class="channel flex" style="justify-content:space-between;">
            <span>{lhs}</span>
            <span>{new Kron(rhs).timeSince()}</span>
        </div>
    </a>
</div>
