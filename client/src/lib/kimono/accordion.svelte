<script>
    export let //
        title = "Accordion",
        disabled,
        open = false;

    const id = ~~(Math.random() * 1e5);
</script>

<div class="tab" {disabled}>
    <input type="checkbox" bind:checked={open} {id} />
    <label class="p20 ƒ tab-label" for={id}>
        <slot name="title">{title}</slot>
    </label>
    <div class="tab-content">
        <slot />
    </div>
</div>

<style type="text/scss">
    $midnight: #fff;
    input {
        position: absolute;
        opacity: 0;
        z-index: -1;
    }
    /* Accordion styles */
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .tab {
        border-top: 1px solid darken($midnight, 10%);
        color: #000;
        overflow: hidden;
        &-label {
            justify-content: space-between;
            background: $midnight;
            cursor: pointer;
            &:hover {
                background: darken($midnight, 10%);
            }
            &::after {
                content: "\276F";
                width: 1em;
                height: 1em;
                text-align: center;
                transition: all 0.35s;
            }
        }
        &-content {
            display: none;
            animation: none;
            color: $midnight;
            background: white;
            color: #000;
            transition: all 0.35s;
            & * {
                display: none;
            }
        }
        &[disabled] {
            pointer-events: none;
            color: darken($midnight, 33%);
        }
    }

    // :checked
    input:checked {
        + .tab-label::after {
            transform: rotate(90deg);
        }
        ~ .tab-content {
            display: block;
            animation: fadeIn 0.3s forwards;
            padding: 10px 1em;
        }
    }
</style>
