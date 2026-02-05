import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      containers: path.resolve(__dirname, 'src/containers'),
      store: path.resolve(__dirname, 'src/store'),
    },
  },
})
