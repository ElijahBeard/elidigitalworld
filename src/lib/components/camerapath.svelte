<script lang="ts">
import { useThrelte } from "@threlte/core";
import * as THREE from 'three';
import gsap from "gsap";

const { camera } = useThrelte()
let pos = new THREE.Vector3(37,35,22)
let rot = new THREE.Euler(-0.8,0.8,0.7)
let duration = 1

camera.current.position.copy(pos)
camera.current.rotation.copy(rot)
camera.current.updateMatrix()
console.log(camera.current.matrix)

export function move_camera () {
    if(pos.x == 10) {
        gsap.to(pos,{
            x:37,y:35,z:22,
            duration:duration,
            onUpdate: () => {
                camera.current.position.copy(pos);
            }
        })
        gsap.to(rot, {
            x:-0.8,y:0.8,z:0.7,
            duration:duration,
            onUpdate: () => {
                camera.current.rotation.copy(rot)
            }
        })

    }
    else {
        gsap.to(pos,{
            x:10,y:30,z:10,
            duration:duration,
            onUpdate: () => {
                camera.current.position.copy(pos);
            }
        })
        gsap.to(rot, {
            x:-0.8,y:0.9,z:0.1,
            duration:duration,
            onUpdate: () => {
                camera.current.rotation.copy(rot)
            }
        })
    }
}

export function scroll_camera(scrollY: number) {
    const t = Math.min(scrollY / 1000, 1);

    const x = 37 - t * 27;
    const y = 35 - t * 10;
    const z = 22 - t * 12;

    gsap.to(pos, {
        x, y, z,
        duration: 0.6,
        onUpdate: () => {
            camera.current.position.copy(pos);
        }
    });

    gsap.to(rot, {
        x: -0.8,
        y: 0.8 + t * 0.3,
        z: 0.7 - t * 0.5,
        duration: 0.6,
        onUpdate: () => {
            camera.current.rotation.copy(rot);
        }
    });
}
</script>