import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manager',
    name: 'Manager',
    component: () => import('../views/Manager.vue')
  },
  {
    path: '/employee-clock',
    name: 'EmployeeClock',
    component: () => import('../views/EmployeeClock.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
