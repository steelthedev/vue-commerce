<template>
    <v-row justify="center">
        <v-dialog
        v-model="dialog"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
       
        
        >
       
        <v-card>
            hello
        </v-card>

        </v-dialog>
    </v-row>
</template>
<script>
import addProduct from '../../composables/Dashboard/addproduct'

export default {
    // props:['dialog'],
    setup() {
        const {dialog} = addProduct()

        return {dialog}
    },
}
</script>