<script>
    import { videoSet } from "../shared/store";

    export let title = "",
        details = [],
        token,
        type,
        slug,
        image;
</script>

<div class="recom rpm-5 p0 ƒ-col" on:click={videoSet}>
    <a
        href="#wrapper"
        data-type={type}
        data-title={title}
        data-token={token}
        data-slug={slug}
    >
        <!-- data-url={embedCalculator(type, url)} -->
        <img style="w-100" src={image} alt="" />
        <div class="†c p5">
            <div style="padding-bottom:5px;">
                {@html title.slice(0, 60)}
                {title.length > 60 ? "..." : ""}
            </div>
            <div style="color: #888;">
                {details[0]} &bull; {details[1]}
            </div>
        </div>
    </a>
</div>

<style type="text/scss">
    .recom {
        cursor: pointer;
        font-size: 0.9em;
        width: calc(20% - 10px);
        overflow: hidden;
        z-index: 1;
        background: #111;
        img {
            width: 100%;
            height: auto;
        }
        transition: transform 0.3s ease;
        &:hover {
            transform: scale(1.1);
            z-index: 2;
        }
    }
</style>
