<script>
  // import { Kron } from "$lib/shared/molecular.js";

  // let dateTime = new Kron().toLocal();
  // setInterval(() => (dateTime = new Kron().toLocal()), 1e4);

  // const segmenter = () => {
  //   const remaining = (value) => {
  //     console.log(new Kron().getHours());

  //     const upperBound = (~~(value / 4) + 1) * 4;
  //     console.log(upperBound);
  //     const seconds = ~~Math.abs(
  //       (new Date().setHours(upperBound, 0, 0, 0) - +new Date()) / 1e3
  //     );

  //     return new Kron().secondsToClock(seconds).slice(0, 5);
  //   };
  //   const [hrs, mins] = dateTime.slice(-5).split(":");
  //   return `${~~(hrs / 4) - 1} (${remaining(hrs)})`;
  // };
  // segmenter();
</script>

<div class="tx-c f-wt2" id="deets">Ronin</div>

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
