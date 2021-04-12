const fetch = require( 'node-fetch' );
const googleTrends = require( 'google-trends-api' );

const filterOut = [
    // SPORTS
    "sports", "sport",
    "nba", "baseball", "football",
    "basketball", "nfl", "wrestling", "wrestle", "ufc",
    "cricket", "wwe", "league",
    "hockey", "rugby",
    "cricinfo",

    "madrid", "fifa", "juventus", "F.C.",

    // TECH
    "oppo", "oneplus", "motorola", "vivo", "realme",

    // LANGUAGE
    "panchang", "हिंदी", "tamil", "telugu", "malayalam",

    // ENTERTAINMENT
    "bts"
]

const keepIn = [
    // Significant
    "dies", "quits", "died", "dead"
]

const smartFilter = ( item ) => {
    if ( keepIn.some( v => JSON.stringify( item ).includes( v ) ) ) return 1;
    if ( filterOut.some( v => JSON.stringify( item ).includes( v ) ) ) return 0;
    return 1;
};

async function routes ( fastify, options ) {
    fastify.get( '/social/google/search', ( req, res ) => {
        fetch( 'https://www.google.com/search?client=toolbar&source=hp&q=' + req.query.q )
            .then( res => res.text() )
            .then( r => res.send( r ) );
    } );

    fastify.get( '/social/google/trends', ( req, res ) => {
        const locations = [ 'US', 'GB', 'IN' ];
        Promise.all( locations.map( e => googleTrends.dailyTrends( { geo: e } ) ) )
            .then( result => {
                let newsItems = [];
                const json = result.map( e => JSON.parse( e ).default.trendingSearchesDays );
                json.forEach( ctr => ctr.forEach( item => newsItems.push( ...item.trendingSearches ) ) );
                newsItems = newsItems.map( e => {
                    return {
                        title: e.title.query,
                        related: e.relatedQueries?.map( e => e.query ),
                        traffic: +( e.formattedTraffic?.replace( 'K+' ) ),
                        articles: e.articles.map( e2 => {
                            return {
                                title: e2.title,
                                url: e2.url,
                                source: e2.source,
                                desc: e2.snippet,
                                image: e2.image?.imageUrl
                            }
                        } ).slice( 0, 5 )
                    }
                } );
                res.send( newsItems.filter( smartFilter ) );
            } )
            .catch( err => console.log( err ) );
    } );

    fastify.get( '/social/google/top-trends', ( req, res ) => {
        const locations = [ 'US', 'GB', 'IN' ];
        Promise.all( locations.map( e => googleTrends.dailyTrends( { geo: e } ) ) )
            .then( result => {
                let newsItems = [];
                const json = result.map( e => JSON.parse( e ).default.trendingSearchesDays );
                json.forEach( ctr => ctr.forEach( item => newsItems.push( ...item.trendingSearches ) ) );
                newsItems = newsItems.map( e => {
                    return {
                        title: e.title.query,
                        traffic: +( e.formattedTraffic.replace( 'K+', '' ).replace( 'M+', '000' ) ),
                        articles: e.articles.map( e2 => {
                            return {
                                title: e2.title,
                                url: e2.url,
                                source: e2.source,
                                desc: e2.snippet,
                                image: e2.image?.imageUrl
                            }
                        } ).slice( 0, 1 )
                    }
                } )
                    .sort( ( a, b ) => b.traffic - a.traffic )
                    .filter( smartFilter );
                res.send( newsItems );
            } )
            .catch( err => console.log( err ) );
    } );
}
module.exports = routes;