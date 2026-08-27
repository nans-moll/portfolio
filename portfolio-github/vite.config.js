import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base = "/portfolio/" car le site est publié sur
// https://nans-moll.github.io/portfolio/ (repo nommé "portfolio").
// Si un jour tu renommes le repo en "nans-moll.github.io", remets base: "/".
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
});
