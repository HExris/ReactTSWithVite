import { defineConfig } from 'vite'
const { resolve } = require('path')
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      views: resolve(__dirname, 'src/views')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true
      }
    },
    modules: {
      // 样式小驼峰转化,
      //css: goods-list => tsx: goodsList
      localsConvention: 'camelCase'
    }
  }
})
