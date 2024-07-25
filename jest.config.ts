/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["html", "text"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/index.ts",
    "!src/auth.ts",
    "!src/auth.ts",
    "!src/app/components/providers/*.tsx", //
    "!src/app/layout.tsx",
    "!src/app/api/auth/auth.ts",
  ],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(config);
