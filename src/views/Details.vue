<script setup>
import getPost from '../composable/getPost'
import SpinnerVue from "../components/Spinner.vue";

const {post, load} = getPost(props.id)

load()


const props = defineProps({
    id: Number,
});
</script>

<template>
    <div class="post" v-if="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else>
        <SpinnerVue />
    </div>
</template>

<style>
.tags a {
    margin-right: 10px;
}
.post {
    max-width: 1200px;
    margin: 0 auto;
}
.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}
.pre {
    white-space: pre-wrap;
}
</style>
