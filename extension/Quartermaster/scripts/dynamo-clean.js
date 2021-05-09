'use strict';
var _0x33ae = [ "RATE_APP", "SET_DEFAULT_SPEED_PRESET", "slower", "normal", "exit", "tag", "payload", "startsWith", "replace", "actionTriggered", "initFinished", "enableBypass", "disableBypass", "setShortcuts", "setDefaultSpeedPreset", "pauseAllVideos", "framed", "msgApp", "location", "receiveKeys", "stringify", "bindings", "defaultSpeed", "Setting default speed to ", "rate", "msgParent", "skipAllVideos", "gearAllVideos", "msgChildren", "Shift", "Control", "Option", "Command", "KeyS", "KeyF", "KeyE",
    "code", "keyCode", "modifiers", "shiftKey", "ctrlKey", "altKey", "metaKey", "tagName", "toLowerCase", "input", "isContentEditable", "gearbox-hud", "attachShadow", "closed", "innerHTML", "querySelector", "#content", "define", "floor", "gbxDisplayId", "videoId", "dataset", "offsetWidth", "parentElement", "offsetHeight", "getComputedStyle", "position", "static", "contentElement", "fontSize", ".hud-rate", '<div class="hud-rate">    <span class="maj">X</span>\x3c!--    --\x3e<span class="dot">.</span>\x3c!--    --\x3e<span class="min">Y</span></div>',
    ".maj", "textContent", "toFixed", ".min", '<div class="hud-exit"><span>exit</span></div>', "gbx-recently-active", "activationTimerId", "clearTimeout", "classList", "remove", "add", "gearbox-hud {position: absolute !important;bottom: 13% !important;right: 5% !important;height: 50% !important;width: 90% !important;z-index: 2147483647 !important;pointer-events: none !important;}\ngearbox-hud {transition-property: opacity !important;transition-duration: 1s !important;}\ngearbox-hud {opacity: 0 !important;}\ngearbox-hud.gbx-recently-active {opacity: 1 !important;}",
    "\ndata:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9Ijg4N3B4IiBoZWlnaHQ9IjUwMHB4IiB2aWV3Qm94PSIwIDAgODg3IDUwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8ZyBpZD0iU1ZHLUV4aXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iZXhpdCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMzM2MzQsIDEzNi4wMjQ0MTQpIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQ0Ljk3MjY1NiwxMjUuNDM2NTIzIEMxMTQuNzI2NTYyLDEyNS40MzY1MjMgOTMuNjA2NDQ1MywxNDYuNTU2NjQxIDkxLjI1OTc2NTYsMTc5LjQxMDE1NiBMMTk2LjU5OTYwOSwxNzkuNDEwMTU2IEMxOTUuMDM1MTU2LDE0NS41MTM2NzIgMTc1Ljc0MDIzNCwxMjUuNDM2NTIzIDE0NC45NzI2NTYsMTI1LjQzNjUyMyBaIE0xOTkuOTg5MjU4LDI3MS40NTIxNDggTDI4NC4yMDg5ODQsMjcxLjQ1MjE0OCBDMjc0LjA0MDAzOSwzMjguMDMzMjAzIDIyMC44NDg2MzMsMzYzLjc1NDg4MyAxNDUuNzU0ODgzLDM2My43NTQ4ODMgQzUzLjE5MTQwNjIsMzYzLjc1NDg4MyAwLDMwOC45OTkwMjMgMCwyMTMuODI4MTI1IEMwLDExOC4xMzU3NDIgNTQuNDk1MTE3Miw1OS45OTAyMzQ0IDE0NC40NTExNzIsNTkuOTkwMjM0NCBDMjMzLjg4NTc0Miw1OS45OTAyMzQ0IDI4Ni4wMzQxOCwxMTQuMjI0NjA5IDI4Ni4wMzQxOCwyMDYuNzg4MDg2IEwyODYuMDM0MTgsMjMyLjM0MDgyIEw5MC43MzgyODEyLDIzMi4zNDA4MiBMOTAuNzM4MjgxMiwyMzcuMDM0MTggQzkxLjUyMDUwNzgsMjc0Ljg0MTc5NyAxMTMuMTYyMTA5LDI5OC4zMDg1OTQgMTQ4LjM2MjMwNSwyOTguMzA4NTk0IEMxNzUuMjE4NzUsMjk4LjMwODU5NCAxOTMuNzMxNDQ1LDI4OC40MDAzOTEgMTk5Ljk4OTI1OCwyNzEuNDUyMTQ4IFoiIGlkPSJlIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IngiIHBvaW50cz0iNDIxLjMwOTM0MyAyNjguMDYyNSA0MTYuMzU1MjQyIDI2OC4wNjI1IDM2OS45NDMxMzMgMzU2Ljk3NTU4NiAyNzMuNzI5MjY1IDM1Ni45NzU1ODYgMzYwLjU1NjQxNCAyMTQuMzQ5NjA5IDI3My4yMDc3ODEgNjYuNzY5NTMxMiAzNzguMjg2ODgzIDY2Ljc2OTUzMTIgNDIwLjc4Nzg1OSAxNTcuMjQ3MDcgNDI1Ljc0MTk2MSAxNTcuMjQ3MDcgNDY4Ljc2NDQyMiA2Ni43Njk1MzEyIDU2OC42Mjg2NzkgNjYuNzY5NTMxMiA0ODAuNzU4NTYyIDIxMC40Mzg0NzcgNTY4Ljg4OTQyMiAzNTYuOTc1NTg2IDQ2Ny45ODIxOTUgMzU2Ljk3NTU4NiI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJpdC1wYXRoIiBwb2ludHM9IjU4MS4xODAyMSAzNTYuOTc1NTg2IDU4MS4xODAyMSA2Ni43Njk1MzEyIDY3My40ODI5NDUgNjYuNzY5NTMxMiA2NzMuNDgyOTQ1IDM1Ni45NzU1ODYiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzM2LjM0Mzg0MywwLjI4MDI3MzQzOCBMODI4LjM4NTgzNSwwLjI4MDI3MzQzOCBMODI4LjM4NTgzNSw3MC42ODA2NjQxIEw4ODYuNzkyMDg1LDcwLjY4MDY2NDEgTDg4Ni43OTIwODUsMTM5LjI1NTg1OSBMODI4LjM4NTgzNSwxMzkuMjU1ODU5IEw4MjguMzg1ODM1LDI1Ni44NTA1ODYgQzgyOC4zODU4MzUsMjc4Ljc1MjkzIDgzOS41OTc3NDksMjg5LjQ0MzM1OSA4NjMuNTg2MDMxLDI4OS40NDMzNTkgQzg3NC4yNzY0NiwyODkuNDQzMzU5IDg4MC4wMTI3ODgsMjg4LjkyMTg3NSA4ODYuNzkyMDg1LDI4OC4xMzk2NDggTDg4Ni43OTIwODUsMzUzLjg0NjY4IEM4NzcuMTQ0NjI0LDM1NS45MzI2MTcgODYwLjE5NjM4MiwzNTcuNDk3MDcgODQyLjcyNjY1NiwzNTcuNDk3MDcgQzc2Ni4zMjkxOTUsMzU3LjQ5NzA3IDczNi4zNDM4NDMsMzM0LjI5MTAxNiA3MzYuMzQzODQzLDI3Ny40NDkyMTkgTDczNi4zNDM4NDMsMTM5LjI1NTg1OSBMNjkxLjc1NjkyOSwxMzkuMjU1ODU5IEw2OTEuNzU2OTI5LDcwLjY4MDY2NDEgTDczNi4zNDM4NDMsNzAuNjgwNjY0MSBMNzM2LjM0Mzg0MywwLjI4MDI3MzQzOCBaIiBpZD0iaXQtcGF0aCI+PC9wYXRoPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPHBhdGggZD0iTTYyNy41LDE3MyBDNTc5LjcyNzM3LDE3MyA1NDEsMTM0LjI3MjYzIDU0MSw4Ni41IEM1NDEsMzguNzI3MzY5MSA1NzkuNzI3MzcsMCA2MjcuNSwwIEM2NzUuMjcyNjMsMCA3MTQsMzguNzI3MzY5MSA3MTQsODYuNSBDNzE0LDEzNC4yNzI2MyA2NzUuMjcyNjMsMTczIDYyNy41LDE3MyBaIE02MTUuMzU5NDExLDY1LjUzMzI4MjggTDU4NC4xOTAwNDMsODMuNTMwMzA3NiBDNTgwLjg5OTA2NSw4NS40MzA0OTk5IDU3OC44NzE3NjcsODguOTQyMDE4MSA1NzguODcxNzY3LDkyLjc0MjE4NDIgTDU3OC44NzE3NjcsMTIyLjYwNDMyNCBDNTc4Ljg3MTc2NywxMjYuNDA0NDkgNTgwLjg5OTA2NSwxMjkuOTE2MDA4IDU4NC4xOTAwNDMsMTMxLjgxNjE5OSBMNjE1LjM2NzA5MiwxNDkuODE3NjU5IEw2MTUuMzY3MDkyLDY1LjUzNzcxMzIgTDY1MS43MjMxNiw4Ni41MDc0NzMyIEw2MTUuMzY3MDkyLDEwNy40NzcyMzMgTDY0Ni41NjgyOTIsMTI1LjQ1NDgyNCBDNjQ5Ljg1NjgzMywxMjcuMzQ5NjI0IDY1My45MDU4MiwxMjcuMzQ4NzA0IDY1Ny4xOTM0OTksMTI1LjQ1MjQwOCBMNjgzLjA5NTYwMiwxMTAuNTEyMzc0IEM2ODYuMzg3NDQxLDEwOC42MTM2OCA2ODguNDE2MzM1LDEwNS4xMDMwODcgNjg4LjQxODA2NiwxMDEuMzAyOTI0IEw2ODguNDM0NDQ1LDY1LjMzMjgyNzYgTDY1MS43NDI4OTgsODYuNDk2MDg3OSBMNjUxLjcyNjUzLDUwLjU0ODc2NzggQzY1MS43MjQ3OTgsNDYuNzQ4NjA0OSA2NDkuNjk1OTA1LDQzLjIzODAxMjIgNjQ2LjQwNDA2NSw0MS4zMzkzMTc2IEw2MjAuNTAxOTYzLDI2LjM5OTI4MzggQzYxNy4yMTQyODQsMjQuNTAyOTg4NiA2MTMuMTY1Mjk3LDI0LjUwMjA2ODEgNjA5Ljg3Njc1NywyNi4zOTY4NjgyIEw1NzguNjc1NTU1LDQ0LjM3NDQ1ODcgTDYxNS4zNTk0MTEsNjUuNTMzMjgyOCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==",
    "<style>#content {font-family: system-ui;opacity: 0.57;color: white;font-weight: bold;letter-spacing: -0.4rem;}\n#content {position: absolute;top: 0;left: 0;width: 100%;height: 100%;}\n.hud-rate, .hud-exit {position: absolute;bottom: 0;right: 0;display: inline-block;line-height: 0.75em;}\n.hud-rate .maj {margin-right: 0.1ex;}\n.hud-rate .dot {display: inline-block;width: 0.45ex;height: 0.45ex;text-indent: -9999ex;vertical-align: bottom;margin-right: 0.05ex;}\n.hud-rate .dot {background-image: url(",
    ");background-size: contain;background-repeat: no-repeat;}\n.hud-exit {background-image: url(", "playbackRate", "ceil", "max", "faster", "min", "currentTime", "duration", "gbxRateTimerId", "pause", "setTimeout", "gbxTargetRate", "visibility", "visible", "getBoundingClientRect", "documentElement", "clientWidth", "innerWidth", "clientHeight", "innerHeight", "height", "right", "bottom", "left", "width", "paused", "ended", "readyState", "querySelectorAll", "span[role='button'].videoSpritePlayButton",
    "forEach", "click", "nicovideo.jp", "ted.com", "udemy.com", "spiegel.de", "iqiyi.com", "history.com", "history.co.uk", "historychannel.com.au", "history.ca", "history.de", "linkedin.com", "techradar.com", "indexOf", "addEventListener", "ratechange", "target", "stopPropagation", "keyDownToken", "keyDownListener", "keyUpToken", "keyUpListener", "keydown", "keyup", "message", "receiveWindowMessage", "onPageLoad", "assign", "state", "updateView", "runSideEffect", "removeEventListener", "extension", "dispatchMessage",
    "sendMessageToParentWindow", "getElementsByTagName", "video", " videos: ", "onVideoGear", "Will try to pause ", " videos.", "Will try to skip ", "onVideoSkip", "videoSkipped", "filterAndDecodeInputEvent", "preventDefault", "parent", "Posting message to parent window: ", "postMessage", "gbx:", "sendMessageToChildWindows", "iframe", "Posting message to ", " child windows: ", "contentWindow", "data", "string", "Received window message: ", "dispatch", "receiveFrameMsg", "receiveAppExtensionMessage",
    "Received message from app extension: ", "Received unkown message from app extension, ignoring: ", "contains", "body", "loading", "DOMContentLoaded", "createElement", "style", "createTextNode", "head", "appendChild", "top", "debug", "info", "warn", "error", "\u2699\ufe0f [", "concat", "href", "length", "Cannot call a class as a function", "enumerable", "configurable", "defineProperty", "key", "prototype", "function", "Super expression must either be null or a function", "create", "setPrototypeOf",
    "__proto__", "getPrototypeOf", "undefined", "construct", "sham", "toString", "call", "apply", "bind", "[native code]", "has", "get", "set", "constructor", "this hasn't been initialised - super() hasn't been called", "object", "isArray", "iterator", "next", "push", "value", "return", "slice", "Object", "name", "Map", "Set", "from", "Arguments", "test", "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "done", "MSG_APP",
    "MSG_PARENT", "MSG_CHILDREN", "GEAR_ALL", "SKIP_ALL", "ENABLE_BYPASS", "DISABLE_BYPASS", "INIT_FINISHED", "VIDEO_SKIPPED", "INITIALIZE", "TRIGGER_ACTION", "RECEIVE_FRAME_MSG", "RECEIVE_APP_MSG", "FRAME_ACTION_TRIGGERED", "FRAME_INIT_FINISHED", "SET_SHORTCUTS", "PAUSE_ALL_VIDEOS" ];
( function ( data, i ) {
    var write = function ( isLE ) {
        for ( ;--isLE; ) {
            data[ "push" ]( data[ "shift" ]() );
        }
    };
    write( ++i );
} )( _0x33ae, 433 );
var _0x4ac6 = function ( i, parameter1 ) {
    i = i - 0;
    var oembedView = _0x33ae[ i ];
    return oembedView;
};
( function () {
    function css ( url, fn ) {
        return url != null ? fn( url ) : null;
    }
    function callback ( update, data ) {
        var innerFrameWrapper = update[ _0x4ac6( "0x0" ) ]( _0x4ac6( "0x1" ) );
        innerFrameWrapper[ "appendChild" ]( update[ _0x4ac6( "0x2" ) ]( data ) );
        if ( update[ _0x4ac6( "0x3" ) ] != null ) {
            update[ _0x4ac6( "0x3" ) ][ _0x4ac6( "0x4" ) ]( innerFrameWrapper );
        }
    }
    function autocomplete ( obj ) {
        try {
            return obj[ "self" ] !== obj[ _0x4ac6( "0x5" ) ];
        } catch ( _0x2da4ed ) {
            return !![];
        }
    }
    function wrapConsoleMethod ( method ) {
        var B78 = fill() || "<unknown>";
        return function ( data ) {
            method( _0x4ac6( "0xa" )[ "concat" ]( B78, "]: " )[ _0x4ac6( "0xb" ) ]( data ) );
        };
    }
    function fill () {
        var i = 50;
        return css( window[ "location" ][ _0x4ac6( "0xc" ) ], function ( entityIds ) {
            return entityIds[ _0x4ac6( "0xd" ) ] <= i ? entityIds : entityIds[ "substring" ]( 0, i ) + "\u2026";
        } );
    }
    function assign ( name, callback ) {
        if ( !( name instanceof callback ) ) {
            throw new TypeError( _0x4ac6( "0xe" ) );
        }
    }
    function normalize ( target, s ) {
        var str = 0;
        for ( ;str < s[ _0x4ac6( "0xd" ) ];str++ ) {
            var desc = s[ str ];
            desc[ _0x4ac6( "0xf" ) ] = desc[ _0x4ac6( "0xf" ) ] || ![];
            desc[ _0x4ac6( "0x10" ) ] = !![];
            if ( "value" in desc ) {
                desc[ "writable" ] = !![];
            }
            Object[ _0x4ac6( "0x11" ) ]( target, desc[ _0x4ac6( "0x12" ) ], desc );
        }
    }
    function test ( name, arg, opts ) {
        if ( arg ) {
            normalize( name[ _0x4ac6( "0x13" ) ], arg );
        }
        if ( opts ) {
            normalize( name, opts );
        }
        return name;
    }
    function get ( obj, params ) {
        if ( typeof params !== _0x4ac6( "0x14" ) && params !== null ) {
            throw new TypeError( _0x4ac6( "0x15" ) );
        }
        obj[ _0x4ac6( "0x13" ) ] = Object[ _0x4ac6( "0x16" ) ]( params && params[ _0x4ac6( "0x13" ) ], {
            "constructor": {
                "value": obj,
                "writable": !![],
                "configurable": !![]
            }
        } );
        if ( params ) {
            equal( obj, params );
        }
    }
    function parse ( name ) {
        parse = Object[ _0x4ac6( "0x17" ) ] ? Object[ "getPrototypeOf" ] : function collectObjectGroups ( obj ) {
            return obj[ _0x4ac6( "0x18" ) ] || Object[ _0x4ac6( "0x19" ) ]( obj );
        };
        return parse( name );
    }
    function equal ( out, arr ) {
        equal = Object[ _0x4ac6( "0x17" ) ] || function inherit ( o, p ) {
            o[ "__proto__" ] = p;
            return o;
        };
        return equal( out, arr );
    }
    function bind () {
        if ( typeof Reflect === _0x4ac6( "0x1a" ) || !Reflect[ _0x4ac6( "0x1b" ) ] ) {
            return ![];
        }
        if ( Reflect[ _0x4ac6( "0x1b" ) ][ _0x4ac6( "0x1c" ) ] ) {
            return ![];
        }
        if ( typeof Proxy === "function" ) {
            return !![];
        }
        try {
            Date[ _0x4ac6( "0x13" ) ][ _0x4ac6( "0x1d" ) ][ _0x4ac6( "0x1e" ) ]( Reflect[ _0x4ac6( "0x1b" ) ]( Date, [], function () {
            } ) );
            return !![];
        } catch ( _0x4688d1 ) {
            return ![];
        }
    }
    function fun ( url, to, add ) {
        if ( bind() ) {
            fun = Reflect[ _0x4ac6( "0x1b" ) ];
        } else {
            fun = function load ( file, callback, options ) {
                var PL$64 = [ null ];
                PL$64[ "push" ][ _0x4ac6( "0x1f" ) ]( PL$64, callback );
                var Image = Function[ _0x4ac6( "0x20" ) ][ "apply" ]( file, PL$64 );
                var prop = new Image;
                if ( options ) {
                    equal( prop, options[ "prototype" ] );
                }
                return prop;
            };
        }
        return fun[ _0x4ac6( "0x1f" ) ]( null, arguments );
    }
    function getOwnPropertyNames ( o ) {
        return Function[ "toString" ][ _0x4ac6( "0x1e" ) ]( o )[ "indexOf" ]( _0x4ac6( "0x21" ) ) !== -1;
    }
    function register ( definition ) {
        var console = typeof Map === _0x4ac6( "0x14" ) ? new Map : undefined;
        register = function check ( obj ) {
            function data () {
                return fun( obj, arguments, parse( this )[ _0x4ac6( "0x25" ) ] );
            }
            if ( obj === null || !getOwnPropertyNames( obj ) ) {
                return obj;
            }
            if ( typeof obj !== _0x4ac6( "0x14" ) ) {
                throw new TypeError( _0x4ac6( "0x15" ) );
            }
            if ( typeof console !== _0x4ac6( "0x1a" ) ) {
                if ( console[ _0x4ac6( "0x22" ) ]( obj ) ) {
                    return console[ _0x4ac6( "0x23" ) ]( obj );
                }
                console[ _0x4ac6( "0x24" ) ]( obj, data );
            }
            data[ "prototype" ] = Object[ _0x4ac6( "0x16" ) ]( obj[ _0x4ac6( "0x13" ) ], {
                "constructor": {
                    "value": data,
                    "enumerable": ![],
                    "writable": !![],
                    "configurable": !![]
                }
            } );
            return equal( data, obj );
        };
        return register( definition );
    }
    function getService ( service ) {
        if ( service === void 0 ) {
            throw new ReferenceError( _0x4ac6( "0x26" ) );
        }
        return service;
    }
    function unbindUpdate ( compute, updateOther ) {
        if ( updateOther && ( typeof updateOther === _0x4ac6( "0x27" ) || typeof updateOther === "function" ) ) {
            return updateOther;
        }
        return getService( compute );
    }
    function loadConfig ( name ) {
        return function () {
            var proxy = parse( name );
            var instance;
            if ( bind() ) {
                var instance_options = parse( this )[ _0x4ac6( "0x25" ) ];
                instance = Reflect[ _0x4ac6( "0x1b" ) ]( proxy, arguments, instance_options );
            } else {
                instance = proxy[ _0x4ac6( "0x1f" ) ]( this, arguments );
            }
            return unbindUpdate( this, instance );
        };
    }
    function getValue ( data, name ) {
        return getter( data ) || map( data, name ) || filter( data, name ) || iter();
    }
    function getter ( data ) {
        if ( Array[ _0x4ac6( "0x28" ) ]( data ) ) {
            return data;
        }
    }
    function map ( array, a ) {
        if ( typeof Symbol === _0x4ac6( "0x1a" ) || !( Symbol[ _0x4ac6( "0x29" ) ] in Object( array ) ) ) {
            return;
        }
        var result = [];
        var match = !![];
        var _0x2d7044 = ![];
        var rEntry = undefined;
        try {
            var _0x6ac060 = array[ Symbol[ _0x4ac6( "0x29" ) ] ]();
            var $D$6;
            for ( ;!( match = ( $D$6 = _0x6ac060[ _0x4ac6( "0x2a" ) ]() )[ "done" ] );match = !![] ) {
                result[ _0x4ac6( "0x2b" ) ]( $D$6[ _0x4ac6( "0x2c" ) ] );
                if ( a && result[ "length" ] === a ) {
                    break;
                }
            }
        } catch ( entry ) {
            _0x2d7044 = !![];
            rEntry = entry;
        } finally {
            try {
                if ( !match && _0x6ac060[ _0x4ac6( "0x2d" ) ] != null ) {
                    _0x6ac060[ _0x4ac6( "0x2d" ) ]();
                }
            } finally {
                if ( _0x2d7044 ) {
                    throw rEntry;
                }
            }
        }
        return result;
    }
    function filter ( opts, res ) {
        if ( !opts ) {
            return;
        }
        if ( typeof opts === "string" ) {
            return exports( opts, res );
        }
        var cmd = Object[ _0x4ac6( "0x13" ) ][ _0x4ac6( "0x1d" ) ][ "call" ]( opts )[ _0x4ac6( "0x2e" ) ]( 8, -1 );
        if ( cmd === _0x4ac6( "0x2f" ) && opts[ _0x4ac6( "0x25" ) ] ) {
            cmd = opts[ _0x4ac6( "0x25" ) ][ _0x4ac6( "0x30" ) ];
        }
        if ( cmd === _0x4ac6( "0x31" ) || cmd === _0x4ac6( "0x32" ) ) {
            return Array[ _0x4ac6( "0x33" ) ]( cmd );
        }
        if ( cmd === _0x4ac6( "0x34" ) || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/[ _0x4ac6( "0x35" ) ]( cmd ) ) {
            return exports( opts, res );
        }
    }
    function exports ( data, min ) {
        if ( min == null || min > data[ _0x4ac6( "0xd" ) ] ) {
            min = data[ _0x4ac6( "0xd" ) ];
        }
        var k = 0;
        var box = new Array( min );
        for ( ;k < min;k++ ) {
            box[ k ] = data[ k ];
        }
        return box;
    }
    function iter () {
        throw new TypeError( "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." );
    }
    function f ( x ) {
        if ( typeof Symbol === _0x4ac6( "0x1a" ) || x[ Symbol[ _0x4ac6( "0x29" ) ] ] == null ) {
            if ( Array[ _0x4ac6( "0x28" ) ]( x ) || ( x = filter( x ) ) ) {
                var xp = 0;
                var x = function () {
                };
                return {
                    "s": x,
                    "n": function () {
                        if ( xp >= x[ _0x4ac6( "0xd" ) ] ) {
                            return {
                                "done": !![]
                            };
                        }
                        return {
                            "done": ![],
                            "value": x[ xp++ ]
                        };
                    },
                    "e": function ( n ) {
                        throw n;
                    },
                    "f": x
                };
            }
            throw new TypeError( _0x4ac6( "0x36" ) );
        }
        var _0x194754;
        var zeroSizeMax = !![];
        var _0x38c6d7 = ![];
        var _PAGE_currentSubPage;
        return {
            "s": function () {
                _0x194754 = x[ Symbol[ _0x4ac6( "0x29" ) ] ]();
            },
            "n": function () {
                var zeroSizeMaxes = _0x194754[ _0x4ac6( "0x2a" ) ]();
                zeroSizeMax = zeroSizeMaxes[ _0x4ac6( "0x37" ) ];
                return zeroSizeMaxes;
            },
            "e": function ( n ) {
                _0x38c6d7 = !![];
                _PAGE_currentSubPage = n;
            },
            "f": function () {
                try {
                    if ( !zeroSizeMax && _0x194754[ _0x4ac6( "0x2d" ) ] != null ) {
                        _0x194754[ _0x4ac6( "0x2d" ) ]();
                    }
                } finally {
                    if ( _0x38c6d7 ) {
                        throw _PAGE_currentSubPage;
                    }
                }
            }
        };
    }
    function on ( type, state ) {
        return state === undefined ? {
            "tag": type
        } : {
            "tag": type,
            "payload": state
        };
    }
    function substr ( f_string ) {
        switch ( f_string ) {
            case _0x4ac6( "0x4b" ):
            case _0x4ac6( "0x4c" ):
            case "faster":
            case _0x4ac6( "0x4d" ):
                return f_string;
            default:
                return null;
        }
    }
    function write ( selector ) {
        switch ( selector[ _0x4ac6( "0x4e" ) ] ) {
            case list[ "FRAME_ACTION_TRIGGERED" ]:
                return ""[ _0x4ac6( "0xb" ) ]( selector[ _0x4ac6( "0x4e" ) ], ":" )[ _0x4ac6( "0xb" ) ]( selector[ _0x4ac6( "0x4f" ) ] );
            case list[ _0x4ac6( "0x46" ) ]:
                return selector[ "tag" ];
        }
    }
    function prepMeterData ( data ) {
        switch ( data[ _0x4ac6( "0x4e" ) ] ) {
            case list[ _0x4ac6( "0x3f" ) ]:
                return [ data[ _0x4ac6( "0x4e" ) ], {
                    "url": data[ "payload" ]
                } ];
            case list[ "VIDEO_SKIPPED" ]:
                return [ data[ _0x4ac6( "0x4e" ) ], {} ];
            case list[ _0x4ac6( "0x49" ) ]:
                return [ data[ _0x4ac6( "0x4e" ) ], {} ];
        }
    }
    function startsWith ( path ) {
        if ( path[ _0x4ac6( "0x50" ) ]( list[ _0x4ac6( "0x45" ) ] ) ) {
            path = path[ _0x4ac6( "0x51" ) ]( list[ "FRAME_ACTION_TRIGGERED" ] + ":", "" );
            var data = substr( path );
            return data != null ? loader_calback[ _0x4ac6( "0x52" ) ]( data ) : null;
        } else {
            if ( path[ "startsWith" ]( list[ "FRAME_INIT_FINISHED" ] ) ) {
                return loader_calback[ _0x4ac6( "0x53" ) ]();
            } else {
                return null;
            }
        }
    }
    function fn ( selected_image ) {
        var data = arguments[ _0x4ac6( "0xd" ) ] > 1 && arguments[ 1 ] !== undefined ? arguments[ 1 ] : {};
        switch ( selected_image ) {
            case list[ _0x4ac6( "0x3d" ) ]:
                return packByNumType[ _0x4ac6( "0x54" ) ]();
            case list[ _0x4ac6( "0x3e" ) ]:
                return packByNumType[ _0x4ac6( "0x55" ) ]();
            case list[ _0x4ac6( "0x47" ) ]:
                return packByNumType[ _0x4ac6( "0x56" ) ]( data );
            case list[ "SET_DEFAULT_SPEED_PRESET" ]:
                return packByNumType[ _0x4ac6( "0x57" ) ]( data[ _0x4ac6( "0x2c" ) ] );
            case list[ "PAUSE_ALL_VIDEOS" ]:
                return packByNumType[ _0x4ac6( "0x58" ) ]();
            default:
                return null;
        }
    }
    function process ( key, obj ) {
        switch ( obj[ _0x4ac6( "0x4e" ) ] ) {
            case list[ _0x4ac6( "0x41" ) ]:
                if ( key[ _0x4ac6( "0x59" ) ] ) {
                    return [ templates[ "msgParent" ]( loader_calback[ _0x4ac6( "0x53" ) ]() ) ];
                } else {
                    return [ templates[ _0x4ac6( "0x5a" ) ]( _0x13e8d5[ "initFinished" ]( key[ _0x4ac6( "0x5b" ) ][ "href" ] ) ) ];
                }
            case list[ _0x4ac6( "0x44" ) ]:
                switch ( obj[ "payload" ][ _0x4ac6( "0x4e" ) ] ) {
                    case list[ _0x4ac6( "0x3d" ) ]:
                        key[ "receiveKeys" ] = ![];
                        return [];
                    case list[ _0x4ac6( "0x3e" ) ]:
                        key[ _0x4ac6( "0x5c" ) ] = !![];
                        return [];
                    case list[ _0x4ac6( "0x47" ) ]:
                        var x = obj[ "payload" ][ _0x4ac6( "0x4f" ) ];
                        PL$3[ _0x4ac6( "0x6" ) ]( JSON[ _0x4ac6( "0x5d" ) ]( x ) );
                        key[ _0x4ac6( "0x5e" ) ] = x;
                        return [];
                    case list[ _0x4ac6( "0x4a" ) ]:
                        key[ _0x4ac6( "0x5f" ) ] = obj[ _0x4ac6( "0x4f" ) ][ _0x4ac6( "0x4f" ) ] / 10;
                        PL$3[ _0x4ac6( "0x7" ) ]( _0x4ac6( "0x60" )[ "concat" ]( key[ _0x4ac6( "0x5f" ) ], "." ) );
                        return [];
                    case list[ _0x4ac6( "0x48" ) ]:
                        return [ templates[ _0x4ac6( "0x58" ) ]() ];
                }case list[ "TRIGGER_ACTION" ]:
                return createChild( key, obj[ _0x4ac6( "0x4f" ) ] );
            case list[ _0x4ac6( "0x43" ) ]:
                return code( key, obj[ _0x4ac6( "0x4f" ) ] );
        }
    }
    function createChild ( index, data ) {
        if ( data == _0x4ac6( "0x61" ) ) {
            return [ templates[ "msgApp" ]( _0x13e8d5[ "rateApp" ]() ) ];
        } else {
            if ( index[ _0x4ac6( "0x59" ) ] ) {
                return [ templates[ _0x4ac6( "0x62" ) ]( loader_calback[ _0x4ac6( "0x52" ) ]( data ) ) ];
            } else {
                var _0x3a57d9 = data == "exit" ? templates[ _0x4ac6( "0x63" ) ]() : templates[ _0x4ac6( "0x64" ) ]( data );
                return [ templates[ _0x4ac6( "0x65" ) ]( loader_calback[ _0x4ac6( "0x52" ) ]( data ) ), _0x3a57d9 ];
            }
        }
    }
    function code ( url, data ) {
        switch ( data[ _0x4ac6( "0x4e" ) ] ) {
            case list[ _0x4ac6( "0x45" ) ]:
                var err = data[ _0x4ac6( "0x4f" ) ];
                if ( err == _0x4ac6( "0x61" ) ) {
                    return [];
                }
                var _0x288fb = err == _0x4ac6( "0x4d" ) ? templates[ "skipAllVideos" ]() : templates[ _0x4ac6( "0x64" ) ]( err );
                return [ templates[ _0x4ac6( "0x65" ) ]( data ), _0x288fb ];
            case list[ "FRAME_INIT_FINISHED" ]:
                if ( url[ "framed" ] ) {
                    return [ templates[ _0x4ac6( "0x62" ) ]( data ) ];
                } else {
                    return [ templates[ "msgApp" ]( _0x13e8d5[ _0x4ac6( "0x53" ) ]( url[ _0x4ac6( "0x5b" ) ][ _0x4ac6( "0xc" ) ] ) ) ];
                }
        }
    }
    function remove ( l, a ) {
        var PL$12 = [ _0x4ac6( "0x4b" ), _0x4ac6( "0x4c" ), "faster", _0x4ac6( "0x4d" ), _0x4ac6( "0x61" ) ];
        var PL$17 = 0;
        var PL$13 = PL$12;
        for ( ;PL$17 < PL$13[ _0x4ac6( "0xd" ) ];PL$17++ ) {
            var p = PL$13[ PL$17 ];
            var c = l[ p ];
            if ( c != null && update( c, a ) ) {
                return p;
            }
        }
        return null;
    }
    function update ( e, item ) {
        if ( item[ _0x4ac6( "0x6d" ) ] != e[ _0x4ac6( "0x6e" ) ] ) {
            return ![];
        }
        var inside = function relationshipHas ( property ) {
            return ( e[ _0x4ac6( "0x6f" ) ] & property ) == property;
        };
        return inside( props[ "Shift" ] ) == item[ _0x4ac6( "0x70" ) ] && inside( props[ "Control" ] ) == item[ _0x4ac6( "0x71" ) ] && inside( props[ _0x4ac6( "0x68" ) ] ) == item[ _0x4ac6( "0x72" ) ] && inside( props[ "Command" ] ) == item[ _0x4ac6( "0x73" ) ];
    }
    function addClass ( classNames ) {
        var name = classNames[ _0x4ac6( "0x74" ) ][ _0x4ac6( "0x75" ) ]();
        if ( name == "textarea" ) {
            return !![];
        }
        if ( name == _0x4ac6( "0x76" ) ) {
            return !![];
        }
        if ( classNames[ _0x4ac6( "0x77" ) ] ) {
            return !![];
        }
        return ![];
    }
    function createDispatcher ( ngModule ) {
        var _0x19fe67 = Math[ _0x4ac6( "0x7f" ) ]( Math[ "random" ]() * 1E10 )[ _0x4ac6( "0x1d" ) ]();
        var rc = document[ _0x4ac6( "0x0" ) ]( key );
        var el = registerPropertyDirectives( ngModule );
        ngModule[ "dataset" ][ _0x4ac6( "0x80" ) ] = _0x19fe67;
        rc[ "dataset" ][ _0x4ac6( "0x81" ) ] = _0x19fe67;
        return el[ "appendChild" ]( rc );
    }
    function registerEventDirectives ( ngModule ) {
        var taiji = registerPropertyDirectives( ngModule );
        var code_wrapper = ngModule[ _0x4ac6( "0x82" ) ][ _0x4ac6( "0x80" ) ];
        var code = '[data-video-id="'[ _0x4ac6( "0xb" ) ]( code_wrapper, '"]' );
        var _0x53e8fa = taiji[ _0x4ac6( "0x7c" ) ]( key + code );
        return _0x53e8fa != null ? _0x53e8fa : null;
    }
    function registerPropertyDirectives ( ngModule ) {
        var scrollLeft = 10;
        var oformathash = ngModule[ _0x4ac6( "0x83" ) ];
        var data_length = ngModule[ "offsetHeight" ];
        var B151 = [];
        var B152 = ngModule[ "parentElement" ];
        var firstColLeft = 1;
        for ( ;firstColLeft <= scrollLeft && B152 != null; ) {
            B151[ "unshift" ]( B152 );
            B152 = B152[ _0x4ac6( "0x84" ) ];
            firstColLeft++;
        }
        var indexLookupKey = 0;
        var nextIdLookup = B151;
        for ( ;indexLookupKey < nextIdLookup[ _0x4ac6( "0xd" ) ];indexLookupKey++ ) {
            var currentIndex = nextIdLookup[ indexLookupKey ];
            if ( currentIndex[ _0x4ac6( "0x83" ) ] == oformathash && currentIndex[ _0x4ac6( "0x85" ) ] == data_length && window[ _0x4ac6( "0x86" ) ]( currentIndex )[ _0x4ac6( "0x87" ) ] != _0x4ac6( "0x88" ) ) {
                return currentIndex;
            }
        }
        return ngModule[ _0x4ac6( "0x84" ) ] != null ? ngModule[ _0x4ac6( "0x84" ) ] : ngModule;
    }
    function set ( slot, value ) {
        var result = slot[ _0x4ac6( "0x89" ) ];
        var bodyContentWidth = Math[ _0x4ac6( "0x7f" ) ]( slot[ _0x4ac6( "0x85" ) ] * .8 );
        result[ "style" ][ _0x4ac6( "0x8a" ) ] = bodyContentWidth + "px";
        if ( result[ _0x4ac6( "0x7c" ) ]( _0x4ac6( "0x8b" ) ) == null ) {
            result[ _0x4ac6( "0x7b" ) ] = _0x4ac6( "0x8c" );
        }
        css( result[ _0x4ac6( "0x7c" ) ]( _0x4ac6( "0x8d" ) ), function ( canCreateDiscussions ) {
            canCreateDiscussions[ _0x4ac6( "0x8e" ) ] = value[ _0x4ac6( "0x8f" ) ]( 1 )[ 0 ];
        } );
        css( result[ _0x4ac6( "0x7c" ) ]( _0x4ac6( "0x90" ) ), function ( canCreateDiscussions ) {
            canCreateDiscussions[ _0x4ac6( "0x8e" ) ] = value[ _0x4ac6( "0x8f" ) ]( 1 )[ 2 ];
        } );
        makeTimeout( slot );
    }
    function elBinder ( slot ) {
        var bodyContentWidth = Math[ "floor" ]( slot[ _0x4ac6( "0x85" ) ] * .8 );
        slot[ _0x4ac6( "0x89" ) ][ _0x4ac6( "0x1" ) ][ _0x4ac6( "0x8a" ) ] = bodyContentWidth + "px";
        slot[ "contentElement" ][ _0x4ac6( "0x7b" ) ] = _0x4ac6( "0x91" );
        makeTimeout( slot );
    }
    function $ ( ngModule ) {
        return registerEventDirectives( ngModule ) || createDispatcher( ngModule );
    }
    function makeTimeout ( slot ) {
        var artistTrack = _0x4ac6( "0x92" );
        if ( slot[ _0x4ac6( "0x93" ) ] != null ) {
            window[ _0x4ac6( "0x94" ) ]( slot[ _0x4ac6( "0x93" ) ] );
        }
        slot[ "activationTimerId" ] = window[ "setTimeout" ]( function () {
            slot[ _0x4ac6( "0x95" ) ][ _0x4ac6( "0x96" ) ]( artistTrack );
            slot[ "activationTimerId" ] = null;
        }, 2E3 );
        slot[ _0x4ac6( "0x95" ) ][ _0x4ac6( "0x97" ) ]( artistTrack );
    }
    function replace ( data, filename, name ) {
        var filepath = resolve( data[ _0x4ac6( "0x9c" ) ], filename, name );
        PL$3[ _0x4ac6( "0x7" ) ]( "Setting video playback rate to "[ _0x4ac6( "0xb" ) ]( filepath[ _0x4ac6( "0x8f" ) ]( 1 ), "." ) );
        init( data, filepath );
    }
    function resolve ( callback, tag, collection ) {
        switch ( tag ) {
            case "slower":
                var suggestedValue = Math[ _0x4ac6( "0x9d" ) ]( callback * 10 - 1 ) / 10;
                return Math[ _0x4ac6( "0x9e" ) ]( value, suggestedValue );
            case _0x4ac6( "0x9f" ):
                var arg = Math[ _0x4ac6( "0x7f" ) ]( callback * 10 + 1 ) / 10;
                return Math[ _0x4ac6( "0xa0" ) ]( deltaX, arg );
            case _0x4ac6( "0x4c" ):
                return callback == 1 ? collection : 1;
        }
    }
    function expect ( data ) {
        if ( data[ "duration" ] != 0 ) {
            data[ _0x4ac6( "0xa1" ) ] = data[ _0x4ac6( "0xa2" ) ] - .1;
            return !![];
        } else {
            return ![];
        }
    }
    function init ( options, config ) {
        var selectorText = 500;
        var el = css( options[ "dataset" ][ _0x4ac6( "0xa3" ) ], parseFloat );
        var jsdoc = exec( options );
        if ( !jsdoc && el == null ) {
            apply( options, config );
            return;
        }
        if ( el != null ) {
            window[ "clearTimeout" ]( el );
        }
        if ( jsdoc ) {
            options[ _0x4ac6( "0xa4" ) ]();
        }
        apply( options, config );
        options[ "dataset" ][ _0x4ac6( "0xa3" ) ] = window[ _0x4ac6( "0xa5" ) ]( function () {
            delete options[ _0x4ac6( "0x82" ) ][ "gbxRateTimerId" ];
            options[ "play" ]();
        }, selectorText )[ _0x4ac6( "0x1d" ) ]();
    }
    function apply ( style, from ) {
        style[ _0x4ac6( "0x82" ) ][ _0x4ac6( "0xa6" ) ] = from[ _0x4ac6( "0x1d" ) ]();
        style[ _0x4ac6( "0x9c" ) ] = from;
    }
    function show ( node ) {
        if ( node[ "offsetParent" ] == null ) {
            return ![];
        }
        var style = getComputedStyle( node );
        if ( style[ "display" ] === "none" || style[ _0x4ac6( "0xa7" ) ] !== _0x4ac6( "0xa8" ) ) {
            return ![];
        }
        var g = css( style[ "opacity" ], parseFloat );
        if ( g != null && g < .1 ) {
            return ![];
        }
        var currentLayerBounds = node[ _0x4ac6( "0xa9" ) ]();
        var ret = {
            "width": document[ _0x4ac6( "0xaa" ) ][ _0x4ac6( "0xab" ) ] || window[ _0x4ac6( "0xac" ) ],
            "height": document[ _0x4ac6( "0xaa" ) ][ _0x4ac6( "0xad" ) ] || window[ _0x4ac6( "0xae" ) ]
        };
        if ( node[ "offsetWidth" ] + node[ "offsetHeight" ] + currentLayerBounds[ _0x4ac6( "0xaf" ) ] + currentLayerBounds[ "width" ] === 0 ) {
            return ![];
        }
        if ( currentLayerBounds[ _0x4ac6( "0xb0" ) ] < 0 || currentLayerBounds[ _0x4ac6( "0xb1" ) ] < 0 ) {
            return ![];
        }
        if ( currentLayerBounds[ _0x4ac6( "0xb2" ) ] > ret[ _0x4ac6( "0xb3" ) ] || currentLayerBounds[ _0x4ac6( "0x5" ) ] > ret[ _0x4ac6( "0xaf" ) ] ) {
            return ![];
        }
        return !![];
    }
    function exec ( res ) {
        return !!( res[ _0x4ac6( "0xa1" ) ] > 0 && !res[ _0x4ac6( "0xb4" ) ] && !res[ _0x4ac6( "0xb5" ) ] && res[ _0x4ac6( "0xb6" ) ] > 2 );
    }
    function message ( strings ) {
        if ( strings[ _0x4ac6( "0xca" ) ] instanceof HTMLVideoElement ) {
            var string = strings[ _0x4ac6( "0xca" ) ];
            var pattern_char = css( string[ _0x4ac6( "0x82" ) ][ _0x4ac6( "0xa6" ) ], parseFloat );
            if ( pattern_char != null && pattern_char != string[ "playbackRate" ] ) {
                strings[ _0x4ac6( "0xca" ) ][ "playbackRate" ] = pattern_char;
            }
        }
        strings[ _0x4ac6( "0xcb" ) ]();
        return ![];
    }
    var ignore = function prefetchGroupsInfo ( canCreateDiscussions ) {
    };
    var dummyLogger = {
        "debug": wrapConsoleMethod( console[ _0x4ac6( "0x6" ) ] ),
        "info": wrapConsoleMethod( console[ _0x4ac6( "0x7" ) ] ),
        "warn": wrapConsoleMethod( console[ _0x4ac6( "0x8" ) ] ),
        "error": wrapConsoleMethod( console[ _0x4ac6( "0x9" ) ] )
    };
    var messageTypes = {
        "debug": ignore,
        "info": ignore,
        "warn": ignore,
        "error": ignore
    };
    var PL$3 = messageTypes;
    var list;
    ( function ( me ) {
        me[ _0x4ac6( "0x38" ) ] = "MSG_APP";
        me[ _0x4ac6( "0x39" ) ] = _0x4ac6( "0x39" );
        me[ _0x4ac6( "0x3a" ) ] = _0x4ac6( "0x3a" );
        me[ _0x4ac6( "0x3b" ) ] = _0x4ac6( "0x3b" );
        me[ "SKIP_ALL" ] = _0x4ac6( "0x3c" );
        me[ _0x4ac6( "0x3d" ) ] = _0x4ac6( "0x3d" );
        me[ _0x4ac6( "0x3e" ) ] = _0x4ac6( "0x3e" );
        me[ _0x4ac6( "0x3f" ) ] = _0x4ac6( "0x3f" );
        me[ _0x4ac6( "0x40" ) ] = "VIDEO_SKIPPED";
        me[ _0x4ac6( "0x41" ) ] = "INITIALIZE";
        me[ _0x4ac6( "0x42" ) ] = _0x4ac6( "0x42" );
        me[ _0x4ac6( "0x43" ) ] = "RECEIVE_FRAME_MSG";
        me[ _0x4ac6( "0x44" ) ] = _0x4ac6( "0x44" );
        me[ _0x4ac6( "0x45" ) ] = _0x4ac6( "0x45" );
        me[ _0x4ac6( "0x46" ) ] = _0x4ac6( "0x46" );
        me[ _0x4ac6( "0x47" ) ] = "SET_SHORTCUTS";
        me[ "PAUSE_ALL_VIDEOS" ] = _0x4ac6( "0x48" );
        me[ _0x4ac6( "0x49" ) ] = "RATE_APP";
        me[ "SET_DEFAULT_SPEED_PRESET" ] = "SET_DEFAULT_SPEED_PRESET";
    } )( list || ( list = {} ) );
    var options = {
        "initialize": function bundlee () {
            return on( list[ _0x4ac6( "0x41" ) ] );
        },
        "triggerAction": function showOrHideImage ( hide ) {
            return on( list[ _0x4ac6( "0x42" ) ], hide );
        },
        "receiveFrameMsg": function showOrHideImage ( hide ) {
            return on( list[ _0x4ac6( "0x43" ) ], hide );
        },
        "receiveAppMsg": function showOrHideImage ( hide ) {
            return on( list[ _0x4ac6( "0x44" ) ], hide );
        }
    };
    var loader_calback = {
        "actionTriggered": function showOrHideImage ( hide ) {
            return on( list[ _0x4ac6( "0x45" ) ], hide );
        },
        "initFinished": function bundlee () {
            return on( list[ _0x4ac6( "0x46" ) ] );
        }
    };
    var _0x13e8d5 = {
        "initFinished": function showOrHideImage ( hide ) {
            return on( list[ "INIT_FINISHED" ], hide );
        },
        "videoSkipped": function bundlee () {
            return on( list[ _0x4ac6( "0x40" ) ] );
        },
        "rateApp": function bundlee () {
            return on( list[ _0x4ac6( "0x49" ) ] );
        }
    };
    var packByNumType = {
        "enableBypass": function bundlee () {
            return on( list[ _0x4ac6( "0x3d" ) ] );
        },
        "disableBypass": function bundlee () {
            return on( list[ _0x4ac6( "0x3e" ) ] );
        },
        "setShortcuts": function showOrHideImage ( hide ) {
            return on( list[ _0x4ac6( "0x47" ) ], hide );
        },
        "setDefaultSpeedPreset": function showOrHideImage ( hide ) {
            return on( list[ _0x4ac6( "0x4a" ) ], hide );
        },
        "pauseAllVideos": function bundlee () {
            return on( list[ "PAUSE_ALL_VIDEOS" ] );
        }
    };
    var templates = {
        "msgApp": function showOrHideImage ( hide ) {
            return on( list[ "MSG_APP" ], hide );
        },
        "msgParent": function showOrHideImage ( hide ) {
            return on( list[ _0x4ac6( "0x39" ) ], hide );
        },
        "msgChildren": function showOrHideImage ( hide ) {
            return on( list[ _0x4ac6( "0x3a" ) ], hide );
        },
        "gearAllVideos": function showOrHideImage ( hide ) {
            return on( list[ _0x4ac6( "0x3b" ) ], hide );
        },
        "skipAllVideos": function bundlee () {
            return on( list[ _0x4ac6( "0x3c" ) ] );
        },
        "pauseAllVideos": function bundlee () {
            return on( list[ _0x4ac6( "0x48" ) ] );
        }
    };
    var props;
    ( function ( canCreateDiscussions ) {
        canCreateDiscussions[ canCreateDiscussions[ _0x4ac6( "0x66" ) ] = 131072 ] = _0x4ac6( "0x66" );
        canCreateDiscussions[ canCreateDiscussions[ "Control" ] = 262144 ] = _0x4ac6( "0x67" );
        canCreateDiscussions[ canCreateDiscussions[ _0x4ac6( "0x68" ) ] = 524288 ] = _0x4ac6( "0x68" );
        canCreateDiscussions[ canCreateDiscussions[ _0x4ac6( "0x69" ) ] = 1048576 ] = _0x4ac6( "0x69" );
    } )( props || ( props = {} ) );
    var callbacks = {
        "slower": {
            "keyCode": _0x4ac6( "0x6a" ),
            "modifiers": 0
        },
        "normal": {
            "keyCode": "KeyD",
            "modifiers": 0
        },
        "faster": {
            "keyCode": _0x4ac6( "0x6b" ),
            "modifiers": 0
        },
        "exit": {
            "keyCode": _0x4ac6( "0x6c" ),
            "modifiers": 0
        }
    };
    var key = _0x4ac6( "0x78" );
    var GET_AUTH_URL_TIMEOUT = function ( undefined ) {
        function defaults () {
            var dft;
            assign( this, defaults );
            dft = config[ _0x4ac6( "0x1e" ) ]( this );
            var particips = dft[ _0x4ac6( "0x79" ) ]( {
                "mode": _0x4ac6( "0x7a" )
            } );
            particips[ _0x4ac6( "0x7b" ) ] = p;
            dft[ "contentElement" ] = particips[ _0x4ac6( "0x7c" ) ]( _0x4ac6( "0x7d" ) );
            dft[ "activationTimerId" ] = null;
            return dft;
        }
        get( defaults, undefined );
        var config = loadConfig( defaults );
        return defaults;
    }( register( HTMLElement ) );
    if ( customElements[ _0x4ac6( "0x23" ) ]( key ) == undefined ) {
        customElements[ _0x4ac6( "0x7e" ) ]( key, GET_AUTH_URL_TIMEOUT );
    }
    var falseySection = _0x4ac6( "0x98" );
    var B78 = "\ndata:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8ZyBpZD0iU1ZHLUV4aXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iRHluYW1vLWljbyIgZmlsbD0iI0ZGRkZGRiI+DQogICAgICAgICAgICA8cGF0aCBkPSJNMTI4LDI1NiBDNTcuMzA3NTUyLDI1NiAwLDE5OC42OTI0NDggMCwxMjggQzAsNTcuMzA3NTUyIDU3LjMwNzU1MiwwIDEyOCwwIEMxOTguNjkyNDQ4LDAgMjU2LDU3LjMwNzU1MiAyNTYsMTI4IEMyNTYsMTk4LjY5MjQ0OCAxOTguNjkyNDQ4LDI1NiAxMjgsMjU2IFogTTExMC4wMzQ3MzUsOTYuNDI1MzU1OCBMNjMuOTcwMjA2LDEyMy4wMjI3NjYgQzU5LjA2Mzg1NSwxMjUuODU1NjY2IDU2LjA0MTQ1ODksMTMxLjA5MDgxMSA1Ni4wNDE0NTg5LDEzNi43NTYyODUgTDU2LjA0MTQ1ODksMTgwLjgwOTI1MyBDNTYuMDQxNDU4OSwxODYuNDc0NzI4IDU5LjA2Mzg1NSwxOTEuNzA5ODcyIDYzLjk3MDIwNiwxOTQuNTQyNzczIEwxMTAuMDQ2MTAxLDIyMS4xNDY3NDUgTDExMC4wNDYxMDEsOTYuNDMxOTExNSBMMTYzLjg0NDY3NSwxMjcuNDYyMzA4IEwxMTAuMDQ2MTAxLDE1OC40OTI3MDQgTDE1Ni4xNTc3OSwxODUuMDYxNDU5IEMxNjEuMDYwNTA5LDE4Ny44ODYzMjEgMTY3LjA5NjkzOCwxODcuODg0OTQ4IDE3MS45OTgzNzIsMTg1LjA1Nzg1OCBMMjEwLjIwOTY5MSwxNjMuMDE4MDEgQzIxNS4xMTczMjcsMTYwLjE4NzM0MyAyMTguMTQyMTAyLDE1NC45NTM1NzggMjE4LjE0NDY4MiwxNDkuMjg4MTA3IEwyMTguMTY4ODg5LDk2LjEyODcyODIgTDE2My44NzM4ODQsMTI3LjQ0NTQ2IEwxNjMuODQ5NjkzLDc0LjMxOTc4NTEgQzE2My44NDcxMTMsNjguNjU0MzE0NyAxNjAuODIyMzM3LDYzLjQyMDU0OTkgMTU1LjkxNDcwMiw2MC41ODk4ODI1IEwxMTcuNzAzMzgyLDM4LjU1MDAzNDYgQzExMi44MDE5NDksMzUuNzIyOTQ0MSAxMDYuNzY1NTE5LDM1LjcyMTU3MTggMTAxLjg2MjgsMzguNTQ2NDMzMiBMNTUuNzUxMTExNCw2NS4xMTUxODgyIEwxMTAuMDM0NzM1LDk2LjQyNTM1NTggWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=";
    var top_prob = _0x4ac6( "0x99" );
    var p = _0x4ac6( "0x9a" )[ "concat" ]( B78, _0x4ac6( "0x9b" ) )[ _0x4ac6( "0xb" ) ]( top_prob, ');background-size: contain;background-repeat: no-repeat;background-position-x: right;}\n.hud-exit span {visibility: hidden;}</style><div id="content"><span>HUD</span></div>\n' );
    var deltaX = 9.9;
    var value = .1;
    var Head = {
        "onVideoGear": function prefetchGroupsInfo ( canCreateDiscussions ) {
            var _0x1df4bf = document[ _0x4ac6( "0xb7" ) ]( _0x4ac6( "0xb8" ) );
            _0x1df4bf[ _0x4ac6( "0xb9" ) ]( function ( canCreateDiscussions ) {
                canCreateDiscussions[ _0x4ac6( "0x96" ) ]();
            } );
        }
    };
    var lat = {
        "onVideoSkip": function setParameters () {
            window[ _0x4ac6( "0xa5" ) ]( function () {
                var _0x2a01f7 = document[ "querySelector" ]( "button.videoAdUiSkipButton, button.ytp-ad-skip-button" );
                if ( _0x2a01f7 != null ) {
                    _0x2a01f7[ _0x4ac6( "0xba" ) ]();
                }
            }, 500 );
        }
    };
    var lng = {
        "onPageLoad": function construct () {
            var command_codes = window[ _0x4ac6( "0x5b" ) ][ _0x4ac6( "0xc" ) ];
            var exports = [ "qq.com", _0x4ac6( "0xbb" ), _0x4ac6( "0xbc" ), _0x4ac6( "0xbd" ), _0x4ac6( "0xbe" ), _0x4ac6( "0xbf" ), _0x4ac6( "0xc0" ), _0x4ac6( "0xc1" ), _0x4ac6( "0xc2" ), _0x4ac6( "0xc3" ), _0x4ac6( "0xc4" ), _0x4ac6( "0xc5" ), "tomsguide.com", _0x4ac6( "0xc6" ) ];
            if ( exports[ "every" ]( function ( data ) {
                return command_codes[ _0x4ac6( "0xc7" ) ]( data ) == -1;
            } ) ) {
                return;
            }
            window[ _0x4ac6( "0xc8" ) ]( _0x4ac6( "0xc9" ), message, !![] );
        }
    };
    var input = [ lat, lng, Head ];
    var Rectangle = function () {
        function init () {
            assign( this, init );
            callback( document, falseySection );
            this[ "state" ] = {
                "location": window[ "location" ],
                "bindings": callbacks,
                "framed": autocomplete( window ),
                "receiveKeys": !![],
                "defaultSpeed": 1
            };
            this[ _0x4ac6( "0xcc" ) ] = this[ _0x4ac6( "0xcd" ) ][ "bind" ]( this );
            this[ _0x4ac6( "0xce" ) ] = this[ _0x4ac6( "0xcf" ) ][ _0x4ac6( "0x20" ) ]( this );
            document[ "addEventListener" ]( _0x4ac6( "0xd0" ), this[ _0x4ac6( "0xcc" ) ], !![] );
            document[ _0x4ac6( "0xc8" ) ]( _0x4ac6( "0xd1" ), this[ _0x4ac6( "0xce" ) ], !![] );
            window[ _0x4ac6( "0xc8" ) ]( _0x4ac6( "0xd2" ), this[ _0x4ac6( "0xd3" ) ][ _0x4ac6( "0x20" ) ]( this ) );
            if ( typeof safari !== _0x4ac6( "0x1a" ) ) {
                safari[ "self" ][ _0x4ac6( "0xc8" ) ]( _0x4ac6( "0xd2" ), this[ "receiveAppExtensionMessage" ][ "bind" ]( this ) );
            }
            this[ "dispatch" ]( options[ "initialize" ]() );
            var r = f( input );
            var OPERATION_DESCRIPTORS;
            try {
                r[ "s" ]();
                for ( ;!( OPERATION_DESCRIPTORS = r[ "n" ]() )[ _0x4ac6( "0x37" ) ]; ) {
                    var descriptionName = OPERATION_DESCRIPTORS[ "value" ];
                    if ( descriptionName[ "onPageLoad" ] != null ) {
                        descriptionName[ _0x4ac6( "0xd4" ) ]();
                    }
                }
            } catch ( f ) {
                r[ "e" ]( f );
            } finally {
                r[ "f" ]();
            }
        }
        test( init, [ {
            "key": "dispatch",
            "value": function init ( value ) {
                var artistTrack = Object[ _0x4ac6( "0xd5" ) ]( {}, this[ "state" ] );
                var s = process( this[ _0x4ac6( "0xd6" ) ], value );
                this[ _0x4ac6( "0xd7" ) ]( artistTrack, this[ _0x4ac6( "0xd6" ) ] );
                var r = f( s );
                var widgetArr;
                try {
                    r[ "s" ]();
                    for ( ;!( widgetArr = r[ "n" ]() )[ _0x4ac6( "0x37" ) ]; ) {
                        var _maskLayer = widgetArr[ _0x4ac6( "0x2c" ) ];
                        this[ _0x4ac6( "0xd8" ) ]( _maskLayer );
                    }
                } catch ( f ) {
                    r[ "e" ]( f );
                } finally {
                    r[ "f" ]();
                }
            }
        }, {
            "key": _0x4ac6( "0xd7" ),
            "value": function getChangedBytes ( dump1, dump2 ) {
                if ( dump1[ _0x4ac6( "0x5c" ) ] != dump2[ _0x4ac6( "0x5c" ) ] ) {
                    if ( dump2[ "receiveKeys" ] ) {
                        document[ _0x4ac6( "0xc8" ) ]( _0x4ac6( "0xd0" ), this[ _0x4ac6( "0xcc" ) ], !![] );
                        document[ _0x4ac6( "0xc8" ) ]( _0x4ac6( "0xd1" ), this[ _0x4ac6( "0xce" ) ], !![] );
                    } else {
                        document[ _0x4ac6( "0xd9" ) ]( _0x4ac6( "0xd0" ), this[ "keyDownToken" ], !![] );
                        document[ _0x4ac6( "0xd9" ) ]( "keyup", this[ _0x4ac6( "0xce" ) ], !![] );
                    }
                }
            }
        }, {
            "key": _0x4ac6( "0xd8" ),
            "value": function twoFieldSwitchTest ( aCheckall ) {
                switch ( aCheckall[ _0x4ac6( "0x4e" ) ] ) {
                    case list[ _0x4ac6( "0x38" ) ]:
                        if ( typeof safari === _0x4ac6( "0x1a" ) ) {
                            break;
                        }
                        var scope = prepMeterData( aCheckall[ _0x4ac6( "0x4f" ) ] );
                        var values = getValue( scope, 2 );
                        var roomVal = values[ 0 ];
                        var garaponUrl = values[ 1 ];
                        safari[ _0x4ac6( "0xda" ) ][ _0x4ac6( "0xdb" ) ]( roomVal, garaponUrl );
                        break;
                    case list[ _0x4ac6( "0x39" ) ]:
                        this[ _0x4ac6( "0xdc" ) ]( aCheckall[ "payload" ] );
                        break;
                    case list[ _0x4ac6( "0x3a" ) ]:
                        this[ "sendMessageToChildWindows" ]( aCheckall[ _0x4ac6( "0x4f" ) ] );
                        break;
                    case list[ "GEAR_ALL" ]:
                        this[ "gearAllVideos" ]( aCheckall[ _0x4ac6( "0x4f" ) ] );
                        break;
                    case list[ _0x4ac6( "0x3c" ) ]:
                        this[ "skipAllVideos" ]();
                        break;
                    case list[ "PAUSE_ALL_VIDEOS" ]:
                        this[ _0x4ac6( "0x58" ) ]();
                        break;
                }
            }
        }, {
            "key": _0x4ac6( "0x64" ),
            "value": function MakeLineChart ( x ) {
                var dist01 = document[ _0x4ac6( "0xdd" ) ]( _0x4ac6( "0xde" ) );
                if ( dist01[ _0x4ac6( "0xd" ) ] == 0 ) {
                    return;
                }
                PL$3[ _0x4ac6( "0x7" ) ]( "Gearing "[ _0x4ac6( "0xb" ) ]( dist01[ _0x4ac6( "0xd" ) ], _0x4ac6( "0xdf" ) )[ _0x4ac6( "0xb" ) ]( x, "." ) );
                var r = f( dist01 );
                var jsonSerializableMetadata;
                try {
                    r[ "s" ]();
                    for ( ;!( jsonSerializableMetadata = r[ "n" ]() )[ _0x4ac6( "0x37" ) ]; ) {
                        var name = jsonSerializableMetadata[ _0x4ac6( "0x2c" ) ];
                        replace( name, x, this[ _0x4ac6( "0xd6" ) ][ _0x4ac6( "0x5f" ) ] );
                        if ( show( name ) ) {
                            set( $( name ), name[ _0x4ac6( "0x9c" ) ] );
                        }
                        var r = f( input );
                        var tiledImageBRs;
                        try {
                            r[ "s" ]();
                            for ( ;!( tiledImageBRs = r[ "n" ]() )[ "done" ]; ) {
                                var tiledImageBR = tiledImageBRs[ _0x4ac6( "0x2c" ) ];
                                if ( tiledImageBR[ "onVideoGear" ] != null ) {
                                    tiledImageBR[ _0x4ac6( "0xe0" ) ]( name );
                                }
                            }
                        } catch ( f ) {
                            r[ "e" ]( f );
                        } finally {
                            r[ "f" ]();
                        }
                    }
                } catch ( f ) {
                    r[ "e" ]( f );
                } finally {
                    r[ "f" ]();
                }
            }
        }, {
            "key": "pauseAllVideos",
            "value": function MakeLineChart () {
                var b = document[ _0x4ac6( "0xdd" ) ]( _0x4ac6( "0xde" ) );
                if ( b[ _0x4ac6( "0xd" ) ] > 0 ) {
                    PL$3[ _0x4ac6( "0x7" ) ]( _0x4ac6( "0xe1" )[ _0x4ac6( "0xb" ) ]( b[ "length" ], _0x4ac6( "0xe2" ) ) );
                }
                var r = f( b );
                var tiledImageBRs;
                try {
                    r[ "s" ]();
                    for ( ;!( tiledImageBRs = r[ "n" ]() )[ "done" ]; ) {
                        var tiledImageBR = tiledImageBRs[ _0x4ac6( "0x2c" ) ];
                        tiledImageBR[ _0x4ac6( "0xa4" ) ]();
                    }
                } catch ( f ) {
                    r[ "e" ]( f );
                } finally {
                    r[ "f" ]();
                }
            }
        }, {
            "key": _0x4ac6( "0x63" ),
            "value": function init () {
                var _0xe83516 = ![];
                var index = document[ _0x4ac6( "0xdd" ) ]( "video" );
                if ( index[ _0x4ac6( "0xd" ) ] > 0 ) {
                    PL$3[ "info" ]( _0x4ac6( "0xe3" )[ "concat" ]( index[ _0x4ac6( "0xd" ) ], _0x4ac6( "0xe2" ) ) );
                }
                var r = f( index );
                var result;
                try {
                    r[ "s" ]();
                    for ( ;!( result = r[ "n" ]() )[ _0x4ac6( "0x37" ) ]; ) {
                        var element = result[ _0x4ac6( "0x2c" ) ];
                        if ( element[ "offsetParent" ] == null ) {
                            continue;
                        }
                        if ( !exec( element ) ) {
                            continue;
                        }
                        if ( expect( element ) ) {
                            elBinder( $( element ) );
                            _0xe83516 = !![];
                        }
                    }
                } catch ( f ) {
                    r[ "e" ]( f );
                } finally {
                    r[ "f" ]();
                }
                var b = f( input );
                var tiledImageBRs;
                try {
                    b[ "s" ]();
                    for ( ;!( tiledImageBRs = b[ "n" ]() )[ _0x4ac6( "0x37" ) ]; ) {
                        var tiledImageBR = tiledImageBRs[ _0x4ac6( "0x2c" ) ];
                        if ( tiledImageBR[ _0x4ac6( "0xe4" ) ] != null ) {
                            tiledImageBR[ _0x4ac6( "0xe4" ) ]();
                        }
                    }
                } catch ( e ) {
                    b[ "e" ]( e );
                } finally {
                    b[ "f" ]();
                }
                if ( _0xe83516 ) {
                    this[ _0x4ac6( "0xd8" ) ]( templates[ _0x4ac6( "0x5a" ) ]( _0x13e8d5[ _0x4ac6( "0xe5" ) ]() ) );
                }
            }
        }, {
            "key": _0x4ac6( "0xcd" ),
            "value": function _run ( e ) {
                var item = this[ "filterAndDecodeInputEvent" ]( e );
                if ( item != null ) {
                    e[ _0x4ac6( "0xcb" ) ]();
                    e[ "preventDefault" ]();
                    this[ "dispatch" ]( options[ "triggerAction" ]( item ) );
                    return ![];
                } else {
                    return !![];
                }
            }
        }, {
            "key": _0x4ac6( "0xcf" ),
            "value": function almost_equals ( label ) {
                if ( this[ _0x4ac6( "0xe6" ) ]( label ) != null ) {
                    label[ _0x4ac6( "0xcb" ) ]();
                    label[ _0x4ac6( "0xe7" ) ]();
                    return ![];
                } else {
                    return !![];
                }
            }
        }, {
            "key": _0x4ac6( "0xe6" ),
            "value": function remove ( elements ) {
                var removed = remove( this[ "state" ][ _0x4ac6( "0x5e" ) ], elements );
                if ( removed == null ) {
                    return null;
                }
                if ( elements[ "target" ] instanceof HTMLElement && addClass( elements[ "target" ] ) ) {
                    return null;
                }
                return removed;
            }
        }, {
            "key": _0x4ac6( "0xdc" ),
            "value": function writeSearchEntry ( output ) {
                var t = window[ _0x4ac6( "0xe8" ) ];
                if ( t === window ) {
                    throw "Precondition failed, trying to message parent window from a top-level window.";
                }
                PL$3[ _0x4ac6( "0x6" ) ]( _0x4ac6( "0xe9" )[ _0x4ac6( "0xb" ) ]( output[ _0x4ac6( "0x4e" ) ], "." ) );
                t[ _0x4ac6( "0xea" ) ]( _0x4ac6( "0xeb" ) + write( output ), "*" );
            }
        }, {
            "key": _0x4ac6( "0xec" ),
            "value": function init ( elem ) {
                var dist01 = document[ _0x4ac6( "0xdd" ) ]( _0x4ac6( "0xed" ) );
                if ( dist01[ _0x4ac6( "0xd" ) ] == 0 ) {
                    return;
                }
                PL$3[ _0x4ac6( "0x6" ) ]( _0x4ac6( "0xee" )[ _0x4ac6( "0xb" ) ]( dist01[ _0x4ac6( "0xd" ) ], _0x4ac6( "0xef" ) )[ "concat" ]( elem[ "tag" ], "." ) );
                var r = f( dist01 );
                var tiledImageBRs;
                try {
                    r[ "s" ]();
                    for ( ;!( tiledImageBRs = r[ "n" ]() )[ _0x4ac6( "0x37" ) ]; ) {
                        var tiledImageBR = tiledImageBRs[ _0x4ac6( "0x2c" ) ];
                        if ( tiledImageBR[ _0x4ac6( "0xf0" ) ] == null ) {
                            continue;
                        }
                        tiledImageBR[ "contentWindow" ][ _0x4ac6( "0xea" ) ]( _0x4ac6( "0xeb" ) + write( elem ), "*" );
                    }
                } catch ( f ) {
                    r[ "e" ]( f );
                } finally {
                    r[ "f" ]();
                }
            }
        }, {
            "key": _0x4ac6( "0xd3" ),
            "value": function startsWith ( results ) {
                var path = results[ _0x4ac6( "0xf1" ) ];
                if ( typeof path !== _0x4ac6( "0xf2" ) || !path[ "startsWith" ]( _0x4ac6( "0xeb" ) ) ) {
                    return;
                }
                path = path[ _0x4ac6( "0x51" ) ]( _0x4ac6( "0xeb" ), "" );
                var datum = startsWith( path );
                if ( datum != null ) {
                    PL$3[ _0x4ac6( "0x6" ) ]( _0x4ac6( "0xf3" )[ _0x4ac6( "0xb" ) ]( datum[ _0x4ac6( "0x4e" ) ], "." ) );
                    this[ _0x4ac6( "0xf4" ) ]( options[ _0x4ac6( "0xf5" ) ]( datum ) );
                }
            }
        }, {
            "key": _0x4ac6( "0xf6" ),
            "value": function init ( p ) {
                var message = fn( p[ "name" ], p[ _0x4ac6( "0xd2" ) ] );
                if ( message != null ) {
                    PL$3[ _0x4ac6( "0x6" ) ]( _0x4ac6( "0xf7" )[ _0x4ac6( "0xb" ) ]( message[ "tag" ], "." ) );
                    this[ "dispatch" ]( options[ "receiveAppMsg" ]( message ) );
                } else {
                    PL$3[ _0x4ac6( "0x9" ) ]( _0x4ac6( "0xf8" )[ _0x4ac6( "0xb" ) ]( p[ _0x4ac6( "0x30" ) ], "." ) );
                }
            }
        } ] );
        return init;
    }();
    var updateDevicesAfterDelay = function alignCenterAndHeight () {
        var artistTrack = "gbx-installed";
        var bindThis = function getFitBoundsFunction () {
            return document[ "body" ][ _0x4ac6( "0x95" ) ][ _0x4ac6( "0xf9" ) ]( artistTrack );
        };
        var isLoading = function getFitBoundsFunction () {
            return document[ _0x4ac6( "0xfa" ) ][ _0x4ac6( "0x95" ) ][ _0x4ac6( "0x97" ) ]( artistTrack );
        };
        if ( !bindThis() ) {
            isLoading();
            new Rectangle;
        }
    };
    if ( !autocomplete( window ) ) {
        if ( document[ _0x4ac6( "0xb6" ) ] == _0x4ac6( "0xfb" ) ) {
            document[ _0x4ac6( "0xc8" ) ]( _0x4ac6( "0xfc" ), function () {
                updateDevicesAfterDelay();
            } );
        } else {
            updateDevicesAfterDelay();
        }
    } else {
        window[ "addEventListener" ]( "load", function () {
            updateDevicesAfterDelay();
        } );
    }
} )();