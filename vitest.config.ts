import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [],
  test: {
    environment: "jsdom",
    include: ["**/*.test.tsx", "**/*.test.ts", "**/*.test.js", "**/*.test.jsx"],
    globals: true,
  },
});
