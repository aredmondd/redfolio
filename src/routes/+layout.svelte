<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/aiden-logo.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex">
	<aside class="flex flex-col">
		<img src={logo} alt="" class="w-24" />
		<div class="mt-4 ml-3 flex flex-col gap-2 text-lg">
			<a class="text-black/60 hover:text-black" href="/">/home</a>
			<a class="text-black/60 hover:text-black" href="/photos">/photos</a>
			<a class="text-black/60 hover:text-black" href="/work">/work</a>
			<a class="text-black/60 hover:text-black" href="/writing">/writing</a>
		</div>
	</aside>

	<div class="mt-28 w-full">{@render children?.()}</div>
</div>
