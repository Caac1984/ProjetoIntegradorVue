import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";


const vapp = createApp(App)
vapp.use(router)
vapp.use(BootstrapVue3)
vapp.mount('#app')
