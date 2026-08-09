import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  // Must be '/' (not './') because we now build multiple pages at different
  // depths (/ and /careers/). Relative asset paths would break on nested pages.
  base: '/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        careers: path.resolve(__dirname, 'careers/index.html'),
      },
    },
  },
});
