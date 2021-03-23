<script>
    let [data] = [""];

    const execScr = () => {
        console.log(data);
    };
</script>

<h3 class="w-100">Script Editor</h3>
<form class="w-100" on:submit|preventDefault={execScr}>
    <textarea
        name="data"
        class="w-100"
        placeholder="Enter Data..."
        bind:value={data}
    />
    <input type="submit" value="Go" />
</form>
<p class="w-100">{"ok"}</p>

<style>
    textarea {
        color: #fff;
        transition: height 0.2s ease;
    }
</style>
