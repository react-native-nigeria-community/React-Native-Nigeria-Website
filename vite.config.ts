import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  server: {
    proxy: {
      '/substack-feed': {
        target: 'https://reactnativenigeria.substack.com',
        changeOrigin: true,
        rewrite: (path) => '/feed',
      },
    },
  },
})
