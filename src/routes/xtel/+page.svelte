<script>
    import { tick } from 'svelte';
    import { onMount } from 'svelte';
    import hljs from 'highlight.js/lib/core';
    import cpp from 'highlight.js/lib/languages/cpp';
    import 'highlight.js/styles/github.css';  // or any highlight.js theme you like

    async function updateMath() {
        if (typeof window !== 'undefined' && window.MathJax) {
            await tick();  // Wait for DOM updates
            window.MathJax?.typesetPromise?.();  // Trigger MathJax re-render
        }
    }

    hljs.registerLanguage('cpp', cpp);
    let code;
    let audioElement;
    let videoElement
    onMount(() => {
        if (code) {
        hljs.highlightElement(code);
        }

        if (audioElement) {
            new window.MediaElementPlayer(audioElement, {
                features: ['playpause', 'progress', 'current', 'duration', 'volume'],
                audioVolume: 'horizontal',
                success: (mediaElement, originalNode, instance) => {
                    instance.container.classList.add('my-audio-player');
                }
            });
        }

        if (videoElement) {
            new window.MediaElementPlayer(videoElement, {
                features: ['playpause', 'progress', 'current', 'duration', 'volume', 'fullscreen'],
                success: (mediaElement, originalNode, instance) => {
                    instance.container.classList.add('my-video-player');
                }
            });
        }

    });

    $: updateMath();
</script>

<style>
    @font-face {
        font-family: "RomanS";
        src: url("/RomanS.ttf") format("truetype");
        font-display: swap;
    }
    .page {
        max-width: 650px;
        font-family: "RomanS";
        margin:10px;
        padding:10px;
        margin-bottom:50px;
        background-color:rgb(245, 244, 239);
        border-style:dotted;
        border-width: 2px;
        border-color:rgba(0, 0, 0, 0.337);
        height:120vh;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    :global(body) {
        margin:0;
        padding:0;
        border-style:solid;
        border-color: rgba(0, 0, 0, 0.163);
    }
    main {
        display:flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        margin:0;
        padding:15px;
        background-color:rgb(198, 196, 190);
    }
    p {
        font-family:monospace;
        margin:3px;
        color:black;
        font-size:9pt;
    }
    .h {
        display:flex;
        flex-direction: row;
        justify-content: center;
    }
    h1, h2, h3, h4 {
        color:rgb(132, 0, 0);
        padding-right:10px;
        margin:0;
    }
    div {
        border-style:solid;
        padding:10px;
        margin:2px;
        border-width: 0.1px;
        color:rgba(10, 156, 223, 0.54);
        background-color: rgba(0, 255, 255, 0.104);
    }
    .math {
        text-align: center;
        font-family: monospace;
        font-size:12pt;
        color:black;
        background-color: rgb(255, 255, 154);
        margin:20px;
    }
    input {
        border-radius: 2px;
        margin:2px;
    }
    .ac {
        display:flex;
        justify-content: center;
        border-style:none;
        background-color:transparent;
    }
    :global(.my-audio-player .mejs__mediaelement) {
        height:100%;
        width:100%;
        background-color:rgb(189, 189, 189);
        filter: drop-shadow(0px 0px 5px #000000);
    }
    .pagecontent {
        background-color: transparent;
        border-style:none;
    }
    .tri {
        background-color:transparent;
        border-style:none;
        margin:-20px;
        margin-bottom:-25px;
    }
    .tri img {
        width:60px;
    }
    .tri h1 {
        position:relative;
        bottom:-60px;
        right:-3px;
        font-weight: bold;
    }
</style>

<main>
    <!-- page 1 -->
    <div class="page">
        <div class="pagecontent">
            <div class="h">
                <h1>Secret / Snow</h1>
            </div>
            <hr>
            <p>One of my favorite artists (in the top 3) is secret/snow. They have defined the ambient sound that plays in my head every day. When they post once every 4-6 months it is always a sit down still and listen moment.
            </p>
            <hr>
            <p>
                If you know about other accounts they have let  me know. If you have never heard this music before go listen to it
                <a href="">soundcloud.com/snowyhills</a>
                <a href="">https://soundcloud.com/secretssss</a>
            </p>

        </div>
        <div class="tri">
            <h1>1</h1>
            <img src="/tri.png" alt="">
        </div>
    </div>
    <!-- page 2 -->
    <div class="page">
        <div class="pagecontent">
            <div class="h">
                <h1>area Wide</h1>
                <h2>s</h2>
                <h3>w</h3>
                <h4>h4</h4>   
            </div>
            <br>
            <h2>1.1 Example Lanten ?.!</h2>
            <hr>
            <p>This is a text box. Could be filled with content. It text wrap one two three. Lananan ls . lka</p>
            <p>Second box para, ? sjsk sjj 33 k3 k3 : and I Let off  to  TEX down here  Unicodeℊ </p>
            <div class="math">
                $This\;is\;a\;tex\;bloc^k$
            </div>
                <p> 33 k3 k3 : and I Let off  to  TEX down here  Unicodeℊ ☂︎℀⚓︎ </p>
            <div class="math">
                $T(n)=\Theta(n\times lg^3n)$
            </div>
            <div class="input">
                <input type="button" value="">
                <input type="search" name="" id="">
                <input type="button" value="">
                <input type="button" value="">
            </div>
            <hr>
            <div class="h">
                <h3>might look</h3>
                <h1>Audio</h1>
            </div>
            <!-- <div class="ac">
                <audio
                    bind:this={audioElement}
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                ></audio>
                <video
                    bind:this={audioElement}
                    src="/mason.mp4"
                ></video>
            </div> -->
        </div>
        <div class="tri">
            <h1>2</h1>
            <img src="/tri.png" alt="">
        </div>
    </div>
</main>