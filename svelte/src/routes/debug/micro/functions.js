export const replLinks = {
    js: [
        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/codemirror.js",
        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/mode/css/css.js",
        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/mode/xml/xml.js",
        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/mode/javascript/javascript.js",
        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/mode/htmlmixed/htmlmixed.js"
    ],
    css: [
        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/codemirror.css",
        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/theme/material.css"
    ]

};

export const w3 = {
    style: `<style>
    body{
        color: #000;
        background: #fff;
    }
</style>`,
    base: `<!DOCTYPE html>
<html>
    <head>
        <style>
        body{
            color: #fff;
            background: #ccc;
        }
        h1{
            text-align:center;
            font: lighter 30px Helvetica;
            color: #f42;
        }
        </style>
    </head>
    <body>
        <h1>This is a REPL!</h1>
        <script>
        // fetch(URL, {
        //     method: "GET",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(data)
        // })
        //     .then((res) => res.TYPE)
        //     .then((r) => ACTION);
        </script>
    </body>
</html>`,
    repl: `
    let editor = CodeMirror.fromTextArea(document.getElementById("code"), {lineNumbers: true,mode: "htmlmixed",lineWrapping: true,matchBrackets: true});
    editor.setSize("50vw", "100%");;
    editor.setOption("theme", "material");
    document.title="Jupiter Code"`
};

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