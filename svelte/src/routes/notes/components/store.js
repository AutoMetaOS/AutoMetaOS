import { writable, get } from "svelte/store";

export const editorData = writable( { "blocks": [ { "type": "header", "data": { "text": "New Note", "level": 1 } }, { "type": "paragraph", "data": { "text": "Save Something" } } ] } );
export const notesList = writable( [] );

export const updateEditor = ( e ) => {
    const mainEditor = document.querySelector( "#editorOfNotes" );
    if ( !( mainEditor.dataset.id === e.data.id ) ) {
        editor.render( JSON.parse( e.data.body ) );
        mainEditor.setAttribute( "data-id", e.data.id );
        mainEditor.removeAttribute( "data-new" );
    }
};