<script lang="ts">
    import { onMount } from 'svelte';
	import { page } from '$app/state';
    import '../app.css';

    // Components
    import Paint from '$lib/components/paint.svelte';
    import Gear from '$lib/components/gear.svelte';
    let gear!:Gear
    // Nav
    import Box from '$lib/components/box.svelte';
    let boxes = ["blog","xtel","pmdls","portfolio",'im',"sfaf"]
    // Windfield 3D
    import Windfield from '$lib/components/windfield.svelte';
    let windfield!:Windfield
    
    // Reactive resizing
    let width = 0
    let mobile
    $: mobile = width <= 600
    onMount(() => {
        width = window.innerWidth;
    });
</script>

<svelte:window bind:innerWidth={width} />
<div id="windfield"><Windfield bind:this={windfield}/></div>
<main style="--accent:{page.data.accent}; --bg:{page.data.bg};">
    <h1 id="title" style="font-family:block-logo;{page.data.accent};">{mobile ? "ED W0rld" : "ELi DIGITAL W0RLD"}</h1>
    <div class="welcome" style="width:70vw;">
        <!-- <button on:click={() => {windfield.move();gear.move_gear()}}>PROJECTS</button> -->
    </div>
    <h2 style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">PROJECTS:</h2>
    <div class="stack">
        {#each boxes as content}
            <Box {content}/>
        {/each}
    </div>
    <div id="paint">
        <!-- <Paint/> -->
    </div>
</main>
<!-- <Gear bind:this={gear}/> -->
<style>
    main {
        position:absolute;
        top:0;
        z-index: 4;
        display:flex;
        flex-direction: column;
        width:100vw;
        background-color: var(--bg);
        height:100vh;
        overflow:scroll;
        padding:12px;
    }
    #title {
        margin:0;
        padding:0;
        font-size:53pt;
        overflow-wrap: break-word;
        color: var(--accent);
        letter-spacing: 0.05em;
        word-spacing: -29px;
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
        z-index: 7;
        pointer-events:none;
        mix-blend-mode:difference;
    }
    button {
        background-color: gray;
        border-style:dotted;
        margin-left:6px;
    }
</style>