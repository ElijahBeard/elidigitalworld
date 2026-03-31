<script lang="ts">
    import gsap from 'gsap';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    let duration = 0.09
    export let content


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
    }

    const navigate = (url: string) => {
        if (!document.startViewTransition) {
            goto(url);
            return;
        }

        document.startViewTransition(() => goto(url));
    };

    const _load = (event:MouseEvent) => {
        const node = event.currentTarget as HTMLElement;
        const rect = node.getBoundingClientRect();
        gsap.set(node, {
            position: "fixed",
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
            margin: 0
        });

        gsap.to(node, {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => { navigate(`/${content}`); }
        });
    }

    onMount(() => {
        // rot(1)
    })
</script>

<button class="box" style={`view-transition-name:${content}`} on:mouseenter={grow} on:mouseleave={shrink} on:click={_load}>
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
        font-family:"picto";
        font-size:20px;
    }
    .box:hover {
        cursor:pointer;
    }
    ::view-transition-old(root) {
        animation: fade-out 0.3s;
    }

    ::view-transition-new(root) {
        animation: fade-in 0.3s;
    }

    @keyframes fade-out {
        to { opacity: 0 }
    }

    @keyframes fade-in {
        from { opacity: 0 }
    }
</style>