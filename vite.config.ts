import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target browsers that support ES2015+ — covers ~98% of users
    // No manual polyfill files needed; Vite injects what's required automatically
    target: ['es2015', 'chrome58', 'firefox57', 'safari11', 'edge18'],
  },
})
