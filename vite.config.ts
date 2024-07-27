import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "newsmwu-website/",
  server: {
    watch: {
      usePolling: true
    }
  }
})
