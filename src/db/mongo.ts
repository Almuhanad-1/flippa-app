import { MongoClient } from 'mongodb';
import { MONGO_URL } from '$env/static/private';

const client = new MongoClient(MONGO_URL);

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

const db = client.db();

export const metadata = db.collection('metadata');
export const results = db.collection('results');
