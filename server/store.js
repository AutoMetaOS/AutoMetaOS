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