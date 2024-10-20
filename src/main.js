import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index";
import ElementPlus from 'element-plus'
const app = createApp(App)
app.use(router).use(ElementPlus).mount('#app');
