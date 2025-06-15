/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  // Local dos testes .test.js dentro da pasta test
  testMatch: ["<rootDir>/test/**/*.test.js"],

  // Extensões suportadas
  moduleFileExtensions: ['js', 'json', 'node'],
};

module.exports = config;
