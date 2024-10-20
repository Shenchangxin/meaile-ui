import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: 'localhost',
    port:8080,
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8088/v1', // 你的后端服务器地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 根据需要调整重写规则
      },
    },
  },
  plugins: [vue()],

})
