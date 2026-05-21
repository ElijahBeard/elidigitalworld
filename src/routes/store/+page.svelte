<script lang="ts">
    import Marquee from '$lib/components/marquee.svelte';
    let marquee_elements = ["CURRENT ANNOUNCEMENT", "--", "SHOW @ DIRTY DUNGAREES JUN 15", "--","MERCH 50% OFF","--"];
    import Box from '$lib/components/box.svelte';
    let boxes = {
        home: "/",
    };
</script>


<Marquee fontSize="2rem" {marquee_elements}/>
<main>
    <nav>
        <div style="display:flex;flex-direction:row;justify-content:flex-start;">
            <h1 id="logo">ELIDIGITALW0RLD</h1>
            <h2 id="store">Store</h2>
        </div>
        <div style="display:flex;justify-content:space-around;">
            <button style="height:30px;width:70px;">
                <p style="font-family:'icons-2';">P</p>
            </button>
        </div>
    </nav>
        <Box {boxes} />

    <p>aweoifnwoienfoiwne</p>
    <button>Button</button>

    <div>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
    </div>
    <ul>
        <li>un</li>
        <li>ordered</li>
        <li>list</li>
    </ul>
    <a href="about:none">link</a>
    <i>italics</i>
    <input type="text">
    <textarea name="" id=""></textarea>
</main>

<style>
#logo{
    font-family:"block-logo";
}
#store {
    font-family:'monobold';
    color:rgb(196, 229, 229);
}
main {
    padding:10px;
    height:100%;
    overflow-y:auto;
    overflow-x:hidden;
    background-color: rgb(239, 239, 239);
    color:rgb(98, 105, 112);
    font-family:'monoregular';
    display:flex;
    flex-direction:column;
}
nav {
    display:flex;
    justify-content:space-between;
}
h1,h2,h3,h4,h5,h6,p {
    margin:0;
    padding:0;
}
button {
    background-color: lightgray;
    border-style:none;
    border-radius: 10px;
    max-width: 200px;
    min-height:25px;
    padding:0;
    margin:0;
}
button:hover {
    background-color: rgb(196, 229, 229);
}
button:active {
    background-color: rgb(232, 229, 183);
}
</style>