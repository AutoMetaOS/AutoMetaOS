import { writable, get } from "svelte/store";

export const editorData = writable( {} );
export const notesList = writable( [] );