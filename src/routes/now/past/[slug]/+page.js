import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../${params.slug}.md`);
		return { content: post.default, metadata: post.metadata };
	} catch {
		throw error(404, 'Not found');
	}
}
