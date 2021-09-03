"use strict";

const g = require( './amos' );

async function routes ( app, options ) {
    app.get( '/notes/', ( req, res ) => {
        const list = g.read( g.at.notes + 'NOTELIST.txt' );
        res.send( list );
    } );

    app.get( '/notes/:id', ( req, res ) => {
        const note = g.read( g.at.notes + req.params.id + '-note.txt' );
        res.send( note );
    } );

    app.patch( '/notes/:id', ( req, res ) => {
        const body = req.body;
        const id = req.params.id + '-note.txt';

        g.write( g.at.notes + 'NOTELIST.txt', body.list );

        if ( body.note ) {
            g.write( g.at.notes + id, body.note )
        } else {
            g.del( g.at.notes + id );
        }
        res.send( { code: 200 } );
    } );
};

module.exports = routes;