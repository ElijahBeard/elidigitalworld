<script lang="ts">

</script>

<main>
    <header>
        <h1>portfolio</h1>
    </header>
    <div class="list">
        <div class="listitem">
            →
            <a href="https://elidigitalworld-production.up.railway.app">EDW</a>
        </div>
        <div class="listitem">
            →
            <a href="https://elijahbeard-resume.web.app">RESUME</a>
        </div>
        <div class="listitem">
            →
            <a href="">HEGGIE W.C.</a>
        </div>
        <div class="listitem">
            →
            <a href="https://acrnlive.web.app">ACRNLIVE</a>
        </div>
        <div class="listitem">
            →
            <a href="https://acrn.com">ACRNCOM</a>
        </div>
    </div>
</main>

<style>
    @font-face {
    font-family: "picto";
    src: url("/pictochat.ttf") format("truetype");
    font-display: swap;
    }
    @font-face {
        font-family: "block";
        src: url("/block.ttf") format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: "matcha";
        src: url("/matcha.otf") format("truetype");
        font-display: swap;
    }
    :global(body) {
        margin:0;
        padding:0;
    }
    main {
        display:flex;
        flex-direction: column;
        justify-content: baseline;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.131);
        height:100vh;
    }
    header {
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom:20px;
        width:100vw;
        z-index: 2;
        height:10vh;
        background-color: rgb(159, 159, 159);
    }
    h1 {
        font-family: "block";
        font-size:40px;
        color:rgba(0, 0, 0, 0.19);
    }
    a {
        color:rgba(0, 0, 0, 0.672);
        font-family:"picto";
        font-size:30px;
        margin-left:10px;
        background-color: rgba(128, 128, 128, 0.231);
    }
    .list {
        display:flex;
        flex-direction: column;
    }
    .listitem {
        display:flex;
        justify-content: baseline;
        margin-bottom:30px;
        border-color:rgba(0, 60, 255, 0.714);
        border-style: dotted;
        padding:2px;
    }
    
</style>