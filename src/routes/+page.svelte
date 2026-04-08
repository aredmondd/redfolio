<script lang="ts">
	import redmond from '$lib/assets/redmond.png';
	import github from '$lib/assets/github.png';
	import substack from '$lib/assets/substack-nobg.png';
	import lastfm from '$lib/assets/lastfm.png';

	const days = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
		14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5
	];
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
				<h2 class="text-left font-sans text-lg sm:text-center">designer / developer / athlete</h2>
			</div>
		</div>
		<div
			class="flex flex-row items-center justify-around gap-6 border-2 border-dashed border-black/10 p-2 sm:flex-col"
		>
			<a href="https://www.last.fm/user/aidenredmond/" target="_blank">
				<img src={lastfm} alt="" class="w-12 rounded-md" />
			</a>
			<a href="https://github.com/aredmondd" target="_blank">
				<img src={github} alt="" class="w-12" />
			</a>
			<a href="https://aidenredmondd.substack.com/" target="_blank">
				<img src={substack} alt="" class="w-9" />
			</a>
		</div>
	</div>
</div>

<div class="flex gap-4">
	<div
		class="flex flex-col justify-start gap-1 border-2 border-dashed border-black/10 p-3 text-sm sm:text-base"
	>
		<p>my "real job" is a full stack software engineer</p>
		<p>
			see what i'm doing <a href="/now" class="underline">now</a>
		</p>
		<p>
			i love <a href="/photos" class="underline">making photos</a>
		</p>
		<p>
			i <a href="/writing" class="underline">write sometimes</a>
		</p>
	</div>

	<div
		class="flex flex-col justify-center gap-1 border-2 border-dashed border-black/10 p-4 text-sm sm:text-base"
	>
		<div class="grid grid-cols-10 gap-1">
			{#each days as day}
				<div class="rounded-sm bg-black/10 p-[9.2px]"></div>
			{/each}
		</div>
	</div>
</div>
