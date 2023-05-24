import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "./assets/main.css"
import axios from 'axios'

loadFonts()

axios.defaults.baseURL = "http://127.0.0.1:8000/"

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
