import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configured for root GitHub Pages repo: https://nahid0335.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
