import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  base: 'https://PymesHub.github.io/jesus-birthday-meme-coin',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/', import.meta.url)),
    },
  },
})
