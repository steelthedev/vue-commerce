import axios from "axios";
import { ref } from "vue";

const addProduct = () =>{


    const dialog = ref(false)

    const title = ref('')

    const category = ref('')


   

    return {
        dialog,
        category,
        title
    }
}

export default addProduct;