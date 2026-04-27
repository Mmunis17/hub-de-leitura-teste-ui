const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

      baseUrl: 'http://localhost:3000/' //centralizando site de acesso // index é uma funcionalidade e o site vai para cyprress.config.js

  },
});
