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
            })
            .catch(err =>{
                console.log(
                    err
                )
            })

    }
}