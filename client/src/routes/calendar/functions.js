export let IBMProcessor = () => {
    document.body
        .querySelectorAll( "link, meta, title, script[src]" )
        .forEach( ( link ) => link.remove() );
    document.body
        .querySelectorAll( "script, style" )
        .forEach( ( obj ) => document.head.appendChild( obj ) );
    const images = ƒA( "div[lazy-background]" );
    images.forEach( ( image ) => {
        image.innerHTML = `<img src="${ image.getAttribute(
            "lazy-background"
        ) }">`;
        image.removeAttribute( "lazy-background" );
    } );
}