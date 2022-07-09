import type { App } from 'vue'
import { createRouter, createWebHistory, type RouteRecord } from 'vue-router'

import { setupRouterGuard } from './guard'
import { basicRoutes } from './routes'

// 创建路由对象
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

// 挂载路由
export function setupRouter(app: App) {
  basicRoutes.forEach((route: any) => {
    !router.hasRoute(route.name) && router.addRoute(route)
  })
  app.use(router)
  setupRouterGuard(router)
}
