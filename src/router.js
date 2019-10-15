import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'


Vue.use(Router)

export default new Router({
  mode: 'history',

  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'main-layout' },
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'empty-layout' },
      component: () => import ('./views/Login')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: { layout: 'main-layout' },
      component: () => import ('./views/Categories')
    },
    {
      path: '/detail_record',
      name: 'detail_record',
      meta: { layout: 'main-layout' },
      component: () => import ('./views/DetailRecord')
    },
    {
      path: '/history',
      name: 'history',
      meta: { layout: 'main-layout' },
      component: () => import ('./views/History')
    },
    {
      path: '/planning',
      name: 'planning',
      meta: { layout: 'main-layout' },
      component: () => import ('./views/Planning.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { layout: 'main-layout' },
      component: () => import ('./views/Profile.vue')
    },
    {
      path: '/record',
      name: 'record',
      meta: { layout: 'main-layout' },
      component: () => import ('./views/Record.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      meta: { layout: 'empty-layout' },
      component: () => import ('./views/Registration.vue')
    }
  ]
})
