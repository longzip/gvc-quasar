import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
Vue.prototype.$axios = axios;
