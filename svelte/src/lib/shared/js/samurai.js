const serverURL = 'http://localhost:1872/';
const clientURL = 'http://localhost:1873/';
const sites = JSON.parse( `{"root":{"name":"Basic"},"nf":{"name":"Netflix","prelink":"https://www.netflix.com/search?q="},"be":{"name":"Behance","prelink":"https://www.behance.net/search?search="},"git":{"name":"Github","prelink":"https://github.com/search?&q=","me":"https://github.com/plutoniumm?tab=repositories","new":"https://github.com/new","settings":"https://github.com/settings/profile","notifs":"https://github.com/notifications?query=is%3Aunread"},"qm":{"name":"q","json":"/json","debug":"/debug","social":"/social","secure":"/secure","tasks":"/tasks"},"s":{"name":"q","prelink":"https://google.com/search?q="},"qi":{"name":"q","prelink":"https://google.com/search?q=","postlink":"&tbm=isch"},"d":{"name":"DuckDuckGo","prelink":"https://duckduckgo.com/?q="},"di":{"name":"DuckDuckGo","prelink":"https://duckduckgo.com/?q=","postlink":" &iax=images&ia=images"},"r":{"name":"Reddit","base":"https://www.reddit.com/","prelink":"https://www.reddit.com/search?q="},"y":{"name":"Disphenoid","prelink":"${ clientURL }stream?q="},"ig":{"me":"instagram.com/plutonium.rar/","dm":"https://www.instagram.com/direct/inbox/"},"ap":{"name":"Amazon","prelink":"https://www.primevideo.com/search/ref=atv_nb_sr?phrase=","postlink":"&ie=UTF8"},"imdb":{"name":"IMDB","prelink":"https://www.imdb.com/find?q=","postlink":"&ref_=nv_sr_sm"},"dict":{"name":"Webster","prelink":"https://www.merriam-webster.com/dictionary/"},"wiki":{"name":"Wikipedia","prelink":"https://en.wikipedia.org/wiki/Special:Search?search="},"ht":{"name":"Web","prelink":"https://"},"htu":{"name":"Web","prelink":"http://"}}` )

const suggestions = ( SIn ) => {
    const sc_Old = document.getElementById( "suggestions" );
    if ( sc_Old ) sc_Old.remove();
    let sc = document.createElement( "script" );
    sc.src = `https://clients1.google.com/complete/search?client=youtube&hl=en&q=${ SIn }&jsonp=returnSug`;
    sc.id = "suggestions";
    document.body.appendChild( sc );
};

const setEngineImage = ( key ) => {
    const engineImage = find( '#engineImage' );
    if ( engineImage ) engineImage.src = `./icons/${ sites[ key ].name }.svg`
}

export const engine = ( input ) => {
    setEngineImage( 'root' );
    if ( input.charAt( 0 ) === '!' ) {
        const withBang = input.replace( '!', '' );
        let // blanks
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
            if ( query ) suggestions( query );
            setEngineImage( key );
            return { key: key, query: query, url: ( sites[ key ].prelink + encodeURIComponent( query ) + ( sites[ key ].postlink || '' ) ) };
        }
    }
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
        if ( q.charAt( 0 ) === '+' ) {
            const [ target, ...values ] = q.replace( '+', '' ).split( ' ' );
            let vid = '';
            if ( target === 'yt' || target === 'youtube' ) {
                vid = values[ 0 ].split( 'id=' )[ 1 ]?.split( '&' )[ 0 ] || values[ 0 ];
                fetch( serverURL + "/data/stack", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify( { "at": "YT", "value": vid } )
                } );
            }
            return '#deets';
        }
        else return url;
    }
}

export const preprocessor = ( { key, query, url } ) => {
    if ( siteFunctions.hasOwnProperty( key ) ) return siteFunctions[ key ]( query, url );
    else return url;
}