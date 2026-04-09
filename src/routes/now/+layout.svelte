<script>
	let { children } = $props();
</script>

<div class="prose text-black marker:text-black prose-hr:my-8 prose-hr:border-green/30">
	{@render children()}
</div>
