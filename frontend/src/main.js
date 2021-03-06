/* 项目启动 */
import Vue from 'vue'
import App from './App'
import router from './router'
import 'muse-components/styles/base.less' // 加载基础的样式


import axios from 'axios'

// 超时时间为30s
axios.defaults.timeout = 30000

Vue.prototype.$http = axios

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
