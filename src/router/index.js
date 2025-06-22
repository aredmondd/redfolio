import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFound from '@/views/NotFound.vue'
import NikeDragonfly from '@/components/Projects/NikeDragonfly.vue'
import ByteGame from '@/components/Projects/ByteGame.vue'
import RunningSphere from '@/components/Projects/RunningSphere.vue'
import PhotographyView from '@/views/PhotographyView.vue'
import PhotographyProjectView from '@/views/Photography/PhotographyProjectView.vue'
import NonProjectPhotosView from '@/views/Photography/NonProjectPhotosView.vue'
import Reservoir from '@/components/Projects/Reservoir.vue'
import NihonGO from '@/components/Projects/nihonGO.vue'
import JASIAH from '@/components/Projects/JASIAH.vue'
import WeeklyFive from '@/components/WeeklyFive.vue'
import NowView from '@/views/NowView.vue'
import WorkView from '@/views/WorkView.vue'
import UnemploymentView from '@/views/Photography/UnemploymentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'officially',
      component: AboutView,
    },
    {
      path: '/work',
      name: 'projects',
      component: WorkView,
    },
    {
      path: '/now',
      name: 'now',
      component: NowView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
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
      path: '/project/reservoir',
      component: Reservoir,
    },
    {
      path: '/project/nihonGO',
      component: NihonGO,
    },
    {
      path: '/project/JASIAH',
      component: JASIAH,
    },
    {
      path: '/photography',
      component: PhotographyView,
    },
    {
      path: '/photography/non-project-photos',
      component: NonProjectPhotosView,
    },
    {
      path: '/photography/:slug',
      component: PhotographyProjectView,
      name: 'carousel',
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.slug === 'non-project-photos') {
          next('/photography/non-project-photos')
        } else {
          next()
        }
      },
    },
    {
      path: '/photography/weeklyfive',
      component: WeeklyFive,
      name: 'weeklyfive',
    },
    {
      path: '/photography/other',
      component: UnemploymentView,
      name: 'UnemploymentView',
    },
  ],
})

export default router
