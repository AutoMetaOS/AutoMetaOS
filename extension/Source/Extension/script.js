safari.extension.dispatchMessage( "load" );
safari.self.addEventListener( "message", ( { name, message } ) => {
  const handler = messageHandlers[ name ];
  if ( handler ) handler( message );
} );


const logStyle = 'color:dodgerblue;border:1px solid dodgerblue;background:#fff;border-radius:2em;';
const RSlog = ( message ) => { console.log( '%c ' + message, logStyle ); }

const appendContent = ( at, content, type, id ) => {
  const node = document.createElement( type );

  if ( content.includes( '@ninjected' ) ) node.textContent = content;
  else node.src = content;

  node.id = id || ( ~~( +Date.now() ) % 1e6 ).toString( 36 );
  document[ at ].appendChild( node );
};


const messageHandlers = {
  onload: message => {
    Object.entries( message ).forEach( ( [ fileType, files ] ) => {
      files.forEach( ( [ fileName, content ] ) => {
        RSlog( `Injecting ${ fileName }` );
        fileTypeHandlers[ fileType ]( content );
      } );
    } );
  }
};

const fileTypeHandlers = {
  js: content => {
    if ( document.readyState === "loading" ) {
      document.addEventListener( "DOMContentLoaded", () => {
        appendContent( 'body', content, 'script' );
      } );
    }
    else appendContent( 'body', content, 'script' );
  },
  css: content => {
    appendContent( 'head', content, 'style' );
  }
};
