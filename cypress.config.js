const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.spec.js',
    video: false,
    retries: 1
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'reports/junit-[hash].xml',
    toConsole: true
  },
  env: {
    allure: true,
    allureResultsPath: 'reports/allure-results'
  }
});
