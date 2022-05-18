<script lang="ts">
    import { theme, lang } from '../store';
    import { localeBuilder } from '../lang/index';
    import { afterUpdate, onMount } from 'svelte';

    $: locale = localeBuilder($lang);
    console.log(locale)
    let personalInfo = [];
    let jobs = [];
    let initValues = () => {
        personalInfo = [
            {name: locale("Bio.PersonalInfo.Age.title"), value: locale("Bio.PersonalInfo.Age.value")},
            {name: locale("Bio.PersonalInfo.City.title"), value: locale("Bio.PersonalInfo.City.value")},
            {name: locale("Bio.PersonalInfo.Education.title"), value:  locale("Bio.PersonalInfo.Education.value")},
            {name: locale("Bio.PersonalInfo.Course.title"), value:  locale("Bio.PersonalInfo.Course.value")},
        ];
        jobs = [
            {
                title: locale("Bio.Experience.Simpl.title"),
                city: locale("Bio.Experience.Simpl.city"),
                type: locale("Bio.Experience.Simpl.type"),
                year: '2019',
                description: locale("Bio.Experience.Simpl.description")
            },
            {
                title: locale("Bio.Experience.Yandex.title"),
                city: locale("Bio.Experience.Yandex.city"),
                type: locale("Bio.Experience.Yandex.type"),
                year: '2021',
                description: locale("Bio.Experience.Yandex.description")
            },
            {
                title: locale("Bio.Experience.Greendata.title"),
                city: locale("Bio.Experience.Greendata.city"),
                type: locale("Bio.Experience.Greendata.type"),
                year: '2022',
                description: locale("Bio.Experience.Greendata.description")
            },
        ];
    }
    afterUpdate(() => {
        initValues();
    })
</script>

<style>
    .Bio {
        color: white;
        min-height: 100vh;
        height: max(100vh, auto);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
    .Bio.white {
        color: black;
    }
    h1 {
        font-size: min(3rem, 10vw);
    }
    .Rows {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 50px;
    }
    .Row {
        flex: 0 1 400px;
        display: flex;
        flex-direction: column;
        border: 1px solid white;
        border-radius: 20px;
        padding: 20px;
    }
    .white .Row {
        border: 1px solid black;
    }
    .Row h2 {
        align-self: center;
    }
    .fact {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    .fact span {
        font-size: 1.3rem;
    }
    .JobExperience h3 {
        margin-top: 20px;
        margin-bottom: 5px;
        font-size: 1.5rem;

    }
    .JobExperience .CityYear span {
        font-size: 1.2rem;
    }
    .JobExperience .Type {
        color: gray;
    }
</style>
<div class={`Bio ${$theme}`}>
    <h1>{locale("Bio.title")}</h1>
    <div class="Rows">
        <div class="Row PersonalInfo">
            <h2>{locale("Bio.PersonalInfo.title")} 📝</h2>
            {#each personalInfo as fact}
                <div class="fact">
                    <span>{fact.name}</span>
                    <span>{fact.value}</span>
                </div>
            {/each}
        </div>
        <div class="Row Jobs">
            <h2>{locale("Bio.Experience.title")} 📈</h2>
            {#each jobs as job, i}
                <div class="JobExperience">
                    <h3>{job.title}</h3>
                    <div class="CityYear">
                        <span>{job.city}</span>
                        <span>{job.year}</span>
                    </div>
                    <div class="Type">{job.type}</div>
                    <span>{job.description}</span>
                </div>
            {/each}
        </div>
    </div>
</div>