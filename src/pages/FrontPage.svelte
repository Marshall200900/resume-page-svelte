<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    export let whiteTheme: boolean;

    $: cursorVisible = true;
    $: h2Visible = false;
    $: textVisible = false;
    
    onMount(() => {
        textVisible = true;
    });
    
    function typewriter(node, { speed = 1 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: t => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
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