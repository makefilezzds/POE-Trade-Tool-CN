import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Poelink from '../views/Poelink.vue'
import updatelog from '../views/update.vue'
import builds from '../views/builds.vue'
import zanzhu from '../views/zanzhu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/Poelink',
    name: 'Poelink',
    component: Poelink
  },
  {
    path: '/updatelog',
    name: 'updatelog',
    component: updatelog
  },
  {
    path: '/builds',
    name: 'builds',
    component: builds
  },
  {
    path: '/zanzhu',
    name: 'zanzhu',
    component: zanzhu
  },
  {
    path: '/',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
