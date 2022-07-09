import type { Router } from 'vue-router'

// 404 not found
export function titleObserver(router: Router) {
  router.afterEach((to) => {
    const title = to.meta?.title
    if (title) {
      document.title = `${title} | ${''}`
    }
  })
}
