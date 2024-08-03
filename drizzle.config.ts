import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
import path from "path";

// Explicitly load .env.local
dotenv.config({ path: path.resolve(__dirname, ".env.local") });

const isProduction = process.env.NODE_ENV === "production";

if (!process.env.TURSO_DB_URL) {
  throw new Error("Environment variable TURSO_DB_URL is not defined.");
}

if (!process.env.TURSO_DB_TOKEN && isProduction) {
  throw new Error(
    "Environment variable TURSO_DB_TOKEN is not defined in production.",
  );
}

console.log("Database URL from env:", process.env.TURSO_DB_URL);
if (process.env.TURSO_DB_TOKEN) {
  console.log("Database Token from env:", process.env.TURSO_DB_TOKEN);
} else if (!isProduction) {
  console.warn(
    "Warning: Environment variable TURSO_DB_TOKEN is not defined. Continuing without token in development.",
  );
}

export default defineConfig({
  schema: "./db/schemas/schema.ts",
  out: "./db/migrations",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DB_URL!,
    authToken: isProduction
      ? process.env.TURSO_DB_TOKEN!
      : process.env.TURSO_DB_TOKEN || undefined,
  },
  verbose: true,
  strict: true,
});
