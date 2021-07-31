import { get } from 'svelte/store'
import { notesList, updateEditor } from "./store";
import { Riquest, serverURL } from "$lib/shared/molecular.js";

const reqr = new Riquest( serverURL, 'text', { identity: 'anonymous' } );

export const getNotes = async () => {
    console.log( '[Terrelysium] Initialising...' );
    const text = await reqr.get( '/notes/' );
    console.log( '[Terrelysium] Initialised.' );
    notesList.set( decrypt( text ) );
    return 0;
}

export const getNote = async ( id ) => {
    const text = await reqr.get( '/notes/' + id );
    updateEditor( id, decrypt( text ) );
    return text;
};

export const setNote = ( e ) => getNote( e.target.dataset.id );

export const updateNote = async ( id, data ) => {
    let list = get( notesList );

    if ( data ) {
        if ( list.find( e => e.id === id ) ) {
            list.find( e => e.id === id ).title = data.blocks[ 0 ].data.text;
            list.find( e => e.id === id ).date = data.time;
        }
        else {
            list.push( { title: data.blocks[ 0 ].data.text, id, date: data.time } )
        }
    }

    notesList.set( list );
    const json = await reqr.patch( '/notes/' + id, { note: data ? encrypt( data ) : '', list: encrypt( get( notesList ) ) } );
    return json;
};

export const deleteNote = async ( id ) => {
    list = get( notesList ).filter( e => e.id !== id );
    notesList.set( list );
    updateNote( id, '' );
    const elt = ƒ( '#list input[type=radio]' );
    elt.checked = true;
    setNote( { target: { dataset: elt } } )
    return 0;
}

import AES from "crypto-js/aes.js";
import ENC_UTF8 from "crypto-js/enc-utf8.js";

import keys from '../../../../../config/keys/client_keys';

export const encrypt = ( obj, key = keys.AES_KEY ) => AES.encrypt( JSON.stringify( obj ), key ).toString();
export const decrypt = ( str, key = keys.AES_KEY ) => JSON.parse( AES.decrypt( str, key ).toString( ENC_UTF8 ) );