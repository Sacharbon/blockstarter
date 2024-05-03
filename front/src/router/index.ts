import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HelloWorld.vue'
import SignInView from '../views/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Sign_in',
      name: 'Sign_in',
      component: SignInView
    }
  ]
})

export default router
