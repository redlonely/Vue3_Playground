import type { Router } from 'vue-router'

import { useLoadingBar } from 'naive-ui'

const $loadingBar = useLoadingBar()

/**
 *  监测路由状态，路由改变添加进度条
 */
export function createPageLoadingGuard(router: Router) {
  
  // 跳转之前
  router.beforeEach(() => {
    $loadingBar?.start()
  })

  // 跳转之后
  router.afterEach(() => {
    setTimeout(() => {
      $loadingBar?.finish()
    }, 200)
  })

  router.onError(() => {
    $loadingBar?.error()
  })
}
