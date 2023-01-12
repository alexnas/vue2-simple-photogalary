import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../pages/MainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/photo',
    name: 'photo',
    component: () => import('../pages/PhotosPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
