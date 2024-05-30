const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

async function setupNodeEvents(on, config) {
  on('file:preprocessor', cucumber());
  require('cypress-mochawesome-reporter/plugin')(on);
  return config
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'TMDB Cypress Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: true
  },
  projectId: '3nqn2o',
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/*.feature",
    video: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000
  },

});
