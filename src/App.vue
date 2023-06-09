<template>
  <v-app>
    <v-main>
      <NavBar v-if="!$route.meta.hideNavbar" :cartLength="cartTotalLength" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
export default {
  components: {
    NavBar
  },
  name: 'App',
  data(){
    return{
      cart:{
        items:[]
      }
      
    }
  },
  beforeCreate(){
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },
  
    mounted(){
    this.cart = this.$store.state.cart
  },

 computed: {
      cartTotalLength(items) {
          // let totalLength = 0
          // for (let i = 0; i < this.cart.items.length; i++) {
          //     totalLength += 1
          // }
          // return totalLength

          return this.cart.items.reduce((acc,curVal) =>{
            return acc += 1
          },0)
      }
  },


 
}
</script>
