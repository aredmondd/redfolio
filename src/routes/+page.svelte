<script lang="ts">
	import redmond from '$lib/assets/redmond.png';
	import { fadeSlide } from '$lib/transitions';
	// import professionalRedmond from '$lib/assets/professional_redmond.jpg';
</script>

<div class="flex h-full w-full items-center justify-between">
	<div class="flex gap-8">
		<img src={redmond} alt="" class="w-40 rounded-full" />
		<div class="mt-2 flex flex-col gap-2">
			<h1 class="font-sans text-6xl font-semibold">hi, i'm aiden.</h1>
			<div>
				<p class="text-lg text-black/50">i'm a developer, designer, and athlete.</p>
				<p class="text-lg text-black/50">
					this is a place to hold all my <span class="italic">things</span>
				</p>
			</div>
		</div>
	</div>

	<div class=" mr-12 flex flex-col gap-1 text-left font-semibold text-black/60 italic">
		<a class="hover:text-black" href="https://www.linkedin.com/in/aidenredmondd/" target="_blank"
			>@linkedin</a
		>
		<a class="hover:text-black" href="https://aidenredmondd.substack.com" target="_blank"
			>@substack</a
		>
		<a class="hover:text-black" href="https://github.com/aredmondd" target="_blank">@github</a>
		<a class="hover:text-black" href="mailto:aidenredmondd@gmail.com" target="_blank">@email</a>
	</div>
</div>
