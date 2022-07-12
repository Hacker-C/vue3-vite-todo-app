import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src/components'),
      composables: resolve(__dirname, 'src/composables')
    },
    extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名
  }
})
