<script lang="ts">
    import '../app.css';
    import Box from './home/box.svelte';
    import gsap from 'gsap';
    import { onMount } from 'svelte';
    
    let boxes = ['c','o','n','s','t','r','u','c','t','/'];

    onMount(() => {
        gsap.to('.gear0',{duration:100,rotate:-360,repeat:-1,ease:'none'});
        gsap.to('.gear1',{duration:100,rotate:360,repeat:-1,ease:'none'});
    });
</script>

<main>
    <div class="stack">
        {#each boxes as content}
            <Box {content}/>
        {/each}
    </div>
    <img id="title" src="/title.png" alt="">
    <div class="content">
        <h1 style="font-family:picto">website currently under maintainence</h1>
    </div>
    <h1>Jump To:</h1>
    <ul><li><a href="/blog">blog</a></li><li><a href="/xtel">xtel</a></li></ul>
</main>
<img class="gear0" src="/gear.png" alt="">
<img class="gear1" src="/gear.png" alt="">

<style>
    /* :global(body) {
        font-family:"picto";
        overflow:hidden;
        background-color:gray;
    } */

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
    .content {
        margin-top:300px;
    }
</style>