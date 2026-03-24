<script lang="ts">
    const files = import.meta.glob('$lib/assets/persona/*', {
        eager: true,
        import: 'default'
    });
    const filePaths = Object.values(files) as string[];
</script>
<main>
  {#each filePaths as path}
    <figure>
        <img src={path} alt="" />
        <figcaption>{path.split('/').pop()}</figcaption>
    </figure>
  {/each}
</main>

<style>
    main {
        font-family:"monoregular";
        width:85vw;
        display:flex;
        flex-direction: column;
        background-color:rgb(245,244,238);
        padding:15px;
    }
    h1 {
        margin-top:0;
    }
    h3 {
        margin-bottom:0;
    }
    ul {
        margin:1px;
    }
    img {
        width:50vw;
        align-self: center;
    }
    figure {
        align-self:center;
        font-size:9pt;
        color:gray;
    }
    .dua img{
        object-fit:cover;
        width:40vw;
    }
    .dua {
        display:flex;
        justify-content: space-evenly;
        margin-bottom:5px;
    }
</style>