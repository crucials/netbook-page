import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

export default defineConfig({
  base: '/netbook-page/',

  plugins: [ ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
