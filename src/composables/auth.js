import axios from "axios"
import { ref } from "vue"
import router from "../router"
import store from "../store"

const Auth = () => {
    const valid = ref(true)
    const inputRules = [
            v => (v && v.length >= 3) || 'Minimum length is 3 characters'
        ]
    const email = ref('')
    const password = ref('')
    const first_name = ref('')
    const last_name = ref('')
    const phone = ref('')
    const message = ref('')


    const submit = async () => {
        axios.defaults.headers.common['Authorization'] = ""  
        localStorage.removeItem('token')

    const { valid } = await form.value.validate()
  
    if (valid){
        const data = {
            email:email.value,
            password:password.value,
           
        }

        await axios
            .post('accounts/login', data)
            .then(res =>{
                console.log(res.data)
                const token = res.data.token
                store.commit('setToken', token)
                axios.defaults.headers.common['Authorization'] = "Token " + token
                
                localStorage.setItem('token', token)
                router.push("/accounts/dashboard")
            })
            .catch(error =>{
                console.log(error)
            })

        return false;
    }

  }
  const form = ref(null)

  const submitReg = async () =>{
    const { valid } = await form.value.validate()

    if (valid){
        const data = {
            email:email.value,
            first_name:first_name.value,
            last_name:last_name.value,
            phone:phone.value,
            password:password.value
        }

        await axios 
            .post('accounts/signup',data)
            .then(res =>{
                message.value = res.data.message
                console.log(res.data)
                if (res.status == 201){
                    router.push("/login")
                }
            })
            .catch(err =>{
                console.log(err)
            })
    }
  }

  const logout = async () =>{
    await axios
              .post('accounts/api/v1/token/logout/')
              .then(response => {
                
              })
              .catch(error => {
                console.log(error)
              })
            axios.defaults.headers.common['Authorization'] = ""
            localStorage.removeItem('token')
            store.commit('removeToken')
            router.push('/')
    }
    return {
        valid,
        inputRules,
        email,
        password,
        form,
        submit,
        logout,
        phone,
        first_name,
        last_name,
        submitReg
    };
}
 
export default Auth;