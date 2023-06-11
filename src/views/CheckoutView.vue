<template>
    <section class="checkout">
        <v-container>
            <v-row>
                <v-col md="8">
                    <h2 class="text-h4 mt-4 mb-3 ">Checkout</h2>
                </v-col>
            </v-row>
            <v-row>
        <v-col md="8" lg="12" xxl="12" cols="12">
            <v-list class="mt-5" v-if="this.$store.state.cart.items.length">
          <v-list-item v-for="(item,index) in this.$store.state.cart.items" :key="index">
            <div class="d-flex ">
              <div class="img">
                <img :src="'http://127.0.0.1:8000/'+item.product.main_image" alt="">
              </div>
              <div class="d-flex mt-2 mx-3 w-100">
                <div class="product-details">
                <h5 class="text-h6 mt-3 font-weight-bold">{{item.product.title}}</h5>
                <h6 class="text-subtitle-1 font-weight-medium">#{{item.product.price}}</h6>
                </div>
                <v-spacer></v-spacer>
                <div class="quantity mt-8">
                    <div class="quantity-div pa-3 px-5 d-flex">
                        <span class="mx-3">
                        <v-icon icon="mdi-minus" size="md" @click="decreaseCart(item)"></v-icon>    
                        </span> 
                        <span class="mx-3">{{item.quantity}}</span>
                        <span class="mx-3">
                            <v-icon icon="mdi-plus" size="md" @click="increaseCart(item)"></v-icon>  
                        </span>
                    </div>
                </div>
                
                 <v-spacer></v-spacer>
                 
                <v-icon icon="mdi-close" @click="removeFromCart(item)" class="mt-md-10 mx-4 pull-right"></v-icon>

            
              </div>

              
            </div>
            
          <v-divider></v-divider>
          </v-list-item>
          <div class="total d-md-flex pa-2 mx-6">
            <h6 class="text-h6">Total Amount:</h6>
            <v-spacer></v-spacer>
            <h6 class="text-h6">{{cartTotalPrice}}</h6>
          </div>
           <div class="action mt-md-4 pa-6">
            <div class="group-button">
                <v-btn class="pa-7 mt-5 mb-5 align-content-center rounded-pill px-10 cart-btn "
                    elevation="0" append-icon="mdi-trash-can-outline" @click="clearCart">clear cart</v-btn>
                <v-btn class="pa-7 mt-5 mb-5 mx-5 align-content-center  rounded-pill px-10 bg-primary "
                    elevation="0"
                    append-icon="mdi-arrow-right"
                    >Proceed to payment</v-btn>
            </div>
           </div>
         </v-list>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>

import Cart from '../composables/cart'


export default {
    setup() {
        const {removeFromCart,increaseCart,decreaseCart,clearCart,cartTotalPrice} = Cart()

    


        return {
            removeFromCart,
            increaseCart,
            decreaseCart,
            clearCart,
            cartTotalPrice
        }
    },
}
</script>
<style scoped>
img{
    width: 100px;
}


.quantity-div{
    border: 1px solid var(--main-color);
    border-radius: 15px;
}
</style>