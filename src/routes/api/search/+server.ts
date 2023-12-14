/*
[
  {
    $search: {
      index: "searchListings",
      text: {
        query: "shop",
        path: {
          wildcard: "*"
        }
      }
    }
  }
]
*/

import type { RequestHandler } from './$types';
import { listings } from '$lib/db/mongo';
import type { Listing } from '$lib/types';

// const NO_OF_RESULTS_PER_PAGE = 10;

type GetResultsQuery = {
	page: number | 1;
	query: string;
};

async function searchListings({ query }: GetResultsQuery) {
	const pipeline = [
		{
			$search: {
				index: 'searchListings',
				text: {
					query: query,
					path: {
						wildcard: '*'
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
	const data = (await listings.aggregate(pipeline).toArray()) as Listing[];
	// console.log(data);
	return data;
}

export const GET: RequestHandler = async ({ url }) => {
	const page = Number(url.searchParams.get('page') ?? '1');
	const query = url.searchParams.get('search') ?? '';
	if (isNaN(page)) {
		return new Response(JSON.stringify({ error: 'Invalid page number' }), { status: 400 });
	}
	const data = await searchListings({ page, query });
	return new Response(JSON.stringify(data));
};
