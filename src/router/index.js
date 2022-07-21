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
    path: '/history-page',
    name: 'history-page',
    component: () => import('@/views/HistoryPage.vue')
  },
  {
    path: '/day-page/:date',
    name: 'day-page',
    component: () => import('@/views/DayPage.vue')
  },
  {
    path: '/create-meal',
    name: 'create-meal',
    component: () => import('@/views/CreateMeal.vue')
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
