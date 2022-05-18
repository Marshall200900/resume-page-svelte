<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Image from '../assets/avatar.jpeg';
    import { theme, lang } from '../store';
    import { localeBuilder } from '../lang';

    $: locale = localeBuilder($lang);
    $: textVisible = false;
    
    onMount(() => {
        textVisible = true;
    });

</script>

<style>
    .white h1,.white h2 {
        color: black;
        transition: color 800ms ease;
    }
    .FrontPage {
        margin: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;

        min-height: 100vh;
        height: max(100vh, auto);
    }
    h1, h2 {
        color: white;
        transition: color 800ms ease;
        text-align: center;
    }
    h1 {
        font-size: min(10vw, 3rem);
    }

    .frontpage__text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .frontpage__image {
        width: 350px;
        border-radius: 20px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .frontpage__image img {
        width: 100%;

    }
    /* @media (min-width: 500px) {
        .FrontPage {
            flex-direction: row;
        }
    } */
</style>
{#if textVisible}
    
    <div class={`FrontPage ${$theme}`}>
        <div transition:fade={{delay: 200, duration: 600}} class="frontpage__text">
            <h1>{locale("FrontPage.name")}</h1>
            <h2>{locale("FrontPage.job")}</h2>
        </div>
        <div class="frontpage__image">
            <img src={Image} alt="avatar" />
        </div>
    </div>
{/if}