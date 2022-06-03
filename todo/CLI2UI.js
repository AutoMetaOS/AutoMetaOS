export const CLI2UI = {
    ytd: {
        cmd: ( url ) => `youtube-dl ${ url } --no-check-certificate`,
    },
    ig: {
        cmd: ( url, usr, pwd ) => `instagram-scraper ${ url } -u ${ usr } -p ${ pwd }`,
    }
}