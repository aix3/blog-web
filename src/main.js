import Vue from 'vue'
import VueRouter from 'vue-router'
import MuseUI from 'muse-ui'
import Style from './assets/style/muse-ui.css'
import App from './App.vue'
import Banner from './Banner.vue'
import ArticleList from './ArticleList.vue'
import Pagination from './Pagination.vue'
import Footer from './Footer.vue'
import Article from './Article.vue'

Vue.use(MuseUI)
Vue.use(VueRouter)

Vue.component("app", App)
Vue.component("article-list", ArticleList)
Vue.component("pagination", Pagination)
Vue.component("banner", Banner)
Vue.component("my-footer", Footer)
Vue.component("my-article", Article)

const routes = [
	{ 
		path: '/', 
		components: {
			first: ArticleList,
			second: Pagination,
			third: Footer
		}
	},
	{ 
		path: '/article/:id', 
		components: {
	    	first: Article,
	    	third: Footer
		}
	}
]

const router = new VueRouter({ routes: routes })

const app = new Vue({
  router
}).$mount('#app')