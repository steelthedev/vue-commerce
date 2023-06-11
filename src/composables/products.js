import axios from "axios"
import { ref } from "vue"
import { useRoute} from "vue-router"

const Products = () =>{


    const products = ref([])
    const product = ref({})


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



    const getSingleProduct = async () =>{
           const route = useRoute()
           const id = route.params.id
           
           console.log(id)
           
            
        await axios
            .get('products/get/' + id)
            .then(response =>{
              
                product.value = response.data
                console.log(product.value)
            })
            .catch(err =>{
                console.log(
                    err
                )
            })

    }

    return {products,getProducts,product,getSingleProduct}
}

export default Products;