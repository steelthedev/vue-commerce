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

const clearCart = () =>{
    if (store.state.cart.items.length){
        store.commit('clearCart')
        cartTotalLength = 0
    }
    console.log("cart is empty")
}

const updateCart = () =>{
    localStorage.setItem('cart',JSON.stringify(store.cart))
}


return {
    addToCart,
    clearCart,
}
}

export default Cart;