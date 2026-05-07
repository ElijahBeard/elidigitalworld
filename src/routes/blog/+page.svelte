<script>
    import { page } from '$app/state';
    let { data } = $props();
    const path = $derived(page.url.pathname);
</script>

<main>
    <h3>Food</h3>
    <a href="/blog/pattymelt" data-sveltekit-preload-data>patty melt tutorial</a>
    <a href="/blog/springmenu">spring menu</a>
    <a href="/blog/summermenu">summer menu</a>
    <h3>Misc</h3>
    <a href="/blog/test">test</a>
    <a href="/blog/whisky" data-sveltekit-preload-data>whisky</a>
    <a href="/blog/personascreenshots" data-sveltekit-preload-data>persona screenshots</a>
</main>

<style>
    main {
        font-family:"monoregular";
        width:85vw;
        height:85vh;
        display:flex;
        flex-direction: column;
        background-color:rgb(245,244,238);
        padding:15px;
        overflow-y:scroll;
        overflow-x:hidden;
    }
    a {
        padding:5px;
        border-style:solid;
        border-left:1px;
        border-right:0;
        border-top:0;
        margin-bottom:4px;
        border-color:rgb(230, 224, 207);
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