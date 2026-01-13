<script lang="ts">
    import ResumeHeader from "./resume_header.svelte";
    import Portfolio from "./portfolio.svelte";
    import ResumeBody from "./resume_body.svelte";  
    import { onMount } from "svelte";
    
    // DYNAMIC PORTFOLIO
    import interact from "interactjs";
    onMount(() => {
        window.scrollTo(0, 0) 
        interact('.draggable')
            .draggable({
                inertia:true,
                autoScroll:true,
                
                listeners: {
                    move: dragMoveListener,
                }
            });
        function dragMoveListener (event:any) {
            var target = event.target
            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
            const max_y = 0;
            const min_y = -window.innerHeight * 0.94;
            y = Math.min(Math.max(y,min_y),max_y);
            target.style.transform = 'translate(0px, ' + y + 'px)'
            console.log(y);
            target.setAttribute('data-y',y);
        }
    })
</script>

<main>
    <div id="portfolio" class="draggable">
        <Portfolio/>
    </div>
    <div class="resume_container">
        <ResumeHeader />
        <!-- resume -->
        <ResumeBody />
        <!-- portfolio (draggable)-->
    </div>

</main>

<style>
/* overall */
@font-face {
    font-family: "monoregular";
    src: url("/fonts/SpaceMono-Regular.ttf") format("truetype");
    font-display: swap;
}
@font-face {
    font-family: "monobold";
    src: url("/fonts/SpaceMono-Bold.ttf") format("truetype");
    font-display: swap;
}
@font-face {
    font-family: "block";
    src: url("/fonts/block.ttf") format("truetype");
    font-display: swap;
}
:global(body) {
    padding:0px;
    background-color: rgba(255, 249, 240, 0.259);
    overflow:hidden;
    font-size:10pt;
}
main {
    display:flex;
    flex-direction: column;
    font-family:"monoregular";
}
.resume_container {
    padding:15px;
    height:100vh;
    overflow:scroll;
}
#portfolio {
    position: fixed;
    bottom:-98%;
    background-color: transparent;
    overflow:scroll;
    touch-action: none;
}
</style>