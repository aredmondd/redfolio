<script lang="ts">
	import { onMount } from 'svelte';

	type Movie = {
		title: string;
		link: string;
		year: string;
		rating: string;
		watched: string;
		description: string;
	};

	let movies: Movie[] | null = $state(null);
	let lastWatched: Movie | null = $state(null);
	let poster: string | null = $state(null);
	let loading = $state(true);

	async function fetchLastMovie(): Promise<void> {
		const res = await fetch('/api/letterboxd');

		if (!res.ok) {
			throw new Error('Could not fetch letterboxd');
		}

		const xml = await res.text();

		const doc = new DOMParser().parseFromString(xml, 'application/xml');

		if (doc.querySelector('parsererror')) {
			throw new Error('Invalid XML');
		}

		const text = (el: Element, tag: string) => el.getElementsByTagName(tag)[0]?.textContent ?? null;

		const data = [...doc.querySelectorAll('item')].map((item) => ({
			title: text(item, 'letterboxd:filmTitle'),
			link: text(item, 'link'),
			year: text(item, 'letterboxd:filmYear'),
			rating: text(item, 'letterboxd:memberRating'),
			watched: text(item, 'letterboxd:watchedDate'),
			description: text(item, 'description')
		}));

		movies = data;
		lastWatched = data[0];

		const html = new DOMParser().parseFromString(movies[0].description, 'text/html');
		const src = html.querySelector('img')?.src;
		poster = src ?? null;

		loading = false;
	}

	onMount(fetchLastMovie);
</script>

{#if !loading}
	<div class="flex items-center gap-3 border-2 border-dashed border-black/10 p-2">
		{#if lastWatched}
			<img src={poster} class="h-20 rounded-md" alt={lastWatched.title} />
			<div class="flex flex-col text-sm">
				<span class="text-[0.7rem] tracking-wide uppercase opacity-60">Last Watched</span>
				<a href={lastWatched.link} target="_blank" class="font-semibold hover:underline"
					>{lastWatched.title}</a
				>
				<div class="mt-[-5px] flex items-center">
					<span class="text-2xl leading-none text-green"
						>{'★'.repeat(parseInt(lastWatched.rating))}</span
					>
					<span
						class="bg-gradient-to-r from-green from-50% to-green/10 to-50% bg-clip-text text-2xl leading-none text-transparent"
						>★</span
					>
				</div>

				<p class="opacity-75">{lastWatched.watched}</p>
			</div>
		{/if}
	</div>
{:else}
	<!-- loading state -->
	<div class="flex animate-pulse items-center gap-3 border-2 border-dashed border-black/10 p-2">
		<div class="h-20 w-14 rounded-md bg-black/10"></div>
		<div class="flex flex-col items-start gap-1 text-sm">
			<div class="bg-black/10 p-2 px-10"></div>
			<div class="bg-black/10 p-2 px-20"></div>
			<div class="bg-black/10 p-2 px-15"></div>
			<div class="bg-black/10 p-2 px-10"></div>
		</div>
	</div>
{/if}
