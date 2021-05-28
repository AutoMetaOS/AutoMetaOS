const fs = require( 'fs' );
const notes = './config/database/notes/';

async function routes ( app, options ) {
    app.get( '/notes/', ( req, res ) => {
        const list = fs.readdirSync( notes );
        let notesList = [];
        list.forEach( e => {
            const title = JSON.parse( fs.readFileSync( notes + e ) ).blocks[ 0 ].data.text;
            notesList.push( { title, id: e.split( '-' )[ 0 ] } );
        } )
        res.send( notesList );
    } );

    app.get( '/notes/:id', ( req, res ) => {
        const note = fs.readFileSync( notes + req.params.id + '-note.txt', 'utf-8' );
        res.send( {
            id: req.params.id,
            body: note
        } );
    } );

    app.put( '/notes/:id', ( req, res ) => {
        const body = typeof req.body === 'object' ? JSON.stringify( req.body ) : req.body;
        fs.writeFileSync( notes + req.params.id + '-note.txt', body );
        res.code( 200 );
    } );

    app.post( '/notes/new', ( req, res ) => {
        const key = ( ~~( new Date().getTime() % 1e9 ) ).toString( 36 );
        fs.writeFileSync( notes + key + '-note.txt', '' );
        res.send( key );
    } );

    // CREATE UNIVERSAL FETCH.IT WILL FINALLY BE NEEDED
};

module.exports = routes;