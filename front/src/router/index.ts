import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Project from '../views/ProjectPage.vue'
import Register from '../views/Register.vue'

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
      path: '/project',
      name: 'project',
      component: Project,
    },
      {
        path: '/register',
        name: 'register',
        component: Register
      }
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: { name: 'home' }
    // }

  ]
})

export default router
