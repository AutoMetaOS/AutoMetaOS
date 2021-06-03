import { notesList, updateEditor } from "./store";
const headers = { 'Content-Type': 'application/json' };

export const getNotes = async () => {
    const response = await fetch( serverURL + "notes/" );
    const json = await response.json();
    notesList.set( json );
    return 0;
}

export const getNote = async ( id ) => {
    const response = await fetch( serverURL + "notes/" + id );
    const json = await response.json();
    updateEditor( { data: json } );
    return json;
};

export const setNote = ( e ) => getNote( e.target.dataset.id );

export const updateNote = async ( id, data ) => {
    const response = await fetch( serverURL + "notes/" + id, {
        headers,
        method: "PUT",
        body: JSON.stringify( data )
    } );
    const json = await response.json();
    return json.code;
};

export const deleteNote = async ( id ) => {
    const response = await fetch( serverURL + "notes/" + id, {
        method: "DELETE"
    } );
    const json = await response.json();
    json.code === 200 ? await getNotes() : window.reload();
    const elt = document.querySelector( '#list input[type=radio]' );
    elt.checked = true;
    setNote( { target: { dataset: elt } } )
    return 0;
}