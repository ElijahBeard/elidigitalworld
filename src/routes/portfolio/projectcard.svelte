<script lang="ts">
    export let title: string;
    export let description: string;
    export let link: string = '';
    export let iframe: string | null = null;
    export let image: string | null = null;
</script>

<div class="card">
    <div class="header">
        <a href={link} target="_blank" rel="noreferrer">
            <h3>{title}</h3>
        </a>
    </div>

    <div class="media">
        {#if iframe}
            <iframe src={iframe} frameborder="0"></iframe>
        {:else if image}
            <img src={image} alt={title} />
        {:else}
            <div class="placeholder">No preview</div>
        {/if}
    </div>

    <p>{description}</p>
</div>

<style>
a:visited{
    color:black;
}
a {
    color:black
}
.card {
    width: min(700px, 85vw);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 16px;
    padding: 16px;
    margin: 20px auto;
    backdrop-filter: blur(2px);
    /* box-shadow: 0 10px 30px rgba(0,0,0,0.3); */
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.header h3 {
    margin: 0 0 10px 0;
    font-size: 22px;
}

.media {
    width: 100%;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 10px;
}

iframe, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
}

.placeholder {
    width: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    color: #aaa;
    background: #111;
}

p {
    margin: 0;
    font-size: 16px;
    opacity: 0.85;
}
</style>