
import { drizzle } from 'drizzle-orm/neon-http';
import { env } from '@/lib/env.mjs';
import * as schema from './schema/index';

export const db = drizzle(env.DATABASE_URL, { schema });