<script lang="ts">
	let isModalOpen: boolean = $state(false);
	let image: string = $state('');
	let { children } = $props();

	function openModal(imageSrc: string) {
		image = imageSrc;
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
	}
</script>

{#if isModalOpen}
	<button
		id="imageModal"
		class="fixed inset-0 z-50 flex items-center justify-center bg-white/50"
		onclick={closeModal}
	>
		<div class="relative">
			<img src={image} alt="" class="max-h-screen max-w-full p-12" />
		</div>
	</button>
{:else}
	<button
		onclick={(e) => {
			const img = e.currentTarget.querySelector('img');
			if (img) openModal(img.src);
		}}
	>
		{@render children?.()}
	</button>
{/if}
