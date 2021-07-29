# Ronin v6 (MacOS)

## Installation

```bash
$ alias ronin='sh ~/Documents/GitHub.nosync/Ronin/scripts/ronin'

# install dependencies
$ brew install smckit

$ pnpm i

# run
$ npm run start
```

## RoninScript
### Shorthand
For QuerySelectors
```js
ƒ = document.querySelector;
ƒA = document.querySelectorAll;
```

### New Functions
Run function externally in a worker (run long function while keeping interactive )
```js
thread(reallyReallyLongFunction).then(console.log) // logs return value of reallyReallyLongFunction
```

Escape and Unescape HTML
```js
escape('<a href="#">Me & you</a>'); //returns '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
unescape('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'); // returns // '<a href="#">Me & you</a>'
```

URL Params
```js
getµ().q // returns the value of (?/&)q= from all params
setµ(key, value) // adds to URL (?/&)key=value
```


## Todos
- https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation
- https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information
- https://www.assemblyscript.org/introduction.html
- https://www.youtube.com/watch?v=u0Jgz6QVJqg
- https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari