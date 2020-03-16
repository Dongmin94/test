import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lecture/card',
      component: () => import('./views/lecture/card.vue')
    },
    {
      path: '/lecture/layout',
      component: () => import('./views/lecture/layout.vue')
    },
    {
      path: '/project',
      component: () => import('./views/About2.vue')
    },
    {
      path: '/activity',
      component: () => import('./views/About.vue')
    },
    {
      path: '/about',
      component: () => import('./views/About.vue')
    },
    {
      path: '*',
      component: () => import('./views/e404.vue')
    }
  ]
})
