<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { supabase } from '$lib/supabase';
    //import { pathToFileURL } from 'url';
    let evil = true;
    // == invert page ==


    // == marquee ==
    let marquee: HTMLDivElement;
    onMount(() => {
    const contentWidth = marquee.scrollWidth;
    const duration = contentWidth / 100;

        gsap.to(marquee, {
            x: -contentWidth / 2,
            duration,
            repeat: -1,
            ease: 'linear',
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % (contentWidth / 2))
            }
        });
    });

    // == CANVAS START == 
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let ln = 2;
    let color = "black";
    function startDrawing(event: MouseEvent) {
      ctx.beginPath();
      ctx.moveTo(event.offsetX, event.offsetY);
      canvas.addEventListener('mousemove', draw);
    }
    function draw(event: MouseEvent) {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.lineWidth = ln;
      ctx.strokeStyle = color;
      ctx.stroke();
    }
    function stopDrawing() {
      canvas.removeEventListener('mousemove', draw);
    }
    function stroke_incr() {
        ln = ln + 10;
    }
    function stroke_decr() {
        ln = ln - 10;
    }
    function set_color(new_color: string) {
        color = new_color;
        return new_color;
    }
    async function saveToSupabase(blob: Blob) {
        const filename = `drawing-${Date.now()}.png`;

        const { data, error } = await supabase.storage
        .from('drawings')
        .upload(filename, blob, {
            cacheControl: '3600',
            upsert: false,
            contentType: 'image/png'
        });

        if (error) {
        console.error('Supabase upload error:', error.message, error);
        alert(`Upload failed: ${error.message}`);
        return;
        }

        const url = supabase.storage
        .from('drawings')
        .getPublicUrl(filename).data.publicUrl;

        alert(`Drawing saved to: ${url}`);
    }
    async function saveCanvas() {
        canvas.toBlob(async (blob) => {
            if (!blob) return;
            await saveToSupabase(blob);
        });
    }
    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    $: if (canvas) {
      ctx = canvas.getContext('2d')!;
    }
    // == CANVAS END == //

    // == TILE START == //
    let tiles1 = ['/split/tile_0.png','split/tile_1.png','split/tile_2.png']
    let tiles2 = ['/split/tile_3.png','split/tile_4.png','split/tile_5.png']
    let tiles3 = ['/split/tile_6.png','split/tile_7.png','split/tile_8.png']
    import interact from 'interactjs';
    onMount(() => {
        interact('.draggable_tile').draggable({
            listeners: {
                move(event) {
                    const target = event.target
                    const x = (parseFloat(target.getAttribute('data-x') || '0')) + event.dx;
                    const y = (parseFloat(target.getAttribute('data-y') || '0')) + event.dy;
                    target.style.transform = `translate(${x}px, ${y}px)`;
                    target.setAttribute('data-x',x.toString());
                    target.setAttribute('data-y',y.toString());
                }
            }
        })
    });
    //part with upload
    function upload_grid() {
        alert("TODO:UPLOADIMG")
    }
    // == EVILS SWITCH ==
    let evil_switch: HTMLImageElement;
    function toggle_evil() {
        console.log("evil" + evil);
        if(!evil) {
            evil = true;
            evil_switch.src = "/good.png"
            document.body.style.filter = "";

        }
        else {
            evil = false;
            evil_switch.src = "/evil.png"
            document.body.style.filter = "invert()";
        }
    }
</script>

<!-- == html content == -->
<main>
    <header>
        <img id="header_img" width=100% src="/logo.png" alt="">
    </header>
    <div class="mqc">
        <div class="mqt" bind:this={marquee}>
            <span class="marquee_content">
                you are now on elidigitalworld.xyz -- superstarworldwide ## @elicbeard IG -- @centralboatclub soundcloud LLC -- draw on the pallete! share your drawings with the save button -- check out the compendium to see digital world creations -- (°ロ°) ! -- share your superstar creations on the internet -- XYZ -- what's your favorite flavor of icecream -- have any suggestions ? send them to my email elijahbeard24@gmail.com -- github : ElijahBeard check out my latest projects -- i dont have any updates rn -- no new events coming up -- check out my resume if you want to hire me -- this is elidigitalworld.xyz ... bitch! -- hi -- :] -- draw a pic! --
            </span>
            <span class="marquee_content">
                you are now on elidigitalworld.xyz -- superstarworldwide ## @elicbeard IG -- @centralboatclub soundcloud LLC -- draw on the pallete! share your drawings with the save button -- check out the compendium to see digital world creations -- (°ロ°) ! -- share your superstar creations on the internet -- XYZ -- what's your favorite flavor of icecream -- have any suggestions ? send them to my email elijahbeard24@gmail.com -- github : ElijahBeard check out my latest projects -- i dont have any updates rn -- no new events coming up -- check out my resume if you want to hire me -- this is elidigitalworld.xyz ... bitch! -- hi -- :] -- draw a pic! --
            </span>
        </div>
    </div>
    <div class="main">
        <div class="welcome">
            <div class="welcome_l">
                <div class="mosaic">
                    <div class="tile">
                        {#each tiles1 as isrc}
                        <img class="draggable_tile" src={isrc} alt="tile">
                        {/each}
                    </div>
        
                    <div class="tile">
                        {#each tiles2 as isrc}
                        <img class="draggable_tile" src={isrc} alt="tile">
                        {/each}
                    </div>
        
                    <div class="tile">
                        {#each tiles3 as isrc}
                        <img class="draggable_tile" src={isrc} alt="tile">
                        {/each}
                    </div>
                    <button on:click={upload_grid} id="upload_pic" class="draggable_tile">upload-your-own-image</button>
                </div>    
            </div>
            <div class="welcome_r">
                <div class="welcome_description">
                    <h1>weLcome</h1>
                    <p>
                        hello welcome to my website . make yourself at home -- 
                        There are Many things you can do here. But the first thing
                        you should probably do is draw a picture right below here!
                        <br><br>
                        When you are done drawing hit the 'save ' button and then YYou can
                        check out yours and everyones drawings in the <a href="oaerg">-- DRAWING POOL --</a>
                    </p>
                </div>
                <div class="evil_switch_container">
                    <p>evil switch -></p>
                    <button id="evil_switch" on:click={toggle_evil}><img width=25px bind:this={ evil_switch } src="/good.png" alt=""></button>
                </div>
            </div>
        </div>
        <div class="draw_zone">
            <canvas
                bind:this={canvas}
                width={600}
                height={250}
                on:mousedown={startDrawing}
                on:mouseup={stopDrawing}
                style="border:2px solid black; touch-action: none;background-color:white;">
            </canvas>
            
            <br />
            <div class="controls">
                <button on:click={saveCanvas}><i class="fa-solid fa-floppy-disk"></i></button>
                <button on:click={clearCanvas}>Clear</button>
                <button on:click={stroke_incr}>+</button>
                <button on:click={stroke_decr}>-</button>
                <button style="background-color:black;border-style:solid;border-color:black;color:black" on:click={() => set_color("black")}> -</button>
                <button style="background-color:white;border-style:solid;color:white;" on:click={() => set_color("white")}> -</button>
                <button style="background-color:cyan;border-style:solid;border-color:cyan;color:cyan" on:click={() => set_color("cyan")}> -</button>
                <button style="background-color:magenta;border-style:solid;border-color:magenta;color:magenta" on:click={() => set_color("magenta")}> -</button>
                <button style="background-color:yellow;border-style:solid;border-color:yellow;color:yellow" on:click={() => set_color("yellow")}> -</button>
                <button style="background-color:gray;border-style:solid;border-color:gray;color:gray" on:click={() => set_color("gray")}> -</button>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        /*filter:invert();*/
        overflow:hidden;
    }
    /* == header == */
    header {
        margin:0px;
        padding:20px;
        background-image: url("/header_notext.bmp");
        background-size: cover;
        background-position: 100vh;
        filter: invert();
    }
    /* == marquee == */
    .mqc {
        display:flex;
        justify-content: center;
        white-space: nowrap;
        width: 100%;
        background: black;
        color: white;
    }
    .mqt {
        display: flex;
        flex-wrap: nowrap;
        width: fit-content;
    }
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
    .marquee_content {
        height:25px;
        font-family: "picto", sans-serif;
        flex: 0 0 auto;
        padding:0;
        margin:0;
        padding-right: 0.1rem;
    }

    .main{
        display:flex;
        flex-direction: column;
        padding:20px;
        height:100vh;
        background-color:ghostwhite;
    }
    /* ==DRAW_ZONE== */
    .draw_zone{
        width:100vw;
        display:flex;
        flex-direction: column;
        align-items: center;
        overflow:hidden;
        padding:0px;
    }
    .controls{
        position:relative;
        top:-50px;
        right:-5px;
    }
    button {
        background: white;
        border-style:solid;
    }
    button:hover {
        background: rgb(251, 251, 251);
        border-style:solid;
    }
    button:active {
        background: rgb(202, 203, 202);
    }

    .mosaic{
        display:flex;
        flex-direction: column;
    }
    .tile {
        display:flex;
        flex-direction: row;
        filter: drop-shadow(1px 1px 1px #000000);
    }
    .mosaic img {
        width:100px;
        margin:0;
        padding:0.5px;
    }
    .welcome{
        display:flex;
        flex-direction: row;
        background-image:url("/gear_w.bmp");
        justify-content: baseline;
        margin-bottom:20px;
    }
    .welcome h1 {
        font-family: block;
        padding:0;
        margin:0;
        text-align: center;
    }
    .welcome_l button {
        flex-grow:0;
        position:relative;
    }
    .welcome_r {
        display:flex;
        flex-direction: column;
        flex-grow:1;
    } 
    .welcome_description {
        background-color: rgba(211, 211, 211, 0.085);
        height:100%;
        margin:20px;
    }
    .welcome_description p {
        padding:15px;
        color:black;
        font-family: "picto";
        font-size:15pt;
        margin:0;
    }
    #evil_switch{
        margin:0;
        padding:2px;
        width:36px;
        height:54px;
    }
    .evil_switch_container {
        color:white;
        height:54px;
        display:flex;
        justify-content: space-between;
    }
    .evil_switch_container p {
        font-family:"picto";
        font-size:25px;
        margin-left:20px;
    }
</style>

