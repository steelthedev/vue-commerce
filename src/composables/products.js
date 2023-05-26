import axios from "axios"
import { ref } from "vue"

const Products = () =>{


    const products = ref([])


    const getProducts = async () =>{

        await axios
            .get('products/get-all')
            .then(response =>{
                console.log(
                    response.data
                )
                products.value = response.data
            })
            .catch(err =>{
                console.log(
                    err
                )
            })

    }

    return {products,getProducts}
}

export default Products;