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


</script>

<header>
    <h1 class="title">DRAWING POOL</h1>
</header>

<main>
    <div class="drawings_grid">
        {#each drawing_urls as url}
            <div class="drawing">
                <img src={url} alt="drawing, undefined">
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

    /* == drawings zone == */
        
</style>