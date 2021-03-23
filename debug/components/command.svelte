<script>
    import { engineTests, preprocessorTests } from "../micro/command";

    const allTests = [...preprocessorTests, ...engineTests];
</script>

<article>
    <h3>Command</h3>
    <div class="pass">{allTests.filter((x) => x === 0).length} PASSED!</div>
    <div class="fail">{allTests.filter((x) => x !== 0).length} FAILED!</div>
</article>

<style>
    .pass,
    .fail {
        padding: 10px;
    }
    .pass {
        color: #0f0;
    }
    .fail {
        color: #f00;
    }
</style>
