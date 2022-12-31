import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from "./plugins/axios"
import App from "./App.vue";
import router from "./router";

import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";

Object.keys(rules).forEach((rule: string) => {
  extend(rule, rules[rule]);
});

localize("en", en);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
Vue.use({
  install: (Vue) => {
    Vue.prototype.$api = axios({ baseUrl: 'http://localhost:3000/'})
  }
})


const app = new Vue({
  router,
  render: (h) => h(App),
})

app.$mount("#app")

