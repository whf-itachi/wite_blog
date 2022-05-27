import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// .use() 这是一个中间件，使用路由
createApp(App).use(router).mount('#app')
