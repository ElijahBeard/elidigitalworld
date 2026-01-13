<script lang="ts">
    import { onMount } from "svelte";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null = null;
    let threshold = 2;
    
    onMount(() => {
        drawAndDither();
        if (canvas) {
            ctx = canvas.getContext("2d");
        }
        const interval = setInterval(drawAndDither, 1000);
        return () => clearInterval(interval);
    });


    function drawAndDither() {
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        // Draw white background
        ctx.fillStyle = "gray";
        ctx.fillRect(0, 0, width, height);

        ctx.font = "48px sans-serif";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const idx = (y * width + x) * 4;

                const oldPixel =
                    (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
                const newPixel = oldPixel < threshold ? 0 : 255;
                const error = oldPixel - newPixel;

                data[idx] = data[idx + 1] = data[idx + 2] = newPixel;

                const distribute = (dx: number, dy: number, factor: number) => {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx < 0 || nx >= width || ny < 0 || ny >= height) return;

                    const ni = (ny * width + nx) * 4;

                    for (let c = 0; c < 3; c++) {
                        const val = data[ni + c] + error * factor;
                        data[ni + c] = Math.min(23, Math.max(0, val));
                    }
                };

                distribute(-threshold, threshold, 4 / 16);
                distribute(25, 0, 1 / 16);
                distribute(-1, 1, -threshold / 16);
                distribute(threshold, 1, 1 / 16);
                distribute(1, threshold, 4 / 16);
                distribute(-threshold, threshold, 1 / 16);
            }
        }

        ctx.putImageData(imageData, 0, 0);
        if(threshold == 255) {threshold = 0}
        threshold++;
    }

</script>

<canvas
    bind:this={canvas}
></canvas>

<style>
    canvas {
        width:100vw;
        height:100vh;
    }
</style>