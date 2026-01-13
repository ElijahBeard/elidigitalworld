<script lang="ts">
    import { fade } from "svelte/transition";
    interface project {
        title:string,
        img:string,
        description:string,
    };
    let portfolio_projects: project[] = [
        {
            title:"ACRN LIVE",
            img:"/portfolio/acrnlive.png",
            description:"ACRN is Ohio University's internet student radio station. I started the livestreaming webpage as a personal project. It's since been adopted as the official livestreaming page. I built it using basic javascript, firebase, and it uses the Radio.co API."
        },
        {
            title:"AftrBurner Projects",
            img:"/portfolio/monkeyball.png",
            description:"This youtube channel contains the overview of 8 projects that I worked on for my Game Engine Design course. The projects are fully C++ and I had a main focus on midi implementation."
        },
        {
            title:"elidigitalworld",
            img:"/portfolio/edw.png",
            description:"This website you are on now, is elidigitalworld. It holds all of my web experiments."
        },
        {
            title:"Synthesizer Sequencer",
            img:"/portfolio/synth.png",
            description:"This was my first hardware project. My friend Minh and I built this synthesizer, and it won the best hardware category at Ohio Universities 2024 hackathon. You can check out more information on my github.",
        },
        {
            title:"User-177606668",
            img:"/portfolio/user.png",
            description:"An anonymous music platform for hundreds of artists around the world to share their creations. Created mid 2020, still active today.",
        },
    ];

    let current = "";
    let title : HTMLElement;
    async function type(text:string) {
        for (let i=0;i<text.length;i++) {
            current += text[i];
            await new Promise(resolve => setTimeout(resolve,80));
        }
    }
    function viewed_type(e:HTMLElement) {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                type("PORTFOLIO");
                observer.unobserve(e);
            }
        });
        observer.observe(e);
    }
    function viewed_animate(e:HTMLElement) {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                e.classList.add('grow');
                observer.unobserve(e);
            }
        });
        observer.observe(e);
    }
</script>
<!-- portfolio (draggable)-->
<div class="pull">
    <img id="lift" src="/portfolio/lift.png" alt="">
</div>
<div class="portfolio_body">
    <div class="portfolio_header">
        <h1 use:viewed_type>{current}</h1>
        <hr use:viewed_animate>
    </div>
    <div class="projects">
        {#each portfolio_projects as project}
            <div class="project">
                <h3 id="project_title">{project.title}</h3>
                <img src="{project.img}" alt="">
                <p id="project_description">{project.description}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    .portfolio_header {
        display:flex;
        flex-direction:column;
        align-items:center;
        position:sticky;
        top:0;
        background-color: rgba(0, 0, 0, 0.531);
        backdrop-filter: blur(10px);
        width:100vw;
        height:80px;
        font-size:10pt;
    }
    .portfolio_body {
        background-color: black;
        color:white;
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow-y:scroll;
        height:100vh;
    }
    .pull {
        display:flex;
        justify-content: center;
        width:100vw;
        height:100px;
        margin:0;
        padding:0;
        background-color: transparent;
    }
    #lift {
        width:70px;
        position:absolute;
        top:11px;
    }
    :global(.grow) {
        width:90vw;
        animation: grow 2s ease forwards;
    }
    @keyframes grow {
        from {width:0vw;}
        to {width:90vw;}
    }
    .projects {
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: space-evenly;
    }
    .project {
        width:45vw;
    }
    #project_description {
        padding:5px;
        background-color: white;
        color:black;
    }
    .project img {
        width:100%;
        height:500px;
        object-fit: cover;
    }
</style>