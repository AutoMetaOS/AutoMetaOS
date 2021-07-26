const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Max-Age": "86400"
};
const defaultHeaders = {
    headers: {
        "content-type": "application/json;charset=UTF-8",
        'Access-Control-Allow-Origin': "*"
    }
};

const nebulaFilter = ( r, tok ) => {
    const filtered = r.results.map( e => {
        const prefix = "content.watchnebula.com/video/";
        const suffix = '/iframe/' + tok;
        return {
            title: e.title,
            date: e.published_at,
            embedURL: prefix + e.slug + suffix,
            channel: e.channel_title,
            image: e.assets.thumbnail[ "480" ].original
        };
    } )
        .filter( e => ( ( +new Date( e.date ) - +new Date() ) / 864e5 ) <= 4 )
        .sort( ( a, b ) => new Date( b.date ) - new Date( a.date ) );
    return filtered;
};

async function getNeb () {
    const NEBULA_TOKEN = "19c9f68df91347e674be4ddab1bd7cd88c0377f3";
    let headers = { Authorization: "Token " + NEBULA_TOKEN };
    const auth = await fetch( "https://api.watchnebula.com/api/v1/auth/user/", { headers } );
    const token = ( await auth.json() ).zype_auth_info.access_token;

    const connect = await fetch( "https://api.watchnebula.com/api/v1/authorization/", { headers, method: "POST" } );
    const verification = await connect.json();

    headers = { Authorization: "Bearer " + verification.token };
    const library = await fetch( "https://content.watchnebula.com/library/video/", { headers } );
    const list = await library.json();

    const final = nebulaFilter( list, token );
    return JSON.stringify( final );
};

async function gatherResponse ( response ) {
    const { headers } = response;
    const contentType = headers.get( "content-type" ) || "";
    if ( contentType.includes( "application/json" ) )
        return await response.json();
    else return await response.text();
};

async function handleRequest ( request ) {
    const path = request.url.split( 'api.nukes.in/nebula' )[ 1 ];
    let response, results;

    if ( path === '/subs' ) {
        response = await getNeb();
        return new Response( response, defaultHeaders );
    }

    return new Response( "Invalid Endpoint:" + path, defaultHeaders );
};

function handleOptions ( request ) {
    let headers = request.headers;
    if (
        headers.get( "Origin" ) !== null &&
        headers.get( "Access-Control-Request-Method" ) !== null &&
        headers.get( "Access-Control-Request-Headers" ) !== null
    ) {
        let respHeaders = {
            ...corsHeaders,
            // such as Authorization (Bearer) or X-Client-Name-Version
            "Access-Control-Allow-Headers": request.headers.get( "Access-Control-Request-Headers" ),
        }
        return new Response( null, { headers: respHeaders } )
    }
    else return new Response( null, { headers: { Allow: "GET, HEAD, POST, OPTIONS" } } );
};

addEventListener( "fetch", event => {
    const request = event.request;
    if ( request.method === "OPTIONS" ) event.respondWith( handleOptions( request ) );
    else event.respondWith( handleRequest( request ) );
} );