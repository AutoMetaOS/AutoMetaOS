import { NEBULA_KEY, NEBULA_TOKEN } from '$lib/config/keys'

const apiZype = 'https://api.zype.com/';
const playerZype = 'https://player.zype.com/embed/';
const channelURL = apiZype + 'zobjects?zobject_type=channel&id=';
const following = `${ apiZype }zobjects?zobject_type=following&user=prod-215332&per_page=100&${ NEBULA_KEY }`;
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

export const getneb = async () => {
    const response = await fetch( following );
    const json = await response.json();
    const replies = await json.response.map( async channel => await userPlaylistGetter( channel.channel ) );
    const unprocessed = await Promise.all( replies )
    const processed = unprocessed.flat( 1 ).filter( e => {
        const reduced = ( new Date() - new Date( e.date ) ) / ( 864 * 1e5 );
        console.log( reduced );
        return ( reduced < 7 );
    } );

    return processed;
}