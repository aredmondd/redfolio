<!-- ImageModal.svelte -->
<script lang="ts">
	import { imageModalStore } from '$lib/stores/imageModal';

	$: ({ isOpen, imageSrc } = $imageModalStore);

	const handleBackdropClick = (event: MouseEvent): void => {
		if (event.target === event.currentTarget) {
			imageModalStore.closeModal();
		}
	};

	const handleKeydown = (event: KeyboardEvent): void => {
		if (event.key === 'Escape' && isOpen) {
			imageModalStore.closeModal();
		}
	};

	// Disable/enable body scroll when modal opens/closes
	$: if (typeof document !== 'undefined') {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<div
		class="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
		on:click={handleBackdropClick}
		role="dialog"
		aria-modal="true"
	>
		<div class="relative max-h-[95vh] max-w-[95vw]">
			<img
				src={imageSrc}
				alt=""
				class="max-h-[95vh] max-w-full rounded-lg object-contain shadow-2xl"
			/>
		</div>
	</div>
{/if}
