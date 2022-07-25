import { createApp } from 'vue'
import AOS from 'aos'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'aos/dist/aos.css'
// window.$ = window.jQuery = require('jquery');
export const app = createApp(App)
app.AOS = new AOS.init({ disable: "phone" });

createApp(App).use(store).use(router).use(AOS).mount('#app')
