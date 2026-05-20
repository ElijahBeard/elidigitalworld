<script lang="ts">
    import Marquee from '$lib/components/marquee.svelte';
    import "./store.css"
    let marquee_elements = ["CURRENT ANNOUNCEMENT", "--", "SHOW @ DIRTY DUNGAREES JUN 15", "--","MERCH 50% OFF","--"];
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