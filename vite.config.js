import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(),tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Force all mermaid code into a single chunk to prevent
          // dynamic import 404s on GitHub Pages subdirectory deployments
          mermaid: ['mermaid'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['mermaid'],
  },
})