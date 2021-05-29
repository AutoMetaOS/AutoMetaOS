<script>
    import { notesList } from "./store";
    import { getNote } from "./api";
    import { createEventDispatcher } from "svelte";

    import { SvgIcon } from "$lib/components";

    const dispatch = createEventDispatcher();

    $: notes = $notesList;
    let searchText = "";

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
    <div class="p-20 flex" style="border-bottom: 1px solid #8882;">
        <input
            class="newNote"
            placeholder="Search..."
            type="text"
            bind:value={searchText}
        />
        <SvgIcon style="flex:1">
            <circle cx="14" cy="14" r="12" />
            <path d="M23 23 L30 30" />
        </SvgIcon>
    </div>
    {#each notes.filter((e) => e.title.includes(searchText)) as note}
        <input type="radio" id={note.id} name="noteTitle" value={note.title} />
        <label
            class="note p-20"
            data-id={note.id}
            data-title={note.title}
            on:click={setNote}
            for={note.id}
        >
            {note.title}
        </label>
    {/each}
</section>

<style type="text/scss">
    input[type="radio"] {
        opacity: 0;
        &:checked + label {
            background: #ddd;
        }
    }
    .newNote {
        flex: 6;
    }
    .note:hover {
        background: #ddd8;
        cursor: pointer;
    }
</style>
