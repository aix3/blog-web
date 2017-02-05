import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import _ from './assets/style/muse-ui.css'
import { blogRoutes } from './blog'
import { adminRoutes } from './admin'

Vue.use(MuseUI)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;


const routes = blogRoutes.concat(adminRoutes)

const router = new VueRouter({ routes: routes })

const app = new Vue({
  router
}).$mount('#app')