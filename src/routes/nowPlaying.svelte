<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	type NowPlayingData = {
		isPlaying: boolean;
		title?: string;
		artist?: string;
		album?: string;
		albumImageUrl?: string;
		songUrl?: string;
	};

	let track = $state<NowPlayingData | null>(null);
	let loading = $state(true);
	let interval: ReturnType<typeof setInterval>;

	async function fetchNowPlaying() {
		try {
			const res = await fetch('/api/now-playing');
			track = await res.json();
		} catch (err) {
			track = { isPlaying: false };
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		fetchNowPlaying();
		interval = setInterval(fetchNowPlaying, 30000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

{#if !loading}
	<div class="flex items-center gap-3 border-2 border-dashed border-black/10 p-2">
		{#if track?.isPlaying}
			<img src={track.albumImageUrl} alt={track.album} class="h-20 w-20 rounded-md" />
			<div class="flex flex-col text-sm">
				<span class="text-[0.7rem] tracking-wide uppercase opacity-60"> Now playing </span>
				<a
					href={track.songUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold hover:underline"
				>
					{track.title}
				</a>
				<p>{track.album}</p>
				<span class="opacity-75">{track.artist}</span>
			</div>
		{:else}
			<div class="flex flex-col text-sm">
				<span class="text-[0.7rem] tracking-wide uppercase opacity-60">
					aiden isn't listening to anything :(
				</span>
			</div>
		{/if}
	</div>
{:else}
	<!-- loading state -->
	<div class="flex animate-pulse items-center gap-3 border-2 border-dashed border-black/10 p-2">
		<div class="h-20 w-20 rounded-md bg-black/10"></div>
		<div class="flex flex-col items-start gap-1 text-sm">
			<div class="bg-black/10 p-2 px-10"></div>
			<div class="bg-black/10 p-2 px-20"></div>
			<div class="bg-black/10 p-2 px-15"></div>
			<div class="bg-black/10 p-2 px-10"></div>
		</div>
	</div>
{/if}
