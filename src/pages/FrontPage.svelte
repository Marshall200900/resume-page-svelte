<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import typewriter from '../tools/typewriter';
    
    export let whiteTheme: boolean;

    $: cursorVisible = true;
    $: h2Visible = false;
    $: textVisible = false;
    
    onMount(() => {
        textVisible = true;
    });
    const typewriterEnd = () => {
        cursorVisible = false;
        h2Visible = true;
    }

</script>

<style>
    .white h1,.white h2 {
        color: black;
        transition: color 800ms ease;
    }
    .white .Cursor {
        border-right: 1px solid black;  

    }
    .FrontPage {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        height: 100vh;
    }
    h1, h2 {
        color: white;
        transition: color 800ms ease;

    }
    h1 {
        font-size: min(10vw, 3rem);
    }
    h1.Cursor {
        border-right: 1px solid white;  
    }
    .h2Container {
        height: 1rem;
    }
</style>

<div class={`FrontPage ${whiteTheme && 'white'}`}>
    {#if textVisible}
        <h1 class={cursorVisible && 'Cursor'}
            transition:typewriter 
            on:introend={typewriterEnd}>
            Arseniy Sidorov
        </h1>
    {/if}
    <div class="h2Container">
        {#if h2Visible}
            <h2 transition:fade={{delay: 500, duration: 800}}>web-developer</h2>
        {/if}
    </div>
</div>