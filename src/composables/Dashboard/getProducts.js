import axios from "axios";
import { onMounted, ref } from "vue";

import router from "../../router"

const getProducts = () =>{

    const products = ref([])

    const getUserProducts = async () =>{

        await axios
            .get("products/get-user-products")
            .then(res => {
                if (res.status == 200){
                    products.value = res.data
                }
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })

    }

    const deleteProduct = async(id) =>{
        
        await axios
        .post('/products/delete-product/' + id)
        .then(res =>{
            console.log(res.data)
            router.push("/accounts/dashboard/products")
  
        })
      
     
  
       
    }


    return {
        getUserProducts,
        products,
        deleteProduct
    }
}

export default getProducts;

