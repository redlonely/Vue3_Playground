import type { Router } from 'vue-router'

/**
 *  监测路由变化，改变页面标题  
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
