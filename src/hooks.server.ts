import { start_mongo } from '$lib/db/mongo';

start_mongo()
	.then(() => {
		console.log('Mongo started');
	})
	.catch((err) => {
		console.error('Mongo failed to start', err);
	});
