"use strict";

const g = require( './amos' );

async function routes ( app, options ) {
    app.get( '/error/', ( req, res ) => {
        g.write( g.at.errors + 'logs.txt', req.body )
        res.code( 200 ).send( { "success": 1 } );
    } );
};

module.exports = routes;