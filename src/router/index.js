import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Tasks from '../views/Tasks.vue'

const routes = [
  {
    path: '/',
    alias:'/main',
    component: MainPage
  },
  {
    path: '/tasks/:taskId?',
    alias: '/task',
    component: Tasks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
