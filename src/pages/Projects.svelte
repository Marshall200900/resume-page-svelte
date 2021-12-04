<script lang="ts">
    export let whiteTheme: boolean;
    const projects = [
        {
            title: 'Online shop MVP',
            link: 'https://github.com/Marshall200900/online-shop',
            stack: 'React Redux Webpack SCSS',
            description: 'A small but complete MVP app with adaptive design. ' + 
            'It is made to get more experience in React and Redux'
        },
        {
            title: 'This awesome website',
            link: 'https://github.com/Marshall200900/resume-page-svelte',
            stack: 'Svelte Typescript Vite.js',
            description: 'This website is made using a new framework Svelte.js ' + 
            '(If we compare to other ones, like Angular and React). The goal is to use it ' + 
            'as a resume for job search.'
        },
        {
            title: 'Guideline System Development for Music Selection Based on individual' + 
            ' Biometrics and Personal Preferences of the User',
            link: '',
            stack: 'Android Java Python',
            description: 'This was a course team project in the last year ' + 
            'At the time was the biggest thing I have ever created and we are really proud of it. ' + 
            'The goal of the system is to recommend you a playlist in Spotify based on given parameters ' + 
            'and heartbeat.'
        },
        {
            title: 'Weblog',
            link: 'Currently developing',
            stack: 'React Typescript Webpack SASS',
            description: 'The work I got while I do not have regular job. ' + 
            'The website will not be using any CMS, but will have backend for ' +
            'CRUDing data and handling authorization in admin page. '
        }
    ];
</script>

<style>
    .ProjectsPage {
        min-height: 100vh;
        height: max(100vh, auto);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        width: 100%;
    }
    .ProjectsPage.white {
        color: black;
    }
    .white .Project{
        border-color: black;
    }
    .white .Link a {
        color: black;
    }
    h1 {
        font-size: min(3rem, 10vw);
    }
    .Projects {
        width: min(900px, calc(100% - 10px));
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .Project {
        border: 1px solid white;
        border-radius: 20px;
        padding: 20px;
    }
    .Link, .Stack {
        margin-bottom: 10px;
        color: gray;
    }
    .Link a{
        word-break: break-all;
        color: gray !important;
    }
    
    .Project span {
        font-size: 1.3rem;
    }
    .Project h2 {
        margin-top: 0;
    }
</style>
<div class={`ProjectsPage ${whiteTheme && 'white'}`}>
    <h1>Projects</h1>
    <div class="Projects">
        {#each projects as project, i}
            <div class="Project">
                <h2>{project.title}</h2>
                <div class="Link"><a href={project.link}>{project.link}</a></div>
                <div class="Stack">Stack: {project.stack}</div>
                <span>{project.description}</span>
            </div>
        {/each}
    </div>
</div>