import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Tasks from '../views/Tasks.vue'
import Notes from '../views/Notes.vue'

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
  },
  {
    path: '/notes',
    alias: '/note',
    component: Notes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
