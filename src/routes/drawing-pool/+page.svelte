<script lang="ts">
    import '../../app.css';
</script>

<header>
    <h1 class="title">DRAWING POOL</h1>
</header>

<style>
    /* == header == */
    header {
        margin:0px;
        padding:20px;
        background-image: url("header_notext.bmp");
        background-size: cover;
        background-position: 100vh;
        transform: scaleY(-1);
        /* filter: invert(); */
        display:flex;
        justify-content: center;
    }
    .title{
        transform: scaleY(-1);
        font-family: bLock;
        font-size:60px;
        margin:0;
    }
    @font-face {
        font-family: "Block";
        src: url("block.ttf") format("truetype");
        font-display: swap;
    }

</style>