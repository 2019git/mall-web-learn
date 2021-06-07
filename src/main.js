import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from '@/components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//事件总线
Vue.prototype.$bus = new Vue();

//安装toast插件
Vue.use(toast);

//解决移动端click事件300ms延迟
FastClick.attach(document.body)

//配置图片懒加载
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('@/assets/img/common/placeholder.png'),
  attempt: 1,
  lazyComponent: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
