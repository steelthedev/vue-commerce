
<template>
    <SideBar />
    <section class="add-products">
         <h2 class="text-h4 text-uppercase text-primary  mx-10 mt-5">Add New Product</h2>
        <v-container>
            <v-row class="justify-content-center align-content-center">
            
           
                
            <v-sheet width="800" class="mx-auto mt-16">
                <form @submit.prevent="submitForm" enctype="multipart/form-data">
                    <v-row class="justify-content-center mt-5">
                <v-col md="6" lg="6" cols="12">
                     <v-text-field v-model="title" label="Title" variant="underlined" color="primary" class="form-control"></v-text-field>
                </v-col>

                  <v-col md="6" lg="6" cols="12">
                    <v-select
                    v-model="category"
                    :items="categories"
                    item-value="category.id"
                     persistent-hint
                    return-object
                    single-line
                    variant="underlined"
                 
                    label="Choose Categories"
                    
                    >

                    </v-select>
                         
                  </v-col>
                   <v-col cols="12">
                     <v-textarea v-model="description" label="Description" variant="underlined" color="primary" class="form-control"></v-textarea>
                </v-col>

                    <v-col md="6" lg="6" cols="12">
                         <v-text-field v-model="price" label="Price" variant="underlined" color="primary" class="form-control"></v-text-field>
                    </v-col>
                    
                    <v-col md="6" lg="6" cols="12">
                          <v-file-input
                            label="Main Image"
                          
                            variant="underlined"
                            prepend-icon="mdi-camera"
                            ref="mainImage"
                            
                            @change="handleMainImagesUpload"
                        ></v-file-input>

                    </v-col>
                    

                     <v-col md="12" lg="12" cols="12">
                          <v-file-input
                            multiple
                            label="Other Images"
                            variant="underlined"
                            prepend-icon="mdi-camera"
                          
                            ref="subImages"
                            @change="handleSubImagesUpload"
                        ></v-file-input>

                    </v-col>
                
                    </v-row>

                    <v-btn color="primary" type="submit" >Submit</v-btn>
                
                </form>
            </v-sheet>

            </v-row>
     
        </v-container>
<!--                 
             {{title}}
             {{price}}
             {{mainImage}}
             {{subImages}} -->
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
        const {category, title,subImages,mainImage,price,description,submitForm,handleMainImagesUpload,handleSubImagesUpload} = addProduct()
        const {getCategories, categories} = getUtils()
        
        onMounted(()=>{
            console.log("mounted")
            getCategories()
        })
        

        return {
            title,
            categories,
            category,
            subImages,
            mainImage,
            price,
            handleMainImagesUpload,
            handleSubImagesUpload,
            submitForm,
            description

        }
    },
}
</script>
<style scoped>

</style>