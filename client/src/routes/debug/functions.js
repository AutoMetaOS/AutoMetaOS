export const w3 = `<style>
body{
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
h1{
    /* CSS COMMENT */
    font: lighter 32px Helvetica;
    color: #f42;
}
</style>
<h1>This is a REPL!</h1>
<!-- HTML COMMENT -->
<script>
    import { base } from "$app/paths";
    // JS COMMENT
    const number = [ 1 || "One" ];
    fetch(URL, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then((res) => res.TYPE)
    .then((r) => ACTION);
</script>`;

export const debounce = function ( func, wait, immediate ) {
    let timeout;
    return () => {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if ( !immediate ) func.apply( context, args );
        };
        let callNow = immediate && !timeout;
        clearTimeout( timeout );
        timeout = setTimeout( later, wait );
        if ( callNow ) func.apply( context, args );
    };
};

export const wordCount = ( str ) => str.replace( /(^\s*)|(\s*$)/gi, "" ).replace( /[ ]{2,}/gi, " " ).replace( /\n /, "\n" ).split( ' ' ).length;

export const initialize = () => {
    let scrip = document.createElement( "script" );
    scrip.innerText = `let editor = CodeMirror.fromTextArea(document.getElementById("code"), {lineNumbers: true,mode: "htmlmixed",lineWrapping: true,matchBrackets: true});editor.setSize("50vw", "100%");editor.setOption("theme", "cobalt");`;
    document.head.appendChild( scrip );
};