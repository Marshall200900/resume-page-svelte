<script lang="ts">
    export let skill: {skillName: string, rate: number};
    export let whiteTheme: boolean;
</script>
<style>
    div.white {
        border: 2px solid black;
        transition: border-color 800ms ease;
    }
    .white span {
        color: black;
        transition: color 800ms ease;
    }
    .SkillContainer {
        transition: border-color 800ms ease;
        border: 2px solid white;
        border-radius: 20px;
        padding: 10px;

    }
    span {
        transition: color 800ms ease;
        font-size: 1.5rem;
        color: white;
    }
    .Skill {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .dot {
        width: 1px;
        height: 1px;
        background: white;
        border: 2px solid white;
        border-radius: 10px;    
    }
    .white .dot {
        background: black;
        border-color: black;
    }
    .Bold {
        border: 4px solid white;
    }

</style>

<div class={`SkillContainer ${whiteTheme && 'white'}`}>
    <div class={`Skill`}><span>{skill.skillName}&nbsp;&nbsp;</span>
        {#each Array(skill.rate) as _, i}
            <div class="dot Bold"/>&nbsp;
        {/each}
        {#each Array(5 - skill.rate) as _, i}
            <div class="dot"/>&nbsp;
        {/each}
    </div>
</div>