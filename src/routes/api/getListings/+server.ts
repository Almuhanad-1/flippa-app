import type { RequestHandler } from './$types';
import { listings } from '$lib/db/mongo';
import type { Listing } from '$lib/types';

const NO_OF_RESULTS_PER_PAGE = 10;

type GetListingsQuery = {
	page: number | 1;
};

async function getListings({ page }: GetListingsQuery) {
	const data = (await listings
		.find({}, { limit: NO_OF_RESULTS_PER_PAGE, skip: (page - 1) * NO_OF_RESULTS_PER_PAGE })
		.toArray()) as unknown as Listing[];
	const serilizedData = data.map((result) => ({ ...result, _id: result._id.toString() }));
	return serilizedData;
}

export const GET: RequestHandler = async ({ url }) => {
	const page = Number(url.searchParams.get('page') ?? '1');
	if (isNaN(page)) {
		return new Response(JSON.stringify({ error: 'Invalid page number' }), { status: 400 });
	}
	const data = await getListings({ page });
	return new Response(JSON.stringify(data));
};
