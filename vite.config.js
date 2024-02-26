// vite.config.js
import react from "@vitejs/plugin-react";

export default ({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5173",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

