import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'
import { moveScriptsToBody } from './scripts/moveScriptsToBody'

export default defineConfig({
  plugins: [
    preact({
      prerender: { 
        enabled: true,
        renderTarget: '#app'
      }
    }),
    tailwindcss(),
    moveScriptsToBody()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})