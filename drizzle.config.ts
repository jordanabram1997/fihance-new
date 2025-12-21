import { defineConfig } from 'drizzle-kit';
import { env } from '@/lib/env.mjs';

export default defineConfig({
  out: './lib/db/migrations',
  schema: './lib/db/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});