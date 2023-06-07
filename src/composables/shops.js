import axios from "axios"
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const Shops = () =>{


    const shops = ref([])
    const shop = ref({})


    const getShops = async () =>{

        await axios
            .get('shops/get-all')
            .then(response =>{
                console.log(
                    response.data
                )
                shops.value = response.data
            })
            .catch(err =>{
                console.log(
                    err
                )
            })

    }



    const getSingleshop = async () =>{
           const route = useRoute()
           const id = route.params.id
           
           console.log(id)
           
            
        await axios
            .get('shops/get/' + id)
            .then(response =>{
              
                shop.value = response.data
                console.log(shop.value)
            })
            .catch(err =>{
                console.log(
                    err
                )
            })

    }

    return {shops,getShops,shop,getSingleshop}
}

export default Shops;