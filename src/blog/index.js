import Vue from 'vue'
import App from './App.vue'
import Banner from './Banner.vue'
import ArticleList from './ArticleList.vue'
import Pagination from './Pagination.vue'
import Footer from './Footer.vue'
import Article from './Article.vue'

Vue.component("app", App)
Vue.component("article-list", ArticleList)
Vue.component("pagination", Pagination)
Vue.component("banner", Banner)
Vue.component("my-footer", Footer)
Vue.component("my-article", Article)

const blogRoutes = [
	{ 
		path: '/', 
		components: {
			first: ArticleList,
			second: Pagination
		}
	},
	{ 
		path: '/article/:id', 
		components: {
	    	first: Article
		}
	}
]

export { blogRoutes }