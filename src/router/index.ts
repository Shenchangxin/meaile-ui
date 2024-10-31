import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const user = () => import('@/views/user/index.vue')
const zhuye = () => import('@/views/zhuye/index.vue')
const routes: RouteRecordRaw[] = [
    {
        name: 'user',
        path: '/user',
        component: user
    },
    {
        name: 'zhuye',
        path: '/zhuye',
        component: zhuye
    },
    {
        name: 'shouye',
        path: '/',
        component: user
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router