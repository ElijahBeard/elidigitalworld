<script lang="ts">
    import gsap from 'gsap';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
	import { page } from '$app/state';

    let duration = 0.1
    export let content


    function grow (event: MouseEvent) {
        const node = event.currentTarget as HTMLElement;
        gsap.to(node, {
            scale: 1.5,
            zIndex: 2,
            rotate:0,
            stroke:5,
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
            bordercolor:page.data.accent,
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
            "background-color":"white",
            duration: 0.3,
            onComplete: () => { navigate(`/${content}`); }
        });
    }
</script>

<button class="box" style="view-transition-name:${content};--accent:{page.data.accent}; --bg:{page.data.bg};"
        on:mouseenter={grow} 
        on:mouseleave={shrink}
        on:click={_load}>
    {content}
</button>

<style>
    .box {
        width:60px;
        height:40px;
        margin:1px;
        border:3px;
        border-color:var(--accent);
        border-style:solid;
        background-color:var(--bg);
        color:var(--accent);
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