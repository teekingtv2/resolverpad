// const { defineConfig } = require("vite");
import { defineConfig } from "vite";

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        app: "./app.html",
        success: "./success.html",
        error: "./error.html",
      },
    },
  },
});
