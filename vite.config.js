import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["last 5 years", "not IE 11"],
    }),
  ],
  base: "/GJCEIWebsite/",
});
