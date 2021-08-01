<!--
- https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation
- https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information
-->
<script>
    import metadata from "$lib/meta.json";
    import Shows from "./show.svelte";
    import Checks from "./chkdsk.svelte";
    import EnvSummary from "./summary.svelte";
</script>

<main class="p5 ƒ ƒ∑">
    <div class="cont rpm-10 †c">
        <EnvSummary />
    </div>
    <div class="cont rpm-10 p0">
        <Shows />
    </div>
    <div class="cont rpm-10">
        <code>{metadata.name}</code> build:
        <code>{metadata.build.version}::{metadata.build.current}</code>
        <br />Compiled: {new Date(metadata.time).toLocaleString("en-GB")}
        <Checks />
    </div>
</main>

<style type="text/scss">
    .cont {
        max-height: 350px;
        overflow-y: scroll;
        background: #444;
        width: calc(50% - 40px);
    }
</style>
