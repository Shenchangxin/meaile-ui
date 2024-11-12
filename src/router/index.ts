import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const user = () => import('@/views/user/index.vue')
const search = () => import('@/views/search/index.vue')
const foodbook = () => import('@/views/foodbook/index.vue')
const routes: RouteRecordRaw[] = [
    {
        name: 'shouye',
        path: '/',
        component: user
    },
  {
        name: 'user',
        path: '/user',
        component: user
    },
    {
        name: 'search',
        path: '/search',
        component: search
    },
    {
        name: 'foodbook',
        path: '/foodbook',
        component: foodbook
    },


]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router