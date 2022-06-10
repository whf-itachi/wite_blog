<template>
    <div class="tag">
        <!-- {{ postWithTag }} -->
        <div v-if="posts.length">
            <PostList :posts="postWithTag" />
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import getPosts from '../composable/getPosts';
import { computed } from 'vue';  // 通过计算属性对数据进行标签过滤
import PostList from '../components/PostList.vue'

const route = useRoute();
const { posts, load } = getPosts();
load();
console.log(route.params.tag);

const postWithTag = computed(()=>{
    // p 为 遍历过滤的目标
    return posts.value.filter(p => p.tags.includes(route.params.tag))
})

</script>

<style>

</style>


