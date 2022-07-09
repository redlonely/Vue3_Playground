import type { Router } from 'vue-router'

/**
 *  监测路由变化，如果为匹配到路由，导航至 404 
 */

export function notFoundObserver(router: Router) {
  router.beforeEach((to, _from, next) => {
    if (to.matched.length !== 0) {
      next()
      document.title = to.meta.title as string
    } else {
      next({ path: '/not-found' })
    }
  })
}
