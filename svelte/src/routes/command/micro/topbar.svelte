<script>
  import { date } from "$lib/shared/js/yoroi.js";

  let dateTime = date();
  setInterval(() => (dateTime = date()), 100);

  const segmenter = () => {
    const remaining = (upperBound) => {
      const seconds = ~~Math.abs(
        (new Date().setHours(upperBound, 0, 0, 0) - new Date().getTime()) / 1e3
      );
      return `${~~(seconds / 3600)}:${~~(seconds / 60) % 60}:${seconds % 60}`;
    };
    const [hrs, mins] = dateTime.slice(-5).split(":");
    return `${~~(hrs / 4) - 1} (${remaining((~~(hrs / 4) + 1) * 4)})`;
  };
  segmenter();
</script>

<div class="tx-c f-wt2" id="deets">
  Seg {@html segmenter(dateTime)}
</div>

<style>
  #deets {
    position: fixed;
    top: -30px;
    padding: 0 7px;
    width: calc(100% - 10px);
    animation: topBar 0.2s 0.5s ease forwards;
  }
  @keyframes topBar {
    to {
      top: 5px;
    }
  }
</style>
