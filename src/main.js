/**
 * 项目的入口js文件
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '@/assets/vue.css'
import moment from 'moment'
import tab from '@/utils/tab'

// 设置使用中文
moment.locale('zh-cn')

//阻止启动生产信息，调试的时候有些信息跳出来，部署了这些东西没啥必要，就false
Vue.config.productionTip = false

Vue.prototype.$moment = moment
Vue.prototype.$tab = tab

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
