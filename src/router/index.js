import { createRouter,createWebHistory } from 'vue-router'
// createRouter 创建路由， createWebHistory 路由的模式
import Home from '../views/Home.vue'

const routes = [
    {path: "/", name: "Home", component: Home}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
