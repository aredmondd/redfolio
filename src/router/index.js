import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OfficiallyView from '@/views/OfficiallyView.vue'
import UnofficiallyView from '@/views/UnofficiallyView.vue'
import BlogsView from '@/views/BlogsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/officially',
      name: 'officially',
      component: OfficiallyView,
    },
    {
      path: '/unofficially',
      name: 'unofficially',
      component: UnofficiallyView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogsView,
    },
  ],
})

export default router
