<script>
	import { page } from '$app/state';
    let {children} = $props();
	const segments = $derived(page.url.pathname
		.split('/')
		.filter(Boolean)
    )
</script>

<nav>
    <div class="path" style="display:flex;align-items:center;">
        <p>[</p>
        <a href="/">home</a>
        {#each segments as seg, i}
            <p>/</p>
            <a href={"/" + segments.slice(0, i + 1).join("/")}>
                {seg}
            </a>
        {/each}
        <p>]</p>
    </div>
</nav>

<style>
    :global(body) {
        display:flex;
        flex-direction: column;
        align-items:center;
        background-color:rgb(230, 224, 207);
    }
    nav{
        font-family:"monobold";
        color:black;
        margin:10px;
        padding:15px;
        width:85vw;
        height:15px;
        margin-left:30px;
        margin-right:30px;
        display:flex;
        justify-content: space-between;
        display:flex;
        flex-direction: row;
        align-items: center;
        background-color:rgb(245,244,238);
    }
    nav a:visited {
        color:blue;
    }
</style>

{@render children()}
