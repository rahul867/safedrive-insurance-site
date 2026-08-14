import fs from "fs"
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

/**
 * Blog pages are generated into /blog by scripts/generate-blog.mjs (run by the
 * "prebuild" npm script). Pick them all up automatically so a new post never
 * needs a change in this file.
 */
function blogInputs() {
  const dir = path.resolve(__dirname, 'blog');
  const inputs: Record<string, string> = {};
  if (!fs.existsSync(dir)) return inputs;

  const listing = path.join(dir, 'index.html');
  if (fs.existsSync(listing)) inputs['blog'] = listing;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const file = path.join(dir, entry.name, 'index.html');
    if (fs.existsSync(file)) inputs[`blog-${entry.name}`] = file;
  }

  return inputs;
}

// https://vite.dev/config/
export default defineConfig({
  // Must be '/' (not './') because we now build multiple pages at different
  // depths (/, /careers/, /privacy/, /blog/...). Relative asset paths would
  // break on nested pages.
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
        privacy: path.resolve(__dirname, 'privacy/index.html'),
        ...blogInputs(),
      },
    },
  },
});
