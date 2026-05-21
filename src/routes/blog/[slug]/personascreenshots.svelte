<script lang="ts">
    import "$lib/styles/blog.css"
    const files = import.meta.glob('$lib/assets/persona/*', {
        eager: true,
        import: 'default'
    });
    const filePaths = Object.values(files) as string[];
</script>
<main class="blog-post">
  {#each filePaths as path}
    <figure>
        <img src={path} alt="" />
        <figcaption>{path.split('/').pop()}</figcaption>
    </figure>
  {/each}
</main>