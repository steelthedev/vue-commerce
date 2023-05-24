<template>
    <section class="pa-5">
        <v-container>
            <v-row class="justify-content-center">
                <v-col md="6" lg="6" class="text-center">
                    <div class="main-image">
                        <img src="../assets/images/headset-1.png" class="main" alt="">
                    </div>
                    <div class="sub-images  mt-5 pa-4">
                        <v-row class="justify-content-center text-center">


                            <v-col md="3" lg="6" class="text-center">
                                <div class="sub-main">
                                    <img src="../assets/images/headset-3.png">
                                </div>
                            </v-col>

                            <v-col md="3" lg="6" class="text-center">
                                <div class="sub-main">
                                    <img src="../assets/images/headset-4.png">
                                </div>
                            </v-col>



                        </v-row>

                    </div>
                </v-col>
                <v-col md="6" lg="6">
                    <div class="product-title">
                        <h1 class="text-h2 mb-2">Headset Max</h1>
                        <span class="text-h6 font-weight-light">Table with purifier, stained veneer/black</span>
                    </div>
                    <div class="price mt-10">
                        <span class="text-h5">Price:</span>
                        <h2 class="text-h4 font-weight-bold ">#256.0</h2>
                    </div>


                    <div class="parameters">

                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>

export default {
    setup() {

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
</style>