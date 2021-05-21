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