import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Pokedex-Jasi11/",   
  plugins: [react()],
  build: {
    outDir: "docs",        
  },
});