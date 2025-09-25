<script lang="ts">
	import { onMount } from 'svelte';

	const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Faidenredmondd.substack.com%2Ffeed`;

	let posts: Post[] = $state([]);
	let error = $state('');
	let loading = $state(true);

	type Post = {
		author: string;
		categories: Array<string>;
		content: string;
		description: string;
		enclosure: object;
		guid: string;
		link: string;
		pubDate: string;
		thumbnail: string;
		title: string;
	};

	function formatDate(dateString: string) {
		const date = new Date(dateString.replace(' ', 'T'));
		return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
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
					description: post.description || 'No Subtitle Provided',
					link: post.link,
					pubDate: formatDate(post.pubDate),
					thumbnail: imageUrl
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
		<div class="mx-12 grid grid-cols-1 gap-12 sm:grid-cols-3">
			{#each posts as post}
				<a class="flex flex-col" href={post.link} target="_blank">
					<img src={post.thumbnail} class="rounded-md" alt={post.title} />
					<h2 class="mt-3 truncate text-lg font-bold text-black/75">{post.title}</h2>
					<p class="mt-1 truncate text-sm text-black/60">{post.description}</p>
					<p class="mt-1 text-sm text-black/30">{post.pubDate} ∙ Aiden Redmond</p>
				</a>
			{/each}
		</div>
	{:else}
		<p>no posts were found...</p>
	{/if}
</div>
