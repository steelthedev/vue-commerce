import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import DashboardView from '../views/Dashboard/DashboardView.vue'
import DashboardProductView from '../views/Dashboard/DashboardProductView.vue'
import AddProductView from '../views/Dashboard/AddProductView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/product/:id',
      name:'product',
      component:ProductView
    },
    {
      path:'/accounts/dashboard',
      name:'dashboard',
      component:DashboardView
    },
    {
      path:'/accounts/dashboard/products',
      name:'dashboard-product',
      component:DashboardProductView
    },
    {
      path:'/accounts/dashboard/products/create',
      name:'dashboard-add-product',
      component:AddProductView
    },
    {
      path:'/login',
      name:'login',
      component:LoginView
    },

    {
      path:'/signup',
      name:'signup',
      component:SignUpView
    },

    {
      path:'/checkout',
      name:'checkout',
      component:CheckoutView
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
