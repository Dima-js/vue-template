import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Home from '@/modules/home/index.vue'
import Contacts from '@/modules/contacts/index.vue'
import Page from '@/modules/pages/index.vue'
import About from '@/modules/about/about.vue'

Vue.use(Router)

Vue.use(Resource)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/contacts', name: 'contacts', component: Contacts},
    {path: '/pages/:page', name: 'pages', component: Page},
    {path: '/about', name: 'about', component: About}
  ]
})
