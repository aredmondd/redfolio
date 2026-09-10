export async function load() {
	const modules = import.meta.glob('/src/routes/now/past/*.md');

	const entries = await Promise.all(
		Object.entries(modules).map(async ([path, resolve]) => {
			const mod = await resolve();
			const slug = path.split('/').pop().replace('.md', '');
			return { slug, metadata: mod.metadata };
		})
	);

	entries.sort((a, b) => b.slug.localeCompare(a.slug));

	return { historicalEntries: entries };
}