<script lang="ts">
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
		<div class="my-6 flex items-end justify-between">
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
	<!-- <VueperSlides
		class="no-shadow my-6 hidden sm:block"
		:touchable="false"
		:bullets="false"
		fade
		fixed-height="666.5px"
		style="width: 1000px"
		arrows-outside
	>
		<vueper-slide v-for="(slide, i) in project.slides" :key="i" :image="slide.image" />
	</VueperSlides> -->
</div>
