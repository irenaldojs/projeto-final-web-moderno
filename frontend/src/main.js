import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import './config/bootstrap'
import App from './App'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IklyZW5hbGRvIErDum5pb3IgZGEgU2lsdmEiLCJlbWFpbCI6ImlyZW5hbGRvQGNvZGVyLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTc4NDgwNDIsImV4cCI6MTY1ODEwNzI0Mn0.HS1P9Y6vO0NYh3G6KrTxEhAihUOrVNfXOrjoUWU4O6c'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')