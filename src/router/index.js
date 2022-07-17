import { createRouter, createWebHistory } from 'vue-router'
import Store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/food-page',
    name: 'food-page',
    component: () => import('@/views/FoodPage.vue')
  },
  {
    path: '/profile-page',
    name: 'profile-page',
    component: () => import('@/views/ProfilePage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    Store.dispatch('initAuth')
    .then(user => {
        if(to.matched.some(route => route.meta.authRequired)) {
            if(user) {
                next();
            } else {
                next('/signin');
            }
        } else {
            next();
        }
    })
})

export default router
