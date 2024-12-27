import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this is set to root if not deploying in a subdirectory
  resolve: {
    alias: {
      // Do NOT alias 'public' folder
      // Avoid something like: '@public': '/src/public'
    }
  }
})
