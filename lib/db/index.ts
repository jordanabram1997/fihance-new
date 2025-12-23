import * as schema from '@/lib/db/schema';
import { drizzle } from 'drizzle-orm/neon-http';
import { env } from '@/lib/env.mjs';

export const db = drizzle(env.DATABASE_URL, { schema });