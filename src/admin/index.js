import Vue from 'vue'
import App from './App.vue'
import EditArticle from './EditArticle.vue'

Vue.component("app", App)
Vue.component("edit-article", EditArticle)

const adminRoutes = [
	{ 
		path: '/admin/edit-article', 
		components: {
			first: EditArticle
		}
	}
]

export {adminRoutes}