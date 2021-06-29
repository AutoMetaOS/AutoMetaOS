"use strict";

const fs = require( 'fs' );
const notes = '../config/database/notes/';

async function routes ( app, options ) {
    app.get( '/notes/', ( req, res ) => {
        const list = fs.readFileSync( notes + 'NOTELIST.txt', 'utf-8' );
        res.send( list );
    } );

    app.get( '/notes/:id', ( req, res ) => {
        const note = fs.readFileSync( notes + req.params.id + '-note.txt', 'utf-8' );
        res.send( note );
    } );

    app.patch( '/notes/:id', ( req, res ) => {
        const body = req.body;
        fs.writeFileSync( notes + 'NOTELIST.txt', body.list );
        if ( body.note ) fs.writeFileSync( notes + req.params.id + '-note.txt', body.note );
        else fs.unlinkSync( notes + req.params.id + '-note.txt' );
        res.send( { code: 200 } );
    } );
};

module.exports = routes;