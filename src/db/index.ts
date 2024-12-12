import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import env from '../env.js';

const client = createClient({ url: env.DB_FILE_NAME });
const db = drizzle({ client });

export default db

