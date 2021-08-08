<script>
    export let //
        indeterminate,
        checked,
        label;
</script>

<label {indeterminate}>
    {label}
    <input type="checkbox" bind:checked />
    <span class="checkmark" />
</label>

<style type="text/scss">
    label {
        display: block;
        position: relative;
        padding-left: 1.5em;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        & input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
    }
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 1em;
        width: 1em;
        background-color: #eee;

        &:after {
            content: "";
            position: absolute;
            display: none;
        }
    }

    label:hover input ~ .checkmark {
        background-color: #ccc;
    }

    label input:checked ~ .checkmark {
        background-color: #223;
        &:after {
            display: block;
        }
    }

    label .checkmark:after {
        left: 0.35em;
        top: 0.15em;
        width: 0.2em;
        height: 0.5em;
        border: solid white;
        border-width: 0 0.1em 0.1em 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    label[indeterminate] .checkmark:after,
    label[indeterminate="true"] .checkmark:after {
        left: 0.35em;
        top: 0.15em;
        width: 0.2em;
        height: 0.5em;
        border: solid white;
        border-width: 0 0.1em 0.1em 0;
    }
</style>
