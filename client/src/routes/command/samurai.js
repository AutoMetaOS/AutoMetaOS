import { base } from '$app/paths';
import { recommendations } from "./store";
const sites = JSON.parse( `{"root":{"name":"Basic"},"nf":{"name":"Netflix","prelink":"https://netflix.com/search?q="},"git":{"name":"Github","prelink":"https://github.com/search?&q="},"qm":{"name":"q"},"s":{"name":"q","prelink":"https://google.com/search?q="},"qi":{"name":"q","prelink":"https://google.com/search?q=","postlink":"&tbm=isch"},"r":{"name":"Reddit","base":"https://reddit.com/","prelink":"https://reddit.com/search?q="},"y":{"name":"Youtube","prelink":"/stream?q="},"ap":{"name":"Amazon","prelink":"https://primevideo.com/search/ref=atv_nb_sr?phrase=","postlink":"&ie=UTF8"},"dict":{"name":"Webster","prelink":"https://www.merriam-webster.com/dictionary/"},"wiki":{"name":"Wikipedia","prelink":"https://en.wikipedia.org/wiki/Special:Search?search="}}` );

export const quickPages = JSON.parse( `{
    "wa": { "url": "https://web.whatsapp.com/" },
    "notes": { "url": "${ base }/notes" },"note": { "url": "${ base }/notes" },
    "news": { "url": "${ base }/social" },
    "yt": { "url": "${ base }/stream" },"nebula": { "url": "${ base }/stream" },"video": { "url": "${ base }/stream" },
    "yt": { "url": "${ base }/stream" },
    "debug": { "url": "${ base }/debug" },"w3": { "url": "${ base }/debug" },"repl": { "url": "${ base }/debug" }
}`);

const suggestions = ( SIn ) => fetch( `https://api.nukes.in/quick/brave?q=${ SIn }&rich=true` )
    .then( r => r.json() )
    .then( r => recommendations.set( r ) );

const setEngineImage = ( key ) => {
    const engineImage = ƒ( '#engineImage' );
    if ( engineImage ) engineImage.src = `${ base }/icons/${ sites[ key ].name }.svg`
}

export const engine = ( input ) => {
    setEngineImage( 'root' );

    // CHECK FOR QUICK PAGES
    let out = quickPages[ input ] || null;
    if ( out ) return out;

    // CHECK FOR BANG NOTATION
    if ( input.charAt( 0 ) === '!' ) {
        let//
            withBang = input.replace( '!', '' ),
            key = withBang.split( ' ' )[ 0 ]?.toLowerCase(),
            query = withBang.replace( key + ' ', '' );

        if ( sites.hasOwnProperty( key ) ) {
            setEngineImage( key );
            suggestions( query || "" );

            return {
                key,
                query,
                url: ( sites[ key ].prelink + encodeURIComponent( query ) + ( sites[ key ].postlink || '' ) )
            };
        }
    }
    // PLAIN SUGGESTIONS NO BANG
    else suggestions( input );
    return {
        key: 's',
        query: input,
        url: ( sites[ 's' ].prelink + encodeURIComponent( input ) + ( sites[ 's' ].postlink || '' ) )
    };
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