import { photoCaseStudies } from '$lib/photoCaseStudies';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const set = photoCaseStudies[slug];

	if (!set) {
		throw error(404, `Photo set not found for "${slug}"`);
	}

	return {
		title: set.title,
		date: set.date,
		inspirations: set.inspirations,
		text: set.text,
		photos: set.photos
	};
};
