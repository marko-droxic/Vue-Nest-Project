import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import * as VeeValidate from "vee-validate";
import axios from "./plugins/axios"
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use({
  install: (Vue) => {
    Vue.prototype.$api = axios({ baseUrl: 'http://localhost:8000/'})
  }
})


const app = new Vue({
  router,
  render: (h) => h(App),
})

const dd = app.$mount("#app")

