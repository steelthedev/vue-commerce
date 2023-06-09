<template>
  <v-toolbar class="bg-white mx-auto text-center text-uppercase font-weight-medium text-body-2" elevation="" color="primary">

    <div class="logo mx-7 text-none">
      <router-link :to="{name:'home'}" class="link" >
           <h2>Sales</h2>
      </router-link>

    </div>
    <div class="middle text-uppercase mx-auto d-none d-sm-flex ">
      <span class="mx-7">Shops</span>
      <span class="mx-7">Categories</span>
      <span class="mx-7">blog</span>
    </div>


    <div class="mr-10 d-none d-sm-flex">

      <div class="" v-if="this.$store.state.isAuthenticated">
         <router-link :to="{name:'dashboard'}" class="link" >
        <span class="mx-3">
        Account
        <v-icon icon="mdi-account-outline text-right"></v-icon>
      </span>
      </router-link>

      <router-link :to="{name:'dashboard'}" class="link" >
        <span class="mx-4">
        Logout
      </span>
        </router-link>
      </div>
     
      <div class="" v-else>
        <router-link :to="{name:'login'}" class="link" v-if="this.$store.state.isAuthenticated">
        <span class="mx-7">
        Login
        <!-- <v-icon icon="mdi-account-outline text-right"></v-icon> -->
      </span>
      </router-link>
          <router-link :to="{name:'signup'}" class="link" v-if="this.$store.state.isAuthenticated">
        <span class="mx-7">
        Signup
        <!-- <v-icon icon="mdi-account-outline text-right"></v-icon> -->
      </span>
      </router-link>
      </div>
      
      <span class="ml-4">
        <v-menu >
          <template v-slot:activator="{ props }">
  
            <span v-bind="props">
          Cart 
        <v-icon end icon="mdi-cart-outline text-right"></v-icon>
        {{cartLength}}
            </span>
       
        
        </template>
         <v-list class="mt-5 pa-1" v-if="this.$store.state.cart.items.length">
          <v-list-item v-for="(item,index) in this.$store.state.cart.items" :key="index">
            <div class="d-flex pa-5">
              <div class="img">
                <img :src="'http://127.0.0.1:8000/'+item.product.main_image" alt="">
              </div>
              <div class="d-flex mt-2 mx-3">
                <div class="product-details">
                <h5 class="text-h6">{{item.product.title}}</h5>
                <h6 class="text-subtitle-1">#{{item.product.price}}</h6>
                </div>
                
                <v-icon icon="mdi-close-outline" class="mt-2 mx-4"></v-icon>
              </div>

              
            </div>
            
          <v-divider></v-divider>
          </v-list-item>
           <div class="action mt-md-10 pa-6">
            <div class="group-button">
                <v-btn class="pa-7 mt-5 mb-5 align-content-center rounded-pill px-10 cart-btn "
                    elevation="0" append-icon="mdi-trash-can-outline" @click="clearCart">clear cart</v-btn>
                <v-btn class="pa-7 mt-5 mb-5 mx-5 align-content-center  rounded-pill px-10 bg-primary "
                    elevation="0"
                    @click="addToCart(product)"
                    append-icon="mdi-arrow-right"
                    >checkout</v-btn>
            </div>
           </div>
         </v-list>
        </v-menu>
     
      </span>
    </div>

    <v-spacer class=" d-sm-flex d-md-none"></v-spacer>
    <v-icon icon="mdi-filter-variant float end d-sm-flex d-md-none mx-6 text-h4"></v-icon>
  </v-toolbar>
</template>
<script>
import { mergeProps } from 'vue'
import Cart from '../composables/cart'
export default {
  props:['cartLength'],
  setup() { 

    const {clearCart} = Cart()

    return {mergeProps,clearCart}
  },

}
</script>
<style scoped>
.link{
  color: #fff;

}

img{
  width: 70px;
}
</style>