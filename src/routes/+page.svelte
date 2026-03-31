<script lang="ts">
    import '../app.css';
    import Box from './home/box.svelte';
    import Paint from './home/paint.svelte';
    import gsap from 'gsap';
    import { onMount } from 'svelte';

    // let boxes = "late".split("")
    let boxes = ["blog","draw","del"]

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
    <!-- <img id="title" src="/title.png" alt=""> -->
    <div class="content">
        <!-- <Paint/> -->
    </div>
</main>
<!-- <img class="gear0" src="/gear.png" alt="">
<img class="gear1" src="/gear.png" alt=""> -->

<style>
    /* :global(body) {
        font-family:"picto";
        overflow:hidden;
        background-color:gray;
    } */
    main {
        margin:30px;
        z-index: 4;
    }
    #title {
        z-index: 2;
        position:absolute;
    }
    .stack {
        z-index: 10;
        position:absolute;
        top:126px;
        left:490px;
        display: flex;
        flex-wrap:wrap;
        gap: 10px;
        width:210px;
        background-color: blue;
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
    .paint {
        border-style:solid;
    }
</style>