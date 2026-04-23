import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), mkcert(), tailwindcss()],
  server: {
    https: true, // mkcert sertifikatlarni avtomatik ulaydi
    port: 5173,
    proxy: {
      "/api": {
        target: "https://localhost:8000",
        changeOrigin: true,
        secure: false, // O'zingiz yaratgan sertifikat bo'lsa false qo'ygan ma'qul
      },
    },
  },
});
