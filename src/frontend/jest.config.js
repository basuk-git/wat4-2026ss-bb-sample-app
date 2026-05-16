import { defaults } from 'jest-config';

/** @type {import('jest').Config} */
const config = {
  collectCoverage: true, // --coverage
  coverageReporters: [
    ...defaults.coverageReporters,
    "html"
  ],
  transform: {},
  verbose: true, // --verbose
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    "/tests/e2e/"
  ]
};
export default config;
