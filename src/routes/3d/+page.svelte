<script lang="ts">
    import { Canvas } from '@threlte/core'
    import Scene from './scene.svelte'
</script>

<div>
    <h1>Flosspick Map</h1>
    <Canvas>
        <Scene />
    </Canvas>
</div>

<style>
    :global(body) {
        background-color: rgba(195, 195, 195, 0.123);
        color:rgb(0, 0, 0);
        margin:0;
        font-family:Arial, Helvetica, sans-serif;
        margin-top:20px;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        height:100vh;
    }
    h1 {
        position:absolute;
        margin:0;
        padding:0;
        background-color: transparent;
        z-index: 3;
    }
</style>