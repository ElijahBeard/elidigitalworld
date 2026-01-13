<script lang="ts">
    import { onMount } from "svelte";

    let name = " ";
    let email = " ";
    let phone = " ";
    let city = " ";
    async function type(set:(val:string)=>void,text:string) {
        let current = "";
        for (let i=0;i<text.length;i++) {
            current += text[i];
            set(current);
            await new Promise(resolve => setTimeout(resolve,60));
        }
    }
    onMount(() => {
        type((val:string)=>name=val,"Elijah Beard");
        type((val:string)=>email=val,"elijahbeard24@gmail.com");
        type((val:string)=>phone=val,"614-896-0265");
        type((val:string)=>city=val,"Athens, Ohio");
    });
</script>

<div class="header">
    <div class="name">
        <h1>{name}</h1>
        <div class="name_links">
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
            <a href=""><i class="fa-brands fa-github"></i></a>
            <a href=""><i class="fa-solid fa-gear"></i></a>
        </div>
    </div>
    <div class="contact">
        <ul>
            <li><a href="mailto:elijahbeard24@gmail.com">{email}</a></li>
            <li><a href="tel:+16148960265">{phone}</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Athens,_Ohio">{city}</a></li>
        </ul>
    </div>
</div>

<style>
    /* header */
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
        margin:0;
        padding:10px;
        background-color: rgba(255, 249, 240, 0.259);
    }
    a:visited {
        color:black;
    }
    a:hover {
        color:blue;
    }
    li {
        list-style:none;
    }
    .header {
        display:flex;
        justify-content: space-between;
        margin-left:10px;
        margin-right:10px;
    }
    /* header left */
    .name {
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .name h1 {
        font-size:24pt;
        padding:0;
        margin:0;
    }
    .name_links {
        margin-left:3px;
        font-size:25px;
    }
    /* header right */
    .contact {
        text-align: right;
    }
    a[href^="mailto:"] {
        color:black;
    }
    a[href^="tel:"] {
        color:black;
    }
</style>