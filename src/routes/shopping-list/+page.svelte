<script lang="ts">
    import { onMount } from 'svelte';
    import interact from 'interactjs';
    import { supabase } from '$lib/supabase';


    let lines: HTMLDivElement;
    let line_space = 20;

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

    // == DRAGGABLE LIST == 
    let items: { id: string; item: string; order: number }[] = [];
    let drag_id: string | null = null;

    function draggable(node:HTMLElement) {
        interact(node).draggable({
            listeners: {
                start(event) {
                    drag_id = node.dataset.id!;
                },
                move(event) {
                    const x = (parseFloat(node.getAttribute('data-x') || '0')) + event.dx;
                    const y = (parseFloat(node.getAttribute('data-y') || '0')) + event.dy;
                    node.style.transform = `translate(${x}px,${y}px)`;
                    node.setAttribute('data-x',x.toString());
                    node.setAttribute('data-y',y.toString());
                },
                end(event) {
                    node.style.transform = '';
                    node.removeAttribute('data-x');
                    node.removeAttribute('data-y');
                }
            }
        });
    }

    // async function add_item(item:string) {
    //     const order = items.length;
    //     const { data,error } = await supabase
    //         .from('shopping-list')
    //         .insert([{ item,order }])
    //         .select();
    //     if (!error && data) {
    //         items = [...items,data[0]];
    //     }
    // }

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


    function drop_target(node:HTMLElement) {
        interact(node).dropzone({
            ondrop(event) {
                const target_id = node.dataset.id!;
                if (drag_id && target_id !== drag_id) {
                    reorder_items(drag_id,target_id);
                    drag_id = null;
                }
            }
        });
    }

    function reorder_items(from_id:string,to_id:string) {
        const from_index = items.findIndex(i => i.id === from_id);
        const to_index = items.findIndex(i => i.id === to_id);

        if (from_index === -1 || to_index === -1) return;

        const [moved] = items.splice(from_index,1);
        items.splice(to_index,0,moved);
        items = items.map((item,index) => ({...item,order:index}));

        Promise.all(
            items.map(({ id, order }) =>
                supabase.from('shopping_list').update({ order }).eq('id', id)
            )
        );
    }
        import '../../app.css';
    import { supabase } from '$lib/supabase';
    import { onMount } from 'svelte';

    let drawing_urls: string[] = [];

    onMount(async () => {
        const { data, error } = await supabase
        .storage
        .from('drawings')
        .list('', {
            limit: 100,
            offset: 0,
            sortBy: { column: 'name', order: 'asc' } // Optional, ensures predictable order
        });

        console.log('Listing result:', data, error);

        if (error) {
        console.error('Error listing drawings:', error.message);
        return;
        }

        if (data && data.length > 0) {
        drawing_urls = data
            .filter(file => file.name.endsWith('.png'))
            .map(file =>
            supabase.storage
                .from('drawings')
                .getPublicUrl(file.name).data.publicUrl
            );
        } else {
        console.warn('No drawings found in bucket.');
        }
    });
    let drawing:HTMLDivElement;
    onMount(() => {
        drawing.style.backgroundColor = "red";
        console.log(drawing.innerHTML);
    });
</script>

<main>
    <h1>Shopping</h1>
    <div class="content">
        <ul id="list">
            {#each items as item (item.id)}
              <li
                class="list_item"
                data-id={item.id}
                use:draggable
                use:drop_target
              >
                <button on:click={() => delete_item(item.id)}>❌</button>
                <p>{item.item}</p>
              </li>
            {/each}
        </ul>

        <div class="entry_section">
            <button style="padding:0;">
                <input
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