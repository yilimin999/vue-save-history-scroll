import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BackToA from '../components/BackToA'
import Alphabet from '../components/Alphabet'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/backto/backtoa'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  
  {
    path: '/backto/backtoa',
    name: 'BackToA',
    component: BackToA,
    meta: { keepAlive: true }
  } ,
  {
    path: '/ccc',
    name: 'Alphabet',
    component: Alphabet,
    // meta: { keepAlive: true }
  }   
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
