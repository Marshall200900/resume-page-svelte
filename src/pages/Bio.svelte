<script lang="ts">
    export let whiteTheme: boolean;
    let personalInfo = [
        {name: 'Age', value: '21'},
        {name: 'City of residence', value: 'Perm'},
        {name: 'Education', value: 'HSE'},
        {name: 'Course', value: '4 (last one)'},
    ];
    let jobs = [
        {title: 'Simpl', city: 'Perm', type: 'Internship', year: '2018'
        , description: 'The first official job in a company, that does B2B projects. ' +
        'I was a C# intern there and got a lot of experience being a worker.' + 
        'The intentions were to develop myself in a field of .NET developent, but eventually I the other way.'},
        {title: 'Yandex', city: 'Saint-Petersburg', type: 'Internship', year: '2021'
        , description: 'In Yandex I was a frontend intern developer and did an inner project, that was ' + 
        'aimed at inner employees. There I have learned 60% of all the knowledge I have now, got experience in ' + 
        'React, Svelte, CI and many other things.'}
    ];
</script>

<style>
    .Bio {
        color: white;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1 {
        font-size: min(3rem, 10vw);
        color: white;
    }
    .Rows {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        row-gap: 50px;
    }
    .Row {
        flex: 0 1 400px;
        display: flex;
        flex-direction: column;
        border: 1px solid white;
        border-radius: 20px;
        padding: 20px;
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
        filter: brightness(0.5);
    }
</style>
<div class="Bio">
    <h1>Bio</h1>
    <div class="Rows">
        <div class="Row PersonalInfo">
            <h2>Personal info 📝</h2>
            {#each personalInfo as fact}
                <div class="fact">
                    <span>{fact.name}</span>
                    <span>{fact.value}</span>
                </div>
            {/each}
        </div>
        <div class="Row Jobs">
            <h2>Experience 📈</h2>
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