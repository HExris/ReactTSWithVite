import { defineConfig } from 'vite'
const { resolve } = require('path')
import reactRefresh from '@vitejs/plugin-react-refresh'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8008,
    proxy: {
      '/api': {
        target: 'http://localhost:9999',
        changeOrigin: true
      }
    }
  },
  plugins: [reactRefresh(), compression()],
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
      localsConvention: 'camelCase'
    }
  },
  build: {
    brotliSize: true
  }
})
