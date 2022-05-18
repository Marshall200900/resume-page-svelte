<script lang="ts">
    import Skill from '../components/Skill.svelte'; 
    import { screenAppear } from '../tools/screen-appear-check';  
    import { theme, lang } from '../store';
    import { localeBuilder } from '../lang';

    $: locale = localeBuilder($lang);
    $: visible = false;
    let skillslist;

    const skillsList = [
        {skillName: 'React.js', rate: 5 },
        {skillName: 'Typescript', rate: 4 },
        {skillName: 'HTML/CSS', rate: 4 },
        {skillName: 'SASS', rate: 3 },
        {skillName: 'Javascript', rate: 4 },
        {skillName: 'Svelte.js', rate: 3 },
        {skillName: 'Preact.js', rate: 4 },
    ];
</script>
<svelte:window on:scroll={() => screenAppear(skillslist, () => {
    visible = true;
})} />

<div class={`SkillsPage ${$theme}`}>
    <h1>{locale("Skills.title")}</h1>
    <div class="SkillsList" bind:this={skillslist}>
        {#if visible}
            {#each skillsList as s, i}
            <Skill appearDelay={i} skill={s}/>
            {/each}
        {/if}
    </div>
</div>
<style>
    .SkillsPage {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        height: max(100vh, 800px);
        color: white;
        padding: 0 10px;
    }
    .SkillsList {
        text-align: center;
        width: min(100%, 900px);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    h1 {
        transition: color 800ms ease;
        font-size: min(10vw, 3rem);
    }
    span {
        margin-top: 100px;
        text-align: center;
    }
    .white {
        color: black;
        transition: color 800ms ease;
    }
</style>

