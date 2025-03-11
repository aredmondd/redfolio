import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OfficiallyView from '@/views/OfficiallyView.vue'
import UnofficiallyView from '@/views/UnofficiallyView.vue'
import FourOhFour from '@/views/FourOhFour.vue'
import BlogPost from '@/components/BlogPost.vue'
import NikeDragonfly from '@/components/Projects/NikeDragonfly.vue'
import ByteGame from '@/components/Projects/ByteGame.vue'
import RunningSphere from '@/components/Projects/RunningSphere.vue'

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
      path: '/:pathMatch(.*)*',
      component: FourOhFour,
    },
    {
      path: '/writing/:slug',
      name: 'blogPost',
      component: BlogPost,
      props: true,
    },
    {
      path: '/project/nike-dragonfly',
      component: NikeDragonfly,
    },
    {
      path: '/project/byte',
      component: ByteGame,
    },
    {
      path: '/project/running-sphere',
      component: RunningSphere,
    },
  ],
})

export default router
