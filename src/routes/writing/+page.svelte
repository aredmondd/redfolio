<script lang="ts">
	import { onMount } from 'svelte';
	import type { SubstackPost } from './types.ts';

	let posts: SubstackPost[] = $state([]);
	let error = $state('');
	let loading = $state(true);

	let x = $state(0);
	let y = $state(0);
	let hoveredPost: SubstackPost | null = $state(null);

	function handleMouseMove(e: MouseEvent) {
		x = e.clientX + 15;
		y = e.clientY + 30;
	}

	async function fetchPosts() {
		try {
			const response = await fetch('api/writing');
			const data = await response.json();
			posts = data;
		} catch (e) {
			console.error(e);
		}
		loading = false;
	}

	onMount(fetchPosts);
</script>

<div id="latest-posts">
	{#if loading}
		<p>loading posts...</p>
	{:else if error}
		<p>{error}</p>
	{:else if posts.length > 0}
		<!-- <div class="mb-12">
      <p>..incoming logs</p>
      <p>EVENT <span class="text-green bg-green/50">[{new Date(Date.now()).toISOString()}]</span> {posts.length} posts loaded from substack</p>
      <p>NOTICE <span class="text-green bg-green/50">[{new Date(Date.now() + (Math.random() * 1000)).toISOString()}]</span> click on a post that interests you to read it.</p>
    </div> -->
		<div class="mb-32 text-4xl leading-12">
			{#each posts as post}
				<a
					class="hover:bg-green/80"
					href={post.canonical_url}
					target="_blank"
					onmouseenter={() => (hoveredPost = post)}
					onmouseleave={() => (hoveredPost = null)}
				>
					{post.title.toLowerCase()}
				</a>
				{' '}
			{/each}
		</div>
	{:else}
		<p>no posts were found...</p>
	{/if}
</div>

{#if hoveredPost}
	<img
		src={hoveredPost.cover_image}
		class="hover-image"
		style="transform: translate({x}px, {y}px);"
		alt={hoveredPost.title}
	/>
{/if}

<svelte:window onmousemove={handleMouseMove} />

<style>
	.hover-image {
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		will-change: transform;
		width: 300px;
	}
</style>
