import { writable, get } from 'svelte/store';

export const vId = writable( "" );
export const stack = writable( [] );

export const vidoer = ( e ) => {
    vId.set( e.target.parentElement.id );
    chURL( "id", get( vId ) );
    window.scrollTo( 0, 0 );
    document.title = e.target.parentElement.dataset.title;
};

export const fullStacker = ( vids ) => {
    const temp = get( stack )
    stack.set( [ ...temp, ...vids ] )
};
export const stacker = ( vid ) => {
    const temp = get( stack )
    stack.set( [ ...temp, vid ] )
};
export const destacker = ( i ) => {
    get( stack ).splice( i, 1 );
    stack.set( [ ...get( stack ) ] );
    const trk = ~~( new Date().getTime() / 1e3 );
    localStorage.removeItem( URLpars().stack );
    if ( get( stack ).length ) {
        localStorage.setItem( trk, JSON.stringify( get( stack ) ) );
        chURL( "stack", trk );
    } else chURL( "stack", "" );
};