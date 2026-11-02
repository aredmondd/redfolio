<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	let { photos, children }: { photos: { image: string }[]; children?: Snippet } = $props();

	let imagesToLoad = $state(0);
	let imagesLoadedCount = $state(0);
	let loaded = $state(false);

	onMount(() => {
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
				imagesLoadedCount++;
				if (imagesLoadedCount === imagesToLoad) {
					loaded = true;
				}
			};
		});
	});
</script>

{#if loaded}
	<div>
		{@render children?.()}
	</div>
{:else}
	<h1 class="font-6xl text-center text-black/60">loading...</h1>
{/if}
