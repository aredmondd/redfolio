<script lang="ts">
	import red from '$lib/assets/redmond.png';
	import github from '$lib/assets/github.png';
	import substack from '$lib/assets/substack-nobg.png';
	import lastfm from '$lib/assets/lastfm.png';
	import NowPlaying from './nowPlaying.svelte';
</script>

<div class="flex flex-col items-start gap-4">
	<div class="flex border-2 border-dashed border-black/10 p-2">
		<h1 class="mx-[0.5px] text-5xl font-bold sm:text-4xl">aiden redmond</h1>
	</div>
	<div class="flex w-full justify-start">
		<div class="flex flex-row gap-4">
			<div class="flex items-center justify-center border-2 border-dashed border-black/10 p-2">
				<img
					src={red}
					alt=""
					class="w-64 animate-photo-spin rounded-full [animation-play-state:paused] hover:[animation-play-state:running] sm:w-44"
				/>
			</div>
			<div
				class="flex flex-col items-center justify-around gap-6 border-2 border-dashed border-black/10 p-2"
			>
				<a href="https://www.last.fm/user/aidenredmond/" target="_blank">
					<img src={lastfm} alt="" class="w-10 rounded-md" />
				</a>
				<a href="https://github.com/aredmondd" target="_blank">
					<img src={github} alt="" class="w-10" />
				</a>
				<a href="https://aidenredmondd.substack.com/" target="_blank">
					<img src={substack} alt="" class="w-8" />
				</a>
			</div>
		</div>
	</div>
	<div class="max-w-[375px] border-2 border-dashed border-black/10 p-2">
		hi, i'm aiden and i'm a software engineer. <br />
		in my free time, i take <a href="/photos" class="font-semibold underline">photos</a>
		and <a href="/writing" class="font-semibold underline">write.</a> <br />
		see what i'm up to <a href="/now" class="font-semibold underline">now</a>
	</div>
	<NowPlaying />
</div>
