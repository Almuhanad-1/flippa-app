import { results } from '$db/mongo';
import type { Result } from '$lib/types';
import type { PageServerLoad } from './$types';

type SerializedData = Omit<Result, '_id'> & { _id: string };

export const load: PageServerLoad = async () => {
	const data = (await results.find({}, { limit: 25 }).toArray()) as unknown as Result[];
	const serializedData = data.map((d) => ({ ...d, _id: d._id.toString() })) as SerializedData[];

	return {
		results: serializedData
	};
};
