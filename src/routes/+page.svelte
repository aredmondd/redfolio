<script lang="ts">
	import redmond from '$lib/assets/redmond.png';
	import github from '$lib/assets/github.png';
	import substack from '$lib/assets/substack-nobg.png';
	import linkedin from '$lib/assets/linkedin.png';
</script>

<div class="mb-4 flex w-full justify-center sm:justify-start">
	<div class="flex flex-col gap-4 sm:flex-row">
		<div class="flex items-center justify-center border-2 border-dashed border-black/10 p-2">
			<img src={redmond} alt="" class="w-51 rounded-full" />
		</div>
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2 border-2 border-dashed border-black/10 p-2">
				<h1 class="font-sans text-7xl font-semibold">aiden <br /> redmond</h1>
			</div>
			<div class="flex flex-col gap-2 border-2 border-dashed border-black/10 p-2">
				<h1 class="text-center font-sans text-lg sm:text-left">designer, developer, & athlete</h1>
			</div>
		</div>
		<div
			class="flex flex-row items-center justify-around gap-6 border-2 border-dashed border-black/10 p-2 sm:flex-col"
		>
			<a href="https://github.com/aredmondd" target="_blank"
				><img src={github} alt="" class="w-12" /></a
			>
			<a href="https://aidenredmondd.substack.com/" target="_blank"
				><img src={substack} alt="" class="w-9" /></a
			>
			<a href="https://www.linkedin.com/in/aidenredmondd/" target="_blank"
				><img src={linkedin} alt="" class="w-10" /></a
			>
		</div>
		<div
			class="flex h-full flex-col justify-start gap-1 border-2 border-dashed border-black/10 p-2 text-sm sm:text-base"
		>
			<p class="mb-2 font-bold">about me:</p>
			<p>
				my "real job" is a <a
					href="https://www.linkedin.com/in/aidenredmondd/"
					class="underline"
					target="_blank">full stack engineer @ bip capital</a
				>
			</p>
			<p>
				i'm also a <a href="https://eclipse-endurance.com/" target="_blank" class="underline"
					>co-founder & coach @ eclipse endurance</a
				>
			</p>
			<p>
				when i'm not working, i'm probably <a href="/photos" class="underline">taking photos</a>
			</p>
			<p>
				i <a href="/writing" class="underline">write about whatever i want</a> once a week(ish)
			</p>
			<p>once in a blue moon i'll freelance websites</p>
			<p>avid tatsuki fujimoto fan</p>
		</div>
	</div>
</div>
