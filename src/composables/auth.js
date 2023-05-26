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
                localStorage.removeItem('token',token)
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
        logout
    };
}
 
export default Auth;