<script lang="ts">
    import { onMount } from 'svelte';
	import { page } from '$app/state';

    import Projectcard from './projectcard.svelte';
    import Windfield from '$lib/components/windfield.svelte';

    let windfield!:Windfield

    import Box from '$lib/components/box.svelte';
    let boxes = {
        home: "/",
    };
    
    // Reactive resizing
    let width = 0
    let mobile
    $: mobile = width <= 600
    onMount(() => {
        width = window.innerWidth;
    });

    let scrollY = 0;

    function handleScroll(e: Event) {
        scrollY = (e.target as HTMLElement).scrollTop;
        windfield?.onScroll(scrollY);
    }

    import { projects } from './projects'
    
</script>

<svelte:window bind:innerWidth={width} />
<div id="windfield"><Windfield bind:this={windfield}/></div>
<main
    on:scroll={handleScroll}
    style="--accent:{page.data.accent}; --bg:{page.data.bg};"
>
    <span id="title">
        <h1 id="title" style="font-family:block-logo;{page.data.accent};">{mobile ? "PRTF0LIO" : "PORTF0LIO"}</h1>
        <Box {boxes}/>
    </span>
    <div class="welcome" style="width:70vw;">
        <!-- <button on:click={() => {windfield.move();}}>PROJECTS</button> -->
    </div>
    {#each projects as project}
        <Projectcard
            title={project.title}
            link={project.link}
            iframe={project.iframe}
            image={project.image}
            description={project.description}
        />
    {/each}
</main>
<style>
    main {
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        position:absolute;
        top:0;
        z-index: 4;
        display:flex;
        flex-direction: column;
        width:100vw;
        background-color: var(--bg);
        height:100vh;
        padding:12px;
        overflow-y:scroll;
        overflow-x:hidden;
    }
    #title {
        align-self: center;
        margin:0;
        padding:0;
        font-size:48pt;
        overflow-wrap: break-word;
        color: var(--accent);
        letter-spacing: 0.05em;
        word-spacing: -29px;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    p {
        margin:10px;
        font-size:23px;
        text-wrap: break-word;
    }
    .stack {
        margin-bottom:10px;
        z-index: 99;
        display: flex;
        flex-wrap:wrap;
        gap: 8px;
        margin-left:3px;
        mix-blend-mode: difference;
    }
    #paint {
        margin-left:6px;
        z-index: 999;
    }
    #windfield{
        position:absolute;
        width:100vw;
        height:100vh;
        top:0;
        z-index: 0;
        pointer-events:none;
        mix-blend-mode:difference;
    }
    button {
        background-color: gray;
        border-style:dotted;
        margin-left:6px;
    }
</style>