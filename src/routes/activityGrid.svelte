<script>
	export let owner = 'aredmondd';
	export let repo = 'redfolio';

	const DAYS = 50;

	let activityData = {};
	let loading = true;
	let totalCommits = 0;
	let activeDays = 0;
	let tooltip = { visible: false, text: '', x: 0, y: 0 };
	let gridRef;

	fetchCommits();

	async function fetchCommits() {
		const since = new Date();
		since.setDate(since.getDate() - DAYS);
		const counts = {};
		let page = 1;

		while (true) {
			const res = await fetch(
				`https://api.github.com/repos/${owner}/${repo}/commits?per_page=100&page=${page}`
			);
			const raw = await res.json();
			const commits = Array.isArray(raw) ? raw : Object.values(raw);

			if (commits.length === 0) break;
			commits.forEach((c) => {
				const date = c.commit.author.date.split('T')[0];
				counts[date] = (counts[date] || 0) + 1;
			});
			if (commits.length < 100) break;
			page++;
		}

		activityData = counts;
		totalCommits = Object.values(counts).reduce((a, b) => a + b, 0);
		activeDays = Object.values(counts).filter((v) => v > 0).length;
		loading = false;
	}

	function buildDays(data) {
		// accept it as a param
		const result = [];
		const now = new Date();
		for (let i = 0; i < DAYS; i++) {
			const d = new Date(now);
			d.setDate(d.getDate() - (DAYS - 1 - i));
			const key = d.toISOString().split('T')[0];
			result.push({ date: d, key, count: data[key] || 0 });
		}
		return result;
	}

	function getLevel(count) {
		if (count === 0) return 0;
		if (count <= 2) return 1;
		if (count <= 5) return 2;
		if (count <= 9) return 3;
		return 4;
	}

	function showTooltip(e, day) {
		const d = new Date(day.key + 'T12:00:00');
		const label = d.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
		const rect = gridRef.getBoundingClientRect();
		tooltip = {
			visible: true,
			text:
				day.count === 0
					? `No activity on ${label}`
					: `${day.count} commit${day.count !== 1 ? 's' : ''} on ${label}`,
			x: e.clientX - rect.left,
			y: e.clientY - rect.top - 36
		};
	}

	const levelClasses = ['bg-black/10', 'bg-green/30', 'bg-green/50', 'bg-green/80', 'bg-green'];

	$: days = buildDays(activityData);
</script>

<div
	bind:this={gridRef}
	class="relative hidden flex-col gap-3 border-2 border-dashed border-black/10 p-4 text-xs sm:flex"
>
	{#if loading}
		<p class="text-sm text-black/40">Loading activity…</p>
	{:else}
		<div class="grid grid-cols-10 gap-1">
			{#each days as day}
				<div
					class="cursor-pointer rounded-sm p-[9.2px] transition-opacity hover:opacity-70 {levelClasses[
						getLevel(day.count)
					]}"
					on:mouseover={(e) => showTooltip(e, day)}
					on:mouseout={() => (tooltip.visible = false)}
					on:focus={(e) => showTooltip(e, day)}
					on:blur={() => (tooltip.visible = false)}
					role="img"
					aria-label="{day.count} updates on {day.key}"
				/>
			{/each}
		</div>

		{#if tooltip.visible}
			<div
				class="pointer-events-none absolute z-10 rounded border border-black/10 bg-white px-2 py-1 text-xs whitespace-nowrap shadow-sm"
				style="left:{tooltip.x}px; top:{tooltip.y}px"
			>
				{tooltip.text}
			</div>
		{/if}
	{/if}
</div>
