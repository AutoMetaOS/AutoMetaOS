# API Docs
General Structure
`/Endpoint/SubEndpoint?param=value&param=value`

## Quick `/quick`
Endpoints meant to be returned frequently. Ideally I would plan to make these faster and make some optimizations later idk.

### Suggest `/quick/suggest`
Accepts: URL Params \
Example: `/quick/suggest?q=New%20York%20City`
```ts
q: string = "New York City"
```
```js
// Returns
[
    [ "Work All this out in frontend" ],
    [ "Exact format", 10, "is" ],
    [ "Variable", "." ]
]
```

### Metadata `/quick/metadata`
Accepts: URL Params \
Example: `/quick/metadata?url=https://nukes.in/`
```ts
url: string = "Website URL"
```
```json
// Returns
{
    "meta": {
        "site": {
            "favicon": "https://nukes.in/favicon.png"
        },
        "description": "Don't worry I'm a coder",
        "type": "website",
        "title": "Plutoniumm",
        "image": "/assets/meta.png"
    },
    "result": {
        "status": "OK"
    }
}
```

## CMS `/cms`
These are all redirect endpoints for Content Management System.
### css `/cms/css`
Accepts: URL Params \
Example: `/cms/css?name=keyframes.css`
```ts
name: string = "keyframes.css"
```
Redirects to: [https://cdn.jsdelivr.net/gh/AutoMetaOS/UI@deploy/css/keyframes.css](https://cdn.jsdelivr.net/gh/AutoMetaOS/UI@deploy/css/keyframes.css) \
<div class="warn" font-style="italic">
This endpoint may change, its there in the first place to not break frontends if the structure changes
</div>

<!-- ### icon `/cms/icon`
icon: {
        type: "redirect",
        url: cms_icons
    }, -->

## Social `/social`
These are all redirect endpoints for Social Media.
<!-- ### twitter `/social/twitter`
twitter: {
        type: "func",
        // gets tweet data from tweet id
        func: twitter_tweet,
        filter: (params: any): string => params.get('id')
    }, -->

<!-- ### youtube `/social/youtube`
youtube: {
        type: "func",
        func: youtubeHandler,
        filter: youtube_filter
    }, -->

<!-- ### Behance `/social/behance`
behance: {
        type: "func",
        func: (params: any): string => params.get('id'),
        filter: defaultFunction
    } -->