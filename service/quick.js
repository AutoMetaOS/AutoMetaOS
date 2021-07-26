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

async function getBrave ( searchTerm ) {
    const BRAVE_BASE = "https://search.brave.com/api/suggest?";
    const response = await fetch( BRAVE_BASE + searchTerm );
    const json = await response.json();

    return JSON.stringify( json[ 1 ] );
};

async function gatherResponse ( response ) {
    const { headers } = response;
    const contentType = headers.get( "content-type" ) || "";
    if ( contentType.includes( "application/json" ) )
        return await response.json();
    else return await response.text();
};

async function handleRequest ( request ) {
    const path = request.url.split( 'api.nukes.in/quick' )[ 1 ];
    let response, results;

    if ( path.split( '?' )[ 0 ] === '/brave' ) {
        const searchTerm = path.split( '?' )[ 1 ];
        response = await getBrave( searchTerm );
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