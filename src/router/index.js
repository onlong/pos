import Vue from 'vue'
import VueRouter from 'vue-router'

import foot from '@/views/foot/index'
import home from '@/views/home/index'
import set from '@/views/set/index'
import vip from '@/views/vip/index'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: 'home' },
  { path: '/home', component: home },
  { path: '/foot', component: foot },
  { path: '/set', component: set },
  { path: '/vip', component: vip }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
