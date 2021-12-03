<script lang="ts">
    import Skill from '../components/Skill.svelte';    
    export let whiteTheme: boolean;
    const skillsList = [
        'Svelte',
        'Javascript',
        'Typescript',
        'HTML/CSS',
        'SASS',
        'React',
        'Preact'
    ];
</script>
<style>
    .SkillsPage {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 100vh;

    }
    .SkillsList {
        text-align: center;
    }
    h1 {
        color: white;
        transition: color 800ms ease;
        font-size: 3rem;
    }
    .white h1 {
        color: black;
        transition: color 800ms ease;
    }
</style>
<div class={`SkillsPage ${whiteTheme && 'white'}`}>
    <h1>Skills</h1>
    <div class="SkillsList">
        {#each skillsList as s, i}
            <Skill whiteTheme={whiteTheme} text={s}/>
        {/each}
    </div>
</div>
