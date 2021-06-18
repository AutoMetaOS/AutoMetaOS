<script>
  import Google from "./google.svelte";
  import { Riquest, serverURL } from "$lib/shared/molecular.js";
  import { base } from "$app/paths";

  let spinner,
    full = [];

  const request = new Riquest(serverURL, "json");

  request.get("/social/google/trends").then((r) => {
    full = r;
    spinner.remove();
  });
</script>

<section class="flex" style="flex-wrap:wrap;">
  <div
    class="blurW rpm-5 p-20 w-100"
    style="text-align:center;"
    bind:this={spinner}
  >
    <img src="{base}/minicons/loader.svg" alt="" />
  </div>
  <Google google={full} />
</section>
