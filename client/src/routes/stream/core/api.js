import keys from '../../../../../config/keys/client_keys';
import { Riquest, serverURL } from "$lib/shared/molecular";
import { writable } from 'svelte/store';

const yt_req = new Riquest( 'https://youtube.googleapis.com/youtube/v3', 'json' );

const YT_KEY = keys.YT_KEY;

export const YT = 'https://youtube.googleapis.com/youtube/v3/';

export const search = ( q ) => yt_req.get( `/search?part=snippet&key=${ YT_KEY }&q=${ q }&type=video&maxResults=10` );
const playlist = ( q, num = 10 ) => yt_req.get( `/playlistItems?part=snippet&playlistId=${ q }&key=${ YT_KEY }&maxResults=${ num }` );

export const getRecents = async ( ids ) => {
    const link = `/channels?part=snippet%2CcontentDetails&id=${ ids.map( ( el ) => el.id ).join( "%2C" ) }&key=${ YT_KEY }`;
    const json = await yt_req.get( link );
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

const nb_req = new Riquest( serverURL, 'json' );

export const subscriptions = writable( [] );

export const nebula = async () => {
    const videos = await nb_req.get( '/nebula/videos' );
    subscriptions.set( videos )
    return 0;
}