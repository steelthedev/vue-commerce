<template>
    <v-row class="justify-content-center mb-5">
        <v-col md="3" lg="4" xl="3" col="12" class="mt-4">
            <div class="shop-container pa-5 d-flex">
                <img src="../assets/images/staples.png" class="mx-3" alt="">
                <div class="">
                    <h6 class="text-h6">Staples</h6>
                    <span class="text-subtitle-2">Delivery within 24 hours</span>
                </div>

            </div>
        </v-col>

        <v-col md="3" lg="4" xl="3" col="12" class="mt-4">
            <div class="shop-container pa-5 d-flex">
                <img src="../assets/images/Q.png" class="mx-3" alt="">
                <div class="">
                    <h6 class="text-h6">Staples</h6>
                    <span class="text-subtitle-2">Delivery within 24 hours</span>
                </div>

            </div>
        </v-col>

        <v-col md="3" lg="4" xl="3" col="12" class="mt-4">
            <div class="shop-container pa-5 d-flex">
                <img src="../assets/images/delivery.png" class="mx-3" alt="">
                <div class="">
                    <h6 class="text-h6">Staples</h6>
                    <span class="text-subtitle-2">Delivery within 24 hours</span>
                </div>

            </div>
        </v-col>

        <v-col md="3" lg="4" xl="3" col="12" class="mt-4">
            <div class="shop-container pa-5 d-flex">
                <img src="../assets/images/bevmo.png" class="mx-3" alt="">
                <div class="">
                    <h6 class="text-h6">Staples</h6>
                    <span class="text-subtitle-2">Delivery within 24 hours</span>
                </div>

            </div>
        </v-col>
    </v-row>
</template>
<script>

export default {
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