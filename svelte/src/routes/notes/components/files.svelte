<script>
    import { notesList } from "./store";
    import { getNote } from "./api";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    $: notes = $notesList;

    const setNote = (e) => {
        getNote(e.target.dataset.id).then((data) =>
            dispatch("message", {
                title: e.target.dataset.title,
                id: e.target.dataset.id,
                data: data,
            })
        );
    };
</script>

<section class="flex-col">
    <div class="p-20">&nbsp;</div>
    {#each notes as note}
        <div
            class="note p-20"
            data-id={note.id}
            data-title={note.title}
            on:click={setNote}
        >
            {note.title}
        </div>
    {/each}
</section>

<style>
    .note:hover {
        background: #ddd8;
        cursor: pointer;
    }
</style>
