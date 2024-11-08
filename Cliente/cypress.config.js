import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  videoUploadOnPasses: false,
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl: 'http://localhost:3000'
    },
  },
});
