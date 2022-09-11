const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.paths.json");

module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/**/index.{ts,tsx}",
    "!<rootDir>/src/index.{ts,tsx}",
    "!<rootDir>/src/infra/**/**/urls.ts",
    "!<rootDir>/src/**/index.ts",
    "!**/*.d.ts",
  ],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/src/main/config/setupTests.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "jsdom",
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/src",
    }),
  },
};
