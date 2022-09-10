module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/src/main/config/setupTests.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "jsdom",
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  },
};
