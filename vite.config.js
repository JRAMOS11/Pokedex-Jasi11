import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Pokedex-Jasiel1/", // 👈 igualito al nombre del repo
  plugins: [react()],
});