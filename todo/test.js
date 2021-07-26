const fetch = require( 'node-fetch' );

fetch( 'https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss' )
    .then( response => response.text() )
    .then( r => {
        console.log(
            r
                .split( '<item>' )[ 1 ]
                .split( '</item>' )[ 0 ]
                .split( '<enclosure url="' )[ 1 ]
                .split( '" length' )[ 0 ]
        );
    } );