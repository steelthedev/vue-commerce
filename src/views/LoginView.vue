<template>
         <section>
        <v-container>
            <div class="form">
   
             
                <v-form class="px-3" ref="form" @submit.prevent="submit" v-model="valid" lazy-validation>
                <v-row justify="center">
                    <v-col cols="12" sm="8" md="8" lg="6" class="form-column">
                        <v-card class="card my-4"  elevation="5"  >
                            <v-card-title class="text-h6 font-weight-bold mb-2 text-primary">
                            Login
                            </v-card-title>
                     
                    
                            
                            <v-text-field :rules="inputRules" color="primary" label="Email" type="email" class="input"  v-model="username" variant="underlined"></v-text-field>



                            <v-text-field :rules="inputRules" color="primary" label="Password" v-model="password" variant="underlined"></v-text-field>


                          
                        
                            <v-btn
                        color="primary"
                        variant="flat"
                        type="submit">
                    
                        Submit
                    </v-btn>
                    <!-- <div class="signup mt-4 text-center">
                        <span class="text-dark">Do not have an account? <router-link class="text-dark" :to="{name:'register'}">Sign up</router-link> </span>
                    </div> -->
               
                        </v-card>
               
                    </v-col>

                    </v-row>
                    </v-form>
                    </div>
                    
        </v-container>
        </section>
</template>
<script>

import Auth from '../composables/auth.js'
export default {
    setup() {
      
   
        const {inputRules, form, valid, submit,email,password} = Auth()

        return {
            email, 
            password,
            inputRules,
            form,
            valid,
            submit
        }

    },
}
</script>
<style scoped>
.card{
    padding: 30px;
    border-radius: 10px;
}
</style>