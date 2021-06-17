<script>
  import { onMount } from "svelte";

  let system,
    network = "Calculating...";

  const smc = async () => {
    const req = await fetch(serverURL + "sys/smc");
    const json = await req.json();
    return json;
  };

  const net = async () => {
    const req = await fetch(serverURL + "sys/net");
    const text = await req.text();
    return text;
  };

  onMount(() => {
    net().then((r) => (network = r + " MB/s"));
    smc().then((r) => (system = r));
  });
</script>

<div id="stats" class="blur rpm-10">
  Fan Speed: <progress max="6520" value={+system?.fan || 0} />
  <br /> CPU Temp: <progress max="100" value={+system?.cpu || 0} />
  <br /> MBo Temp: <progress max="100" value={+system?.board || 0} />
  <br /> Network Av: <i> {network}</i>
</div>

<style type="text/scss">
  #stats {
    position: absolute;
    bottom: 3em;
    right: 10px;
    opacity: 0;
    justify-content: space-between;
    width: 20vw;
    background: transparent;
    animation: goOut 0.5s 5s forwards ease;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }
</style>
