// Prisma 7 config: connection URLs live here, not in schema.prisma.
// The CLI does not load .env by itself anymore, hence the dotenv import.
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
