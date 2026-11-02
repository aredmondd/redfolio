<script lang="ts">
	import { onMount } from 'svelte';

	type ContributionDay = {
		date: string;
		count: number;
		level: number;
	};

	let data = $state<ContributionDay[] | null>(null);
	let loading = $state(true);

	async function fetchContributions(): Promise<void> {
		try {
			const res: Response = await fetch('/api/contributions');
			if (!res.ok) throw new Error(`Request failed: ${res.status}`);
			data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		} finally {
			loading = false;
		}
	}

	onMount(fetchContributions);

	const levelClasses = ['bg-green/10', 'bg-green/30', 'bg-green/50', 'bg-green/80', 'bg-green'];
</script>

<div class="flex items-center justify-center border-2 border-dashed border-black/10 p-2">
	<div class="grid grid-flow-col grid-rows-7 gap-0.5">
		{#each data as day}
			<div class="p-1 {levelClasses[day.level]}"></div>
		{/each}
	</div>
</div>
