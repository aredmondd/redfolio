<script lang="ts">
	import red from '$lib/assets/redmond.png';
	import github from '$lib/assets/github.png';
	import substack from '$lib/assets/substack-nobg.png';
	import lastfm from '$lib/assets/lastfm.png';
	import ActivityGrid from './activityGrid.svelte';

	const aiden = ['a', 'i', 'd', 'e', 'n'];
	const redmond = ['r', 'e', 'd', 'm', 'o', 'n', 'd'];
</script>

<div class="flex gap-4">
	<div>
		<div class="mb-4 flex w-full justify-center sm:justify-start">
			<div class="flex flex-col gap-4 sm:flex-row">
				<div class="flex items-center justify-center border-2 border-dashed border-black/10 p-2">
					<img src={red} alt="" class="w-51 rounded-full" />
				</div>
				<div class="flex flex-col gap-4">
					<div class="flex flex-col gap-2 border-2 border-dashed border-black/10 p-2">
						<div class="flex">
							{#each aiden as letter}
								<p
									class="font-sans text-7xl font-semibold transition-all duration-400 ease-out hover:text-green"
								>
									{letter}
								</p>
							{/each}
						</div>
						<div class="mt-[-8px] flex">
							{#each redmond as letter}
								<p
									class="font-sans text-7xl font-semibold transition-all duration-400 ease-out hover:text-pink"
								>
									{letter}
								</p>
							{/each}
						</div>
					</div>
					<div class="flex flex-col gap-2 border-2 border-dashed border-black/10 p-2">
						<h2 class="text-center font-sans text-lg">designer / developer / athlete</h2>
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
				class="flex flex-col justify-start gap-1 border-2 border-dashed border-black/10 p-2 text-sm sm:p-3 sm:text-base"
			>
				<p>my "real job" is a full stack software engineer</p>
				<p>
					here's what i'm up to right <a href="/now" class="underline">now</a>
				</p>
				<p>
					i love <a href="/photos" class="underline">taking photos</a>
				</p>
				<p>
					& i'll <a href="/writing" class="underline">write sometimes</a>
				</p>
			</div>

			<ActivityGrid />
		</div>
	</div>
</div>
