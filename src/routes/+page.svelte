<script lang="ts">
	import red from '$lib/assets/redmond.png';
	import github from '$lib/assets/github.png';
	import substack from '$lib/assets/substack-nobg.png';
	import lastfm from '$lib/assets/lastfm.png';

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
					<div class="flex flex-col gap-2 border-2 border-dashed border-black/10 p-2 select-none">
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

		<div class="w-[646px]">
			<div
				class="border-2 border-dashed border-black/10 p-2 text-sm sm:p-3 sm:text-base"
			>
				<p>my "real job" is a full stack software engineer. i recently graduated from college and moved to atlanta where i am pretending to be an adult. i like taking <a href="/photos" class="underline">photos</a> and <a href="/writing" class="underline">writing</a> when i can. good art keeps me going. see what i'm doing <a href="/now" class="underline">now</a>.
                </p>
			</div>
		</div>
	</div>
</div>
