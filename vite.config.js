import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 1. Import path

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. Define the "@" symbol to point to your "src" folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
})