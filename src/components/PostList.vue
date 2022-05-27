<script setup>
import { ref } from 'vue'
import SinglePost from './SinglePost.vue'
import { onMounted, onUnmounted, onUpdated } from "vue"

// onMounted(()=>{
//     /* 数据请求 */
//     alert("页面渲染之前执行，执行完，页面就出来了");
// });
// onUnmounted(()=>{
//     /* 销毁掉三方插件实例的一些对象 */
//     alert("组件注销之前执行，执行完组件就不在页面显示了");
// });
// onUpdated(()=>{
//     alert("当组件内的内容发送变化，就会执行这个更新钩子函数");
// });

defineProps({
    posts: Array,
});

</script>

<template>
<div>博客内容</div>
<div class="post-list">
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post" />
        
    </div>
</div>
</template>

<style>

</style>