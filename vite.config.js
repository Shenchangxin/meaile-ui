import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: 'localhost',
    port:8080,
    proxy: {
      '/': {
        target: 'http://127.0.0.1:8088', // 你的后端服务器地址
        changeOrigin: true,
        rewrite: (path) => path.startsWith('/') ? path : `/${path}` // 根据需要调整重写规则
      },
    },
  },
  plugins: [vue()],

})
