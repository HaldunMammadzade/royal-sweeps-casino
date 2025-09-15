import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(process.cwd(), './src'),
      '@components': resolve(process.cwd(), './src/components'),
      '@pages': resolve(process.cwd(), './src/pages'),
      '@hooks': resolve(process.cwd(), './src/hooks'),
      '@utils': resolve(process.cwd(), './src/utils'),
      '@data': resolve(process.cwd(), './src/data'),
      '@assets': resolve(process.cwd(), './src/assets'),
      '@styles': resolve(process.cwd(), './src/styles'),
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
        }
      }
    }
  }
})