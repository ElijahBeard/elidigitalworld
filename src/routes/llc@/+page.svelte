<script lang="ts">
    import Dithering from "./dithering.svelte";
    import Testpixel from "./testpixel.svelte";
</script>
<div class="dither">
    <Testpixel/>
</div>

<style>
    :global(body) {
        margin:0;
        padding:0;
    }
    .dither {
        width:100vw;
        height:100vh;
    }
</style>