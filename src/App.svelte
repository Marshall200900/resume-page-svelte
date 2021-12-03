<script lang="ts">
    import Topbar from './components/Topbar.svelte';
    import FrontPage from './pages/FrontPage.svelte';
    import Skills from './pages/Skills.svelte';

    $: whiteTheme = false;

    let setWhiteTheme = (isWhite: boolean) => {
        whiteTheme = isWhite;

        isWhite 
        ? document.body.classList.add('white')
        : document.body.classList.remove('white');
    }
</script>

<style>
    :global(body) {
        margin: 0;
        font-family: 'Readex Pro';
        background: #212529;
        transition: background-color 800ms ease;
    }
    :global(body.white) {
        background: white;
        transition: background-color 800ms ease;
        
    }
</style>
<Topbar whiteTheme={whiteTheme} setWhiteTheme={setWhiteTheme} />
<FrontPage whiteTheme={whiteTheme} />
<Skills whiteTheme={whiteTheme} />