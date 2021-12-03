<script lang="ts">
    export let text: string;
    export let whiteTheme: boolean;
</script>
<style>
    div.white {
        border: 2px solid black;
        transition: border-color 800ms ease;
    }
    .white span {
        color: black;
        transition: color 800ms ease;
    }
    div {
        transition: border-color 800ms ease;
        display: inline-block;
        border: 2px solid white;
        border-radius: 20px;
        padding: 10px;
        margin: 5px;
    }
    span {
        transition: color 800ms ease;
        font-size: 1.5rem;
        color: white;
    }
</style>

<div class={whiteTheme && 'white'}>
    <span>{text}</span>
</div>