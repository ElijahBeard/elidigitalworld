<script lang="ts">
    import '../app.css';
    import Paint from './paint.svelte';
    import gsap from 'gsap';
    import { onMount } from 'svelte';
	import { page } from '$app/state';

    // nav
    import Box from './box.svelte';
    let boxes = ["blog","xtel",'+']

    // reactive resizing
    let width = window.innerWidth;
    let mobile;
    $: mobile = width <= 600;

    onMount(() => {
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
    <h1 id="title" style="font-family:block-logo;{page.data.accent};">{mobile ? "ED0Wld" : "ELiDIGITAL W0RLD"}</h1>
    <div class="welcome" style="width:70vw;">
        <p>Welcome to eli digital world! This site is the personal area of Eli B. The home page is currently under construction.</p>
        <p>Feel free to use the canvas below to draw a picture while you wait for new features to come out. Or, use the nav in the top left to explore the site.</p>
    </div>
    <div id="paint">
        <Paint/>
    </div>
</main>
<img class="gear" src="/gear.png" alt="">

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
        font-size:77pt;
        overflow-wrap: break-word;
        color: var(--accent);
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
        gap: 10px;
        margin-left:6px;
    }
    .gear {
        z-index: 2;
        position:absolute;
        top:-500px;
        right:-500px;
    }
    #paint {
        margin-left:9px;
    }
</style>