import { env } from "@/lib/env.mjs";

import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { neon, NeonQueryFunction } from "@neondatabase/serverless";

const runMigrate = async () => {
  if (!env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }

  const sql: NeonQueryFunction<boolean, boolean> = neon(env.DATABASE_URL);
  const db = drizzle(sql);

  console.log("⏳ Running migrations...");

  const start = Date.now();

  await migrate(db, { migrationsFolder: "lib/db/migrations" });

  const end = Date.now();

  console.log("✅ Migrations completed in", end - start, "ms");

  // Clean exit without forcing process termination
  return;
};

runMigrate().catch((err) => {
  console.error("❌ Migration failed");
  console.error(err);
  // Exit with error code but let Node.js clean up naturally
  process.exitCode = 1;
});
