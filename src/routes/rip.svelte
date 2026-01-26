<script lang="ts">
    function rip(event:UIEvent) {
        const viewportWidth = window.innerWidth;
        console.log(viewportWidth);
    }
    window.addEventListener('resize',rip)
</script>
