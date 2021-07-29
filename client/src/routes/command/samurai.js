import { base } from '$app/paths';
const sites = JSON.parse( `{"root":{"name":"Basic"},"nf":{"name":"Netflix","prelink":"https://netflix.com/search?q="},"git":{"name":"Github","prelink":"https://github.com/search?&q=","me":"https://github.com/plutoniumm?tab=repositories","new":"https://github.com/new","settings":"https://github.com/settings/profile","notifs":"https://github.com/notifications?query=is%3Aunread"},"qm":{"name":"q","json":"${ base }/json","debug":"${ base }/debug","social":"${ base }/social","secure":"${ base }/secure"},"s":{"name":"q","prelink":"https://google.com/search?q="},"qi":{"name":"q","prelink":"https://google.com/search?q=","postlink":"&tbm=isch"},"r":{"name":"Reddit","base":"https://reddit.com/","prelink":"https://reddit.com/search?q="},"y":{"name":"Disphenoid","prelink":"/stream?q="},"ig":{"me":"instagram.com/plutonium.m/","dm":"https://instagram.com/direct/inbox/"},"ap":{"name":"Amazon","prelink":"https://primevideo.com/search/ref=atv_nb_sr?phrase=","postlink":"&ie=UTF8"},"imdb":{"name":"IMDB","prelink":"https://www.imdb.com/find?q=","postlink":"&ref_=nv_sr_sm"},"dict":{"name":"Webster","prelink":"https://www.merriam-webster.com/dictionary/"},"wiki":{"name":"Wikipedia","prelink":"https://en.wikipedia.org/wiki/Special:Search?search="},"ht":{"name":"Web","prelink":"https://"},"htu":{"name":"Web","prelink":"http://"}}` );

export const quickPages = JSON.parse( `{
    "wa": { "url": "https://web.whatsapp.com/" },
    "notes": { "url": "${ base }/notes" },"note": { "url": "${ base }/notes" },
    "news": { "url": "${ base }/social" },
    "yt": { "url": "${ base }/stream" },"nebula": { "url": "${ base }/stream" },"video": { "url": "${ base }/stream" },
    "debug": { "url": "${ base }/debug" },"w3": { "url": "${ base }/debug" },"repl": { "url": "${ base }/debug" }
}`);

const suggestions = ( SIn ) => {
    const sc_Old = document.getElementById( "suggestions" );
    if ( sc_Old ) sc_Old.remove();
    let sc = document.createElement( "script" );
    sc.src = `https://clients1.google.com/complete/search?client=youtube&hl=en&q=${ SIn }&jsonp=returnSug`;
    sc.id = "suggestions";
    document.body.appendChild( sc );
};

const setEngineImage = ( key ) => {
    const engineImage = document.querySelector( '#engineImage' );
    if ( engineImage ) engineImage.src = `${ base }/icons/${ sites[ key ].name }.svg`
}

export const engine = ( input ) => {
    setEngineImage( 'root' );

    // CHECK FOR QUICK PAGES
    let out = quickPages[ input ] || null;
    if ( out ) return out;

    // CHECK FOR BANG NOTATION
    if ( input.charAt( 0 ) === '!' ) {
        const withBang = input.replace( '!', '' );
        let
            query,
            key;

        if ( sites.hasOwnProperty( withBang.split( ':' )[ 0 ]?.toLowerCase() ) ) {
            key = withBang.split( ':' )[ 0 ]?.toLowerCase();
            query = withBang.replace( key + ':', '' );
            setEngineImage( key );
            if ( query ) suggestions( query );
            return { key: key, query: query, url: sites[ key ][ query ] };
        }

        if ( sites.hasOwnProperty( withBang.split( ' ' )[ 0 ]?.toLowerCase() ) ) {
            key = withBang.split( ' ' )[ 0 ]?.toLowerCase();
            query = withBang.replace( key + ' ', '' );
            setEngineImage( key );
            if ( query ) suggestions( query );
            return { key: key, query: query, url: ( sites[ key ].prelink + encodeURIComponent( query ) + ( sites[ key ].postlink || '' ) ) };
        }
    }
    // PLAIN SUGGESTIONS NO BANG
    else suggestions( input );
    return { key: 's', query: input, url: ( sites[ 's' ].prelink + encodeURIComponent( input ) + ( sites[ 's' ].postlink || '' ) ) };
}

const siteFunctions = {
    r: ( q, url ) => {
        if ( q.charAt( 0 ) === '/' ) return sites.r.base + 'r' + q;
        else return url;
    },
    y: ( q, url ) => {
        if ( q.charAt( 0 ) === '@' ) return sites.y.prelink + '&id=' + q.replace( '@', '' );
        else return url;
    },
    qm: ( q, url ) => {
        return url;
    }
}

export const preprocessor = ( { key, query, url } ) => {
    if ( siteFunctions.hasOwnProperty( key ) ) return siteFunctions[ key ]( query, url );
    else return url;
}