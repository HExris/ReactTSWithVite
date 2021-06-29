import { defineConfig } from "vite";
const { resolve } = require("path");
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "views": resolve(__dirname, "src/views"),
    }
  },
});