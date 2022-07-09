import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { basicRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})


export function setupRouter(app: any) {
  basicRoutes.forEach(route => {
    !router.hasRoute(route.name) && router.addRoute(route)
  })
}
export default router
