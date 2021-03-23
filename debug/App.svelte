<script>
    import System from "./components/system.svelte";
    import ScriptEd from "./components/script.svelte";
    import Command from "./components/command.svelte";
</script>

<section class="flex">
    <div class="w-50 blur boxes">
        <System />
    </div>
    <div class="w-50 blur boxes">
        <ScriptEd />
    </div>
    <div class="w-50 blur boxes">
        <Command />
    </div>
</section>

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
