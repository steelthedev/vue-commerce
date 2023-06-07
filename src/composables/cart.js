import { ref } from "vue";
import store from "../store";

const Cart = () =>{


    const product = ref({})
    const quantity = ref(1)

   const addToCart = (product) => {

        if(isNaN(quantity.value) || quantity.value < 1){
            quantity.value = 1
        }
        const item = {
        product : product,
        quantity : quantity.value
    }
    store.commit('addToCart', item)
    console.log("success")

   
}
return {
    addToCart
}
}

export default Cart;