import { base } from "$app/paths";

export const sites = JSON.parse( `{"root":{"name":"Basic"},"nf":{"name":"Netflix","prelink":"https://netflix.com/search?q="},"git":{"name":"GitHub","prelink":"https://github.com/search?&q="},"qm":{"name":"q"},"s":{"name":"q","prelink":"https://google.com/search?q="},"qi":{"name":"q","prelink":"https://google.com/search?q=","postlink":"&tbm=isch"},"r":{"name":"Reddit","base":"https://reddit.com/","prelink":"https://reddit.com/search?q="},"y":{"name":"Youtube","prelink":"/stream?q="},"ap":{"name":"Amazon","prelink":"https://primevideo.com/search/ref=atv_nb_sr?phrase=","postlink":"&ie=UTF8"},"dict":{"name":"Webster","prelink":"https://www.merriam-webster.com/dictionary/"},"wiki":{"name":"Wikipedia","prelink":"https://en.wikipedia.org/wiki/Special:Search?search="}}` );

export const quickPages = JSON.parse( `{
    "wa": { "url": "https://web.whatsapp.com/" },
    "notes": { "url": "${ base }/notes" },"note": { "url": "${ base }/notes" },
    "news": { "url": "${ base }/social" },
    "yt": { "url": "${ base }/stream" },"nebula": { "url": "${ base }/stream" },"video": { "url": "${ base }/stream" },
    "cal": { "url": "${ base }/calendar" },
    "mon": { "url": "${ base }/monitor" },
    "debug": { "url": "${ base }/debug" },"w3": { "url": "${ base }/debug" },"repl": { "url": "${ base }/debug" }
}`);