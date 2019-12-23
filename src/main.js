import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "ress/dist/ress.min.css"
import "@/assets/css/index.sass"

new Vue({
  render: h => h(App),
}).$mount('#app')