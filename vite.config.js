import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        productDetail: resolve(__dirname, "productDetail.html"),
        searchResult: resolve(__dirname, "searchResult.html"),
      },
    },
  },
  plugins: [react()],
});
