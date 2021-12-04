<script lang="ts">
    export let whiteTheme: boolean;
    import typewriter from '../tools/typewriter';

    $: mailVisible = false;

    let mail;
    const func = (mail) => {
        if (mail) {
            const rect = mail.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
                console.log('here');
                mailVisible = true;
            }

        }
    }
</script>
<svelte:window on:scroll={() => func(mail)} />

<style>
    .ContactPage.white {
        color: black;
    }
    .ContactPage.white a{
        color: black;
    }
    
    .ContactPage {
        min-height: 100vh;
        height: max(100vh, auto);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
    }
    h1 {
        font-size: min(3rem, 10vw);
    }
    h2 {
        margin-top: 0;
    }
    h2 a {
        color: white;
        font-size: min(1.5rem, 5vw);
    }
    h3 {
        margin-bottom: 5px;
        font-size: min(1.5rem, 5vw);

    }
    .mailContainer {
        height: 1rem;
    }
</style>
<div class={`ContactPage ${whiteTheme && 'white'}`}>
    <h1>Contact me</h1>
    <h3>Mail</h3>
    <h2 class="mailContainer" bind:this={mail} >
        {#if mailVisible}
            <a transition:typewriter 
                href="mailto:arseniy.sidorov2013@gmail.com">
                arseniy.sidorov2013@gmail.com
            </a>
        {/if}
    </h2>
    <h3>Telegram</h3>
    <h2>@smoon_light</h2>
</div>