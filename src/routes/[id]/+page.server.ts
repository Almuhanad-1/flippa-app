import { results } from '$db/mongo';
import type { Result } from '$lib/types';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { id } = params;
	const post = ((await results.findOne({ id })) as Result) || null;

	return {
		post: post
			? {
					...post,
					_id: post?._id.toString()
			  }
			: null
	};
};
