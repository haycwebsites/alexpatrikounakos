import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // Avoid CORS in local dev by proxying to HAYC API
      "/public/contact": {
        // Use hayc.gr contact API in local dev
        target: "https://hayc.gr",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
