<script lang="ts">
	import { modalImage } from '$lib/stores/imageModal';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let currentImage = $modalImage;

	const closeModal = () => {
		modalImage.set(null);
	};

	// Close on Escape key
	onMount(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeModal();
		};
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	});
</script>

{#if currentImage}
	<button
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
		on:click={closeModal}
		transition:fade
	>
		<img
			src={currentImage.src}
			alt={currentImage.alt}
			class="max-h-screen max-w-full p-6"
			on:click|stopPropagation
		/>
	</button>
{/if}
