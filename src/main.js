import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/mdbvue.css'
import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import vuetify from './plugins/vuetify'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
