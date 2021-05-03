<script>
  import { smc, net } from "$lib/shared/js/yoroi";
  import { onMount } from "svelte";

  let system, network;

  onMount(() => {
    smc().then((r) => (system = r));
    net().then((r) => (network = r));
  });
</script>

<style>
  #stats {
    position: fixed;
    top: 3em;
    right: 20px;
    justify-content: space-between;
    width: 20vw;
  }
</style>

<div id="stats" class="blurWW rpm-10">
  <div class="head flex">
    <svg viewBox="0 0 32 32" fill="none" stroke="#fff" width="25" height="25">
      <path d="M4 16 L11 16 14 29 18 3 21 16 28 16" />
    </svg>
    <span class="p-5px">System Stats</span>
  </div>
  <div class="body">
    Fan Speed: <progress max="6520" value={+system?.fan?.split(' ')[0]} />
    <!-- &nbsp; Processor: {resp.cpu} &nbsp; Motherboard: {resp.board} -->
    <br /> Network: {network} MBps
  </div>
</div>
