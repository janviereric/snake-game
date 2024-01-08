import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        game: resolve(__dirname, "src/game/game.html"),
        play: resolve(__dirname, "src/play/play.html"),
      },
    },
  },
});
