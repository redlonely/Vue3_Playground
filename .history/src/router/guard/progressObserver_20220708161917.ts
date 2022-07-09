import type { Router } from 'vue-router'

import { useMessage } from 'naive-ui'

const $message = useMessage()

export function createPageLoadingGuard(router: Router) {
  router.beforeEach(() => {
    $message.create('Hello World')
    // window.$loadingBar?.start()
  })

  router.afterEach(() => {
    setTimeout(() => {
      // window.$loadingBar?.finish()
    }, 200)
  })

  router.onError(() => {
    // window.$loadingBar?.error()
  })
}
