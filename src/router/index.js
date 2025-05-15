import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import NotesView from '@/views/NotesView.vue'
import NotFound from '@/views/NotFound.vue'
import BlogPost from '@/components/BlogPost.vue'
import NikeDragonfly from '@/components/Projects/NikeDragonfly.vue'
import ByteGame from '@/components/Projects/ByteGame.vue'
import RunningSphere from '@/components/Projects/RunningSphere.vue'
import PhotographyView from '@/views/PhotographyView.vue'
import PhotographyProjectView from '@/views/Photography/PhotographyProjectView.vue'
import NonProjectPhotosView from '@/views/Photography/NonProjectPhotosView.vue'
import Reservoir from '@/components/Projects/Reservoir.vue'
import NihonGO from '@/components/Projects/nihonGO.vue'
import JASIAH from '@/components/Projects/JASIAH.vue'
import AllProjectsView from '@/views/Photography/AllProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/resume',
      name: 'officially',
      component: AboutView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
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
      path: '/photography/all-projects',
      component: AllProjectsView,
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
  ],
})

export default router
