import Vue from 'vue'
import MuseUI from 'muse-ui'
import style from './assets/style/muse-ui.css'
import App from './App.vue'
import Demo from './Demo.vue'
Vue.use(MuseUI)

new Vue({
  el: '#app',
  render: h => h(Demo)
})
