import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import './config/bootstrap'
import './config/msgs'
import App from './App'
import store from './config/store'
import router from './config/router'
import './config/axios'
import './config/mq'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')