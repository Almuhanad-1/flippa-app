import type { Listing } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const page = event.url.searchParams.get('page') ?? '1';
	const listings = (await event.fetch('/api/getListings').then((res) => res.json())) as Listing[];
	return {
		listings,
		page: Number(page)
	};
};
