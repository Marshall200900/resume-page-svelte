<script lang="ts">
    import { theme, lang } from '../store';
    import { localeBuilder } from '../lang';

    $: locale = localeBuilder($lang);
    
    
</script>
<style>
    .topbar {
        padding: 10px;
        font-size: 1.2rem;
        color: white;
        transition: color 800ms ease;

        display: flex;
        justify-content: space-between;
    }
    div.white {
        color: black;
        transition: color 800ms ease;
    }
    span {
        cursor: pointer;
    }
</style>
<div class={`topbar ${$theme}`}>
    <div class="changeLang">
        <span on:click={() => lang.set("ru")}>ru</span>
        / 
       <span on:click={() => lang.set("en")}>en</span>
    </div>
    <div class="changeColor">
        <span on:click={() => theme.set("white")}>{locale("color.white")}</span>
         / 
        <span on:click={() => theme.set("")}>{locale("color.black")}</span>
    </div>
</div>