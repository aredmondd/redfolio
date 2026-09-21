<script>
	import { page } from '$app/state';
	let { children, data } = $props();

	let isHistorical = $derived(page.url.pathname.startsWith('/now/past'));
</script>

<div class="flex flex-col gap-16 sm:flex-row">
	<div class="prose text-black marker:text-black prose-hr:my-8 prose-hr:border-green/30">
		{@render children()}
	</div>

	<aside class="sm:ml-32">
		{#if !isHistorical}
			<h2 class="mb-4 text-black/50">historical now pages</h2>
			<ul class="space-y-2">
				{#each data.historicalEntries as entry}
					<li>
						<a href="/now/past/{entry.slug}" class="underline">
							{entry.metadata.date.slice(0, entry.metadata.date.indexOf('T'))}
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="text-black/50 sm:ml-[-40px]">
				you're in the past. <br /> want to go back to the
				<a href="/now" class="underline">future?</a>
			</p>
		{/if}
	</aside>
</div>
