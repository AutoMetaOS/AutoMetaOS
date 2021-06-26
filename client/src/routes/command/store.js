import { writable } from 'svelte/store';

export const iFrameLink = writable( "" );
export const iFrameShow = writable( "none" );

export const show = ( url ) => {
    iFrameLink.set( url );
    iFrameShow.set( "flex" );
    document.getElementById( 'frame' ).scrollIntoView();
}

export const hide = () => {
    iFrameShow.set( "none" );
}