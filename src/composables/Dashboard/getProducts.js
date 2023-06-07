import axios from "axios";
import { ref } from "vue";

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


    return {
        getUserProducts,
        products
    }
}

export default getProducts;

