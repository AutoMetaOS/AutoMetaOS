"use strict";

const fs = require( 'fs' );
const ERROR_LIST = '../config/errors/';

async function routes ( app, options ) {
    app.get( '/error/', ( req, res ) => {
        const err = typeof req.body === 'string' ? req.body : JSON.stringify( req.body );
        fs.appendFileSync( ERROR_LIST + 'logs.txt', err );
        res.code( 200 ).send( { "success": 1 } );
    } );
};

module.exports = routes;