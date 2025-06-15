import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NotesView from '@/views/NotesView.vue'
import NotFound from '@/views/NotFound.vue'
import Note from '@/components/Note.vue'
import NikeDragonfly from '@/components/Projects/NikeDragonfly.vue'
import ByteGame from '@/components/Projects/ByteGame.vue'
import RunningSphere from '@/components/Projects/RunningSphere.vue'
import PhotographyView from '@/views/PhotographyView.vue'
import PhotographyProjectView from '@/views/Photography/PhotographyProjectView.vue'
import NonProjectPhotosView from '@/views/Photography/NonProjectPhotosView.vue'
import Reservoir from '@/components/Projects/Reservoir.vue'
import NihonGO from '@/components/Projects/nihonGO.vue'
import JASIAH from '@/components/Projects/JASIAH.vue'
import Tools from '@/components/Pinned/Tools.vue'
import ContentScroller from '@/components/Pinned/ContentScroller.vue'
import YoutubeVideos from '@/components/Pinned/YoutubeVideos.vue'
import Vault from '@/components/Pinned/Vault.vue'
import WeeklyFive from '@/components/WeeklyFive.vue'
import NowView from '@/views/NowView.vue'
import WorkView from '@/views/WorkView.vue'

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
      path: '/notes/my-tools',
      name: 'my-tools',
      component: Tools,
    },
    {
      path: '/notes/my-favorite-things',
      name: 'my-favorite-things',
      component: ContentScroller,
    },
    {
      path: '/notes/important-videos',
      name: 'important-videos',
      component: YoutubeVideos,
    },
    {
      path: '/notes/the-vault',
      name: 'the-vault',
      component: Vault,
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
    {
      path: '/note/:slug',
      name: 'note',
      component: Note,
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
  ],
})

export default router
