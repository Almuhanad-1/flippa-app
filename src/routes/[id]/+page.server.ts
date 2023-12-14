import { listings } from '$lib/db/mongo';
import type { Listing } from '$lib/types';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { id } = params;
	const listing = ((await listings.findOne({ id })) as unknown as Listing) || null;
	return {
		listing: listing ? { ...listing, _id: listing._id.toString() } : null
	};
};
