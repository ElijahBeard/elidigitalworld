<script lang="ts">
    import { onMount } from 'svelte';
    import interact from 'interactjs';

    let lines: HTMLDivElement;
    let line_space = 20;
    let tolerance = 15;
    let new_item = '';
    let items: { id:string; item:string; order:number }[] = [];

    // == LINES CREATION ==
    onMount(() => {
        //lines.innerHTML = "<hr>";
        let body_height = document.body.clientHeight;
        const line_count = Math.floor(body_height / line_space);
        for (let i = 0; i < line_count; i++) {
            const hr = document.createElement('hr');
            lines.appendChild(hr);
        }
    });

    // == LIST DRAGGING ==
    async function update_order() {
        const items_dom = Array.from(document.querySelectorAll('.list_item')) as HTMLElement[];

        const new_order = items_dom.map((el, index) => ({
            id: el.dataset.id!,
            order: index
        }));

        await Promise.all(
            new_order.map(async ({ id, order }) => {
            const { error } = await supabase
                .from('shopping-list')
                .update({ order })
                .eq('id', id);

            if (error) {
                console.error(`❌ Failed to update order for ${id}:`, error.message);
            }
            })
        );

        items = [...items].sort((a, b) => {
            const aOrder = new_order.find(o => o.id === a.id)?.order ?? 0;
            const bOrder = new_order.find(o => o.id === b.id)?.order ?? 0;
            return aOrder - bOrder;
        });
    }


    onMount(() => {
        interact('.list_item').draggable({
            modifiers: [
                interact.modifiers.snap({
                    targets: [interact.snappers.grid({ x:0, y:line_space })],
                    range: Infinity,
                    relativePoints: [{ x:0, y:0 }]
                })
            ],

            listeners:{
                move(event) {
                    const target = event.target;
                    const y = (parseFloat(target.getAttribute('data-y') || 0)) + event.dy;
                    const snapped_y = Math.round(y / tolerance) * tolerance;
                    target.style.transform  = `translate(0,${snapped_y}px)`;
                    target.setAttribute('data-y',snapped_y.toString());
                },
                end(event) {
                    update_order();
                }
            }
        })
    });

    import { supabase } from '$lib/supabase';

    async function delete_item(id:string){
        const { error } = await supabase
            .from('shopping-list')
            .delete()
            .eq('id', id);
        items = items.filter(item => item.id !== id);

        if (error) {
        console.error('Supabase DELETE error:', error.message);
        }
    }

    async function add_item(item:string) {
        const order = items.length;
        const { data,error } = await supabase
            .from('shopping-list')
            .insert([{ item,order }])
            .select();
        if (!error && data) {
            items = [...items,data[0]];
        }
    }

    onMount(async () => {
        const { data,error } = await supabase
            .from('shopping-list')
            .select('*')
            .order('order',{ascending:true});
        if (data) {
            items = data;
        }
    });

</script>

<main>
    <h1>Shopping</h1>
    <div class="content">
        <ul id="list">
            {#each items as item (item.id)}
                <div class="list_item" data-id={item.id} data-y="0">
                <button on:click={() => delete_item(item.id)}>❌</button>
                <p>{item.item}</p>
                </div>
            {/each}
        </ul>   

        <div class="entry_section">
            <button style="padding:0;">
                <input
                bind:value={new_item}
                on:keydown={(e) => {
                    if(e.key === 'Enter') {
                        add_item(new_item);
                        new_item = '';
                    }
                }}
                style="padding:0;margin:0;" type="text">
            </button>
        </div>
    
    </div>
<div bind:this={ lines } class="lines">
<div class="vl"></div>
</div>
</main>

<style>
    @font-face {
    font-family: "picto";
    src: url("/pictochat.ttf") format("truetype");
    font-display: swap;
    }
    @font-face {
        font-family: "block";
        src: url("/block.ttf") format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: "matcha";
        src: url("/matcha.otf") format("truetype");
        font-display: swap;
    }
    :global(body) {
        margin:0;
        padding:0;
    }
    main {
        background-image: linear-gradient(#eff1c4,#f1efc1);
        height:100vh;
        width:100vw;
        overflow:hidden;
        display:flex;
        justify-content: start;
        flex-direction: column;
    }
    .content {
        padding-left:20px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        height:85vh;
    }
    h1 {
        font-family: "block";
        padding:25px;
        margin:0;
        position:relative;
        font-size:6vw;
        color:rgba(200, 207, 137, 0.461);
    }

    /* == LIST == */
    :global(.list_item) {
        font-family: "matcha";
        cursor: grab;
        user-select: none;
        width:30vw;
        display:flex;
        padding:2px;
        position: relative;
        z-index: 2;
    }
    p {
        padding-left:10px;
        margin:0;
        color:rgba(0, 0, 0, 0.763);
    }
    button {
        background-color:transparent;
        border-style: dashed;
        cursor:pointer;
    }
    ul {
        list-style: none;
        z-index: 1;
        font-size:25px;
        margin:0;
        padding:0;
        height:90%;
    }
    
    /* == INPUT == */
    .entry_section {
        z-index: 3;
        width:100%;
        height:10%;
    }
    input {
        font-family:matcha;
        font-size:20px;
        width:250px;
    }

    .lines {
        display:flex;
        flex-direction: column;
        width:100vw;
        height:90vh;
        justify-content: space-evenly;
        position:absolute;
        top:25px;
        pointer-events: none;
        overflow:hidden;
        z-index: 0;
    }
    :global(.lines hr) {
        width: 100%;
        height: 1px;
        margin: 0;
        border: none;
        background-color: rgba(71, 61, 61, 0.219);
    }
    .vl {
        border-left: 3px solid rgba(255, 0, 0, 0.232);
        height: 200vh;
        overflow:hidden;
        position:absolute;
        left:20px;
    }

</style>