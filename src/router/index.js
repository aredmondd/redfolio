import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OfficiallyView from '@/views/OfficiallyView.vue'
import UnofficiallyView from '@/views/UnofficiallyView.vue'
import NotFound from '@/views/NotFound.vue'
import BlogPost from '@/components/BlogPost.vue'
import NikeDragonfly from '@/components/Projects/NikeDragonfly.vue'
import ByteGame from '@/components/Projects/ByteGame.vue'
import RunningSphere from '@/components/Projects/RunningSphere.vue'
import PhotographyView from '@/views/PhotographyView.vue'
import Carousel from '@/components/Carousel.vue'
import LongCarousel from '@/components/LongCarousel.vue'

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
      component: NotFound,
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
    {
      path: '/photography',
      component: PhotographyView,
    },
    {
      path: '/photography/non-project-photos',
      component: LongCarousel,
    },
    {
      path: '/photography/:slug',
      component: Carousel,
      name: 'carousel',
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.slug === 'non-project-photos') {
          next('/photography/non-project-photos') // Redirect
        } else {
          next() // Proceed normally
        }
      },
    },
  ],
})

export default router
