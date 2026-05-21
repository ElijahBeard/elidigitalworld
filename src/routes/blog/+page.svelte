<script>
    import { page } from '$app/state';
    import "$lib/styles/blog.css"
    let { data } = $props();
    const path = $derived(page.url.pathname);
</script>

<main class="blog-post">
    <h3>Food</h3>
    <a href="/blog/pattymelt" data-sveltekit-preload-data>patty melt tutorial</a>
    <a href="/blog/springmenu" data-sveltekit-preload-data>spring menu</a>
    <a href="/blog/summermenu" data-sveltekit-preload-data>summer menu</a>
    <h3>Misc</h3>
    <a href="/blog/test" data-sveltekit-preload-data>test</a>
    <a href="/blog/whisky" data-sveltekit-preload-data>whisky</a>
    <a href="/blog/personascreenshots" data-sveltekit-preload-data>persona screenshots</a>
</main>