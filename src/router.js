import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import BuildingOverview from './views/BuildingOverview'
import FeedbackList from './views/FeedbackList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/buildingOverview',
      name: 'buildingOverview',
      component: BuildingOverview
    },
    {
      path: '/feedbackList',
      name: 'feedbackList',
      component: FeedbackList
    }
  ]
})
