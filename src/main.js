// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/fonts/iconfont.css'
import store from './store/index'
import Util from '@/util/index'
import Config from '@/config/index.js'
import xhHeader from '@/base/xh_header'

Vue.config.productionTip = false
Vue.prototype._Util = Util
Vue.prototype._Config = Config
Vue.use(ElementUI)
Vue.component('xhHeader',xhHeader)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
