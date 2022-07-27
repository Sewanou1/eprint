import { createApp } from 'vue'
import AOS from 'aos'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'aos/dist/aos.css'
import 'remixicon/fonts/remixicon.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import './assets/js/afficharge.js'
createApp({
    data() {
        return {
          message
        }
      }
    
})
export const app = createApp(App)

app.AOS = new AOS.init({ disable: "phone" });
createApp(App).use(store).use(router).use(AOS).use(VueAxios, axios).mount('#app')
