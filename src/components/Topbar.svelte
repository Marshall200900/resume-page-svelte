<script lang="ts">
    export let whiteTheme: boolean;
    export let setWhiteTheme;
</script>
<style>
    div {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 1.2rem;
        color: white;
        transition: color 800ms ease;
    }
    div.white {
        color: black;
        transition: color 800ms ease;
    }
    span {
        cursor: pointer;
    }
</style>
<div class={whiteTheme && 'white'}>
    <span on:click={() => setWhiteTheme(true)}>white</span>
     / 
    <span on:click={() => setWhiteTheme(false)}>black</span>
</div>