<script setup>
import PostList from "../components/PostList.vue"
import getPosts from "../composable/getPosts"
import { ref } from 'vue'
import SpinnerVue from "../components/Spinner.vue";
import TagCloud from '../components/TagCloud.vue'

const {posts, load} = getPosts()
load()
const showPosts = ref(true)
</script>

<template>
    <div class="home">
        <div v-if="posts.length" class="layout"> 
            <PostList :posts="posts" v-if="showPosts" />
            <TagCloud :posts="posts" />
        </div>
        <div v-else>
            <SpinnerVue />
        </div>
        
        <button @click="showPosts = !showPosts">显示/隐藏</button>

        <button @click="posts.pop()">删除一个博客信息</button>
    </div>
</template>

<style>
.home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}

.layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
}
</style>
