<script>
  import Google from "./google.svelte";
  import { Riquest, cloudURL } from "$lib/shared/molecular.js";
  import { base } from "$app/paths";

  let spinner,
    full = [];

  const cloudquest = new Riquest(cloudURL, "json");

  cloudquest.get("/gt/US").then((r) => {
    full = r;
    spinner.remove();
  });
</script>

<section class="flex">
  <div
    class="blurW rpm-5 p-20 w-100"
    style="text-align:center;"
    bind:this={spinner}
  >
    <img src="{base}/minicons/loader.svg" alt="" />
  </div>
  <Google google={full} />
</section>

<style>
  section {
    flex-wrap: wrap;
    content-visiblity: auto;
    -ms-content-visiblity: auto;
    -webkit-content-visiblity: auto;
  }
</style>
