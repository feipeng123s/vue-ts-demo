import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import api from '@/api'

import 'normalize.css'
import '@/assets/index.less'

import { Button, Input, Message } from 'element-ui'
Vue.use(Button)
Vue.use(Input)
Vue.prototype.$message = Message

Vue.config.productionTip = false

declare module 'vue/types/vue' {
  interface Vue {
    $api: any;
  }
}
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
