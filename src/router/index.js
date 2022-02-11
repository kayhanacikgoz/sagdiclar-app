import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Auth/Login'
import Signup from '../components/Auth/Signup'
import Home from '../views/Home.vue'
import Fatura from '../views/Fatura.vue'
import Rapor from '../views/Rapor.vue'


Vue.use(VueRouter)

const routes = [ 
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/fatura',
    name: 'fatura',
    component: Fatura
  },
  {
    path: '/rapor',
    name: 'rapor',
    component: Rapor
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/'
})

export default router
