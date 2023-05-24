<template>
  <v-toolbar class="bg-white mx-auto text-center text-uppercase font-weight-medium text-body-2" elevation="" color="primary">

    <div class="logo mx-7 text-none">
      <h2>Sales</h2>
    </div>
    <div class="middle text-uppercase mx-auto d-none d-sm-flex ">
      <span class="mx-7">Shops</span>
      <span class="mx-7">Categories</span>
      <span class="mx-7">blog</span>
    </div>


    <div class="mr-10 d-none d-sm-flex">

      <span class="mx-7">
        Account
        <v-icon icon="mdi-account-outline text-right"></v-icon>
      </span>
      <span>
        Cart
        <v-icon end icon="mdi-cart-outline text-right"></v-icon>
      </span>
    </div>

    <v-spacer class=" d-sm-flex d-md-none"></v-spacer>
    <v-icon icon="mdi-filter-variant float end d-sm-flex d-md-none mx-6 text-h4"></v-icon>
  </v-toolbar>
</template>
<script>

export default {
  setup() {

  },
}
</script>