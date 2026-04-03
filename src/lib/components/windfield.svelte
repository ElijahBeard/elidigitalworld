<script lang="ts">
import { Canvas, T, useThrelte } from '@threlte/core'
import Model from './model.svelte';
import Camerapath from './camerapath.svelte';

let camerapath!:Camerapath;

export function move() {
    camerapath.move_camera()
}

</script>

<Canvas>
    <T.PerspectiveCamera
    makeDefault
    position={[37,35,22]}
    rotation={[-0.8,0.8,0.7]}
    fov={100}
    >
    <Camerapath bind:this={camerapath}/>
    </T.PerspectiveCamera>
      
	<T.AmbientLight intensity={4} />

	<Model model_path={"/models/wind_field.glb"}/>

</Canvas>

<button on:click={move}>Move</button>