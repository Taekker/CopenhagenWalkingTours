// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        byvandringer: resolve(__dirname, "src/byvandringer.html"),
        byvandring1: resolve(__dirname, "src/byvandring1.html"),
        byvandring2: resolve(__dirname, "src/byvandring2.html"),
        byvandring3: resolve(__dirname, "src/byvandring3.html"),
        byvandring4: resolve(__dirname, "src/byvandring4.html"),
        byvandring5: resolve(__dirname, "src/byvandring5.html"),
        booking: resolve(__dirname, "src/booking.html"),
        bookingdone: resolve(__dirname, "src/bookingdone.html"),
        om: resolve(__dirname, "src/om.html"),
        kontakt: resolve(__dirname, "src/kontakt.html"),
      },
    },
  },
});
