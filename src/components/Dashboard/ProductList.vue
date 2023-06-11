<template>
    <v-row class="justify-content-center mb-10">

        <v-col md="4" lg="3" v-for="product in products" :key="product.ID">
            <div class="product mt-4">
                <v-icon icon="mdi-trash-can-outline" @click="deleteProduct(product.ID)" class="float-right" color="primary"></v-icon>
                <div class="product-img">
                    <img :src="'http://127.0.0.1:8000/' + product.main_image" alt="">
                </div>
                <div class="product-words">
                    <div class="product-title">
                        <h2 class="text-h6">{{product.title}}</h2>
                        <span class="text-subtitle-2 font-weight-light">Table with purifier, stained veneer/black</span>
                    </div>
                    <div class="product-button mt-2">
                        <v-btn class="pa-4 align-content-center rounded-pill ad-btn text-none" elevation="0">Edit Product</v-btn>
                    </div>
                </div>
            </div>
        </v-col>


    </v-row>
</template>
<script>
import getProducts from '../../composables/Dashboard/getProducts'

export default {
    props:['products'],
    setup() {

        const {deleteProduct} = getProducts()

        return {deleteProduct}
    }
}
</script>
<style scoped>
.product-img img {
    width: 50%;
    height: 100%;
}

.ad-btn {
    background: none;
    border: 1px solid;
}
</style>