<script lang="ts">
    import '../../app.css';
    import { supabase } from '$lib/supabase';
    import { onMount } from 'svelte';

    let drawing_urls: string[] = [];

    onMount(async () => {
        const { data, error } = await supabase
        .storage
        .from('drawings')
        .list('', {
            limit: 100,
            offset: 0,
            sortBy: { column: 'name', order: 'asc' } // Optional, ensures predictable order
        });

        console.log('Listing result:', data, error);

        if (error) {
        console.error('Error listing drawings:', error.message);
        return;
        }

        if (data && data.length > 0) {
        drawing_urls = data
            .filter(file => file.name.endsWith('.png'))
            .map(file =>
            supabase.storage
                .from('drawings')
                .getPublicUrl(file.name).data.publicUrl
            );
        } else {
        console.warn('No drawings found in bucket.');
        }
    });
    let drawing:HTMLDivElement;
</script>

<header>
    <h1 class="title">DRAWING POOL</h1>
</header>

<main>
    <img width=200px style="position:absolute;top:150px;" src="/throw1.png" alt="">
    <img width=200px style="position:absolute;right:0;top:1200px;" src="/throw2.png" alt="">
    <div class="drawings_grid">
        {#each drawing_urls as url}
            <div class="drawing" bind:this={ drawing } >
                <img class="drawing_img" src={url} alt="drawing, undefined">
            </div>
        {/each}
    </div>
</main>

<style>
    /* == header == */
    header {
        margin:0px;
        padding:20px;
        background-image: url("/header_notext.bmp");
        background-size: cover;
        background-position: 100vh;
        transform: scaleY(-1);
        /* filter: invert(); */
        display:flex;
        justify-content: center;
    }
    .title{
        transform: scaleY(-1);
        font-family: bLock;
        font-size:60px;
        margin:0;
    }
    @font-face {
        font-family: "Block";
        src: url("/block.ttf") format("truetype");
        font-display: swap;
    }

    main {
        background-image:url("/paper.png");
        background-size: contain;
        height:100%;
    }

    /* == drawings zone == */
    .drawings_grid {
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .drawing {
        z-index: 2;
        margin:15px;
        padding:4px;
        background-color: rgb(255, 255, 255);
    }
    .drawing_img {
        padding:9px;
        border:5px;
        border-style: dashed;
        width: 400px;
        border-color:rgb(0, 0, 255);
        background-color: white;
    }
</style>