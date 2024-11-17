import {CommonServerOptions, defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import dotenv,{DotenvParseOutput} from 'dotenv'
import * as path from "path";
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

export default defineConfig((mode) => {
  const envFileName: string = `.env`
  const curEnvFileName = `${envFileName}.${mode.mode}`
  let server:CommonServerOptions={}
  const envData=fs.readFileSync(curEnvFileName)
  const envMap:DotenvParseOutput = dotenv.parse(envData)
  if (mode.mode === 'development'){
    server={
      host:'192.168.2.8',
      port:8090,
      proxy:{
        '/meaile/api':{
          target:'http://192.168.2.6:8088/api/v1',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/meaile\/api/, '')
        }
      }
    }
  }
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server,
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or 'modern'
        },
      },
    }
  }
})