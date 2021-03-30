<script>
    import { date } from "$lib/shared/js/yoroi.js";

    let dateTime = date();
    setInterval(() => (dateTime = date()), 1e3);

    const segmenter = () => {
        const remaining = (upperBound) => {
            const seconds = ~~Math.abs(
                (new Date().setHours(upperBound, 0, 0, 0) -
                    new Date().getTime()) /
                    1e3
            );
            return `${~~(seconds / 3600)}:${~~(seconds / 60) % 60}:${
                seconds % 60
            }`;
        };
        const [hrs, mins] = dateTime.slice(-5).split(":");
        return `${~~(hrs / 4) - 1} (<i>-${remaining(
            (~~(hrs / 4) + 1) * 4
        )}</i>)`;
    };
    segmenter();
</script>

<div class="flex" id="deets">
    <svg viewbox="0 0 256 128" height="22px">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#000;" />
                <stop offset="100%" style="stop-color:#900;" />
            </linearGradient>
        </defs>
        <text
            fill="url(#grad1)"
            font-weight="700"
            font-family="Times"
            font-size="128"
            x="0"
            y="110">浪人</text
        >
    </svg>
    <div style="font-weight:700">Segment {@html segmenter(dateTime)}</div>
    <div>{dateTime}</div>
</div>

<style>
    #deets {
        position: fixed;
        top: -30px;
        padding: 0 5px;
        justify-content: space-between;
        width: calc(100% - 10px);
        animation: topBar 0.2s ease forwards;
        animation-delay: 1s;
    }
    @keyframes topBar {
        to {
            top: 5px;
        }
    }
</style>
