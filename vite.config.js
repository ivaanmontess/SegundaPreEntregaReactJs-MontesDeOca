import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    sourcemapExclude: ['node_modules/**', '.vite/deps/**'],
    sourcemapFilters: [(src) => src.includes('node_modules/') ? null : src],
    sourcemapIgnoreError: true,
    commonjsExclude: ['node_modules/**', '.vite/deps/**'],
  },
  server: {
    cors: true,
  },
})