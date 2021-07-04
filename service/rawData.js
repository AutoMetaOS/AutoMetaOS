const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Max-Age": "86400",
}

const converter = "https://api.factmaven.com/xml-to-json/?xml=";
const CO2_URL = converter + "https://gml.noaa.gov/webdata/ccgg/trends/rss.xml";
const GT_US_URL = converter + "https://trends.google.com/trends/trendingsearches/daily/rss?geo=US";

const google_processor = ( rss ) => {
    const itemProcess = ( e ) => {
        const processed = {
            title: e.title,
            image: e?.picture,
            traffic: +e.approx_traffic?.replace( '+', '' ).replaceAll( ',', '' ) / 1000 || 0,
            articles: e.news_item?.map( e2 => {
                return {
                    title: e2.news_item_title,
                    url: e2.news_item_url,
                    source: e2.news_item_source,
                    desc: e2.news_item_snippet,
                }
            } )
        };
        return processed;
    }
    const basic = rss.rss.channel.item.map( itemProcess );
    return JSON.stringify( basic );
}

const co2_preprocess = ( rss ) => {
    const itemProcess = ( json ) => {
        const data = json?.description?.split( '\n' );
        const processed = {
            date: new Date( +new Date( json?.pubDate ) - ( 864e5 * 13 ) ),
            latest: data[ 1 ]?.split( ':' )[ 1 ]?.replace( '<br>', '' )?.trim(),
            year_ago: data[ 2 ]?.split( ':' )[ 1 ]?.replace( '<br>', '' )?.trim(),
            decade: data[ 3 ]?.split( ':' )[ 1 ]?.trim()
        };
        return processed;
    }
    const e = rss.rss.channel;
    const basic = {
        title: e.title,
        description: e.description,
        url: e.link.reverse()[ 0 ],
        items: e.item.map( itemProcess )
    };
    return JSON.stringify( basic );
};

async function gatherResponse ( response ) {
    const { headers } = response;
    const contentType = headers.get( "content-type" ) || "";
    if ( contentType.includes( "application/json" ) )
        return await response.json();
    else return await response.text();
}

async function handleRequest ( request ) {
    const defaultHeaders = {
        headers: {
            "content-type": "application/json;charset=UTF-8",
            'Access-Control-Allow-Origin': request.headers.get( "Origin" )
        }
    };

    const path = request.url.split( 'api.nukes.in' )[ 1 ];
    let response, results;

    if ( path === '/co2' ) {
        response = await fetch( CO2_URL, defaultHeaders );
        results = await gatherResponse( response );
        return new Response( co2_preprocess( results ), defaultHeaders );
    }
    if ( path === '/gt/US' ) {
        response = await fetch( GT_US_URL, defaultHeaders );
        results = await gatherResponse( response );
        return new Response( google_processor( results ), defaultHeaders );
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
}


addEventListener( "fetch", event => {
    const request = event.request;
    if ( request.method === "OPTIONS" ) event.respondWith( handleOptions( request ) );
    else event.respondWith( handleRequest( request ) );
} );