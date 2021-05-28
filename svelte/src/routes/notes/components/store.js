import { writable, get } from "svelte/store";

export const editorData = writable( { "blocks": [ { "type": "header", "data": { "text": "New Note", "level": 1 } }, { "type": "paragraph", "data": { "text": "Save Something" } } ] } );
export const notesList = writable( [] );