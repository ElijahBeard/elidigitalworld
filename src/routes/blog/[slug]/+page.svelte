<script lang="ts">
    import type { Component } from "svelte";
    let { data } = $props<{data:{slug:string}}>();

    async function GETPost(slug:string): Promise<Component | null> {
        try {
            const module = await import(`./${slug}.svelte`);
            return module.default
        } catch {
            return null;
        }
    };

    const post = $derived(GETPost(data.slug));
</script>

{#await post} 
    <p>hi2049</p>
{:then Component} 
    {#if Component}
        <svelte:component this={Component} />
    {:else} <p>404</p>
    {/if}
{/await}