<script lang="ts">
    import Skill from '../components/Skill.svelte';    
    export let whiteTheme: boolean;
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
<div class={`SkillsPage ${whiteTheme && 'white'}`}>
    <h1>Skills</h1>
    <div class="SkillsList">
        {#each skillsList as s, i}
            <Skill whiteTheme={whiteTheme} skill={s}/>
        {/each}
    </div>
    <span>The level of technology proficiency is formed in relation to each other</span>
</div>
