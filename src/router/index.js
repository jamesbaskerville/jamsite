import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// route level code-splitting
const Code = () => import(/* webpackChunkName: "code" */ '../views/Code.vue')
const Music = () => import(/* webpackChunkName: "music" */ '../views/Music.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/code',
    name: 'Code',
    component: Code
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
