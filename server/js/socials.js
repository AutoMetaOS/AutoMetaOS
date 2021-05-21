const fetch = require( 'node-fetch' );
const keys = require( '../../config/nodeKeys' );
const parser = new ( require( 'rss-parser' ) )();

async function routes ( app, options ) {
    app.get( '/security/git', ( req, res ) => {
        fetch( 'https://api.github.com/graphql', {
            method: 'POST',
            headers: { Authorization: "token " + keys().GIT_KEY },
            body: JSON.stringify( {
                query: `query {     user( login: "plutoniumm") {
                            repositories( first: 30) {    nodes{    name
                                    pullRequests (last: 20) {
                                        edges {     node {     title  } }
                                    }
                            }  }
                        }}`
            } ),
        } ).then( res => res.json() )
            .then( r => {
                const reps = r.data.user.repositories.nodes;
                let prs = [];
                reps.forEach( e => {
                    e.pullRequests.edges.forEach( e2 => {
                        if ( e2.node.title.toLowerCase().includes( 'security' ) )
                            prs = [ ...prs, { name: e.name, pr: e2.node.title } ];
                    } )
                } )
                res.send( prs );
            } )
            .catch( err => res.send( 404 ) );
    } );

    app.get( '/social/f1/', ( req, res ) => {
        parser.parseURL( 'https://www.autosport.com/rss/f1/news/' ).then( r => {
            r = r.items.map( e => {
                return {
                    title: e.title,
                    url: e.link,
                    date: e.pubDate,
                    image: e.enclosure.url,
                    desc: e.contentSnippet,
                }
            } );
            res.send( r );
        } );
    } );
};

module.exports = routes;