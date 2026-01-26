<script lang="ts">
    import '../app.css';
    import Box from './box.svelte';
    import Rip from './rip.svelte';
    import gsap from 'gsap';
    import { onMount } from 'svelte';
    
    let boxes = [[Box,{content:'n'}],[Box,{content:'B'}],
                 [Box,{content:'1'}],[Box,{content:'1'}],
                 [Box,{content:'1'}],[Box,{content:'1'}],
                 [Box,{content:'1'}],[Box,{content:'1'}]];

    onMount(() => {
        gsap.to('.gear0',100,{rotate:-360,repeat:-1,ease:'none'});
        gsap.to('.gear1',100,{rotate:360,repeat:-1,ease:'none'});
    });
</script>

<main>
    <Rip/>
    <div class="stack">
        {#each boxes as [component,props]}
            <svelte:component this={component} {...props}/>
        {/each}
    </div>
    <img id="title" src="/title.png" alt="">
    <img class="gear0" src="/gear.png" alt="">
    <img class="gear1" src="/gear.png" alt="">
</main>

<style>
    :global(body) {
        overflow:hidden;
    }
    main {
        margin:30px;
    }
    #title {
        z-index: 2;
        position:absolute;
    }
    .stack {
        z-index:50;
        position:absolute;
        top:126px;
        left:490px;
        display: flex;
        flex-wrap:wrap;
        gap: 10px;
        width:210px;
    }
    .gear0 {
        z-index: 0;
        position:absolute;
        bottom:-500px;
        left:-500px;
    }
    .gear1 {
        z-index: 0;
        position:absolute;
        top:-500px;
        right:-500px;
    }
</style>