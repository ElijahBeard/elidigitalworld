<script lang="ts">
	import { page } from '$app/state';
    import "../app.css";
</script>
<div class={page.data.bodystyle}>
    <slot />
</div>