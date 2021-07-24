import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: "./src/devtools/index.ts",
      formats: ["es", "cjs"],
      name: "devtools",
    },
  },
});
