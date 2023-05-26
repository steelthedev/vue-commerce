<template>
    <v-row class="justify-content-center mb-10">

        <v-col md="4" lg="3" v-for="product in products" :key="product.id">
            <div class="product">
                <div class="product-img">
                    <img :src="product.main_image" alt="">
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