<script lang="ts">
    import gsap from 'gsap';
    import { onMount } from 'svelte';
    import { blendBurn } from 'three/tsl';
    let duration = 0.09
    export let content
    function rot(direction:any) {
        gsap.to('.box',15,{rotate:direction * 360,repeat:-1,ease:'none',});
    }

    function grow (event: MouseEvent) {
        const node = event.currentTarget as HTMLElement;
        gsap.to(node, {
            scale: 2,
            zIndex: 2,
            rotate:0,
            stroke:50,
            bordercolor:'blue',
            color:'blue',
            duration: duration,
            overwrite:'auto'
        });
    }

    function shrink (event: MouseEvent) {
        const node = event.currentTarget as HTMLElement;
        gsap.to(node, {
            scale: 1,
            zIndex: 1,
            rotate: 0,
            bordercolor:'black',
            color:'black',
            duration: duration,
        });
        // rot(1)
    }

    onMount(() => {
        // rot(1)
    })
</script>

<button class="box" onmouseenter={grow} onmouseleave={shrink}>
    {content}
</button>

<style>
    .box {
        width:40px;
        height:40px;
        margin:1px;
        border:1px;
        border-color:black;
        border-style:solid;
        background-color: gray;
        display:flex;
        justify-content: center;
        align-items: center;
        font-family:"pixel-icon";
        font-size:20px;
    }
    .box:hover {
        cursor:pointer;
    }
</style>