import { YT_KEY, NEBULA_KEY, NEBULA_TOKEN } from '$lib/config/keys'

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

const apiZype = 'https://api.zype.com/';
const playerZype = 'https://player.zype.com/embed/';
const channelURL = apiZype + 'zobjects?zobject_type=channel&id=';
const following = apiZype + 'zobjects?zobject_type=following&user=prod-215332&per_page=100&' + NEBULA_KEY;
const playlistURL = apiZype + 'videos?per_page=5&sort=published_at&order=desc&playlist_id.inclusive=';

const userPlaylistGetter = async ( id ) => {
    // GET USER PROFILE
    const response = await fetch( `${ channelURL }${ id }&${ NEBULA_KEY }` );
    const channel = await response.json();
    // GET PLAYLIST from URL
    const channelDeets = await fetch( `${ playlistURL }${ channel.response[ 0 ].playlist_id }&${ NEBULA_KEY }` );
    const playlist = await channelDeets.json();
    const reducedPlaylist = playlist.response.map( e => {
        return {
            title: e.title,
            embedURL: playerZype + e._id + NEBULA_TOKEN,
            date: e.created_at,
            channel: channel.response[ 0 ].friendly_title,
            thumb: e.thumbnails[ 1 ]
        }
    } )
    return reducedPlaylist;
}

export const getneb = () => {
    fetch( following )
        .then( response => response.json() )
        .then( followList => {
            let replies = followList.response.map( channel => userPlaylistGetter( channel.channel ) );
            Promise.all( replies ).then( response => {
                fs.writeFileSync( './replies.json', JSON.stringify( response ) );
            } )
        } )
}