<script>
    import { notesList } from "./store";
    import { getNotes, setNote } from "./api";
    import { onMount } from "svelte";

    import { SvgIcon } from "$lib/components";

    $: notes = $notesList;

    let searchText = "";

    onMount(getNotes);
</script>

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
{#each notes.filter((e) => e.title?.includes(searchText)) as note}
    <input type="radio" id={note.id} name="noteTitle" value={note.title} />
    <label
        class="note"
        data-id={note.id}
        data-title={note.title}
        on:click={setNote}
        for={note.id}
    >
        {note.title}
    </label>
{/each}

<style type="text/scss">
    input[type="radio"] {
        display: none;
        &:checked + label {
            background: #ddd;
        }
    }
    label {
        padding: 1.5em 1em 0.75em 1.25em;
        line-height: 1.15em;
        height: 5em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .newNote {
        flex: 6;
    }
    .note {
        display: block;
        height: calc(3rem - 20px);
        &:hover {
            background: #ddd8;
            cursor: pointer;
        }
    }
</style>
