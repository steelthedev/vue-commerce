<template>
    <v-row class="justify-content-center mb-10">
       
        <v-col md="4" lg="3" cols="12" v-for="product in products" :key="product.id">
            <div class="product">
                <div class="product-img">
                    <img :src="'http://127.0.0.1:8000/'+ product.main_image" alt="">
                </div>
                <div class="product-words">
                    <div class="product-title">
                        <router-link :to="{name:'product', params:{id:product.ID} }" class="link">
                        <h2 class="text-h6">{{product.title}}</h2>
                        <span class="text-h6 font-weight-medium">#{{product.price}}</span>
                        </router-link>
                    </div>
                    <div class="product-button mt-2">
                        <v-btn class="pa-4 align-content-center rounded-pill ad-btn text-none" elevation="0">Add to Cart </v-btn>
                    </div>
                </div>
            </div>
        </v-col>

 

    </v-row>
</template>
<script>
export default {
    props:['products'],
    setup() {

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