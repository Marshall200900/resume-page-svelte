<script lang="ts">
import { onMount } from 'svelte';

    import Topbar from './components/Topbar.svelte';
    import Bio from './pages/Bio.svelte';
    import ContactPage from './pages/ContactPage.svelte';
    import FrontPage from './pages/FrontPage.svelte';
    import Projects from './pages/Projects.svelte';
    import Skills from './pages/Skills.svelte'; 


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
<Topbar />
<FrontPage />
<Bio />
<Skills />
<Projects />
<ContactPage />