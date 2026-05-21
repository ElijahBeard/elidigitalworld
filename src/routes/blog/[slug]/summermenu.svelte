<main class="blog-post">
    <img id="stamp" src="/blog/springmenu/stevie.png" alt="">
    <h2>Stevie's Hometown Cuisine</h2>
    <p>Summer Menu</p>

    <h3>Entree</h3>
    <div class="dish">
        <h4>Chicken Pot Pie</h4>
        <p>Savory pie with flaky buttery crust filled with carrots, peas, onions and fresh herbs.</p>
    </div>
    <div class="dish">
        <h4>Spaghetti Carbonara + Fried Olives</h4>
        <p>Classic carbonara with fried pancetta and spaghetti in a peccorino based sauce. Served with fried blue cheese stuffed olives.
        </p>
    </div>
    <div class="dish">
        <h4>Avgolemono</h4>
        <p>Chicken and rice soup for the sick body.
        </p>
    </div>
    <div class="dish">
        <h4>Fallafel & Fattoush</h4>
        <p>Handmade fallafel served with toum, lavash and a fattoush salad.
        </p>
    </div>
    <!-- <h3>Salads</h3>
    <div class="dish">
        <h4>Cherry Cobbler</h4>
        <p>Couscous, lemon, red onion, snap peas, mint, parsley</p>
    </div>
    <div class="dish">
        <h4>Rice Salad</h4>
        <p>Jasmine rice, greens, red cabbage, carrots, snap peas, sesame soy dressing</p>
    </div> -->
    <h3>Desert</h3>
    <div id="desert" class="dish">
        <h4>Cherry Cobbler</h4>
        <h4>Strawberry Shortcake</h4>
        <h4>Rhubarb Pie</h4>
    </div>
</main>

<style>
    p {
        margin:0;
        margin-bottom:0px;
    }
    #stamp {
        position:relative;
        top:0;
        width:89px;
        padding:0;
    }
    main{
        font-family:"Futura";
        background: #2A7B9B;
        background: radial-gradient(circle,rgba(210, 198, 169, 0.558) 0%, rgb(244, 202, 202) 50%, rgb(255, 255, 255) 200%);
        width:400px;
        height:800px;
        overflow:auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        color:rgb(77, 18, 4); 
        margin-bottom:10px;
    }

    h1, h2, h3, h4{
        margin-top:5px;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    .dish {
        color:rgb(14, 19, 5);
        width:345px;
        display:flex;
        flex-direction: column;
        margin:0;
        padding:5px;
    }
    .dish p {
        font-family:"Arial"
    }
    #desert {
        text-align: center;
    }
</style>