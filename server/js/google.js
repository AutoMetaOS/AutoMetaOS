const fetch = require( 'node-fetch' );
const googleTrends = require( 'google-trends-api' );

const smartFilter = ( item ) => {
    const filertlist = [
        // SPORTS
        "sports", "sport",
        "nba", "baseball", "football",
        "basketball", "nfl", "wrestling",
        "cricket", "wwe", "league",
        "cricinfo", ,

        // TECH
        "oppo", "oneplus", "motorola", "vivo",

        // LANGUAGE
        "panchang", "हिंदी", "tamil",

        // ENTERTAINMENT
        "bts"
    ];
    if ( filertlist.some( v => JSON.stringify( item ).includes( v ) ) ) return 0;
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
                    .filter( smartFilter )
                    .sort( ( a, b ) => b.traffic - a.traffic )
                    .slice( 0, 6 );
                res.send( newsItems );
            } )
            .catch( err => console.log( err ) );
    } );
    fastify.get( '/social/google/hyper-trends', ( req, res ) => {
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
                    .filter( smartFilter )
                    .sort( ( a, b ) => b.traffic - a.traffic )
                    .slice( -6 );
                res.send( newsItems );
            } )
            .catch( err => console.log( err ) );
    } );
}
module.exports = routes;