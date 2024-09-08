import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure the build output directory is 'dist'
  },
  // Uncomment the following if you are deploying to a subdirectory
  // base: '/subdirectory/', 
})
