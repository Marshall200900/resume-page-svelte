<script lang="ts">
    import { theme, lang } from '../store';
    import typewriter from '../tools/typewriter';
    import { localeBuilder } from '../lang';
    import { screenAppear } from '../tools/screen-appear-check';
    $: mailVisible = false;
    $: locale = localeBuilder($lang);


    let mail;

</script>
<svelte:window on:scroll={() => screenAppear(mail, () => {
    mailVisible = true;
})} />

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
<div class={`ContactPage ${$theme}`}>
    <h1>{locale("ContactMe.title")}</h1>
    <h3>{locale("ContactMe.mail")}</h3>
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