import axios from 'axios'
import { ref } from 'vue'

const getPosts = ()=>{
    const posts = ref([]);

    const load = async ()=>{
        console.log("执行请求数据方法")
        try {
            let {data} = await axios.get("http://localhost:3003/posts")
            posts.value = data
        } catch (error){
            console.log(error)
        }
    }

    return { posts,load }
}

// 对它进行导出
export default getPosts
