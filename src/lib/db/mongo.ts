import { MongoClient, ServerApiVersion } from 'mongodb';
import { MONGO_URI } from '$env/static/private';

const client = new MongoClient(MONGO_URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: false,
		deprecationErrors: true
	}
});

export async function start_mongo() {
	console.log('Starting mongo...');
	await client.connect();
	await client.db('admin').command({ ping: 1 });
	console.log('Pinged your deployment. You successfully connected to MongoDB!');
}

const flippa_app_db = client.db('flippa-app');

// export const metadata = flippa_app_db.collection('metadata');
export const listings = flippa_app_db.collection('listings');
