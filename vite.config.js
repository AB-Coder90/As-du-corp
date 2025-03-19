import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@material-tailwind/react']
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Associe `@` au dossier `src`
    },
  },
});
