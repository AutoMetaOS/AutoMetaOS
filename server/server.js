"use strict";

const SSL = '../config/keys/';
const keys = require( '../config/keys/server_keys' );
const port = process.env.PORT || 1872;

const nanoexpress = require( 'nanoexpress' );
const FastSpeedtest = require( "fast-speedtest-api" );
const urlMetadata = require( 'url-metadata' );
const { exec } = require( 'child_process' );

const terrelysium = require( './notes' );
const phantom = require( './phantom' );

const app = nanoexpress( {
      https: {
            key_file_name: SSL + 'key.pem',
            cert_file_name: SSL + 'cert.pem',
            passphrase: keys.SSL_PASS
      }
} );

app.use( require( 'cors' )() );
app.use( require( '@nanoexpress/middleware-body-parser/cjs' )() );

terrelysium( app );
phantom( app );

const internetSpeed = ( req, res ) => {
      let speedTest = new FastSpeedtest( {
            token: keys.NFLX_TOK,
            timeout: 2e3,
            bufferSize: 16,
            unit: FastSpeedtest.UNITS.MBps
      } );
      speedTest.getSpeed().then( s => res
            .send( {
                  "speed": s.toFixed( 2 )
            } ) )
            .catch( e => console.error( e.message ) );
};

const systemStats = ( req, res ) => {
      exec( 'smckit', ( err, sto, sterr ) => {
            const data = sto.split( '\n' ).map( o => o.split( '\x1B[0;0m' )[ 1 ] );
            const stats = {
                  "cpu": data[ 1 ].trim()?.split( '.' )[ 0 ],
                  "board": data[ 2 ].trim()?.split( '.' )[ 0 ],
                  "fan": data[ 14 ].trim().replace( ' RPM', '' )
            };
            res.send( stats );
      } );
}

// APIs
const requestMetadata = ( req, res ) => {
      const URI = req.query.url;
      urlMetadata( URI ).then(
            ( metadata ) => {
                  res.send( {
                        "success": 1, "meta": {
                              "title": metadata.title,
                              "description": metadata.description,
                              "image": {
                                    "url": metadata.image
                              }
                        }
                  } );
            },
            ( e ) => { console.log( e ) }
      );
};


const list = [
      { endpoint: "/sys/net", executable: internetSpeed },
      { endpoint: "/sys/smc", executable: systemStats },
      { endpoint: "/requestMetadata", executable: requestMetadata },
];

list.forEach( ( item ) => app.get( item.endpoint, item.executable ) );

app.listen( port );