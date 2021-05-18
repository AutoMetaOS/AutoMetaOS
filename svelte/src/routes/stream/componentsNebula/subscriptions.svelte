<script>
    import { onMount } from "svelte";

    import { subscriptions } from "../core/nebulaStore";

    let videos = $subscriptions;

    onMount(() => setInterval(() => console.log(videos), 1e4));
  </script>