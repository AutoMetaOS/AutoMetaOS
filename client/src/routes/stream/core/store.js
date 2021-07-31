import { writable, get } from 'svelte/store';
import { getRecents } from "./api";

export const vId = writable( "" );
export const substack = writable( [] );

export const videoSet = ( e ) => {
    const dataset = e.currentTarget.querySelector( 'a' ).dataset;
    vId.set( dataset.url );
    setµ( "id", encodeURIComponent( get( vId ) ) );
    window.scrollTo( 0, 0 );
    document.title = dataset.title;
};

export const vidoer = ( e ) => {
    vId.set( e.target.parentElement.id );
    setµ( "id", get( vId ) );
    window.scrollTo( 0, 0 );
    document.title = e.target.parentElement.dataset.title;
};

import cnls from "../../../../../config/channels.json";

export const channels = async () => {
    const size = 49;
    let chanList = new Array( Math.ceil( cnls.length / size ) );
    for ( let i = 0, l = chanList.length;i < l;i++ )
        chanList[ i ] = cnls.splice( 0, size );

    chanList.forEach( ( cList ) => {
        getRecents( cList ).then(
            ( arr ) => substack.set( [ ...get( substack ), ...( arr || {} ) ] )
        );
    } );
    return 0;
};