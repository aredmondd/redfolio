const USERNAMES = ['aredmondd', 'aidenredmond'];

/** @param {string} username */
async function getContributions(username) {
	const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);

	if (!res.ok) {
		throw new Error(`Failed to fetch ${username}: ${res.status}`);
	}

	const { contributions } = await res.json();
	return contributions;
}

export async function GET() {
	try {
		const accounts = await Promise.all(USERNAMES.map(getContributions));

		const totals = new Map();
		for (const { date, count } of accounts.flat()) {
			totals.set(date, (totals.get(date) ?? 0) + count);
		}

		const max = Math.max(...totals.values());

		const days = [...totals]
			.map(([date, count]) => ({
				date,
				count,
				level: max === 0 ? 0 : Math.ceil((count / max) * 4)
			}))
			.sort((a, b) => a.date.localeCompare(b.date));

		return Response.json(days, {
			headers: {
				'Cache-Control': 'public, max-age=0, must-revalidate',
				'Netlify-CDN-Cache-Control': 'public, max-age=3600'
			}
		});
	} catch (err) {
		console.error('Contributions fetch failed:', err);
		return Response.json({ error: 'Failed to load contributions' }, { status: 502 });
	}
}
