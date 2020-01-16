import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueHead)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
