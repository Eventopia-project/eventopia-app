import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', //escuchando en todas las interfaces
    port: 3000, // el puerto donde se ejecutará el servidor
  },
  build: {
      outDir: 'dist',
  }
})
