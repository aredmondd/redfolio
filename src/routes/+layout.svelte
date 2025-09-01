<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/aiden-logo.png';
	import logo from '$lib/assets/aiden-logo.png';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>aiden redmond</title>
</svelte:head>

<div class="flex">
	<aside class="fixed">
		<img src={logo} alt="" class="w-24" />
		<div class="mt-4 ml-3 flex flex-col gap-2 text-lg">
			<a
				class="{page.url.pathname === '/' ? 'text-black' : 'text-black/60'} hover:text-black"
				href="/">/home</a
			>
			<a
				class="{page.url.pathname === '/photos' ? 'text-black' : 'text-black/60'} hover:text-black"
				href="/photos">/photos</a
			>
			<a
				class="{page.url.pathname === '/work' ? 'text-black' : 'text-black/60'} hover:text-black"
				href="/work">/work</a
			>
			<a
				class="{page.url.pathname === '/writing' ? 'text-black' : 'text-black/60'} hover:text-black"
				href="/writing">/writing</a
			>
		</div>
	</aside>

	<div class="mt-28 ml-48">{@render children?.()}</div>
</div>
