<script lang="ts">
	import red from '$lib/assets/redmond.png';
	import github from '$lib/assets/github.png';
	import substack from '$lib/assets/substack-nobg.png';
	import lastfm from '$lib/assets/lastfm.png';
  import NowPlaying from './nowPlaying.svelte';

	const aiden = ['a', 'i', 'd', 'e', 'n'];
	const redmond = ['r', 'e', 'd', 'm', 'o', 'n', 'd'];
</script>

<div class="flex gap-4">
	<div>
		<div class="mb-4 flex w-full justify-center sm:justify-start">
			<div class="flex flex-col gap-4 sm:flex-row">
				<div class="flex items-center justify-center border-2 border-dashed border-black/10 p-2">
					<img
						src={red}
						alt=""
						class="w-51 animate-photo-spin rounded-full [animation-play-state:paused] hover:[animation-play-state:running]"
					/>
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
    <NowPlaying />
	</div>
</div>
