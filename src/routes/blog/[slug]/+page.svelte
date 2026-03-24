<script lang="ts">
	import { page } from '$app/state';
    import type { Component } from "svelte";
    let { data } = $props<{data:{slug:string}}>();
    const posts = import.meta.glob<{ default: Component }>('./*.svelte');

    async function GETPost(slug:string): Promise<Component | null> {
        const loader = posts[`./${slug}.svelte`];
        if (!loader) return null;

        const module = await loader();
        return module.default;
    };

    const post = $derived(GETPost(data.slug));
</script>

<div class={page.data.bodystyle}>
    {#await post} 
        <p>hi2049</p>
    {:then Component} 
        {#if Component}
            <Component />
        {:else} <p>404</p>
        {/if}
    {/await}
</div>