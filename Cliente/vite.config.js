import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    
    coverage: {
      provider: 'v8', 
      reporter: ['text', 'html'], 
      reportsDirectory: '../test-results', 
      exclude: ['node_modules/', 'dist/', '**/Cliente/**']
    },
    reporters: ['html'],
    outputFile: {
      //junit: './junit-report.xml',
      //json: './json-report.json',
      html: '../test-results/report.html',
    },
  }
})
