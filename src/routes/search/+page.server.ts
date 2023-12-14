import type { Listing } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const searchQuery = event.url.searchParams.get('search');
	const listings = (await event
		.fetch(`/api/search?search=${searchQuery}`)
		.then((res) => res.json())) as Listing[];
	return {
		listings
	};
};
