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
    position: absolute;
    bottom: 3em;
    right: 10px;
    justify-content: space-between;
    width: 20vw;
  }
</style>

<div id="stats" class="blurWWW rpm-10">
  <!-- <div class="head flex">
    <svg viewBox="0 0 32 32" fill="none" stroke="#fff" width="25" height="25">
      <path d="M4 16 L11 16 14 29 18 3 21 16 28 16" />
    </svg>
    <span class="p-5px">System Stats</span>
  </div> -->
  Fan Speed: <progress max="6520" value={+system?.fan || 0} />
  <br /> CPU Temp: <progress max="100" value={+system?.cpu || 0} />
  <br /> MBo Temp: <progress max="100" value={+system?.board || 0} />
  <br /> Network Av: <i> {network + ' MBps' || 'Err'}</i>
</div>
