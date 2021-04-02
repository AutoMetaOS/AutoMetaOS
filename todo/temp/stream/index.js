const fetch = require( 'node-fetch' );
const fs = require( 'fs' );

const apiZype = 'https://api.zype.com/';

const playerZype = 'https://player.zype.com/embed/';

const channelURL = apiZype + 'zobjects?zobject_type=channel&id=';
const following = apiZype + 'zobjects?zobject_type=following&user=prod-215332&per_page=100&' + key;
const playlistURL = apiZype + 'videos?per_page=5&sort=published_at&order=desc&playlist_id.inclusive=';

const userPlaylistGetter = async ( id ) => {
    // GET USER PROFILE
    const response = await fetch( `${ channelURL }${ id }&${ key }` );
    const channel = await response.json();
    // GET PLAYLIST from URL
    const channelDeets = await fetch( `${ playlistURL }${ channel.response[ 0 ].playlist_id }&${ key }` );
    const playlist = await channelDeets.json();
    const reducedPlaylist = playlist.response.map( e => {
        return {
            title: e.title,
            embedURL: playerZype + e._id + playerConfig,
            date: e.created_at,
            channel: channel.response[ 0 ].friendly_title,
            thumb: e.thumbnails[ 1 ]
        }
    } )
    return reducedPlaylist;
}

fetch( following )
    .then( response => response.json() )
    .then( followList => {
        let replies = followList.response.map( channel => userPlaylistGetter( channel.channel ) );
        Promise.all( replies ).then( response => {
            fs.writeFileSync( './replies.json', JSON.stringify( response ) );
        } )
    } )
