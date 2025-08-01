import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path"; // ✅ correct in TypeScript

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
