import { preprocessor, engine } from "../../public/shared/js/samurai";
import { validity } from "./functions";

export const preprocessorTests = [
    validity(
        preprocessor,
        { key: "r", query: "/test1", url: "Test Failed" },
        "https://www.reddit.com/r/test1"
    ),
    validity(
        preprocessor,
        {
            key: "r",
            query: "test2",
            url: "https://www.reddit.com/search?q=test2",
        },
        "https://www.reddit.com/search?q=test2"
    ),
    validity(
        preprocessor,
        {
            key: "git",
            query: "svelte",
            url: "https://github.com/search?&q=svelte",
        },
        "https://github.com/search?&q=svelte"
    ),
];

export const engineTests = [
    validity(
        engine,
        "!git:me",
        "https://github.com/plutoniumm?tab=repositories",
        "url"
    ),
    validity(
        engine,
        "!git svelte",
        "https://github.com/search?&q=svelte",
        "url"
    ),
];