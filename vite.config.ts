import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/** React Compiler を有効にする */
export default defineConfig({
  plugins: [react({ compiler: true })],
  build: { target: "esnext" },
});
