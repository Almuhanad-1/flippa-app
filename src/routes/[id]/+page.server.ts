import { listings } from '$lib/db/mongo';
import type { Result } from '$lib/types';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { id } = params;
	console.log(id, 'id');
	const listing = ((await listings.findOne({ id })) as unknown as Result) || null;

	return {
		listing: listing ? { ...listing, _id: listing._id.toString() } : null
	};
};
