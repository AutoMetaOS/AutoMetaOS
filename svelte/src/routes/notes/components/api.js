const headers = { 'Content-Type': 'application/json' };

export const getNotes = async () => {
    const response = await fetch( serverURL + "notes/" );
    const json = await response.json();
    return json;
}

export const getNote = async ( id ) => {
    const response = await fetch( serverURL + "notes/" + id );
    const json = await response.json();
    return json;
}

export const updateNote = async ( id, data ) => {
    const response = await fetch( serverURL + "notes/" + id, {
        headers,
        method: "PUT",
        body: JSON.stringify( data )
    } );
    const json = await response.text();
    console.log( json );
    return json;
}