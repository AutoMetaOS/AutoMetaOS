const jsdom = require( "jsdom" );
const { JSDOM } = jsdom;
const fs = require( 'fs' );
const fetch = require( 'cross-fetch' );

const googler = async ( query ) => {
    const raw = await fetch( 'https://www.google.com/search?client=safari&source=hp&q=' + query );
    const text = await raw.text();
    return text;
}

googler( 'MDN' ).then( r => {
    fs.writeFileSync( './google.html', r );
} );