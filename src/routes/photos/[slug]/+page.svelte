<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	export let data: {
		title: string;
		date: string;
		inspirations: string | null;
		text: string;
		photos: string[];
	};
</script>

<div class="flex flex-1 flex-col items-center justify-center">
	<div class="flex flex-col sm:mx-80">
		<div class="mb-6 flex items-end justify-between">
			<h1 class="text-lg font-bold sm:text-2xl">{data.title}</h1>
			<p class="sm:text-md text-xs text-black/50">{data.date}</p>
		</div>
		<div>
			{@html data.text}
		</div>
		{#if data.inspirations != null}
			<p class="mt-3 text-black/50 italic">
				Inspirations include: {data.inspirations}
			</p>
		{/if}
	</div>
	<div class="mt-12">
		<Splide
			aria-label="My Favorite Images"
			options={{
				width: 1008,
				type: 'fade',
				rewind: true
			}}
		>
			{#each data.photos as image}
				<SplideSlide>
					<img src={image} alt="new fvaorie" />
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</div>
