<script setup>
import SideBar from '../../components/Dashboard/SideBar.vue'
</script>
<template>
<SideBar />
  <section class="home mt-4">
    <v-container class="pa-16">
      <v-row>
        <div class="cat-title mt-4">
          <h1 class=" text-h4 font-weight-medium">All Products </h1>
        </div>
        <v-spacer></v-spacer>

        <router-link :to="{'name':'dashboard-add-product'}">
        <v-btn class="float-right pa-6 align-content-center" elevation="0" color="primary">
                    <v-icon
                    icon="mdi-plus"
                    size="30"
                    >
                    </v-icon>
                    Add New Product
                    
        </v-btn>
        </router-link>
        
      
      </v-row>
      <ProductList />
      
    </v-container>

    


  </section>
</template>

<script>
import { defineComponent } from 'vue';
import ProductList from '../../components/Dashboard/ProductList.vue';
import addProduct from '../../composables/Dashboard/addproduct.js'


// Components


export default defineComponent({
  name: 'HomeView',

  components: {
    ProductList,


  },
   beforeRouteEnter(to, from, next) {
        to.meta.hideNavbar = true;
        next();
    },
    beforeRouteLeave(to, from) {
        if (to.meta.hideNavbar) {
            delete to.meta.hideNavbar;
        }
    },
    setup(){

   
    }
});
</script>
<style scoped>
.btn-filter {
  justify-content: center;
}


.search-field {
  text-decoration: none;
  border: 1px solid;

}
</style>