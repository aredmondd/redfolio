<script lang="ts">
	import { onMount } from 'svelte';
  import type { SubstackPost } from './types.ts'

	let posts: SubstackPost[] = $state([]);
	let error = $state('');
	let loading = $state(true);

  function formatDate(dateString: string) {
		const date = new Date(dateString.replace(' ', 'T'));
		return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
	}

  async function fetchPosts() {
    try {
      const response = await fetch('api/writing');
      const data = await response.json();

      posts = data;
    } catch (e) {
      console.error("uh oh!", e)
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
		<div class="mx-12 grid grid-cols-1 gap-12 sm:grid-cols-3">
			{#each posts as post}
				<a class="flex flex-col" href={post.canonical_url} target="_blank">
					<img src={post.cover_image} class="rounded-md" alt={post.title} />
					<!-- <h2 class="mt-3 truncate text-lg font-bold text-black/75">{post.title}</h2> -->
					<!-- <p class="mt-1 truncate text-sm text-black/60">{post.subtitle}</p> -->
					<!-- <p class="mt-1 text-sm text-black/30">{formatDate(post.post_date)}</p> -->
				</a>
			{/each}
		</div>
	{:else}
		<p>no posts were found...</p>
	{/if}
</div>
