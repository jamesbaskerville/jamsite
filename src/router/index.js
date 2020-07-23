import Vue from 'vue'
import VueRouter from 'vue-router'
import Site from '../views/Site.vue'

// route level code-splitting
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Code = () => import(/* webpackChunkName: "code" */ '../views/Code.vue')
const CodeHome = () => import(/* webpackChunkName: "code-home" */ '../components/CodeHome.vue')
const Music = () => import(/* webpackChunkName: "music" */ '../views/Music.vue')
const Trivia = () => import(/* webpackChunkName: "trivia" */ '../views/Trivia.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/site',
    component: Site,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'code',
        component: Code,
        children: [
          {
            path: '',
            name: 'Code',
            component: CodeHome
          },
        ],
      },
      {
        path: 'music',
        name: 'Music',
        component: Music
      }
    ],
  },
  {
    path: '/trivia',
    name: 'Trivia',
    component: Trivia
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
