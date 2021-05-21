const fs = require( 'fs' );
const notes = './config/database/notes/';

async function routes ( app, options ) {
    app.get( '/notes/', ( req, res ) => {
        const list = fs.readFileSync( notes + 'list.json', 'utf8' );
        res.send( list );
    } );

    app.get( '/notes/:id', ( req, res ) => {
        const note = fs.readFileSync( notes + req.params.id + '-note.txt', 'utf-8' );
        res.send( {
            id: req.params.id,
            body: note
        } );
    } );

    app.put( '/notes/:id', ( req, res ) => {
        const note = fs.writeFileSync( note + req.params.id + '-note.txt', req.body );
        res.sendStatus( 200 )
        // fs.readFileSync;
        // SEND NOTE ON REQUEST ID.Set random ids based on time.Alphanumeric 6 letter i would say.
    } );

    app.post( '/notes/new', ( req, res ) => {
        const key = ( ~~( new Date().getTime() % 1e9 ) ).toString( 36 );
        fs.writeFileSync( notes + key + '-note.txt', '' );
        res.send( key );
    } );

    // CREATE UNIVERSAL FETCH.IT WILL FINALLY BE NEEDED
};

module.exports = routes;