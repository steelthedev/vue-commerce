import axios from "axios"
import { ref } from "vue"

const getUtils = () =>{
    const categories = ref([])

    const getCategories = async () =>{
        await axios
        .get('products/category/get-all')
        .then(res =>{
            categories.value = res.data
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return {categories,
        getCategories,}

}

export default getUtils