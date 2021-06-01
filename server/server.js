const app = require( 'fastify' )( { logger: 0 } );
// const fs = require( 'fs' );
const { exec } = require( 'child_process' );
// const mths = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC' ];
const port = process.env.PORT || 1872;
// const db = './config/database/';
const FastSpeedtest = require( "fast-speedtest-api" );
const urlMetadata = require( 'url-metadata' )

app.register( require( './js/google' ) );
app.register( require( './js/nebula' ) );
app.register( require( './js/notes' ) );
app.register( require( './js/socials' ) );
app.register( require( 'fastify-cors' ), {} )

app.get( '/sys/net', ( req, res ) => {
      let speedTest = new FastSpeedtest( {
            token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", timeout: 2e3, bufferSize: 16, unit: FastSpeedtest.UNITS.MBps,
      } );
      speedTest.getSpeed().then( s => res.send( s.toFixed( 2 ) ) ).catch( e => console.error( e.message ) );

} );

app.get( '/sys/smc', ( req, res ) => {
      exec( 'smckit', ( err, sto, sterr ) => {
            const data = sto.split( '\n' ).map( o => o.split( '\x1B[0;0m' )[ 1 ] );
            const stats = { "cpu": data[ 1 ].trim()?.split( '.' )[ 0 ], "board": data[ 2 ].trim()?.split( '.' )[ 0 ], "fan": data[ 14 ].trim().replace( ' RPM', '' ) };
            res.send( stats );
      } );
} );

// APIs
app.get( '/requestMetadata', ( req, res ) => {
      const URI = req.query.url;
      urlMetadata( URI ).then(
            ( metadata ) => {
                  res.send( { "success": 1, "meta": { "title": metadata.title, "description": metadata.description, "image": { "url": metadata.image } } } );
            },
            ( e ) => { console.log( e ) }
      );
} );

app.listen( port, console.log( 'Server listening on PORT:' + port ) );