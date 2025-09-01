<script lang="ts">
	import { onMount } from 'svelte';

	const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Faidenredmondd.substack.com%2Ffeed`;

	let posts = $state([]);
	let error = $state('');
	let loading = $state(true);

	type Post = {
		author: string;
		categories: Array<string>;
		content: string;
		description: string;
		enclosure: Object;
		guid: string;
		link: string;
		pubDate: string;
		thumbnail: string;
		title: string;
	};

	function formatDate(dateString: string) {
		const date = new Date(dateString.replace(' ', 'T'));

		const options = { month: 'short', day: 'numeric' };

		return date.toLocaleDateString('en-US', options);
	}

	async function fetchLatestPosts() {
		try {
			const response = await fetch(feedUrl);
			const data = await response.json();

			const items = data.items || [];

			console.log(items);

			posts = items.map((post: Post) => {
				const imageUrlMatch = post.content.match(/<img src="([^"]+)"/);
				const imageUrl = imageUrlMatch ? imageUrlMatch[1] : '';

				return {
					title: post.title,
					subtitle: post.description || 'No Subtitle Provided',
					link: post.link,
					date: formatDate(post.pubDate),
					imageUrl
				};
			});
		} catch (err) {
			error = 'Failed to load posts...';
			console.error('Error fetching the RSS feed: ', err);
		} finally {
			loading = false;
		}
	}

	onMount(fetchLatestPosts);
</script>

<div id="latest-posts">
	{#if loading}
		<p>loading posts...</p>
	{:else if error}
		<p>{error}</p>
	{:else if posts.length > 0}
		<div class="mx-12 grid grid-cols-3 gap-12">
			{#each posts as post}
				<a class="flex flex-col" href={post.link} target="_blank">
					<img src={post.imageUrl} class="rounded-md" alt={post.title} />
					<h2 class="mt-3 truncate text-lg font-bold text-black/75">{post.title}</h2>
					<p class="mt-1 truncate text-sm text-black/60">{post.subtitle}</p>
					<p class="mt-1 text-sm text-black/30">{post.date} ∙ Aiden Redmond</p>
				</a>
			{/each}
		</div>
	{:else}
		<p>no posts were found...</p>
	{/if}
</div>
