import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index";
import ElementPlus from 'element-plus'
import request from "./utils/request.js";
const app = createApp(App)
app.config.globalProperties.$request = request
app.use(router).use(ElementPlus).mount('#app');
