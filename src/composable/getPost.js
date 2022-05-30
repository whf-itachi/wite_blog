import axios from 'axios'
import { ref } from 'vue'

const getPost = (id)=>{
    const post = ref({});

    const load = async ()=>{
        try {
            let {data} = await axios.get("http://localhost:3003/posts/"+id)
            post.value = data
        } catch (error){
            console.log(error)
        }
    }

    return { post,load }
}

// 对它进行导出
export default getPost
