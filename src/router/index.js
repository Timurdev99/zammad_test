import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '../components/layout/LayoutMain.vue'
import Error from '../views/Error.vue'
import Home from '../views/Home.vue'
import Output from '../views/Output.vue'

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home,
  },
  {
    path: '/Output',
    name: 'Output',
    props: true,
    component: Output,
  },
]

const routes = [
  {
    path: '/error',
    alias: '/:pathMatch(.*)*',
    name: 'Error',
    props: true,
    component: Error,
  },
  {
    path: '/',
    props: true,
    component: LayoutMain,
    children: mainRoutes,
  },
]

export default function initializeRouter(app) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  app.use(router)

  return router
}
