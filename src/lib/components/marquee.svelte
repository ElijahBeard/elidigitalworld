<script lang="ts">
  import { onMount, tick } from 'svelte';
  import gsap from 'gsap';

  export let marquee_elements: string[]
  
  export let fontSize: string = "1.5rem"; 

  let containerRef: HTMLDivElement;
  let trackRef: HTMLDivElement;
  let tween: gsap.core.Tween | null = null;
  export let SPEED:number = 50;

  async function updateMarquee() {
    if (!containerRef || !trackRef) return;

    if (tween) {
      tween.kill();
      gsap.set(trackRef, { x: 0 });
    }

    // Wait for Svelte to finish applying the font-size CSS updates to the DOM
    await tick();

    const trackWidth = trackRef.scrollWidth;
    if (trackWidth === 0) return;

    const duration = (trackWidth / 2) / SPEED;

    tween = gsap.to(trackRef, {
      xPercent: -50,
      ease: 'none',
      duration: duration,
      repeat: -1
    });
  }

  // re-trigger loop whenever items or font-size attribute changes
  $: if (marquee_elements || fontSize) {
    updateMarquee();
  }

  onMount(() => {
    window.addEventListener('resize', updateMarquee);
    updateMarquee();

    return () => {
      window.removeEventListener('resize', updateMarquee);
      if (tween) tween.kill();
    };
  });
</script>

<div class="ticker-container" bind:this={containerRef}>
  <div class="ticker-track" bind:this={trackRef} style:font-size={fontSize}>
    {#each [...marquee_elements, ...marquee_elements] as item}
      <div class="ticker-item">{item}</div>
    {/each}
  </div>
</div>

<style>
  .ticker-container {
    overflow: hidden;
    width: 100%;
    background-color: rgb(81, 81, 81);
    color: rgb(207, 207, 207);
  }
  .ticker-track {
    display: inline-flex;
    white-space: nowrap;
    will-change: transform;
  }
  .ticker-item {
    padding-right: 2rem; 
  }
</style>
