import { createApp } from 'vue'
import App from './App.vue'
import {ImgUtil} from "./utils/imgUtil.ts";
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import router from '@/router'
import pinia from "@/store"

ImgUtil.loadAllImg()
createApp(App).use(router).use(pinia).use(ElementPlus,{size:'small'}).mount('#app')
