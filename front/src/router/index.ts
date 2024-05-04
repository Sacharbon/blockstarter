import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import ProjectPage from '../views/ProjectPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projectPage',
      name: 'projectPage',
      component: ProjectPage
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: { name: 'home' }
    // }

  ]
})

export default router
