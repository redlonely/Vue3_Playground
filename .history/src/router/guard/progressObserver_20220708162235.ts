import type { Router } from 'vue-router'

import { useLoadingBar } from 'naive-ui'

const $loadingBar = useLoadingBar()

export function createPageLoadingGuard(router: Router) {
  router.beforeEach(() => {
    $loadingBar?.start()
  })

  router.afterEach(() => {
    setTimeout(() => {
      $loadingBar?.finish()
    }, 200)
  })

  router.onError(() => {
    $loadingBar?.error()
  })
}
