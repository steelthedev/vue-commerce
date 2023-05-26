<template>
    <section class="pa-5">
        <v-container>
            <v-row class="justify-content-center">
                <v-col md="6" lg="6" class="text-center">
                    <div class="main-image">
                        <img :src="'http://127.0.0.1:8000/' + product.main_image" class="main" alt="">
                    </div>
                    <div class="sub-images  mt-5 pa-4">
                        <v-row class="justify-content-center text-center" justify="center">


                            <v-col md="3" lg="6" class="text-center" v-for="image in product.sub_images" :key="image.id">
                                <div class="sub-main">
                                    <img :src="'http://127.0.0.1:8000/' + image">
                                </div>
                            </v-col>

                        



                        </v-row>

                    </div>
                </v-col>
                <v-col md="6" lg="6">
                    <div class="product-title">
                        <h1 class="text-h2 mb-2">{{product.title}}</h1>
                        <span class="text-h6 font-weight-light">{{product.description}}</span>
                    </div>
                    <div class="price mt-10">
                        <span class="text-h5">Price:</span>
                        <h2 class="text-h4 font-weight-bold ">#{{product.price}}</h2>
                    </div>


                    <div class="parameters mt-8">
                        <div class="parameter-title">
                            <span class="text-h5">Choose color</span>
                        </div>
                        <div class="parameter-button">
                            <v-btn class="rounded-pill pa-5 px-5 mt-5 align-content-center" elevation="0">Red</v-btn>
                            <v-btn class="rounded-pill pa-5 px-5 mt-5 align-content-center" elevation="0">Blue</v-btn>
                            <v-btn class="rounded-pill pa-5 px-5 mt-5 align-content-center" elevation="0">Green</v-btn>
                        </div>
                    </div>

                    <div class="action mt-md-10">
                        <div class="group-button">
                            <v-btn class="pa-7 mt-5 mb-5 align-content-center rounded-pill px-16 bg-primary"
                                elevation="0">Buy Now</v-btn>
                            <v-btn class="pa-7 mt-5 mb-5 mx-5 align-content-center  rounded-pill px-16 cart-btn"
                                elevation="0">Add
                                to
                                Cart</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
import { onMounted } from 'vue'
import Products from '../composables/products'

export default {
    setup() {
        onMounted(()=>{
            getSingleProduct()
        })
        const {getSingleProduct,product} = Products()

        return {product}
    }
}

</script>
<style>
.main {
    width: 60%;
}

.main-image,
.sub-main {
    background: #eeeeee;
}

.sub-main img {
    width: 30%;
}

.cart-btn {
    border: 2px solid var(--main-color);
}
</style>