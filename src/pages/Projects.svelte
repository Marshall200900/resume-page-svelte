<script lang="ts">
    
    import { theme, lang } from '../store';
    import { localeBuilder } from '../lang/index';
    import { afterUpdate } from 'svelte';

    $: locale = localeBuilder($lang);
    afterUpdate(() => {
        projects = [
        {
            title: locale("Projects.Mobile.title"),
            link: '',
            stack: 'Android Java Python',
            description: locale("Projects.Mobile.description"),
        },
        {
            title: locale("Projects.WebBlog.title"),
            link: '',
            stack: 'React Typescript Webpack SASS',
            description: locale("Projects.WebBlog.description")
        }
    ];
    })
    let projects = [];
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
<div class={`ProjectsPage ${$theme}`}>
    <h1>{locale("Projects.title")}</h1>
    <div class="Projects">
        {#each projects as project, i}
            <div class="Project">
                <h2>{project.title}</h2>
                <div class="Link"><a href={project.link}>{project.link}</a></div>
                <div class="Stack">{locale("Projects.Stack.title")}: {project.stack}</div>
                <span>{project.description}</span>
            </div>
        {/each}
    </div>
</div>