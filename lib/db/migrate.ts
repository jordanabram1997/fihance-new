import { env } from "@/lib/env.mjs";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { neon } from "@neondatabase/serverless";

const runMigrate = async () => {
  if (!env.DATABASE_URL) throw new Error("DATABASE_URL is not defined");

  // Ensure both schemas are visible to every stateless HTTP query
  const urlWithSearchPath =
    `${env.DATABASE_URL}`.includes("options=")
      ? env.DATABASE_URL
      : `${env.DATABASE_URL}?options=-c%20search_path%3Dpublic%2Cdrizzle`;

  const sql = neon(urlWithSearchPath);
  const db = drizzle(sql);

  console.log("⏳ Running migrations...");
  const start = Date.now();

  await migrate(db, {
    migrationsFolder: "lib/db/migrations",
    // (Optional) explicitly name the table; default is __drizzle_migrations
    // migrationsTable: "__drizzle_migrations",
  });

  console.log("✅ Migrations completed in", Date.now() - start, "ms");
};

runMigrate().catch(err => {
  console.error("❌ Migration failed");
  console.error(err);
  process.exitCode = 1;
});
