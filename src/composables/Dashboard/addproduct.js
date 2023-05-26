import axios from "axios";

import { ref } from "vue";

const addProduct = () =>{


    const dialog = ref(false)

    const title = ref('')

    const category = ref({
       title:'Select Category',
    })
    const price = ref('')

    const  mainImage = ref(null)
    const subImages = ref([])
    const message = ref('')
    const description = ref('')


   const submitForm = async () =>{
        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('price',price.value)
        formData.append('product_category', category.value.ID)
        formData.append('mainImage',mainImage.value)
        formData.append('description',description.value)
        subImages.value.forEach((file) => {
            formData.append("subImages", file);
          });
   


     

        await axios
            .post('products/create',formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
            })
            .then(res => {
                message.value = res.data.message
                console.log(res.data.message)
            })
            .catch(err =>{
                console.log(err)
            })
        
   }

   const handleSubImagesUpload = (event) =>{
    const fileList = event.target.files;
    subImages.value = Array.from(fileList);
    
   }

   const handleMainImagesUpload = (event) =>{
    mainImage.value = event.target.files[0]
   }

   

    return {
        dialog,
        category,
        title,
        mainImage,
        subImages,
        price,
        submitForm,
        handleMainImagesUpload,
        handleSubImagesUpload,
        description
    }
}

export default addProduct;