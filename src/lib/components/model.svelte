<script lang="ts">
import { GLTF, useGltfAnimations, useDraco } from '@threlte/extras'
export let model_path:string;

const dracoLoader = useDraco()
let { gltf, actions } = useGltfAnimations()

$: {
	for (const action of Object.values($actions)) {
		action?.reset().play()
	}
}
</script>

<GLTF
	bind:gltf={$gltf}
	url={model_path}
	{dracoLoader}
	scale={1}
/>