<script>
    import System from "./components/system.svelte";
    import ScriptEd from "./components/script.svelte";
</script>

<section class="flex">
    <div class="w-50 blur boxes">
        <System />
    </div>
    <div class="w-50 blur boxes">
        <ScriptEd />
    </div>
    <div class="w-50 blur boxes" />
</section>

<svelte:head>
    <style>
        body {
            background: url(./shared/images/irides.jpg) no-repeat fixed;
        }
    </style>
</svelte:head>

<style type="text/scss">
    section {
        flex-wrap: wrap;
        .boxes {
            width: 95%;
            flex-wrap: wrap;
            max-height: 95vh;
            overflow-y: scroll;
        }
    }
</style>
