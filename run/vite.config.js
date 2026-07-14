import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, '../'),
  plugins: [react()],
  css: {
    postcss: path.resolve(__dirname, './postcss.config.js')
  },
  define: {
    'process.env': process.env
  }
})
