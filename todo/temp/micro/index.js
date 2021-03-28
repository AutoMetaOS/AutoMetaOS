const FastSpeedtest = require( "fast-speedtest-api" );

let speedtest = new FastSpeedtest( {
    token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", timeout: 2e3, bufferSize: 16, unit: FastSpeedtest.UNITS.MBps,
} );

speedtest.getSpeed().then( s => console.log( s.toFixed( 2 ) ) ).catch( e => console.error( e.message ) );