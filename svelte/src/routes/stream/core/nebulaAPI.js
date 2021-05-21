import { NEBULA_KEY, NEBULA_ACCESS } from '$lib/config/keys'

const apiZype = 'https://api.zype.com/';
const channelURL = apiZype + 'zobjects?zobject_type=channel&id=';
const following = `${ apiZype }zobjects?zobject_type=following&user=prod-215332&per_page=100&${ NEBULA_KEY }`;
const playlistURL = apiZype + 'videos?per_page=5&sort=published_at&order=desc&playlist_id.inclusive=';

const userPlaylistGetter = async ( id ) => {
    const prefix = 'https://content.watchnebula.com/video/';
    const suffix = '/iframe/' + NEBULA_ACCESS + '/'
    // GET USER PROFILE
    const response = await fetch( `${ channelURL }${ id }&${ NEBULA_KEY }` );
    const channel = await response.json();
    // GET PLAYLIST from URL
    const channelDeets = await fetch( `${ playlistURL }${ channel.response[ 0 ].playlist_id }&${ NEBULA_KEY }` );
    const playlist = await channelDeets.json();
    const reducedPlaylist = playlist.response.map( e => {
        return {
            title: e.title,
            embedURL: prefix + e.friendly_title + suffix,
            date: e.created_at,
            channel: channel.response[ 0 ].friendly_title,
            image: e.thumbnails[ 1 ].url
        }
    } )
    return reducedPlaylist.sort( ( a, b ) => new Date( b.date ) - new Date( a.date ) );
}

export const getneb = async () => {
    const response = await fetch( following );
    const json = await response.json();
    const replies = await json.response.map( async channel => await userPlaylistGetter( channel.channel ) );
    const unprocessed = await Promise.all( replies )
    const processed = unprocessed.flat( 1 ).filter( e => {
        const reduced = ( new Date() - new Date( e.date ) ) / ( 864 * 1e5 );
        return ( reduced < 7 );
    } );
    return processed;
}