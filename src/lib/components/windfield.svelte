<script lang="ts">
import { Canvas, T } from '@threlte/core'
import Model from './model.svelte';
</script>

<Canvas>
    <T.PerspectiveCamera
    makeDefault
    position={[37,35,22]}
    rotation={[-0.8,0.8,0.7]}
    fov={100}
    >
    </T.PerspectiveCamera>
      
	<T.AmbientLight intensity={4} />

	<Model model_path={"/models/wind_field.glb"}/>
    log camera positon
</Canvas>