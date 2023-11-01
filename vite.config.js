import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#0960bd' // 配置主题的主色调
        },
        javascriptEnabled: true
      }
    }
  },
  server: {
    //代理
    proxy: {
      '/api': {
        target: 'http://heimahr.itheima.net', //目标地址
        //原地址 localhost:5174/api/user => 被代理成http://localhost:3001/api/user
        changeOrigin: true
      }
    },
    port: 5173
  }
})
