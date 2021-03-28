<script>
    import { onMount } from "svelte";

    let MBstats = [];

    const sendCMD = () =>
        fetch(serverURL + "sys/smc")
            .then((res) => res.json())
            .then((r) => (MBstats = r));

    onMount(() => sendCMD());
    setInterval(sendCMD, 1e5);
</script>

<table>
    <tr>
        <td>CPU Temp:</td>
        <td>{MBstats.cpu}</td>
    </tr>
    <tr>
        <td>MBo Temp:</td>
        <td>{MBstats.board}</td>
    </tr>
    <tr>
        <td>Fan Speed:</td>
        <td>{MBstats.fan}</td>
    </tr>
</table>
