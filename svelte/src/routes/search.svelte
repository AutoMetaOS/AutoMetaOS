<script>
    import { onMount } from "svelte";

    let body;
    const URLpars = () => {
        const entries = new URLSearchParams(window.location.search).entries();
        const params = {};
        for (let entry of entries) params[entry[0]] = entry[1];
        return params;
    };

    onMount(() => {
        fetch(serverURL + "social/google/search?q=" + URLpars().q)
            .then((res) => res.text())
            .then((r) => {
                let doc = new DOMParser().parseFromString(r, "text/html");
                doc.querySelectorAll(
                    "script, noscript, textarea, input, footer, header"
                ).forEach((e) => e.remove());

                body.innerHTML = new XMLSerializer().serializeToString(doc);
                document.querySelector("#main").childNodes[0].remove();
                preprocess();
            });
    });

    const preprocess = () => {
        const query = URLpars()
            .q.split(" ")
            .map((e) => (e = e.charAt(0).toUpperCase() + e.slice(1)))
            .join(" ");

        body.innerHTML = `<h1>${query}</h1>` + body.innerHTML;

        document.title = query;
        // FIX IMAGES
        document.querySelectorAll("img").forEach((e) => {
            if (e.parentElement.parentElement.tagName === "A") {
                e.src = decodeURIComponent(
                    e.parentElement.parentElement.href
                        .replace(clientURL + "imgres?imgurl=", "")
                        .split("&")[0]
                );
            }
        });
        // FIX LINKS
        document.querySelectorAll("a").forEach((e) => {
            e.classList.toggle("ronin-a");
            if (e.href.includes("/url?"))
                e.href = decodeURIComponent(
                    e.href.replace(clientURL + "url?q=", "").split("&")[0]
                );
        });
        // MINIFY DIVS
        body.querySelectorAll("*").forEach((el) => {
            // REMOVE EMPTY
            if (el.childNodes.length === 0 && el.tagName === "DIV") el.remove();
            // THIS ISNT READY
            if (
                !el.attributes.length &&
                el.tagName === "DIV" &&
                el.childNodes.length
            ) {
                console.log(0);
            }
        });
        // REMOVE RELATED
        document
            .querySelectorAll("h2")
            .forEach((e) => e.parentElement.parentElement.remove());
        // Remove Undefines
        body.innerHTML = body.innerHTML.replace(/�/g, " ");

        document.head.querySelector("script").remove();
    };
</script>

<div id="body" bind:this={body}>
    <a class="ronin-a" href="/search"><span>Test</span></a>
</div>

<svelte:head>
    <style>
        *::-webkit-scrollbar {
            display: none;
        }
        body {
            background: #fff;
            color: #000;
        }
    </style>
</svelte:head>
