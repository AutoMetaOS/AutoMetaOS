import { YT_KEY } from '$lib/config/keys'

export const YT = 'https://youtube.googleapis.com/youtube/v3/';

export const search = ( q ) => {
    return fetch( `${ YT }search?part=snippet&key=${ YT_KEY }&q=${ q }&type=video&maxResults=10` ).then( res => { return res.json(); } );
}
export const plSearch = ( q ) => {
    return fetch( `${ YT }search?part=snippet&key=${ YT_KEY }&q=${ q }&type=playlist&maxResults=10` ).then( res => { return res.json(); } );
}
export const playlist = ( q, num = 10 ) => {
    return fetch( `${ YT }playlistItems?part=snippet&playlistId=${ q }&key=${ YT_KEY }&maxResults=${ num }` ).then( res => { return res.json(); } )
}

export const getRecents = async ( ids ) => {
    const link = `${ YT }channels?part=snippet%2CcontentDetails&id=${ ids.map( ( el ) => el.id ).join( "%2C" ) }&key=${ YT_KEY }`;
    const response = await fetch( link );
    const json = await response.json();
    let videoList = await Promise.all(
        json.items.map( ( el ) => el.contentDetails.relatedPlaylists.uploads )
            .map( async plId => {
                let plist = await playlist( plId + "&order=date", 4 )
                return plist.items.filter( ( r1 ) =>
                    new Date() -
                    new Date( r1.snippet.publishedAt ) <=
                    2 * 864e5
                )
            } )
    );
    return videoList.flat();
}