<script lang="ts">
    import { T } from '@threlte/core'
    import { GLTF, useGltfAnimations, useDraco } from '@threlte/extras'
    const dracoLoader = useDraco()
    let { gltf, actions } = useGltfAnimations()
    $: {
        for (const action of Object.values($actions)) {
            action.reset().play()
        }
    }
</script>

<T.PerspectiveCamera
  makeDefault
  position={[5,20,5]}
  fov={150}
/>

<T.AmbientLight intensity={9} />

<GLTF bind:gltf={$gltf} url="/models/wind_field.glb" {dracoLoader} scale={1} rotation={[-0.9,0,0]}/>