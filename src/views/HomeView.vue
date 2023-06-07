<template>
  <section class="home mt-4">
    <v-container>

      <v-row>
        <v-col md="12" lg="8" class="d-flex">
          <v-spacer></v-spacer>
          <div class="filter-div d-flex ">
            <v-text-field size="50" color="primary" append-inner-icon="mdi-magnify" variant="underlined"
              placeholder="Search products">

            </v-text-field>
            <!-- <v-btn color="primary" class="px-8  align-content-center mt-3 text-center btn-filter"
              prepend-icon="mdi-magnify">
              Search
            </v-btn> -->

          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="pa-16">
      <v-row>
        <div class="cat-title mt-4">
          <h1 class=" text-h4 font-weight-medium">Trendy Products </h1>
        </div>
      </v-row>
      <ProductList :products="products.slice(0, 10)"/>

      <v-row>
        <div class="cat-title mt-10">
          <h1 class=" text-h4 font-weight-medium">Shop by Stores </h1>
        </div>
      </v-row>
      <BrandList :shops="shops" />

      <v-row>
        <div class="cat-title mt-4">
          <h1 class=" text-h4 font-weight-medium">New Arrivals </h1>
        </div>
      </v-row>
      <ProductList  :products="products" />

      <v-row>
        <div class="cat-title mt-4">
          <h1 class=" text-h4 font-weight-medium">Collections </h1>
        </div>
      </v-row>
      <ProductList  :products="products"/>
    </v-container>
  </section>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import ProductList from '../components/ProductList.vue';
import BrandList from '../components/BrandList.vue';
import Products from '../composables/products'
import Shops from '../composables/shops'
// Components


export default defineComponent({
  name: 'HomeView',

  components: {
    ProductList,
    BrandList
  },
  setup(){

    onMounted(()=>{
      getProducts()
      getShops()
    })
    const {products,getProducts} = Products()
    const {shops,getShops} = Shops() 

    return {
      products,
      shops
    }
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