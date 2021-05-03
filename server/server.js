const app = require( 'fastify' )( { logger: 0 } );
const fs = require( 'fs' );
const { exec } = require( 'child_process' );
const mths = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC' ];
const port = process.env.PORT || 1872;
const db = './config/database/';
const FastSpeedtest = require( "fast-speedtest-api" );

app.register( require( './js/google' ) );
app.register( require( './js/socials' ) );
app.register( require( 'fastify-cors' ), {} )




app.get( '/sys/net', ( req, res ) => {
      let speedtest = new FastSpeedtest( {
            token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", timeout: 2e3, bufferSize: 16, unit: FastSpeedtest.UNITS.MBps,
      } );
      speedtest.getSpeed().then( s => res.send( s.toFixed( 2 ) ) ).catch( e => console.error( e.message ) );

} );

app.get( '/sys/smc', ( req, res ) => {
      exec( 'smckit', ( err, sto, sterr ) => {
            const data = sto.split( '\n' ).map( o => o.split( '\x1B[0;0m' )[ 1 ] );
            const stats = { "cpu": data[ 1 ].trim()?.split( '.' )[ 0 ], "board": data[ 2 ].trim()?.split( '.' )[ 0 ], "fan": data[ 14 ].trim().replace( ' RPM', '' ) };
            res.send( stats );
      } );
} );

// APIs
app.post( '/data/:file', ( req, res ) => {
      const type = req.params.file;
      let data = fs.readFileSync( db + type + '.json', 'utf-8' );
      fs.writeFileSync( db + type + '.json', JSON.stringify( [ req.body, ...( JSON.parse( data ) ) ] ) );
      res.send( { 'status': 'Done' } );
} );

app.get( '/data/:file', ( req, res ) => {
      const which = req.params.file;
      const file = fs.readFileSync( db + which, 'utf-8' );
      res.send( file );
} );

app.post( '/log', ( req, res ) => {
      const q = req.query;
      const d = new Date();

      const file = `./config/logs/${ d.getFullYear() }${ mths[ d.getMonth() ] }.txt`;
      const log = `${ d.getTime() } ::${ q.url };;\n`;
      fs.appendFile( file, log, ( e ) => { if ( e ) throw e } );
      res.sendStatus( 204 );
} );

app.listen( port, console.log( 'Server listening on PORT:' + port ) );