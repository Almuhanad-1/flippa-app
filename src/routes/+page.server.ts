import type { Result } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const page = event.url.searchParams.get('page') ?? '1';
	const results = (await event.fetch('/api/getResults').then((res) => res.json())) as Result[];
	return {
		results,
		page: Number(page)
	};
};
