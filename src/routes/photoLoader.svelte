<script lang="ts">
	import { fadeSlide } from '$lib/transitions';

	let { photos, children } = $props();

	let imagesToLoad = $state(0);
	let imagesLoadedCount = $state(0);
	let loaded = $state(false);

	$effect(() => {
		imagesToLoad = photos.length;

		photos.forEach((image) => {
			const img = new Image();
			img.src = image.image;
			img.onload = () => {
				imagesLoadedCount++;
				if (imagesLoadedCount === imagesToLoad) {
					loaded = true;
				}
			};
			img.onerror = () => {
				if (imagesLoadedCount === imagesToLoad) {
					loaded = true;
				}
			};
		});
	});
</script>

{#if loaded}
	<div transition:fadeSlide>
		{@render children?.()}
	</div>
{:else}
	<h1 class="font-6xl text-center text-black/60">loading...</h1>
{/if}
