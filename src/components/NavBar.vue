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
        Cart
        <v-icon end icon="mdi-cart-outline text-right"></v-icon>
        {{cartLength}}
      </span>
    </div>

    <v-spacer class=" d-sm-flex d-md-none"></v-spacer>
    <v-icon icon="mdi-filter-variant float end d-sm-flex d-md-none mx-6 text-h4"></v-icon>
  </v-toolbar>
</template>
<script>

export default {
  props:['cartLength'],
  setup() {

  },

}
</script>
<style scoped>
.link{
  color: #fff;

}
</style>