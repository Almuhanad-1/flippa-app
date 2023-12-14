import type { RequestHandler } from '@sveltejs/kit';
import { listings } from '$lib/db/mongo';

async function autoCompelete(query: string) {
	console.log(query);
	const pipeline = [
		{
			$search: {
				index: 'autoCompelete',
				autocomplete: {
					query: query,
					path: 'title',
					fuzzy: {
						maxEdits: 2
					}
				}
			}
		},
		{
			$limit: 10
		},
		{
			$project: {
				id: 1,
				title: 1,
				price: 1,
				basic_info: { name: 1 }
			}
		}
	];
	const data = await listings.aggregate(pipeline).toArray();
	console.log(data);
	return data;
}

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get('search') ?? '';
	const data = await autoCompelete(query);
	return new Response(JSON.stringify(data));
};
