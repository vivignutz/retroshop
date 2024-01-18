import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001', // access to server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },

  },
  resolve: {
    alias: {
      '@': './src',
      '@components': './src/components',
      '@navbar': './src/components/NavbarComponent/Navbar.jsx',
      '@footer': './src/components/Footer/Footer.jsx',
      '@products': './components/ProductList/ProductList.jsx',
      '@categories': './components/Categories/Categories.jsx',      
      // other components here
    },
  },
});
