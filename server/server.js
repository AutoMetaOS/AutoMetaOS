"use strict";
const g = require( './amos' );

const port = process.env.PORT || 1872;

const nanoexpress = require( 'nanoexpress' );
const urlMetadata = require( 'url-metadata' );


const SSL = g.at.keys;
const keys = require( SSL + '/server_keys' );
const app = nanoexpress( {
      https: {
            key_file_name: SSL + 'key.pem',
            cert_file_name: SSL + 'cert.pem',
            passphrase: keys.SSL_PASS
      }
} );


app.use( require( 'cors' )() );
app.use( require( '@nanoexpress/middleware-body-parser/cjs' )() );

require( './notes' )( app );
require( './phantom' )( app );

// APIs
const requestMetadata = ( req, res ) => {
      urlMetadata( req.query.url ).then(
            ( meta ) => {
                  res.send( {
                        "meta": {
                              title: meta.title,
                              description: meta.description,
                              image: {
                                    url: meta.image
                              }
                        }
                  } );
            },
            ( e ) => { console.log( e ) }
      );
};


const list = [
      { endpoint: "/requestMetadata", executable: requestMetadata },
];

list.forEach( ( item ) => app.get( item.endpoint, item.executable ) );

app.listen( port );