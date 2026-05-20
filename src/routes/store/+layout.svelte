<script lang="ts">
	import { page } from '$app/state';
    import "../../app.css";
    import { onMount } from "svelte";
    import gsap from "gsap";

    const IGNORED_TAGS: ReadonlySet<string> = new Set(['MAIN', 'BODY', 'HTML','DIV','UL','NAV']);
    onMount(() => {
        const handleMouseOver = (event: MouseEvent): void => {
            const target = event.target;
            if (!(target instanceof HTMLElement) || IGNORED_TAGS.has(target.tagName)) {
                return;
            }
            gsap.killTweensOf(target);
            gsap.to(target, {
                duration: 0.6,
                scaleY: 1.8,
                ease: 'elastic.out(1, 0.3)'
            });
        };

        const handleMouseOut = (event: MouseEvent): void => {
            const target = event.target;
            if (!(target instanceof HTMLElement) || IGNORED_TAGS.has(target.tagName)) {
                return;
            }
            gsap.killTweensOf(target);
            gsap.to(target, {
                duration: 0.6,
                scaleY: 1,
                ease: 'elastic.out(1, 0.3)'
            });
        };

        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    });
</script>

<div class={page.data.bodystyle}>
    <slot />
</div>

