const fetch = require( 'node-fetch' );
const keys = require( '../../config/keys/server_keys' );
const NEBULA_TOKEN = keys.NEBULA_TOKEN;

const nebulaFilter = ( r, tok ) => {
    const filtered = r.results.map( e => {
        const prefix = "https://content.watchnebula.com/video/";
        const suffix = '/iframe/' + tok;
        return {
            title: e.title,
            date: e.published_at,
            embedURL: prefix + e.slug + suffix,
            channel: e.channel_title,
            image: e.assets.thumbnail[ "480" ].original
        };
    } ).sort( ( a, b ) => new Date( b.date ) - new Date( a.date ) );
    return filtered;
}

async function routes ( app, options ) {
    app.get( '/nebula/videos', ( req, res ) => {
        let token;
        fetch( "https://api.watchnebula.com/api/v1/auth/user/", {
            headers: { Authorization: "Token " + NEBULA_TOKEN }
        } )
            .then( r => r.json() )
            .then( resp => token = resp.zype_auth_info.access_token );

        fetch( "https://api.watchnebula.com/api/v1/authorization/", {
            headers: { Authorization: "Token " + NEBULA_TOKEN },
            method: "POST"
        } )
            .then( r => r.json() )
            .then( resp => {
                fetch( "https://content.watchnebula.com/library/video/", {
                    headers: { Authorization: "Bearer " + resp.token }
                } )
                    .then( r2 => r2.json() )
                    .then( response => {
                        res.send( nebulaFilter( response, token ) );
                    } )
            } );
    } );
};

module.exports = routes;