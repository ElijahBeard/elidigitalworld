<script lang="ts">
    import '../app.css';
    import Paint from './paint.svelte';
    import Windfield from '$lib/components/windfield.svelte';
    import gsap from 'gsap';
    import { onMount } from 'svelte';
	import { page } from '$app/state';

    // nav
    import Box from './box.svelte';
    let boxes = ["blog","xtel","98n","294",'im',"sfaf"]

    // reactive resizing
    let width = 0;
    let mobile;
    $: mobile = width <= 600;
    
    onMount(() => {
        width = window.innerWidth;
        gsap.to('.gear',{duration:100,rotate:360,repeat:-1,ease:'none'});
    });
</script>

<svelte:window bind:innerWidth={width} />

<main style="--accent:{page.data.accent}; --bg:{page.data.bg};">
    <div class="stack">
        {#each boxes as content}
            <Box {content}/>
        {/each}
    </div>
    <h1 id="title" style="font-family:block-logo;{page.data.accent};">{mobile ? "ED W0rld" : "ELi DIGITAL W0RLD"}</h1>
    <div class="welcome" style="width:70vw;">

    </div>
    <div id="paint">
        <!-- <Paint/> -->
    </div>
</main>
<div id="windfield"><Windfield/></div>
<img class="gear" src="/gear.png" alt="">

<style>
    main {
        position:absolute;
        top:0;
        z-index: 40;
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

        /* color:rgba(106, 155, 20, 0.497); */
    }
    p {
        margin:10px;
        font-size:23px;
        text-wrap: break-word;
    }
    .stack {
        margin-bottom:10px;
        z-index: 10;
        display: flex;
        flex-wrap:wrap;
        gap: 8px;
        margin-left:3px;
    }
    .gear {
        z-index: 0;
        position:absolute;
        top:-500px;
        right:-500px;
    }
    #paint {
        margin-left:9px;
    }
    #windfield{
        position:absolute;
        width:100vw;
        height:100vh;
        top:0;
        z-index: 99;
        pointer-events:none;
        mix-blend-mode:difference;
    }
</style>