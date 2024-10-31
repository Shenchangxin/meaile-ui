import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {ImgUtil} from "./utils/imgUtil.ts";
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import router from '@/router'
import store from '@/store'

ImgUtil.loadAllImg()
createApp(App).use(router).use(store).use(ElementPlus,{size:'small'}).mount('#app')
