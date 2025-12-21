import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

    // Database
    DATABASE_URL: z.string().min(1),
    DATABASE_URL_UNPOOLED: z.string().min(1),

    PGDATABASE: z.string().min(1),
    PGHOST: z.string().min(1),
    PGHOST_UNPOOLED: z.string().min(1),
    PGPASSWORD: z.string().min(1),
    PGUSER: z.string().min(1),

    POSTGRES_DATABASE: z.string().min(1),
    POSTGRES_HOST: z.string().min(1),
    POSTGRES_PASSWORD: z.string().min(1),
    POSTGRES_USER: z.string().min(1),

    // Auth
    BETTER_AUTH_SECRET: z.string().min(1),
    BETTER_AUTH_URL: z.string().url(),

    // ✅ SECRET belongs here
    STACK_SECRET_SERVER_KEY: z.string().min(1),
  },

  client: {
    NEXT_PUBLIC_DEVELOPMENT_URL: z.string().min(1),
    NEXT_PUBLIC_STACK_PROJECT_ID: z.string().min(1),
    NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY: z.string().min(1),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_DEVELOPMENT_URL: process.env.NEXT_PUBLIC_DEVELOPMENT_URL,
    NEXT_PUBLIC_STACK_PROJECT_ID: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
    NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY:
      process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
  },
});
