<main class="blog-post">
    <img id="stamp" src="/blog/springmenu/stevie.png" alt="">
    <h2>Stevie's Hometown Cuisine</h2>
    <p>Spring Menu</p>

    <h3>Entree</h3>
    <div class="dish">
        <h4>Roasted Chicken & Veggies With Whipped Tahini</h4>
        <p>Oven roasted chicken, carrots, asparagus, onions, potatoes. 
            Served with whipped tahini and rosemary oil</p>
    </div>
    <div class="dish">
        <h4>Spring Rolls</h4>
        <p>Grilled Chicken, peppers, herbs and cucumbers wrapped in rice paper.
            Served with Nuoc Cham & Satay.
        </p>
    </div>
    <div class="dish">
        <h4>Soy Butter Cod & Snow Peas</h4>
        <p>Steamed cod with a soy butter glaze pan sauce topped with snow peas and rosemary.
        </p>
    </div>
    <div class="dish">
        <h4>Lemon Dill Salmon & Asparagus</h4>
        <p>Pan fried salmon fillet with lemon butter and dill pan sauce. Oven roasted asparagus.
        </p>
    </div>
    <h3>Salads</h3>
    <div class="dish">
        <h4>Pearl Couscous & Snap Pea Salad</h4>
        <p>Couscous, lemon, red onion, snap peas, mint, parsley</p>
    </div>
    <div class="dish">
        <h4>Rice Salad</h4>
        <p>Jasmine rice, greens, red cabbage, carrots, snap peas, sesame soy dressing</p>
    </div>
    <h3>Desert</h3>
    <div id="desert" class="dish">
        <h4>Rhubarb Pie</h4>
        <h4>Strawberry Shortcake</h4>
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
        background: radial-gradient(circle,rgba(64, 188, 139, 0.558) 0%, rgba(87, 199, 133, 1) 50%, rgb(83, 237, 132) 200%);
        width:400px;
        height:800px;
        overflow:auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        color:rgb(77, 18, 4); 
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