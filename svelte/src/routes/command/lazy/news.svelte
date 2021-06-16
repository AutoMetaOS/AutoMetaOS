<script>
  import Google from "./google.svelte";
  import { base } from "$app/paths";

  let spinner;

  const googleTrends = async () => {
    const resp = await fetch(serverURL + "social/google/top-trends");
    return await resp.json();
  };
  let full = [];

  googleTrends().then((r) => {
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
