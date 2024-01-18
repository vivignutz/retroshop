import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // access to server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@navbar': '/src/components/NavbarComponent/Navbar.jsx',
      '@footer': '/src/components/Footer/Footer.jsx',
      // other components here
    },
  },
});
