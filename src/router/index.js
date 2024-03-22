import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import ModelsView from '../views/ModelsView.vue'
import LoginView from '../views/LoginView.vue'
import SocialsView from '../views/Socials.View.vue'
import ProfileView from '../views/ProfileView.vue'
import CartView from '../views/CartView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/models',
    name:'models',
    component: ModelsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/socials',
    name:'socials',
    component: SocialsView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
