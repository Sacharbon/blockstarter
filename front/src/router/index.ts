import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import SignInView from '../views/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'home',
      component: Login
    },
    {
      path: '/Sign_in',
      name: 'Sign_in',
      component: SignInView
    }
  ]
})

export default router
