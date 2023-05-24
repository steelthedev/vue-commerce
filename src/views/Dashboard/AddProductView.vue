
<template>
    <SideBar />
    <section class="add-products">
        <v-container>
            <v-row class="justify-content-center align-content-center">
                
            <v-sheet width="800" class="mx-auto">
                <form @submit.prevent="submit">
                    <v-row class="justify-content-center mt-5">
                <v-col md="6" lg="6">
                     <v-text-field v-model="title" placeholder="Title" variant="underlined" color="primary" class="form-control"></v-text-field>
                </v-col>

                  <v-col md="6" lg="6">
                    <v-select
                    v-model="category"
                    :items="categories"
                    placeholder="Categories"
                    variant="underlined"
                    >

                    </v-select>
                  </v-col>

                    <v-col md="6" lg="6">
                         <v-text-field v-model="price" placeholder="Price" variant="underlined" color="primary" class="form-control"></v-text-field>
                    </v-col>
                    
                    <v-col md="6" lg="6">
                          <v-file-input
                            label="Main Image"
                            variant="underlined"
                            prepend-icon="mdi-camera"
                        ></v-file-input>

                    </v-col>

                     <v-col md="12" lg="12">
                          <v-file-input
                            multiple=""
                            label="Other Images"
                            variant="underlined"
                            prepend-icon="mdi-camera"
                        ></v-file-input>

                    </v-col>
                
                    </v-row>

                    <v-btn color="primary">Submit</v-btn>
                
                </form>
            </v-sheet>
            
             
            </v-row>
        </v-container>
    </section>
</template>
<script>
import { onMounted } from 'vue';
import addProduct from '../../composables/Dashboard/addproduct';
import getUtils from '../../composables/Dashboard/getUtils'
import SideBar from '../../components/Dashboard/SideBar.vue';

export default {
    components:{
        SideBar
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
    setup() {
        const {category, title} = addProduct()
        const {getCategories, categories} = getUtils()
        
        onMounted(()=>{
            console.log("mounted")
            getCategories()
        })
        

        return {
            title,
            categories,
            category
        }
    },
}
</script>
<style scoped>

</style>