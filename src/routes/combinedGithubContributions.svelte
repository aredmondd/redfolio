<script lang="ts">
	import { onMount } from 'svelte';

	type ContributionDay = {
		date: string;
		count: number;
		level: number;
	};

	let data = $state<ContributionDay[] | null>(null);
	let loading = $state(true);
	let tooltip = $state<{ text: string; x: number; y: number; shift: number } | null>(null);

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

	function describeDay({ date, count }: ContributionDay): string {
		// Add a time so the date is read as local, not UTC, and can't shift back a day
		const formatted = new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});

		return `${count} ${count === 1 ? 'github contribution' : 'github contributions'} on ${formatted}`;
	}

	function showTooltip(event: MouseEvent, day: ContributionDay): void {
		const cell = event.currentTarget as HTMLElement;
		const x = cell.offsetLeft + cell.offsetWidth / 2;
		const gridWidth = (cell.offsetParent as HTMLElement).offsetWidth;

		tooltip = {
			text: describeDay(day),
			x,
			y: cell.offsetTop,
			// Slide the tooltip across its anchor so it stays over the grid at both edges
			shift: (x / gridWidth) * 100
		};
	}
</script>

<div class="flex flex-col border-2 border-dashed border-black/10 p-2">
	<div class="relative grid grid-flow-col grid-rows-7 gap-0.5">
		{#each data as day}
			<div
				role="img"
				aria-label={describeDay(day)}
				class="p-1.25 {levelClasses[day.level]} hover:bg-pink/50"
				onmouseenter={(event) => showTooltip(event, day)}
				onmouseleave={() => (tooltip = null)}
			></div>
		{/each}

		{#if tooltip}
			<div
				class="pointer-events-none absolute z-10 bg-black px-2 py-1 text-xs whitespace-nowrap text-white"
				style:left="{tooltip.x}px"
				style:top="{tooltip.y - 4}px"
				style:transform="translate(-{tooltip.shift}%, -100%)"
			>
				{tooltip.text}
			</div>
		{/if}
	</div>
</div>
