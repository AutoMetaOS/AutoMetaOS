import { YT_KEY } from '$lib/config/keys'

export const k = YT_KEY;
export const YT = 'https://youtube.googleapis.com/youtube/v3/';

export const search = ( q ) => {
    return fetch( `${ YT }search?part=snippet&key=${ k }&q=${ q }&type=video&maxResults=10` ).then( res => { return res.json(); } );
}
export const plSearch = ( q ) => {
    return fetch( `${ YT }search?part=snippet&key=${ k }&q=${ q }&type=playlist&maxResults=10` ).then( res => { return res.json(); } );
}
export const playlist = ( q, num = 50 ) => {
    return fetch( `${ YT }playlistItems?part=snippet&playlistId=${ q }&key=${ k }&maxResults=${ num }` ).then( res => { return res.json(); } )
}