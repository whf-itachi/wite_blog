import { createRouter,createWebHistory } from 'vue-router'
// createRouter 创建路由， createWebHistory 路由的模式
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Create from '../views/Create.vue'


const routes = [
    {path: "/", name: "Home", component: Home},
    {path: "/posts/:id", name: "Details", component: Details, props: true},
    {path: "/create", name: "Create", component: Create},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
