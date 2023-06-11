import { computed, ref } from "vue";
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
        
    }
    console.log("cart is empty")
}

const removeFromCart = (item) =>{
    if (store.state.cart.items.length){
        store.commit('removeFromCart',item)
        
    }
}


const increaseCart = (item) =>{
    if (store.state.cart.items.length){
        store.commit('increaseCart',item)
        
    }
}

const decreaseCart = (item) =>{
    try{
        if (store.state.cart.items.length){
            store.commit('decreaseCart',item)   
        }
        
    
    }
    catch(e){
        console.log(e)
    }
    
    
}


const cartTotalPrice =  computed(()=>{
            
    const total = ref(0)
    for (let i = 0; i < store.state.cart.items.length; i++){
        total.value += store.state.cart.items[i].product.price * store.state.cart.items[i].quantity
    }
    return total
})
return {
    addToCart,
    clearCart,
    removeFromCart,
    decreaseCart,
    increaseCart,
    cartTotalPrice
}
}

export default Cart;