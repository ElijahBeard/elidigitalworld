<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";
    export let width = 250;
    export let height = 250
    
    let canvas:HTMLCanvasElement
    let ctx!: CanvasRenderingContext2D
    let x0 = 0
    let y0 = 0
    let x1:number,y1:number
    let drawing:boolean
    let erase:boolean = false
    
    onMount(() => {
        ctx = canvas.getContext('2d')!
        if(!canvas || !ctx) {throw new Error("failed 2d")} 
        ctx.lineWidth = 3
    })
		
    const start_draw = (e:MouseEvent) => {
        drawing=true
        x0 = e.offsetX
        y0 = e.offsetY
        if (!erase) {ctx.strokeStyle="#000";ctx.lineWidth=5}
        else {ctx.strokeStyle="#FFF";ctx.lineWidth=10}
    }

    const _draw = (e:MouseEvent) => {
        if (drawing){
            x1=e.offsetX
            y1=e.offsetY
            ctx.beginPath()
            ctx.moveTo(x0,y0)
            ctx.lineTo(x1,y1)
            ctx.closePath()
            ctx.stroke()
            x0 = x1, y0 = y1;
        }
    }
    
    const stop_draw = () => {drawing=false}

    const _save = () => {
        gsap.to(".msg",{duration:1,top:0})
        gsap.to(".msg",{duration:1,top:"-21px",delay:3})

        // gsap.to(".msg",{duration:1,top:"-21px"})
    }
    const tool = (tool:string) => {if(tool == "draw"){erase = false}else{erase = true}}
    const _clear = () => {ctx.clearRect(0,0,width,height)}
</script>

<div class="draw_window" style="width:{width}px;height:{height}px;">
    <div class="msg">
        IMGID : saved
    </div>
    <canvas id="drawing" {width} {height} style="background:#FFF" 
    bind:this={canvas} 
    on:mousedown={start_draw} 
    on:mousemove={_draw} 
    on:mouseup={stop_draw} on:mouseleave={stop_draw}
    on:contextmenu|preventDefault={() => {}}
    > 
    </canvas>
    <div class="desc" style="width:{width}px;height:30px;">
        <div class="tools">
            <button id="delete" on:click={_clear} style="font-family:icons-1;">{"1"}</button>
            <button id="draw" on:click={() => tool("draw")} style="font-family:icons-2;{erase ? "background-color:none;" : "background-color:rgba(232, 255, 59, 0.398);;"}">{"T"}</button>
            <button id="erase" on:click={() => tool("erase")} style="font-family:icons-2; {erase ? "background-color:rgba(232, 255, 59, 0.398);": "background-color:none;"}">{"Y"}</button>
        </div>
        <button id="save" on:click={_save} style="font-family:icons-1;">{"d"}</button>
    </div>
</div>


<style>
    .draw_window {
        position:relative;
        overflow:hidden;
    }
    .msg {
        position:absolute;
        top:-21px;
        padding:5px;
        background-color: rgba(128, 128, 128, 0.332);
    }
    .desc {
        background-color: rgba(128, 128, 128, 0.332);
        z-index: 5;
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .tools {
        display:flex;
    }
    #save, button {
        font-size:19px;
        background:none;
        border-style:solid;
        padding:0;
        margin:0;
        height:31px;
        padding-left:4px;
        width:30px;
    }
    button:active {
        border-style:dotted;
    }
    #save:active {
        border-color:blue;
        color:blue;
    }
    #delete:active {
        color:red;
    }
</style>