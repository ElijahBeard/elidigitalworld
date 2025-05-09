<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';

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

    // == canvas == 
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
    async function saveCanvas() {
      canvas.toBlob(async (blob) => {
        if (!blob) {console.log("i didnt work im a blob");return;}
        const formData = new FormData();
        formData.append('drawing', blob, 'drawing.png');
  
        const response = await fetch('/api/save', {
          method: 'POST',
          body: formData
        });
  
        const result = await response.json();
        alert(`Saved as: ${result.filename}`);
      }, 'image/png');
    }
    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    $: if (canvas) {
      ctx = canvas.getContext('2d')!;
    }
</script>

<!-- == html content == -->
<header>
    <img id="header_img" width=100% src="logo.png" alt="">
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

<style>
    /* == header == */
    header {
        margin:0px;
        padding:20px;
        background-image: url("header_notext.bmp");
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
        font-family: "Block";
        src: url("/pictochat.ttf") format("truetype");
        font-display: swap;
    }
    .marquee_content {
        height:25px;
        font-family: "Block", sans-serif;
        flex: 0 0 auto;
        padding:0;
        margin:0;
        padding-right: 0.1rem;
    }
    /* == MAIN CONTENT CONTAINER == */
    .main{
        display:flex;
        padding:10px;
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
    .controls button {
        background: white;
        border-style:solid;
    }
    /* == END MAIN CONTENT CONTAINER == */
</style>

