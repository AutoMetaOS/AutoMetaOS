"use strict";
const fs = require( 'fs' );

module.exports = {
    at: {
        notes: '../config/database/notes/',
        errors: '../config/errors/',
        keys: '../config/keys/'
    },
    read: function ( endpoint ) {
        return fs.readFileSync( endpoint, 'utf-8' );
    },
    write: function ( endpoint, data ) {
        const writeable = typeof data === 'string' ? data : JSON.stringify( data );
        fs.writeFileSync( endpoint, writeable );
        return 0;
    },
    del: function ( endpoint ) {
        fs.unlinkSync( endpoint );
        return 0;
    }
}