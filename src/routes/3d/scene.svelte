<script lang="ts">
  import { T, useLoader } from '@threlte/core'
  import { GLTF, OrbitControls, useDraco, Billboard, interactivity, useTexture } from '@threlte/extras'
  import { EffectComposer } from 'threlte-postprocessing'
  import { BloomEffect } from 'threlte-postprocessing/effects'
  import { Spring } from 'svelte/motion'
  import { TextureLoader, Vector3 } from 'three'
  const texture = useLoader(TextureLoader).load('/models/floss.jpg')
  const dracoLoader = useDraco()
  interactivity()

  let globe_offset = 1;
  let globe_speed = new Spring(0.5)
  let selected:Spring<[number,number,number]> = new Spring([5,0,5], {
    stiffness: 0.02,
    damping: 0.9
  })
  interface flosspick { 
    image:string,
    lat:number,
    lon:number,
    scale:Spring<number>
  }
  let flosspicks:flosspick[] = [
    {
      image:"/flosspicks/floss1.jpg",
      lat:40,
      lon:82,
      scale: new Spring(0.2)
    },
    {
      image:"/flosspicks/floss2.jpg",
      lat:50,
      lon:90,
      scale: new Spring(0.2)
    },
        {
      image:"/flosspicks/floss2.jpg",
      lat:-60,
      lon:30,
      scale: new Spring(0.2)
    },
        {
      image:"/flosspicks/floss2.jpg",
      lat:-800,
      lon:70,
      scale: new Spring(0.2)
    },    {
      image:"/flosspicks/floss2.jpg",
      lat:-940,
      lon:79,
      scale: new Spring(0.2)
    },    {
      image:"/flosspicks/floss2.jpg",
      lat:-90,
      lon:29,
      scale: new Spring(0.2)
    }
  ]
</script>


<T.PerspectiveCamera
  makeDefault
  position={selected.current}
  fov={25}
>
  <OrbitControls
    autoRotate
    autoRotateSpeed={globe_speed.current}
    enableDamping
    panSpeed={0}
  />
</T.PerspectiveCamera>

<T.AmbientLight intensity={3.4} />

<EffectComposer>
  <BloomEffect
    intensity={0.8}  
    luminanceSmoothing={1}         
  />
</EffectComposer>

<T.Group name="map">
  {#each flosspicks as flosspick}
    <Billboard 
      position={[
        Math.cos(flosspick.lat * Math.PI / 180) * Math.cos(flosspick.lon * Math.PI / 180) * globe_offset,
        Math.cos(flosspick.lat * Math.PI / 180) * Math.sin(flosspick.lon * Math.PI / 180) * globe_offset,
        Math.sin(flosspick.lat * Math.PI / 180) * globe_offset
      ]}
    >
      <T.Group 
        position={[0, 0, 0]} rotation={[0, 0, 0]}
          scale={flosspick.scale.current}
          onpointerenter={() => {
            flosspick.scale.target = 0.6
          }}
          onpointerleave={() => {
            flosspick.scale.target = 0.2
            globe_speed.set(0.5);
          }}
          onclick={() => {
            flosspick.scale.target = 0.9
            selected.set([
              Math.cos(flosspick.lat * Math.PI / 180) * Math.cos(flosspick.lon * Math.PI / 180) * 4,
              Math.cos(flosspick.lat * Math.PI / 180) * Math.sin(flosspick.lon * Math.PI / 180) * 4,
              Math.sin(flosspick.lat * Math.PI / 180) * 4
            ])
            globe_speed.set(0);
          }}
      >
        <T.Mesh
          position={[0,0.6,0]}
        >
          <T.BoxGeometry args={[0.5, 0.5, 0.1]}/>
          {#await useTexture(flosspick.image) then texture}
            <T.MeshStandardMaterial map={texture} />
          {/await}
        </T.Mesh>

        <T.Mesh position={[0,0.25,0]} rotation={[Math.PI,0,0]}>
          <T.ConeGeometry args={[0.05,0.2]} />
          <T.MeshBasicMaterial color="white" />
        </T.Mesh>
      </T.Group>
    </Billboard>
  {/each}
  <GLTF url="/models/earth.glb" {dracoLoader}/>
</T.Group>