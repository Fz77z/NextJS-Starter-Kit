import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";

import dotenv from "dotenv";
import path from "path";

// Explicitly load .env.local
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const dbUrl = process.env.TURSO_DB_URL;
const dbToken = process.env.TURSO_DB_TOKEN;

if (!dbUrl) {
  throw new Error("Environment variable TURSO_DB_URL is not defined.");
}

if (!dbToken) {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "Environment variable TURSO_DB_TOKEN is not defined in production.",
    );
  } else {
    console.warn(
      "Warning: Environment variable TURSO_DB_TOKEN is not defined. Continuing without token.",
    );
  }
}

export async function runMigrations() {
  console.log("Running migrations...");
  await migrate(db, { migrationsFolder: "./drizzle" });
  console.log("Migrations completed!");
}

const tursoClientOptions = {
  url: dbUrl,
  ...(dbToken && { authToken: dbToken }),
};

const tursoClient = createClient(tursoClientOptions);

export const db = drizzle(tursoClient);
