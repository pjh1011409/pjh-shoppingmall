import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactRouterPlugin } from "vite-plugin-next-react-router";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), reactRouterPlugin()],
});
