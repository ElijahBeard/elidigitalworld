<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";
    let pose:boolean;

    onMount(() => {
        gsap.to('.gear',{duration:100,rotate:360,repeat:-1,ease:'none'});
    });

    export function move_gear() {
        if(pose) {
            gsap.to('.gear',{duration:1,'top':'-500px','left':'-500px','right':'unset','bottom':'unset'})
        } else {
            gsap.to('.gear',{duration:1,'top':'unset','left':'unset','right':'-500px','bottom':'-500px'});
        }
        if(pose) {pose = false} else {pose = true}
    }
</script>
<img class="gear" src="/gear.png" alt="">
<style>
    .gear {
        z-index: 0;
        position:absolute;
        top:-500px;
        left:-500px;
    }
</style>