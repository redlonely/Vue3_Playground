import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    vueJsx(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        // drop_console: command !== 'server ',
        // drop_debugger: command !== 'server ',
      },
    },
  },
  server: {
    port: 5000,
    open: true,
    proxy: {
      '^/api': {
        // target: 'https://www.redlonely.com/api',
        target: 'http://localhost:8088',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '^/avatar': {
        target: 'https://api.btstu.cn/sjtx/api.php',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/avatar/, ''),
      },
    },
  },
})
