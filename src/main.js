import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router/index";
import ElementPlus from 'element-plus';
import request from "./utils/request.js";
import storage from "./store/storage.js";
import './style/reset.css'
import './style/global.css'
const app = createApp(App)
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.use(router).use(ElementPlus).mount('#app');
