import { get } from 'svelte/store'
import { notesList, updateEditor } from "./store";
const headers = { 'Content-Type': 'application/json' };

export const getNotes = async () => {
    console.log( '[Terrelysium] Initialising...' );
    const response = await fetch( serverURL + "notes/" );
    const text = await response.text();
    console.log( '[Terrelysium] Initialised.' );
    notesList.set( decrypt( text ) );
    return 0;
}

export const getNote = async ( id ) => {
    const response = await fetch( serverURL + "notes/" + id );
    const text = await response.text();
    updateEditor( id, decrypt( text ) );
    return text;
};

export const setNote = ( e ) => getNote( e.target.dataset.id );

export const updateNote = async ( id, data ) => {
    let list = get( notesList );

    if ( list.find( e => e.id === id ) ) {
        list.find( e => e.id === id ).title = data.blocks[ 0 ].data.text;
        list.find( e => e.id === id ).date = data.time;
    }
    else {
        list.push( { title: data.blocks[ 0 ].data.text, id, date: data.time } )
    }
    notesList.set( list );
    const response = await fetch( serverURL + "notes/" + id, {
        headers,
        method: "PATCH",
        body: JSON.stringify( { note: encrypt( data ), list: encrypt( get( notesList ) ) } )
    } );
    const json = await response.json();
    return json.code;
};

export const deleteNote = async ( id ) => {
    list = get( notesList ).filter( e => e.id !== id );
    notesList.set( list );

    console.log( get( notesList ) );

    const response = await fetch( serverURL + "notes/" + id, {
        method: "PUT",
        body: encrypt( get( notesList ) )
    } );
    const json = await response.json();
    if ( !json ) console.log( 'err' );

    const elt = document.querySelector( '#list input[type=radio]' );
    elt.checked = true;
    setNote( { target: { dataset: elt } } )
    return 0;
}

import AES from "crypto-js/aes.js";
import ENC_UTF8 from "crypto-js/enc-utf8.js";

import keys from '../../../../../config/keys/client_keys';

export const encrypt = ( obj ) => AES.encrypt( JSON.stringify( obj ), keys.AES_KEY ).toString();
export const decrypt = ( str ) => JSON.parse( AES.decrypt( str, keys.AES_KEY ).toString( ENC_UTF8 ) );