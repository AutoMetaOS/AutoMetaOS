const fs = require( 'fs' );

async function routes ( app, options ) {
    app.get( '/notes/', ( req, res ) => {
        fs.readdirSync;
        SEND LIST ONLY
    } );

    app.get( '/notes/<ID>', ( req, res ) => {
        fs.readFileSync;
        SEND NOTE ON REQUEST ID.Set random ids based on time.Alphanumeric 6 letter i would say.
    } );

    app.put( '/notes/<ID>', ( req, res ) => {
        fs.readFileSync;
        SEND NOTE ON REQUEST ID.Set random ids based on time.Alphanumeric 6 letter i would say.
    } );

    CREATE UNIVERSAL FETCH.IT WILL FINALLY BE NEEDED
};

module.exports = routes;