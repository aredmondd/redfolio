<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/aiden-logo.png';
	import logo from '#lib/assets/aiden-logo.png';
	import { page } from '$app/state';
	import graffiti from '#lib/assets/graffiti.png';

	let { children } = $props();

	const construction = true;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>aiden redmond</title>
</svelte:head>

{#snippet navLinks()}
	<a class="{page.url.pathname === '/' ? 'text-black' : 'text-black/60'} hover:text-black" href="/">
		~
	</a>
	<a
		class="{page.url.pathname === '/now' ? 'text-black' : 'text-black/60'} hover:text-black"
		href="/now"
	>
		/now
	</a>
	<a
		class="{page.url.pathname === '/photos' ? 'text-black' : 'text-black/60'} hover:text-black"
		href="/photos"
	>
		/photos
	</a>
	<a
		class="{page.url.pathname === '/writing' ? 'text-black' : 'text-black/60'} hover:text-black"
		href="/writing"
	>
		/writing
	</a>
{/snippet}

{#if construction}
	<div class="flex min-h-screen flex-col items-center justify-center gap-8">
		<h1 class="text-xl">we're under construction...</h1>
		<img src={graffiti} class="w-48" />
		<h1 class="mt-[-10px] text-xl">come back later?</h1>
	</div>
{:else}
	<div class="flex flex-col sm:flex-row">
		<aside class="fixed hidden sm:block">
			<a href="/"><img src={logo} alt="" class="w-24" /></a>
			<div class="mt-4 ml-3 flex flex-col gap-2 text-lg">
				{@render navLinks()}
			</div>
		</aside>

		<div class="mb-6 flex justify-between sm:hidden">
			{@render navLinks()}
		</div>

		<div class="mb-4 flex border-2 border-dashed border-red-500 p-2 italic sm:hidden">
			by viewing this website on your phone, you understand and agree that you will have a worse
			experience!
		</div>

		<div class="flex-1 sm:mt-28 sm:ml-48">{@render children?.()}</div>
	</div>
{/if}
