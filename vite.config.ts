import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'
import { moveScriptsToBody } from './scripts/moveScriptsToBody'
import { htmlMinify } from './scripts/htmlMinify'

export default defineConfig({
  plugins: [
    preact({
      prerender: { 
        enabled: true,
        renderTarget: '#app'
      }
    }),
    tailwindcss(),
    moveScriptsToBody(),
    htmlMinify()
  ],
  build: {
    minify: true, // Use default esbuild minification
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})