import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'

import './plugins/bootstrap'
import './plugins/vue-moment'
import './assets/less/index.less'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
