class Kron extends Date {
    #months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

    timeSince ( val ) {
        val = 0 | ( Date.now() - new Date( val ) ) / 1000;
        let unit, length = {
            second: 60, minute: 60, hour: 24, day: 7, week: 4.35,
            month: 12, year: 10000
        }, result;

        for ( unit in length ) {
            result = val % length[ unit ];
            if ( !( val = 0 | val / length[ unit ] ) )
                return result + ' ' + ( result - 1 ? unit + 's' : unit );
        }
    };

    toLocal ( loc = "en-GB" ) {
        console.log( this.getTime() );
        return new Date( this.getTime() || new Date() ).toLocaleDateString( loc, {
            weekday: "short", day: "numeric",
            hour12: false, hour: "2-digit",
            month: "short", minute: "2-digit"
        } );
    };

    secondsToClock ( seconds ) {
        return [ 3600, 60 ]
            .reduceRight(
                ( p, b ) => r => [ Math.floor( r / b ) ].concat( p( r % b ) ),
                r => [ r ]
            )( seconds )
            .map( a => a.toString().padStart( 2, '0' ) )
            .join( ':' );
    };

    clockToSeconds ( hhmmss ) {
        const span = hhmmss.split( ":" );
        const duration = +span[ 0 ] * 3600 + +span[ 1 ] * 60 + +span[ 2 ];
        return duration;
    };
};

// console.log( new Kron().timeSince( 1624964788192 ) );
// console.log( new Kron( 1624964788192 ).toLocal() );
// console.log( new Kron().secondsToClock( 5267 ) );
// console.log( new Kron().clockToSeconds( "12:45:22" ) );