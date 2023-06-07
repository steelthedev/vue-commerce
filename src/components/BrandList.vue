<template>
    <v-row class="justify-content-center mb-5">
        <v-col md="3" lg="4" xl="3" col="12" class="mt-4" v-for="shop in shops" :key="shop.id">
            <div class="shop-container pa-5 d-flex">
                <!-- <img :src="'127.0.0.1:8000/' + shops.main_image" class="mx-3" alt=""> -->
                <div class="">
                    <h6 class="text-h6">{{shop.shop_name}}</h6>
             
                </div>
            </div>
        </v-col>

   
    </v-row>
</template>
<script>

export default {
    props:['shops'],
    setup() {

    }
}

</script>
<style>
.shop-container:hover {
    border: 1px solid;
    border-radius: 10px;
    transition: .1s;
}
</style>