import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'j-hack-team37',
  server: {
    host: true,
    port: 5173
  }
})
