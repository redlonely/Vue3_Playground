import type { Router } from 'vue-router'

// 404 not found
export function titleObserver(router: Router) {
  router.beforeEach((to, _from, next) => {
    if (to.matched.length !== 0) {
      next()
      document.title = to.meta.title as string
    } else {
      next({ path: '/not-found' })
    }
  })
}
